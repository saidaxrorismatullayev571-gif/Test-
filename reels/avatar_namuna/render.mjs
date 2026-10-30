// 9:16 reel render: node render.mjs [fps] [workers] | node render.mjs --stills dir t1,t2,...
import { createRequire } from 'node:module';
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
const { chromium } = createRequire(import.meta.url)('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const url = pathToFileURL(path.join(here, 'index.html')).href;
const browser = await chromium.launch();
async function open() {
  const p = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  const errs = []; p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(url); await p.evaluate(() => document.fonts.ready);
  if (errs.length) throw new Error(errs.join('\n'));
  return p;
}
if (process.argv[2] === '--stills') {
  const dir = process.argv[3]; mkdirSync(dir, { recursive: true });
  const p = await open();
  for (const t of process.argv[4].split(',').map(Number)) {
    await p.evaluate((t) => window.render(t), t);
    await p.screenshot({ path: path.join(dir, `t${String(t).padStart(5, '0')}.png`) });
  }
  await browser.close(); process.exit(0);
}
const fps = +(process.argv[2] || 30), workers = +(process.argv[3] || 4);
const probe = await open(); const total = await probe.evaluate(() => window.TOTAL); await probe.close();
const frames = Math.round(total * fps), per = Math.ceil(frames / workers);
const tmp = path.join(here, 'build'); rmSync(tmp, { recursive: true, force: true }); mkdirSync(tmp, { recursive: true });
let done = 0;
async function work(w) {
  const a = w * per, b = Math.min(frames, a + per); if (a >= b) return;
  const p = await open();
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-', '-c:v', 'libx264', '-crf', '17', '-pix_fmt', 'yuv420p', path.join(tmp, `p${w}.mp4`)]);
  for (let f = a; f < b; f++) {
    await p.evaluate((t) => window.render(t), f / fps);
    const buf = await p.screenshot({ type: 'jpeg', quality: 93 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (++done % 100 === 0) console.log(`${done}/${frames}`);
  }
  ff.stdin.end(); await new Promise((r) => ff.on('close', r)); await p.close();
}
await Promise.all([...Array(workers).keys()].map(work));
await browser.close();
writeFileSync(path.join(tmp, 'list.txt'), [...Array(workers).keys()].map((w) => `file '${path.join(tmp, `p${w}.mp4`)}'`).join('\n'));
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'), '-c', 'copy', path.join(here, 'video.mp4')]);
console.log('saved video.mp4', frames, 'frames');
