// Renders one part of the lesson to MP4 (1920x1080, 30 fps) with narration + sound effects.
// Usage: node render.mjs K [fps] [workers]        full part  -> out/qismK.mp4
//        END=60 node render.mjs K                 first 60 s (preview)
//        node render.mjs K --stills dir           one still per scene (end of scene)
import { createRequire } from 'node:module';
import { spawn, execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const { chromium } = createRequire(import.meta.url)('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const K = process.argv[2] || '1';
const url = pathToFileURL(path.join(here, 'index.html')).href + `?q=${K}&render=1`;
const PY = process.env.PY || 'python3';

async function openPage(browser) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  const errs = [];
  page.on('pageerror', (e) => errs.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  if (errs.length) throw new Error(errs.join('\n'));
  return page;
}

const browser = await chromium.launch();
const probe = await openPage(browser);
const total = await probe.evaluate(() => window.TOTAL);
const warn = await probe.evaluate(() => window.WARN);
if (warn.length) console.log('WARN:\n  ' + warn.join('\n  '));

if (process.argv[3] === '--stills') {
  const dir = process.argv[4] || 'stills';
  mkdirSync(dir, { recursive: true });
  const ch = await probe.evaluate(() => window.CHAPTERS());
  for (let i = 0; i < ch.length; i++) {
    const end = i + 1 < ch.length ? ch[i + 1][0] : total;
    await probe.evaluate((t) => window.render(t), end - 0.6);
    await probe.screenshot({ path: path.join(dir, `q${K}_s${String(i).padStart(2, '0')}.png`) });
  }
  await browser.close();
  process.exit(0);
}

const fps = +(process.argv[3] || 30), workers = +(process.argv[4] || 4);
const outDir = path.join(here, 'out'); mkdirSync(outDir, { recursive: true });
const build = path.join(here, 'build');
const tmp = path.join(build, `parts${K}`); rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp, { recursive: true });
const endT = Math.min(total, +(process.env.END || total));
writeFileSync(path.join(build, `sfx${K}.json`), JSON.stringify({ total, events: await probe.evaluate(() => window.SFX_EVENTS()) }));
await probe.close();
execFileSync(PY, [path.join(here, 'tools/mix.py'), K], { stdio: 'inherit' });

const frames = Math.ceil(endT * fps);
console.log(`qism${K}: ${total.toFixed(1)}s total, rendering ${frames} frames`);
const per = Math.ceil(frames / workers);
let done = 0;
async function work(w) {
  const from = w * per, to = Math.min(frames, from + per);
  const page = await openPage(browser);
  const part = path.join(tmp, `p${w}.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p', part], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let f = from; f < to; f++) {
    await page.evaluate((t) => window.render(t), f / fps);
    const buf = await page.screenshot({ type: 'jpeg', quality: 93 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (++done % 500 === 0) console.log(`${done}/${frames}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  return part;
}
const parts = await Promise.all(Array.from({ length: workers }, (_, w) => work(w)));
await browser.close();
writeFileSync(path.join(tmp, 'list.txt'), parts.map((p) => `file '${p}'`).join('\n'));
const out = path.join(outDir, process.env.END ? `qism${K}_namuna.mp4` : `qism${K}.mp4`);
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'),
  '-i', path.join(build, `audio${K}.wav`), '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k',
  '-t', String(endT), '-movflags', '+faststart', out], { stdio: 'inherit' });
rmSync(tmp, { recursive: true, force: true });
console.log('saved', out);
