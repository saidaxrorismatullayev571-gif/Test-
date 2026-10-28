// 1-qism: asoslar — qoidalar, atamalar, yaxshi tizimning 4 sharti.
const sc = [];
const add = (o) => sc.push(o);

// 0. Hook
add({ tr: 'fade', cam: [['Lekin', 1.05, 0, 20], ['qaysi biri', 1.0, 0, 0]], html: `
<div class="kick" ${A('fade', 'Tasavvur')}>Tasavvur qiling</div>
${H('To‘rtta sotuvchi. <span class="amber">Bitta savol.</span>', 'Tasavvur', 0.3)}
<div class="row" style="justify-content:space-between;align-items:flex-end;margin-top:10px">
 ${['Aziz', 'Bobur', 'Charos', 'Dilnoza'].map((n, i) => `<div ${A('pop', 'to‘rtta', i * 0.12, { sfx: i ? undefined : 'pop' })} ${n === 'Bobur' || n === 'Charos' ? O('Lekin') : ''} style="width:340px;display:flex;flex-direction:column;align-items:center;gap:12px">
   ${AV(n, 170, n === 'Dilnoza' ? '@start:0.5;qaysi biri:-0.8' : '@start:0.5;qaysi biri:0.7')}
   <div style="font-size:32px;font-weight:850">${n}</div>
   ${n === 'Aziz' ? `<div class="card" ${A('up', 'yigirma yetti', 0, { sfx: 'pop' })} style="padding:14px 24px;text-align:center"><div class="mu" style="font-size:20px">Sotuv / oy</div><div style="font-size:44px;font-weight:900" class="red">${C(27, 'yigirma yetti', { suf: ' mln' })}</div></div>` : ''}
   ${n === 'Dilnoza' ? `<div class="card" ${A('up', 'bir yuz yigirma', 0, { sfx: 'pop' })} style="padding:14px 24px;text-align:center"><div class="mu" style="font-size:20px">Sotuv / oy</div><div style="font-size:44px;font-weight:900" class="green">${C(120, 'bir yuz yigirma', { suf: ' mln' })}</div></div>` : ''}
   ${n === 'Aziz' || n === 'Dilnoza' ? `<div class="badge" ${A('pop', 'bir xil maosh', 0.1, { sfx: 'pop' })} ${E('pulse@bir xil maosh+0.6')} style="background:rgba(255,255,255,.1);font-size:28px;padding:10px 22px">Maosh: 4 mln</div>` : '<div style="height:150px"></div>'}
 </div>`).join('')}
</div>
<div ${A('pop', 'qaysi biri', 0, { sfx: 'ding' })} style="position:absolute;left:50%;top:46%;transform:translate(-50%,-50%);font-size:220px;font-weight:900" class="grad2">?</div>` });

// 1. Intro / roadmap
add({ tr: 'zoom', html: `
<div class="kick" ${A('fade', 'Bu darslik')}>Video darslik · Sotuv moduli</div>
<div class="big" ${A('split', 'to‘g‘ri maosh')}>Maosh tizimini <span class="grad">tanlash va hisoblash</span></div>
<div class="row" style="margin:26px 0 40px;gap:14px"><span class="chip k" ${A('pop', 'rahbar')}>Rahbar uchun</span><span class="chip k" ${A('pop', 'HR', 0.1)}>HR uchun</span></div>
<div class="g3">
 ${[['1', 'Asoslar', 'Qoidalar · atamalar · 4 shart', 'var(--teal)'], ['2', 'To‘rt variant', '4 xodim misolida', 'var(--blue)'], ['3', 'KPI va hisob', 'Har oy 10 daqiqada', 'var(--violet)']].map((c, i) => `
 <div class="card" ${A('up', 'uch qismdan', i * 0.15, { sfx: i ? undefined : 'whoosh' })} ${i === 0 ? E('lift@Birinchi qismda;pulse@ikki oltin') : `style="opacity:.55"`} style="${i === 0 ? 'border-color:var(--teal)' : ''}">
  <div style="display:flex;gap:18px;align-items:center"><div class="circ" style="background:${c[3]};color:#06121f">${c[0]}</div><h3 style="margin:0">${c[1]}</h3></div>
  <p style="margin-top:14px">${c[2]}</p></div>`).join('')}
</div>` });

