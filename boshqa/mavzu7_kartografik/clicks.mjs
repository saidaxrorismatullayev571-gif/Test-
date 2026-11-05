import { createRequire } from 'node:module'; import { writeFileSync } from 'node:fs'; import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url';
const { chromium } = createRequire(import.meta.url)('playwright'); const here = path.dirname(fileURLToPath(import.meta.url));
const b = await chromium.launch(); const p = await b.newPage(); await p.goto(pathToFileURL(path.join(here, 'index.html')).href);
writeFileSync(path.join(here, 'clicks.json'), JSON.stringify(await p.evaluate(() => window.getClicks()))); await b.close();
