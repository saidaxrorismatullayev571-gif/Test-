import { createRequire } from 'node:module'; import { pathToFileURL, fileURLToPath } from 'node:url'; import path from 'node:path';
const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
await p.goto(pathToFileURL(path.join(path.dirname(fileURLToPath(import.meta.url)), 'index.html')).href);
const r = await p.evaluate(() => { const out = []; let px = 0; for (let f = 0; f < 90; f++) { window.render(f / 30); const x = +document.getElementById('ecgdot').getAttribute('cx'); for (const P of [372, 807]) if (px < P && x >= P) out.push(f / 30); px = x; } return out; });
console.log(JSON.stringify(r)); await b.close();