// 2. Rule 1
add({ tr: 'push', cam: [['ketadi', 1.07, -110, 20]], html: `
<div class="kick" ${A('fade', 'ikkita oltin')}>Ikki oltin qoida</div>
${H('1-qoida: <span class="red">faqat oklad</span> — yo‘q', 'Birinchi qoida', 0)}
<div class="row" style="align-items:center;gap:60px">
 <div class="card" ${A('left', 'faqat oklad bermang')} style="flex:1;border-color:rgba(255,107,107,.5)">
   <div style="display:flex;gap:18px;align-items:center"><div class="x" style="width:76px;height:76px;font-size:40px">✕</div><h3 style="margin:0;font-size:46px">Faqat oklad</h3></div>
   <div class="row" style="margin-top:26px;gap:14px"><span class="chip" ${A('pop', 'yangi')}>Yangi xodimga ham</span><span class="chip" ${A('pop', 'tajribali')}>Tajribali xodimga ham</span></div>
 </div>
 <div style="width:520px;display:flex;align-items:flex-end;justify-content:center;gap:40px">
   <div ${A('pop', 'Boshidagi savol')}>${PERSON('Aziz', 140, '@start:0.6', '27 mln · 4 mln')}</div>
   <div ${A('pop', 'Boshidagi savol', 0.15)} ${O('ketadi+0.6')}>${PERSON('Dilnoza', 140, '@start:0.4;maosh bir xil:-0.9', '120 mln · 4 mln')}</div>
 </div>
</div>
<div class="card" ${A('up', 'eng kuchli', 0, { sfx: 'swish' })} style="margin-top:34px;align-self:center;font-size:34px;font-weight:800;border-color:var(--amber)">Maosh bir xil → <span class="amber">eng kuchli sotuvchi ketadi</span></div>` });

// 3. Rule 2
add({ tr: 'up', html: `
<div class="kick" ${A('fade', 'Ikkinchi qoida')}>Ikki oltin qoida</div>
${H('2-qoida: <span class="red">okladsiz ulush</span> — yo‘q', 'Ikkinchi qoida', 0)}
<div class="card" ${A('left', 'faqat tushumdan')} style="align-self:flex-start;position:relative;padding:22px 36px">
  <span style="font-size:42px;font-weight:850">Maosh = faqat ulush</span>
  <div style="position:absolute;left:20px;right:20px;top:50%;height:7px;background:var(--red);border-radius:4px;transform:scaleX(0);transform-origin:left" ${A('sx', 'bo‘lmasin', 0, { sfx: 'swish' })}></div>
</div>
<div class="card" ${A('blur', 'Formula oddiy')} style="margin-top:40px;text-align:center;padding:46px 30px;border-color:rgba(46,230,197,.5)">
  <span class="eq" style="font-size:70px"><span ${A('pop', 'aniq oklad#2', 0, { sfx: 'pop' })} style="display:inline-block" class="teal">Aniq oklad</span><span class="op" ${A('fade', 'qo‘shuv')}>+</span><span ${A('pop', 'natijaga', 0, { sfx: 'pop' })} style="display:inline-block" class="amber">natijaga bog‘liq qism</span></span>
</div>` });

// 4. KPI & CRM
add({ tr: 'wipe', cam: [['CRM —', 1.0, 0, 0]], html: `
<div class="kick" ${A('fade', 'so‘zlarni')}>Atamalar</div>
${H('Avval so‘zlarni bilib olaylik', 'so‘zlarni', 0)}
<div class="g2">
 <div class="card" ${A('up', 'KPI —')} ${E('pulse@KPI —+0.3')} style="min-height:420px">
  <div class="badge" style="background:var(--teal);color:#06201c;font-size:30px">KPI</div>
  <p style="margin-top:20px;font-size:32px">Oy davomida bajariladigan <b>aniq raqam</b></p>
  <div style="margin-top:30px;display:flex;flex-direction:column;gap:16px">
   <div ${A('left', 'yaxshi ishla')} style="display:flex;gap:16px;align-items:center;font-size:32px"><div class="x">✕</div><span style="position:relative">«Yaxshi ishla»<i style="position:absolute;left:-4px;right:-4px;top:52%;height:4px;background:var(--red);transform:scaleX(0);transform-origin:left" ${A('sx', 'degan gap emas')}></i></span></div>
   <div ${A('left', 'oltmish million', 0, { sfx: 'pop' })} style="display:flex;gap:16px;align-items:center;font-size:32px"><div class="ok">✓</div><span><b class="teal">${C(60, 'oltmish million')} mln so‘m</b> / oy</span></div>
  </div>
 </div>
 <div class="card" ${A('up', 'CRM —')} ${E('pulse@CRM —+0.3')} style="min-height:420px">
  <div class="badge" style="background:var(--blue);color:#071a33;font-size:30px">CRM</div>
  <p style="margin-top:20px;font-size:32px">Mijozlar daftari — <b>kompyuterda</b></p>
  <div style="margin-top:24px;border:1px solid var(--line);border-radius:18px;overflow:hidden;font-size:26px">
   ${[['Kim qo‘ng‘iroq qildi', 'Kim qo‘ng‘iroq'], ['Nima gaplashildi', 'nima gaplashildi'], ['Kim sotib oldi', 'kim sotib oldi']].map(([t, k], i) => `<div ${A('left', k, 0, { sfx: 'tick' })} style="display:flex;justify-content:space-between;padding:14px 20px;${i ? 'border-top:1px solid var(--line);' : ''}background:rgba(255,255,255,${i % 2 ? .03 : .06})"><span>${t}</span><span class="green">✓</span></div>`).join('')}
  </div>
 </div>
</div>` });

