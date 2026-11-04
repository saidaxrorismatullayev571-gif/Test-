// Faqat oxirgi bo‘lakni qayta render qiladi: node tail_render.mjs <dir> <t0>
import { createRequire } from 'node:module'; import { spawn } from 'node:child_process'; import path from 'node:path'; import { pathToFileURL } from 'node:url';
const { chromium } = createRequire(import.meta.url)('playwright');
const dir = path.resolve(process.argv[2]), t0 = +process.argv[3], fps = 30;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto(pathToFileURL(path.join(dir, 'index.html')).href); await p.evaluate(() => document.fonts.ready);
const total = await p.evaluate(() => window.TOTAL); const f0 = Math.round(t0 * fps), f1 = Math.round(total * fps);
const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '30', '-i', '-', '-c:v', 'libx264', '-crf', '17', '-pix_fmt', 'yuv420p', path.join(dir, 'tail.mp4')]);
for (let f = f0; f < f1; f++) { await p.evaluate((t) => window.render(t), f / fps); const buf = await p.screenshot({ type: 'jpeg', quality: 93 });
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r)); }
ff.stdin.end(); await new Promise((r) => ff.on('close', r)); await b.close(); console.log('tail', f0, f1);
