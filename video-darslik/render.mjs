// Renders darslik.html into an MP4 (1920x1080, 16:9) frame by frame.
// Usage: node render.mjs [out.mp4] [fps] [workers]
//        node render.mjs --stills dir   (one still per scene, for checking)
import { createRequire } from 'node:module';
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const { chromium } = createRequire(import.meta.url)('playwright');
const here = path.dirname(fileURLToPath(import.meta.url));
const url = pathToFileURL(path.join(here, 'darslik.html')).href + '?render=1';

async function openPage(browser) {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  return page;
}

if (process.argv[2] === '--stills') {
  const dir = process.argv[3] || 'stills';
  mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  const page = await openPage(browser);
  const chapters = await page.evaluate(() => window.CHAPTERS());
  const scenes = await page.evaluate(() => window.TOTAL);
  for (let i = 0; i < chapters.length; i++) {
    const end = i + 1 < chapters.length ? chapters[i + 1][0] : scenes;
    await page.evaluate(t => window.render(t), end - 1.0);
    await page.screenshot({ path: path.join(dir, `s${String(i).padStart(2, '0')}.png`) });
  }
  await browser.close();
  process.exit(0);
}

const out = path.resolve(process.argv[2] || 'maosh_tizimi_darslik.mp4');
const fps = +(process.argv[3] || 30);
const workers = +(process.argv[4] || 4);
const tmp = path.join(path.dirname(out), '.parts');
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });

const browser = await chromium.launch();
const probe = await openPage(browser);
const total = await probe.evaluate(() => window.TOTAL);
writeFileSync(out.replace(/\.mp4$/, '.srt'), await probe.evaluate(() => window.SRT()));
await probe.close();
const frames = Math.ceil(total * fps);
console.log(`duration ${total.toFixed(1)}s, ${frames} frames`);

const per = Math.ceil(frames / workers);
let done = 0;
async function work(w) {
  const from = w * per, to = Math.min(frames, from + per);
  const page = await openPage(browser);
  const part = path.join(tmp, `p${w}.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', part], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let f = from; f < to; f++) {
    await page.evaluate(t => window.render(t), f / fps);
    const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (++done % 500 === 0) console.log(`${done}/${frames}`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  return part;
}
const parts = await Promise.all(Array.from({ length: workers }, (_, w) => work(w)));
await browser.close();
writeFileSync(path.join(tmp, 'list.txt'), parts.map(p => `file '${p}'`).join('\n'));
await new Promise(r => spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', path.join(tmp, 'list.txt'),
  '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo', '-shortest', '-c:v', 'copy', '-c:a', 'aac', '-movflags', '+faststart', out], { stdio: 'inherit' }).on('close', r));
rmSync(tmp, { recursive: true, force: true });
console.log('saved', out);