// 5. Lid → Bitim → Tushum
add({ tr: 'push', cam: [['E’tibor', 1.08, 0, -60]], html: `
<div class="kick" ${A('fade', 'Lid')}>Atamalar</div>
<div class="row" style="align-items:center;justify-content:center;gap:26px;margin-bottom:56px">
 ${[['Lid', 'murojaat qildi, hali sotib olmadi', 'var(--violet)', 'Lid —'], ['Bitim', 'rozi bo‘ldi va to‘ladi', 'var(--blue)', 'Bitim —'], ['Tushum', 'hisobga haqiqatan tushgan pul', 'var(--green)', 'Tushum esa']].map((c, i) => `
  ${i ? `<svg width="90" height="40"><path d="M5 20 H80 M64 6 L82 20 L64 34" stroke="var(--mu)" stroke-width="4" fill="none" stroke-linecap="round" ${A('draw', c[3], -0.3, { t: 0.6 })}/></svg>` : ''}
  <div class="card" ${A('pop', c[3], 0, { sfx: 'pop' })} style="width:440px;text-align:center;border-top:6px solid ${c[2]}"><h3 style="color:${c[2]};font-size:44px">${c[0]}</h3><p>${c[1]}</p></div>`).join('')}
</div>
<div class="card" ${A('up', 'o‘n million')} style="padding:30px 40px">
 <div style="display:flex;justify-content:space-between;font-size:28px;margin-bottom:14px"><span>Shartnoma: <b>${C(10, 'o‘n million', { suf: ' mln' })}</b></span><span class="mu" ${A('fade', 'Qolgan olti')}>qolgan 6 mln — <b class="red">hali tushum emas</b></span></div>
 <div style="height:70px;border-radius:18px;background:repeating-linear-gradient(45deg,rgba(255,255,255,.06) 0 14px,rgba(255,255,255,.1) 14px 28px);position:relative;overflow:hidden">
  <div style="position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,#1fae76,var(--green));display:flex;align-items:center;padding-left:24px;font-size:30px;font-weight:900;color:#052016;white-space:nowrap" ${A('wx', 'to‘rt million to‘landi', 0, { w: 40, t: 1.2, sfx: 'whoosh' })}>4 mln to‘landi</div>
 </div>
 <div style="margin-top:18px;font-size:40px;font-weight:900" ${A('pop', 'Tushum — to‘rt', 0, { sfx: 'ding' })}>Tushum = <span class="green box">4 mln</span></div>
</div>` });

// 6. Salary parts
add({ tr: 'zoom', html: `
<div class="kick" ${A('fade', 'Maosh uch')}>Maosh nimadan iborat</div>
${H('Maosh — uch qismdan', 'Maosh uch', 0)}
<div class="row" style="gap:50px;align-items:stretch">
 <div style="width:340px;height:520px;display:flex;flex-direction:column-reverse;gap:10px;position:relative">
  <div ${A('hy', 'Oklad —', 0, { h: 44, sfx: 'pop' })} style="height:0;background:linear-gradient(180deg,#5ff3d8,var(--teal));border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:900;color:#05201c;overflow:hidden">OKLAD</div>
  <div ${A('hy', 'Bonus —', 0, { h: 28, sfx: 'pop' })} style="height:0;background:linear-gradient(180deg,#8cc4ff,var(--blue));border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:900;color:#071a33;overflow:hidden">BONUS</div>
  <div ${A('hy', 'Ulush esa', 0, { h: 24, sfx: 'pop' })} style="height:0;background:linear-gradient(180deg,#ffd77f,var(--amber));border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:900;color:#2a1c00;overflow:hidden">ULUSH</div>
 </div>
 <div class="col" style="flex:1;justify-content:center">
  <div class="card" ${A('right', 'Oklad —')} ${E('glow@kafolatlangan')}><h3 class="teal">Oklad</h3><p>Har oy <b>kafolatlangan</b>. Sotuv bo‘lsa ham, bo‘lmasa ham.</p></div>
  <div class="card" ${A('right', 'Bonus —')}><h3 class="blue">Bonus · bonus fondi</h3><p>KPI bajarilsa beriladi. <span ${A('fade', 'Bonus fondi')}><b>Fond</b> — bonusning eng ko‘p summasi.</span></p></div>
  <div class="card" ${A('right', 'Ulush esa')}><h3 class="amber">Ulush</h3><p style="font-size:32px">10 000 000 × 5% = <b class="amber">${C(500000, 'besh foizi')}</b> so‘m</p></div>
 </div>
</div>` });

