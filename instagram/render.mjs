import { createRequire } from 'node:module'; const { chromium } = createRequire(import.meta.url)('playwright');
import path from 'path';
const dir = path.dirname(new URL(import.meta.url).pathname);
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1100,height:2000}});
await p.goto('file://'+dir+'/assets.html'); await p.evaluate(()=>document.fonts.ready);
for (const id of await p.$$eval('body > div[id]', es=>es.map(e=>e.id)))
  await (await p.$('#'+id)).screenshot({path: `${dir}/chiqish/${id}.png`});
await b.close();