// 7. Conversion & completion
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'hisoblash atamalari')}>Hisoblash atamalari</div>
<div class="g2" style="gap:40px">
 <div class="card" ${A('up', 'Konversiya')}>
  <h3 class="teal">Konversiya</h3><p>100 murojaatdan nechtasi sotib oldi</p>
  <div style="display:grid;grid-template-columns:repeat(10,1fr);gap:7px;margin:20px 0;width:380px">${Array.from({ length: 100 }, (_, k) => `<div style="aspect-ratio:1;border-radius:5px;background:${k < 20 ? 'var(--teal)' : 'rgba(255,255,255,.12)'}" ${k < 20 ? A('pop', 'yigirma kishi', k * 0.04, { t: 0.4, sfx: k ? undefined : 'tick' }) : ''}></div>`).join('')}</div>
  <div style="font-size:44px;font-weight:900">20 / 100 = <span class="teal">${C(20, 'konversiya yigirma', { suf: '%' })}</span></div>
 </div>
 <div class="card" ${A('up', 'Bajarilish foizi')} style="display:flex;flex-direction:column;align-items:center">
  <h3 class="blue" style="align-self:flex-start">Bajarilish foizi</h3><p style="align-self:flex-start">haqiqiy ÷ maqsad × 100</p>
  <svg width="300" height="300" viewBox="0 0 300 300" style="margin-top:20px">
   <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="26"/>
   <circle cx="150" cy="150" r="120" fill="none" stroke="var(--blue)" stroke-width="26" stroke-linecap="round" transform="rotate(-90 150 150)" style="stroke-dasharray:565.5 754" ${A('draw', 'yetmish besh', -0.4, { t: 1.4 })}/>
   <text x="150" y="168" text-anchor="middle" font-size="64" font-weight="900" fill="#f1f5ff">${'75%'}</text>
  </svg>
  <div style="font-size:34px;font-weight:800;margin-top:10px" ${A('up', 'Qirq beshni')}>45 ÷ 60 × 100 = <span class="blue">75%</span></div>
 </div>
</div>` });

// 8. Weight, KPI score, gate rule
add({ tr: 'wipe', cam: [['eshik qoidasi', 1.04, 0, -60]], html: `
<div class="kick" ${A('fade', 'Vazn')}>Hisoblash atamalari</div>
<div class="g2" style="gap:40px">
 <div class="card" ${A('up', 'Vazn')}><h3 class="violet">Vazn</h3><p>KPI maoshga qanchalik ta’sir qiladi</p>
  <div style="display:flex;height:64px;border-radius:14px;overflow:hidden;margin-top:26px;font-weight:900;font-size:24px">
   ${[[40, 'var(--teal)'], [20, 'var(--blue)'], [20, 'var(--violet)'], [20, 'var(--amber)']].map(([w, c], k) => `<div style="width:0;background:${c};display:flex;align-items:center;justify-content:center;color:#071022;overflow:hidden" ${A('wx', 'har bir KPI', k * 0.3, { w, t: 0.6 })}>${w}%</div>`).join('')}
  </div>
  <div style="font-size:34px;font-weight:850;margin-top:16px" ${A('pop', 'doim yuz', 0, { sfx: 'ding' })}>Jami = <span class="green">100%</span></div>
 </div>
 <div class="card" ${A('up', 'KPI balli')}><h3 class="amber">KPI balli</h3><p>Barcha ballar yig‘indisi: 0 … 100</p>
  <div style="height:64px;border-radius:14px;background:rgba(255,255,255,.08);margin-top:26px;position:relative;overflow:hidden"><div style="position:absolute;inset:0;width:0;background:linear-gradient(90deg,var(--amber),var(--green))" ${A('wx', 'noldan yuzgacha', 0, { w: 100, t: 1.4 })}></div></div>
  <div style="display:flex;justify-content:space-between;font-size:24px;margin-top:8px" class="mu"><span>0</span><span>100</span></div>
 </div>
</div>
<div class="card" ${A('up', 'eshik qoidasi')} ${E('pulse@eshik qoidasi+0.5')} style="margin-top:34px;border-color:rgba(255,194,75,.6);display:flex;gap:40px;align-items:center">
 <div style="width:520px"><h3 class="amber" style="font-size:42px">Eshik qoidasi</h3><p>KPI 50% dan kam bajarilsa — bonus <b>0</b></p></div>
 <div style="flex:1;position:relative;height:80px;border-radius:16px;background:rgba(255,255,255,.08)">
  <div style="position:absolute;left:50%;top:-22px;bottom:-22px;border-left:5px dashed var(--amber)"><span style="position:absolute;top:-34px;left:-30px;font-weight:900;color:var(--amber);font-size:24px">50%</span></div>
  <div style="position:absolute;left:0;top:0;bottom:0;width:0;border-radius:16px;background:var(--red)" ${A('wx', 'ellik foizdan kam', 0, { w: 42, t: 1 })}></div>
 </div>
 <div style="font-size:110px;font-weight:900" class="red" ${A('pop', 'Nol', 0, { sfx: 'thud' })} ${E('shake@Nol+0.3')}>0</div>
</div>` });

// 9-10. Four conditions (two scenes share one layout)
const COND = [['Tushunarli', 'Xodim «qancha olaman?» savoliga 1 daqiqada javob beradi', '⏱'], ['Xodim ta’sir qila oladi', 'Maosh xodimning o‘z ishiga bog‘liq', '✋'], ['Korxonaga foydali', 'Xodim ko‘p ishlasa, korxona ham ko‘p topadi', '📈'], ['Hisoblash oson', 'Rahbar 10–15 daqiqada hisoblaydi', '🧮']];
// keys[i]: keyword that reveals item i; null = already shown; '-' = not yet (dimmed placeholder)
const condGrid = (keys) => `<div class="g2" style="gap:24px">${COND.map((c, i) => {
  const k = keys[i], dim = k === '-';
  return `<div class="card" ${k && !dim ? A('up', k, 0, { sfx: 'pop' }) : ''} style="display:flex;gap:24px;align-items:flex-start;min-height:190px;${dim ? 'opacity:.22' : ''}">
  <div class="ok" style="width:70px;height:70px;font-size:36px;${dim ? 'opacity:0' : ''}" ${k && !dim ? A('pop', k, 0.5) : ''}>✓</div>
  <div><h3 style="font-size:34px">${i + 1}. ${c[0]}</h3><p>${c[1]}</p></div></div>`;
}).join('')}</div>`;
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'to‘rt sharti')}>Yaxshi tizimning 4 sharti</div>
${H('Har biriga <span class="green">«ha»</span> deya olasizmi?', '«ha»', 0)}
${condGrid(['Birinchi', 'Ikkinchi', '-', '-'])}` });
add({ tr: 'fade', html: `
<div class="kick">Yaxshi tizimning 4 sharti</div>
<h2>Har biriga <span class="green">«ha»</span> deya olasizmi?</h2>
${condGrid([null, null, 'Uchinchi', 'To‘rtinchi'])}
<div class="card" ${A('up', '«yo‘q»', 0, { sfx: 'thud' })} ${E('shake@«yo‘q»+0.5')} style="margin-top:26px;align-self:center;border-color:var(--red);font-size:32px;font-weight:800;display:flex;gap:16px;align-items:center"><div class="x">✕</div>Bittasi «yo‘q» bo‘lsa — tizim <span class="red">1–2 oyda buziladi</span></div>` });

// 11-14. Quiz
const QZ = (n, q, extra) => `
<div class="kick amber" ${A('fade', '@start')}>O‘zingizni tekshiring · ${n}-savol</div>
<div class="row" style="align-items:center;gap:60px">
 <div class="card quiz" ${A('blur', '@start')} style="flex:1;padding:44px">
  <div style="font-size:46px;font-weight:850;line-height:1.3">${q}</div>${extra || ''}
 </div>
 <div ${A('cd', '@end', 0, { t: 5 })} style="opacity:0;position:relative;width:200px;height:200px">
  <svg width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="14"/><circle class="fg" cx="100" cy="100" r="70" fill="none" stroke="var(--amber)" stroke-width="14" stroke-linecap="round" transform="rotate(-90 100 100)"/></svg>
  <div class="n" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:84px;font-weight:900">5</div>
 </div>
</div>
<div ${A('fade', '@end', 0.2)} class="mu" style="margin-top:30px;font-size:28px">⏸ Pauza qiling yoki 5 soniya o‘ylang</div>`;
add({ tr: 'wipe', html: QZ(1, 'Shartnoma — <b>10 mln</b>. Mijoz <b>3 mln</b> to‘ladi.<br>Tushum qancha?', `
  <div style="margin-top:30px;height:56px;border-radius:14px;background:rgba(255,255,255,.08);position:relative;overflow:hidden"><div style="position:absolute;left:0;top:0;bottom:0;width:0;background:var(--green)" ${A('wx', 'uch million to‘ladi', 0, { w: 30 })}></div></div>`) });
add({ tr: 'zoom', html: `
<div class="kick green" ${A('fade', '@start')}>Javob</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:30px;position:relative">
 <div class="big" ${A('pop', 'uch million', 0, { sfx: 'success' })}>Tushum = <span class="green">3 mln</span></div>
 ${BURST('uch million+0.1')}
 <div class="card" ${A('up', 'faqat hisobga')} style="font-size:34px">Faqat <span ${A('mark', 'haqiqatan')} class="mk">hisobga haqiqatan tushgan</span> pul</div>
</div>` });
add({ tr: 'wipe', html: QZ(2, '<b>Qayta aloqa</b> KPI — <b>40%</b> bajarildi.<br>Shu KPI bo‘yicha bonus bormi?', `
  <div style="margin-top:34px;position:relative;height:56px;border-radius:14px;background:rgba(255,255,255,.08)">
   <div style="position:absolute;left:50%;top:-14px;bottom:-14px;border-left:4px dashed var(--amber)"></div>
   <div style="position:absolute;left:0;top:0;bottom:0;width:0;border-radius:14px;background:var(--blue)" ${A('wx', 'qirq foiz', 0, { w: 40 })}></div></div>`) });
add({ tr: 'zoom', html: `
<div class="kick green" ${A('fade', '@start')}>Javob</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:34px">
 <div class="big" ${A('pop', 'Javob', 0.3, { sfx: 'thud' })} ${E('shake@yo‘q+0.4')}><span class="red">Yo‘q</span> — ball 0</div>
 <div class="card" ${A('up', 'Qirq foiz')} style="width:1100px">
  <div style="position:relative;height:70px;border-radius:16px;background:rgba(255,255,255,.08)">
   <div style="position:absolute;left:50%;top:-16px;bottom:-16px;border-left:5px dashed var(--amber)"><span style="position:absolute;top:-38px;left:-60px;color:var(--amber);font-weight:900;font-size:24px;white-space:nowrap">eshik 50%</span></div>
   <div style="position:absolute;left:0;top:0;bottom:0;width:0;border-radius:16px;background:var(--red);display:flex;align-items:center;justify-content:flex-end;padding-right:16px;font-weight:900;font-size:28px" ${A('wx', 'Qirq foiz', 0.2, { w: 40 })}>40%</div></div>
 </div>
 <div ${A('up', 'Eshik qoidasi')} style="font-size:34px">${MK('Eshik qoidasi ishlaydi', 'Eshik qoidasi+0.3')}</div>
</div>` });

// 15. Outro
add({ tr: 'up', html: `
<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:30px;margin:auto 0">
 <div class="kick" ${A('fade', '@start')}>1-qism tugadi</div>
 <div class="big" ${A('split', 'Ikkinchi qismda')}>Keyingi qism: <span class="grad">to‘rt variant</span></div>
 <div class="row" style="gap:60px;margin-top:20px">${['Aziz', 'Bobur', 'Charos', 'Dilnoza'].map((n, i) => `<div ${A('pop', 'to‘rtta xodim', i * 0.15, { sfx: i ? undefined : 'pop' })}>${PERSON(n, 130, '@start:0.6;adolatli:0.9')}</div>`).join('')}</div>
 <div class="mu" style="font-size:30px" ${A('fade', 'adolatli')}>Qaysi maosh tizimi <b class="amber">adolatli</b>?</div>
</div>` });

window.PART = { label: '1-qism · Asoslar', scenes: sc };
