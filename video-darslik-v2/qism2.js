// 2-qism: to‘rt variant — bitta misolda solishtirish.
const sc = [];
const add = (o) => sc.push(o);
const TEAM = [['Aziz', 27, 45, 'var(--red)'], ['Bobur', 60, 100, 'var(--blue)'], ['Charos', 90, 150, 'var(--teal)'], ['Dilnoza', 120, 200, 'var(--green)']];
const card = (inner, ex = '', st = '') => `<div class="card" ${ex} style="${st}">${inner}</div>`;
const quizRing = (at) => `<div ${A('cd', at, 0, { t: 5 })} style="opacity:0;position:relative;width:200px;height:200px;flex:none">
  <svg width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="14"/><circle class="fg" cx="100" cy="100" r="70" fill="none" stroke="var(--amber)" stroke-width="14" stroke-linecap="round" transform="rotate(-90 100 100)"/></svg>
  <div class="n" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:84px;font-weight:900">5</div></div>`;

// 0. Hook
add({ tr: 'fade', html: `
<div class="kick" ${A('fade', 'Bitta savol')}>Bitta savol</div>
<div class="row" style="align-items:center;gap:80px">
 <div style="flex:1">
  <div class="big" ${A('split', 'rejadan')}>2× sotuv = <span class="grad2">2× maosh?</span></div>
  <div style="font-size:36px;margin-top:30px" class="mu" ${A('up', 'Javob siz')}>Javob — <span ${A('mark', 'maosh tizimiga')} class="mk" style="color:var(--tx)">siz tanlagan tizimga</span> bog‘liq</div>
 </div>
 <div ${A('pop', 'rejadan', 0.4, { sfx: 'pop' })}>${PERSON('Dilnoza', 200, '@start:0.3;ikki baravar ko‘p maosh:0.9', 'reja × 2')}</div>
</div>
<div class="g4" style="margin-top:56px">${['Faqat oklad', 'Oklad + KPI', 'Oklad + ulush', 'Ulush + tartib'].map((v, i) => `<div class="card" ${A('up', 'to‘rt variantni', i * 0.15, { sfx: i ? undefined : 'whoosh' })} style="text-align:center;padding:22px"><div style="font-size:54px;font-weight:900" class="grad">${i + 1}</div><div style="font-size:26px;font-weight:750">${v}</div></div>`).join('')}</div>` });

// 1-2. The four salespeople (one layout, two scenes)
const teamChart = (keys, plan) => `
<div class="row" style="align-items:flex-end;gap:60px">
 <div class="chart" style="height:420px;flex:1;margin-top:60px;gap:60px">
  <div class="hline" style="bottom:50%" ${plan}><span>Reja 60 mln</span></div>
  ${TEAM.map(([n, v, p, c], i) => {
    const k = keys[i];
    if (k === '-') return '<div class="bcol"></div>';
    if (k === null) return `<div class="bcol"><div class="bar" style="background:${c};height:${v / 120 * 100}%"><div class="bl">${v} mln · ${p}%</div></div></div>`;
    return BAR(v / 120 * 100, c, k, 0, `${v} mln · ${p}%`, '', '');
  }).join('')}
 </div>
</div>
<div class="row" style="gap:60px;margin-top:20px;padding:0 0 0 0">${TEAM.map(([n], i) => `<div style="flex:1;display:flex;justify-content:center;${keys[i] === '-' ? 'opacity:0' : ''}" ${keys[i] && keys[i] !== '-' ? A('pop', keys[i], 0, { sfx: 'pop' }) : ''}>${PERSON(n, 110, '@start:0.5')}</div>`).join('')}</div>`;
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'Misolimiz')}>Misol · bitta oy</div>
${H('Reja — <span class="amber">60 mln so‘m</span> tushum', 'Oylik reja', 0)}
${teamChart(['Aziz', 'Bobur', '-', '-'], A('fade', 'Oylik reja', 0.5))}` });
add({ tr: 'fade', html: `
<div class="kick">Misol · bitta oy</div>
<h2>Reja — <span class="amber">60 mln so‘m</span> tushum</h2>
${teamChart([null, null, 'Charos', 'Dilnoza'], '')}
<div class="row" style="position:absolute;right:120px;top:140px;gap:12px" ${A('up', 'Boshqa maqsadlar')}><span class="chip">Konversiya 20%</span><span class="chip">CRM 90%</span><span class="chip">Qayta aloqa 90%</span></div>` });

// 3. Variant 1 — numbers
add({ tr: 'wipe', html: `
<div class="kick red" ${A('fade', 'Birinchi variant')}>1-variant · tavsiya etilmaydi</div>
${H('Faqat oklad: hammaga <span class="red">4 mln</span>', 'Birinchi variant', 0)}
<div class="row" style="gap:28px">${TEAM.map(([n, v, , c], i) => `
 <div class="card" ${A('up', 'Hammaga', i * 0.12, { sfx: i ? undefined : 'pop' })} ${n === 'Aziz' ? E('lift@Aziz uchun') : n === 'Dilnoza' ? E('lift@Dilnoza uchun') : ''} style="flex:1;text-align:center">
  ${AV(n, 110, n === 'Dilnoza' ? '@start:0.4;atigi:-0.8' : '@start:0.5')}
  <div style="font-size:28px;font-weight:850;margin-top:6px">${n}</div>
  <div class="mu" style="font-size:22px">sotuv ${v} mln</div>
  <div style="font-size:44px;font-weight:900;margin:8px 0">4 mln</div>
  <div style="font-size:30px;font-weight:900" class="${n === 'Aziz' ? 'red' : n === 'Dilnoza' ? 'amber' : 'mu'}" ${A('pop', n === 'Aziz' ? 'Aziz uchun' : n === 'Dilnoza' ? 'Dilnoza uchun' : 'Lekin qarang', 0.2)}>${(4 / v * 100).toFixed(1).replace('.', ',')}%</div>
  <div class="mu" style="font-size:18px">maosh / tushum</div>
 </div>`).join('')}</div>` });

// 4. Variant 1 — consequences
add({ tr: 'push', cam: [['Jamoada', 1.05, 0, -30]], html: `
<div class="kick red" ${A('fade', 'Natija')}>1-variant · oqibat</div>
<div class="row" style="justify-content:center;gap:90px;align-items:flex-end;margin-top:10px">
 <div style="display:flex;flex-direction:column;align-items:center;gap:20px" ${A('pop', 'Natija')} ${O('boshqa joyga+0.8')}>
  <div class="card" ${A('up', 'nega men')} style="font-size:28px;font-style:italic;border-color:var(--amber);padding:16px 24px">«Nega men ko‘proq ishlayman?»</div>
  ${PERSON('Dilnoza', 160, '@start:-0.6', 'ketadi')}</div>
 <div style="display:flex;flex-direction:column;align-items:center;gap:20px" ${A('pop', 'Aziz esa')}>
  <div class="card" ${A('up', 'tinch xodimlar')} style="font-size:28px;padding:16px 24px">«Menga shunisi ham yetadi»</div>
  ${PERSON('Aziz', 160, '@start:0.8', 'qoladi')}</div>
 <div style="display:flex;flex-direction:column;align-items:center;gap:20px" ${A('pop', 'rahbar esa')}>
  <div class="card" ${A('up', 'qo‘ng‘iroq qildingmi')} style="font-size:28px;font-style:italic;padding:16px 24px">«Qo‘ng‘iroq qildingmi?»</div>
  ${PERSON('Rahbar', 160, '@start:0.1;nazorat:-0.5', 'har kuni nazorat')}</div>
</div>
<div class="card" ${A('blur', 'tavsiya etilmaydi', 0, { sfx: 'thud' })} ${E('shake@tavsiya etilmaydi+0.4')} style="margin-top:50px;align-self:center;border-color:var(--red);font-size:36px;font-weight:850;display:flex;gap:18px;align-items:center"><div class="x">✕</div>Tavsiya etilmaydi — <span class="red">hatto yangi xodimga ham</span></div>` });

// 5. Variant 2 — formula
add({ tr: 'zoom', html: `
<div class="kick blue" ${A('fade', 'Ikkinchi variant')}>2-variant</div>
${H('Oklad + KPI bonus', 'Ikkinchi variant', 0)}
<div class="card" ${A('blur', 'Formula')} style="text-align:center;padding:42px">
 <span class="eq" style="font-size:62px">Maosh <span class="op">=</span><span class="teal" ${A('pop', 'teng oklad', 0, { sfx: 'pop' })} style="display:inline-block">Oklad</span><span class="op">+</span><span class="blue" ${A('pop', 'bonus fondi', 0, { sfx: 'pop' })} style="display:inline-block">Bonus fondi</span><span class="op">×</span><span class="amber" ${A('pop', 'KPI balli', 0, { sfx: 'pop' })} style="display:inline-block">KPI balli</span></span></div>
<div class="row" style="margin-top:30px;gap:28px">
 ${card(`<div class="mu" style="font-size:24px">Oklad</div><div style="font-size:52px;font-weight:900" class="teal">${C(2500000, 'ikki million besh yuz ming')}</div>`, A('up', 'ikki million besh yuz ming'), 'flex:1')}
 ${card(`<div class="mu" style="font-size:24px">Bonus fondi</div><div style="font-size:52px;font-weight:900" class="blue">${C(2500000, 'bonus fondi ham')}</div>`, A('up', 'bonus fondi ham'), 'flex:1')}
 ${card(`<div class="mu" style="font-size:24px">KPI vaznlari</div><div style="display:flex;height:52px;border-radius:12px;overflow:hidden;margin-top:10px;font-weight:900;font-size:20px">${[[40, 'var(--teal)', 'Tushum'], [20, 'var(--blue)', 'Konv.'], [20, 'var(--violet)', 'CRM'], [20, 'var(--amber)', 'Q.aloqa']].map(([w, c, l], k) => `<div style="width:0;background:${c};display:flex;align-items:center;justify-content:center;color:#071022;overflow:hidden;white-space:nowrap" ${A('wx', k ? 'yigirma foizdan' : 'qirq foiz', k ? (k - 1) * 0.25 : 0, { w, t: 0.6 })}>${l} ${w}</div>`).join('')}</div>`, A('up', 'KPIlar to‘rtta'), 'flex:1.4')}
</div>` });

// 6-7. Aziz KPI table
const ROWS = [['Tushum', '60 mln', '27 mln', '27 ÷ 60', 45, 40, 0, true], ['Konversiya', '20%', '16%', '16 ÷ 20', 80, 20, 16], ['CRM tozaligi', '90%', '72%', '72 ÷ 90', 80, 20, 16], ['Qayta aloqa', '90%', '63%', '63 ÷ 90', 70, 20, 14]];
const kpiTable = (keys, total) => `
<div class="row" style="gap:30px;align-items:flex-start">
 <div style="flex:none">${PERSON('Aziz', 130, '@start:0.3' + (total ? ';qirq olti:0.7' : ''), '27 mln sotdi')}</div>
 <div class="card" style="flex:1;padding:14px 26px">
 <table class="t"><tr><th>KPI</th><th>Maqsad</th><th>Qildi</th><th>Hisob</th><th>Bajarilish</th><th>Vazn</th><th>Ball</th></tr>
 ${ROWS.map((r, i) => { const k = keys[i]; const vis = k === null ? '' : k === '-' ? 'style="opacity:.18"' : A('left', k, 0, { sfx: 'tick' });
   return `<tr ${vis}><td><b>${r[0]}</b></td><td class="mu">${r[1]}</td><td>${r[2]}</td><td class="mu">${r[3]}</td>
   <td><b ${r[7] ? `class="red"` : ''}>${r[4]}%</b>${r[7] ? ` <span class="badge" style="background:rgba(255,107,107,.2);color:var(--red);font-size:18px;padding:4px 10px" ${k && k !== '-' ? A('pop', 'Eshik yopiq', 0, { sfx: 'thud' }) : ''}>eshik yopiq</span>` : ''}</td><td>${r[5]}%</td>
   <td style="font-size:38px;font-weight:900" class="${r[7] ? 'red' : 'green'}" ${k && k !== '-' ? A('pop', r[7] ? 'ball nol' : (i === 1 ? 'ball o‘n olti' : i === 2 ? 'ball o‘n olti' : 'ball o‘n to‘rt'), 0) : ''}>${r[6]}</td></tr>`; }).join('')}
 <tr ${total ? A('up', 'Jami') : 'style="opacity:0"'}><td colspan="6" style="border:0;text-align:right;font-size:32px;font-weight:850">KPI balli = 0 + 16 + 16 + 14 =</td><td style="border:0;font-size:54px;font-weight:900" class="amber" ${total ? E('pulse@qirq olti') : ''}>${total ? C(46, 'KPI balli —', { suf: '%', sfx: 'ding', t: 0.9 }) : '46%'}</td></tr>
 </table></div>
</div>`;
add({ tr: 'wipe', html: `
<div class="kick" ${A('fade', 'Azizning')}>2-variant · Aziz hisobi</div>
${H('Azizning <span class="amber">KPI ballini</span> hisoblaymiz', 'Azizning', 0)}
${kpiTable(['Tushum:', 'Konversiya:', '-', '-'], false)}` });
add({ tr: 'fade', html: `
<div class="kick">2-variant · Aziz hisobi</div>
<h2>Azizning <span class="amber">KPI ballini</span> hisoblaymiz</h2>
${kpiTable([null, null, 'CRM tozaligi:', 'Qayta aloqa:'], true)}` });

// 8. Bonus and salary
add({ tr: 'up', html: `
<div class="kick" ${A('fade', 'Bonus')}>2-variant · Aziz maoshi</div>
<div class="col" style="gap:30px">
 ${card(`<div class="mu" style="font-size:24px">Bonus</div><span class="eq">2 500 000<span class="op">×</span><span class="amber">46%</span><span class="op">=</span><span class="blue" ${E('pulse@bir million bir yuz ellik ming+0.8')}>${C(1150000, 'bir million bir yuz ellik ming')}</span></span>`, A('left', 'Bonus'))}
 ${card(`<div class="mu" style="font-size:24px">Maosh</div><span class="eq"><span class="teal">2 500 000</span><span class="op">+</span><span class="blue">1 150 000</span><span class="op">=</span><span class="green box">${C(3650000, 'uch million olti yuz', { sfx: 'ding' })}</span></span>`, A('left', 'Maosh:'))}
</div>
<div style="position:absolute;right:160px;bottom:120px" ${A('pop', 'uch million olti yuz', 0.8)}>${AV('Aziz', 160, '@start:0.5')}</div>
${BURST('uch million olti yuz+1.2', 22)}` });

// 9. All four + problem
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'Xuddi shunday')}>2-variant · to‘rt xodim</div>
<div class="row" style="gap:60px;align-items:flex-end">
 <div class="chart" style="height:430px;width:880px;margin-top:70px;gap:44px">
  <div class="hline" style="bottom:${5 / 6 * 100}%" ${A('fade', 'besh milliondan')}><span>Chegara 5 mln</span></div>
  ${BAR(3.65 / 6 * 100, 'var(--blue)', 'Xuddi shunday', 0, '3,65', 'Aziz')}${BAR(4.95 / 6 * 100, 'var(--blue)', 'Bobur', 0, '4,95', 'Bobur')}${BAR(5 / 6 * 100, 'var(--blue)', 'Charos', 0, '5,0', 'Charos')}${BAR(5 / 6 * 100, 'var(--blue)', 'Dilnoza', 0, '5,0', 'Dilnoza', E('pulse@Muammo'))}
 </div>
 <div class="col" style="flex:1">
  ${card(`<div class="mu" style="font-size:24px">Dilnoza / Aziz — sotuv</div><div style="font-size:84px;font-weight:900" class="green">${C(4.4, 'to‘rt yarim', { dec: 1, suf: '×' })}</div>`, A('right', 'to‘rt yarim'))}
  ${card(`<div class="mu" style="font-size:24px">Dilnoza / Aziz — maosh</div><div style="font-size:84px;font-weight:900" class="red">${C(1.4, 'bir yarim', { dec: 1, suf: '×' })}</div>`, A('right', 'bir yarim'))}
  ${card(`<p>Rejadan oshgach — <b class="amber">qo‘shimcha rag‘bat yo‘q</b></p>`, A('up', 'Rejadan oshgach', 0, { sfx: 'thud' }), 'border-color:var(--amber)')}
 </div>
</div>` });

// 10. Variant 3 — salary must have a fixed part
add({ tr: 'zoom', html: `
<div class="kick amber" ${A('fade', 'Uchinchi variant')}>3-variant</div>
${H('Oklad + <span class="amber">tushumdan ulush</span>', 'Uchinchi variant', 0)}
<div class="row" style="gap:28px">
 ${card(`<div class="x" style="width:66px;height:66px;font-size:34px">✕</div><h3 style="margin-top:16px">Okladsiz ulush yo‘q</h3>`, A('pop', 'okladsiz ulush', 0, { sfx: 'thud' }), 'flex:1;border-color:var(--red)')}
 ${card(`<div class="badge" style="background:rgba(176,140,255,.2);color:var(--violet)">1</div><h3 style="margin-top:12px">Islom qoidalari</h3><p>Ish haqi oldindan aniq bo‘lsin. Noaniq daromad — <b>g‘arar</b>.</p>`, A('up', 'Birinchidan'), 'flex:1.2')}
 ${card(`<div class="badge" style="background:rgba(90,168,255,.2);color:var(--blue)">2</div><h3 style="margin-top:12px">Kam oyda ham daromad</h3><p>Tushum kam oyda xodim daromadsiz qolmaydi.</p>`, A('up', 'Ikkinchidan'), 'flex:1.2')}
</div>
<div class="row" style="margin-top:28px;gap:28px;align-items:center">
 ${card(`<div class="mu" style="font-size:24px">Oklad ulushi</div><div style="display:flex;height:56px;border-radius:12px;overflow:hidden;margin-top:10px;font-weight:900;font-size:22px"><div style="width:0;background:var(--teal);color:#05201c;display:flex;align-items:center;justify-content:center;white-space:nowrap;overflow:hidden" ${A('wx', 'qirq-oltmish', 0, { w: 50 })}>Oklad 40–60%</div><div style="flex:1;background:rgba(255,194,75,.85);color:#2a1c00;display:flex;align-items:center;justify-content:center" ${A('fade', 'qirq-oltmish', 0.6)}>Ulush</div></div>`, A('up', 'qirq-oltmish'), 'flex:1.6')}
 <div class="mu" style="flex:1;font-size:24px" ${A('fade', 'diniy hukm')}>Bu diniy hukm emas — shartlarni ishonchli mutaxassis bilan tekshiring.</div>
</div>` });

// 11. Tiers
add({ tr: 'push', html: `
<div class="kick amber" ${A('fade', 'Ulush uch')}>3-variant · ulush pog‘onalari</div>
${H('Ulushni hisoblashning <span class="amber">3 usuli</span>', 'Ulush uch', 0)}
<div style="display:flex;height:120px;border-radius:22px;overflow:hidden;font-size:32px;font-weight:900">
 <div ${A('wx', 'ellik milliongacha', 0, { w: 41.7, t: 0.8, sfx: 'pop' })} style="width:0;background:linear-gradient(180deg,#5ff3d8,var(--teal));color:#05201c;display:flex;align-items:center;justify-content:center;white-space:nowrap;overflow:hidden">0–50 mln · 5%</div>
 <div ${A('wx', 'ellikdan yuz', 0, { w: 41.7, t: 0.8, sfx: 'pop' })} style="width:0;background:linear-gradient(180deg,#ffd77f,var(--amber));color:#2a1c00;display:flex;align-items:center;justify-content:center;white-space:nowrap;overflow:hidden">50–100 mln · 8%</div>
 <div ${A('wx', 'yuz milliondan', 0, { w: 16.6, t: 0.8, sfx: 'pop' })} style="width:0;background:linear-gradient(180deg,#ff9a9a,var(--red));color:#2a0606;display:flex;align-items:center;justify-content:center;white-space:nowrap;overflow:hidden">100+ · 10%</div>
</div>
<div style="position:relative;height:150px">
 <div ${A('pop', 'Boburning', 0, { sfx: 'whoosh' })} style="position:absolute;left:calc(50% - 90px);top:16px;display:flex;flex-direction:column;align-items:center">
  <div style="width:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:22px solid var(--blue)"></div>
  <div style="display:flex;gap:14px;align-items:center;margin-top:6px">${AV('Bobur', 80, '@start:0.6')}<div style="font-size:30px;font-weight:850">Bobur · 60 mln</div></div>
 </div>
</div>` });

// 12-13. Three methods for Bobur
const METHODS = [
  ['3-A · Bitta foiz', 'teal', '60 mln × 5%', 3000000, 5500000, 'Eng oddiy'],
  ['3-B · Zinapoya', 'amber', '60 mln × 8%', 4800000, 7300000, 'Kuchli rag‘bat'],
  ['3-C · Bosqichma-bosqich', 'violet', '50 × 5% + 10 × 8%', 3300000, 5800000, 'Adolatli'],
];
const methods = (keys) => `<div class="g3">${METHODS.map((m, i) => {
  const k = keys[i];
  if (k === '-') return `<div class="card" style="opacity:.2"><h3 class="${m[1]}">${m[0]}</h3></div>`;
  const cnt = (v, kk, d) => k ? C(v, kk, { t: 0.8, d: d || 0 }) : fmt(v);
  return `<div class="card" ${k ? A('pop', k[0], 0, { sfx: 'pop' }) : ''} style="min-height:380px">
   <h3 class="${m[1]}">${m[0]}</h3><p style="font-size:30px">${m[2]}</p>
   <div class="mu" style="font-size:22px;margin-top:20px">Ulush</div><div style="font-size:44px;font-weight:900">${cnt(m[3], k && k[1])}</div>
   <div class="mu" style="font-size:22px;margin-top:12px">Maosh</div><div style="font-size:50px;font-weight:900" class="green">${cnt(m[4], k && k[1], 0.9)}</div>
   <div class="chip" style="margin-top:16px">${m[5]}</div></div>`;
}).join('')}</div>`;
add({ tr: 'wipe', html: `
<div class="kick" ${A('fade', 'Birinchi usul')}>3-variant · Bobur, 60 mln</div>
${methods([['Birinchi usul', 'uch million', 'besh million besh'], ['Ikkinchi usul', 'to‘rt million sakkiz', 'yetti million'], '-'])}` });
add({ tr: 'fade', html: `
<div class="kick">3-variant · Bobur, 60 mln</div>
${methods([null, null, ['Uchinchi usul', 'uch million uch', 'besh million sakkiz']])}` });

// 14. Step jump risk (chart)
{
  const W = 1050, Hh = 420, X = (v) => v / 120 * W, Y = (v) => Hh - v / 12.5 * Hh;
  const b = (x) => x * (x <= 50 ? 0.05 : x <= 100 ? 0.08 : 0.10), c = (x) => x <= 50 ? x * 0.05 : x <= 100 ? 2.5 + (x - 50) * 0.08 : 6.5 + (x - 100) * 0.1;
  const path = (f, br) => { let d = ''; let s = false; for (let x = 0; x <= 120; x += 0.5) { if (br && br.includes(x)) { d += `M${X(x + 0.01)},${Y(f(x + 0.01))} `; continue; } d += (s ? 'L' : 'M') + X(x) + ',' + Y(f(x)) + ' '; s = true; } return d; };
  const grid = [0, 2.5, 5, 7.5, 10, 12.5].map((v) => `<line x1="0" x2="${W}" y1="${Y(v)}" y2="${Y(v)}" stroke="rgba(255,255,255,.08)"/><text x="-14" y="${Y(v) + 8}" fill="#9fb0d0" font-size="22" text-anchor="end">${fmt(v, v % 1 ? 1 : 0)}</text>`).join('') + [0, 20, 40, 60, 80, 100, 120].map((v) => `<text x="${X(v)}" y="${Hh + 36}" fill="#9fb0d0" font-size="22" text-anchor="middle">${v}</text>`).join('');
  add({ tr: 'zoom', cam: [['ellik million bir yuz', 1.25, 120, 40], ['surib', 1.0, 0, 0]], html: `
<div class="kick red" ${A('fade', 'Zinapoyaning')}>3-B · xavf</div>
${H('Zinapoya: chegarada <span class="red">sakrash</span>', 'Zinapoyaning', 0)}
<div class="row" style="gap:40px;align-items:flex-start">
 <svg width="${W + 110}" height="${Hh + 60}" viewBox="-90 -10 ${W + 110} ${Hh + 60}" style="overflow:visible">
  ${grid}
  <path d="${path(c)}" fill="none" stroke="var(--violet)" stroke-width="7" stroke-linecap="round" ${A('draw', 'bosqichma-bosqich usul', -0.3, { t: 2 })}/>
  <path d="${path(b, [50, 100])}" fill="none" stroke="var(--amber)" stroke-width="7" stroke-linecap="round" ${A('draw', 'sakrash', 0, { t: 2.2 })}/>
  <circle cx="${X(49.9)}" cy="${Y(2.5)}" r="11" fill="var(--teal)" ${A('pop', 'qirq to‘qqiz million', 0, { sfx: 'pop' })}/>
  <circle cx="${X(50.1)}" cy="${Y(4)}" r="11" fill="var(--red)" ${A('pop', 'ellik million bir yuz', 0, { sfx: 'pop' })}/>
  <line x1="${X(50)}" x2="${X(50)}" y1="${Y(2.5)}" y2="${Y(4)}" stroke="var(--red)" stroke-width="4" stroke-dasharray="8 8" ${A('fade', 'to‘rt million', 0)}/>
  <text x="${X(50) + 20}" y="${Y(2.5) + 48}" text-anchor="start" fill="var(--teal)" font-size="28" font-weight="800" ${A('fade', 'qirq to‘qqiz million')}>49,9 → 2,5 mln</text>
  <text x="${X(50) - 24}" y="${Y(4) - 22}" text-anchor="end" fill="var(--red)" font-size="28" font-weight="800" ${A('fade', 'to‘rt million')}>50,1 → 4,0 mln</text>
  <text x="${W / 2}" y="${Hh + 58}" fill="#9fb0d0" font-size="22" text-anchor="middle">Tushum, mln so‘m</text>
 </svg>
 <div class="col" style="flex:1;margin-top:10px">
  <div style="font-size:24px;display:flex;flex-direction:column;gap:10px"><span><i style="display:inline-block;width:18px;height:18px;border-radius:5px;background:var(--amber);margin-right:10px"></i>3-B Zinapoya</span><span ${A('fade', 'bosqichma-bosqich usul')}><i style="display:inline-block;width:18px;height:18px;border-radius:5px;background:var(--violet);margin-right:10px"></i>3-C Bosqichma-bosqich</span></div>
  ${card(`<p>Xodim to‘lovni <b class="red">keyingi oyga surishi</b> mumkin</p>`, A('up', 'surib'), 'border-color:var(--red)')}
  ${card(`<p><b class="violet">3-C</b> — adolatliroq</p>`, A('up', 'adolatliroq', 0, { sfx: 'ding' }), 'border-color:var(--violet)')}
 </div>
</div>` });
}

// 15. Variant 4 — quality coefficient
add({ tr: 'wipe', html: `
<div class="kick green" ${A('fade', 'To‘rtinchi variant')}>4-variant</div>
${H('Oklad + ulush + <span class="green">tartib</span>', 'To‘rtinchi variant', 0)}
<div class="card" ${A('blur', 'koeffitsientiga')} style="text-align:center;padding:30px"><span class="eq">Maosh<span class="op">=</span><span class="teal">Oklad</span><span class="op">+</span><span class="amber">Ulush</span><span class="op">×</span><span class="green" ${E('pulse@koeffitsientiga+0.4')} style="display:inline-block">Sifat koef.</span></span></div>
<div class="row" style="gap:24px;margin-top:28px">
 ${[['≥ 90%', '1,0', 'green', 'To‘qson foiz'], ['70–89%', '0,8', 'amber', 'Yetmishdan sakson'], ['< 70%', '0,5', 'red', 'Yetmishdan past']].map((r) => card(`<div class="mu" style="font-size:24px">Eng past sifat KPI</div><div style="font-size:42px;font-weight:850">${r[0]}</div><div style="font-size:84px;font-weight:900" class="${r[2]}">${r[1]}</div>`, A('pop', r[3], 0, { sfx: 'pop' }), 'flex:1;text-align:center')).join('')}
</div>` });

// 16. Aziz under variant 4
add({ tr: 'push', html: `
<div class="kick green" ${A('fade', 'Aziz uchun')}>4-variant · Aziz hisobi</div>
<div class="row" style="gap:40px;align-items:center">
 <div>${PERSON('Aziz', 150, '@start:0.4;koeffitsient nol:-0.2;uch million besh yuz:0.4')}</div>
 <div class="col" style="flex:1;gap:22px">
  ${card(`<div class="mu" style="font-size:22px">1 · Ulush</div><div style="font-size:42px;font-weight:850">27 000 000 × 5% = <span class="amber">${C(1350000, 'bir million uch yuz ellik')}</span></div>`, A('left', 'ulush yigirma'))}
  ${card(`<div class="mu" style="font-size:22px">2 · Eng past sifat</div><div style="font-size:38px;font-weight:850">CRM 80% · Qayta aloqa <span class="amber" ${E('pulse@eng past sifat+0.6')} style="display:inline-block">70%</span> → koef. <span class="amber">0,8</span></div>`, A('left', 'eng past sifat'))}
  ${card(`<div class="mu" style="font-size:22px">3 · Maosh</div><div style="font-size:40px;font-weight:850">1 350 000 × 0,8 = <span class="blue">${C(1080000, 'bir million sakson')}</span></div><div style="font-size:50px;font-weight:900;margin-top:10px">Maosh: <span class="green box">${C(3580000, 'uch million besh yuz', { sfx: 'ding' })}</span></div>`, A('left', 'Ulush bir million sakson'))}
 </div>
</div>` });

// 17. Comparison for Dilnoza
{
  const V = [['1 · Faqat oklad', 4, '#94a3b8', 'Faqat okladda'], ['2 · Oklad + KPI', 5, 'var(--blue)', 'Ikkinchi variantda'], ['3-A · Bitta foiz', 8.5, 'var(--teal)', 'Ko‘p sotgan'], ['3-B · Zinapoya', 14.5, 'var(--amber)', 'Zinapoyada'], ['3-C · Bosqichma', 11, 'var(--violet)', 'Ko‘p sotgan'], ['4 · Ulush + tartib', 8.5, 'var(--green)', 'to‘rtinchi variantlarda']];
  add({ tr: 'zoom', html: `
<div class="kick" ${A('fade', 'yonma-yon')}>Solishtirish · Dilnoza (120 mln)</div>
${H('Dilnoza qancha oladi? <span class="mu" style="font-size:40px">(mln so‘m)</span>', 'yonma-yon', 0)}
<div class="row" style="gap:40px;align-items:flex-end">
 <div style="flex:none">${PERSON('Dilnoza', 150, '@start:-0.5;Ikkinchi variantda:-0.2;Zinapoyada:0.9')}</div>
 <div class="chart" style="height:440px;flex:1;gap:26px;margin-top:40px">
  ${V.map(([n, v, c, k], i) => BAR(v / 15 * 100, c, k, i === 2 || i === 4 ? 0.3 : 0, fmt(v, v % 1 ? 1 : 0), `<span style="font-size:20px">${n}</span>`, [0, 1, 3].includes(i) ? A('fade', k, 0, { sfx: 'pop' }) + ' ' + E(`pulse@${k}+0.5`) : '')).join('')}
 </div>
</div>` });
}

// 18. Which to choose
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'Qaysini')}>Tanlash</div>
${H('Qaysi variant <span class="grad">sizga</span> mos?', 'Qaysini', 0)}
<div class="col" style="gap:16px">
 ${[['Mijoz o‘zi murojaat qiladi, bitim tez yopiladi', '2', 'var(--blue)', 'Mijozlar o‘zi'], ['Mijozni xodim topadi, bitim uzoq, chek katta', '4', 'var(--green)', 'Mijozni xodim'], ['CRM yo‘q', '3', 'var(--amber)', 'CRM bo‘lmasa'], ['Jamoa bo‘lib sotadi yoki xodim yangi', '2', 'var(--blue)', 'Jamoa bo‘lib']].map((r) => `
 <div class="card" ${A('left', r[3])} style="display:flex;align-items:center;gap:30px;padding:20px 30px">
  <div style="flex:1;font-size:32px;font-weight:700">${r[0]}</div>
  <svg width="70" height="30"><path d="M4 15 H60 M48 5 L62 15 L48 25" stroke="var(--mu)" stroke-width="4" fill="none" stroke-linecap="round" ${A('draw', r[3], 0.4, { t: 0.4 })}/></svg>
  <div class="badge" ${A('pop', r[3], 0.6, { sfx: 'pop' })} style="background:${r[2]};color:#08111f;font-size:32px;padding:12px 30px">${r[1]}-variant</div></div>`).join('')}
</div>` });

// 19. Recommendation
add({ tr: 'up', html: `
<div class="kick" ${A('fade', 'Umumiy tavsiya')}>Tavsiya</div>
<div style="display:flex;align-items:center;justify-content:center;gap:40px;margin:30px 0">
 ${card(`<div class="mu" style="font-size:26px">Boshlang</div><div style="font-size:84px;font-weight:900" class="blue">2-variant</div>`, A('pop', 'ikkinchi variant bilan', 0, { sfx: 'pop' }), 'text-align:center;min-width:440px;border-color:var(--blue)')}
 <div style="width:320px;position:relative"><div style="height:8px;border-radius:4px;background:linear-gradient(90deg,var(--blue),var(--green));width:0" ${A('wx', 'Uch oydan', 0, { w: 100, t: 1.2, sfx: 'whoosh' })}></div><div style="position:absolute;top:-58px;width:320px;text-align:center;font-size:32px;font-weight:850" ${A('fade', 'Uch oydan')}>3 oydan keyin</div></div>
 ${card(`<div class="mu" style="font-size:26px">Natijaga qarab</div><div style="font-size:84px;font-weight:900" class="green">3 yoki 4</div>`, A('pop', 'natijaga qarab', 0, { sfx: 'ding' }), 'text-align:center;min-width:440px;border-color:var(--green)')}
</div>` });

// 20-21. Quiz
add({ tr: 'wipe', html: `
<div class="kick amber" ${A('fade', '@start')}>O‘zingizni tekshiring</div>
<div class="row" style="align-items:center;gap:50px">
 <div>${AV('Charos', 170, '@start:0.6')}</div>
 <div class="card quiz" ${A('blur', '@start')} style="flex:1;padding:44px"><div style="font-size:48px;font-weight:850;line-height:1.3">Charos <b>90 mln</b> sotdi.<br><span class="amber">Zinapoya</span> usulida ulushi qancha?</div>
  <div style="display:flex;height:60px;border-radius:14px;overflow:hidden;margin-top:26px;font-size:22px;font-weight:900"><div style="width:41.7%;background:rgba(46,230,197,.75);color:#05201c;display:flex;align-items:center;justify-content:center">0–50 · 5%</div><div style="width:41.7%;background:rgba(255,194,75,.85);color:#2a1c00;display:flex;align-items:center;justify-content:center">50–100 · 8%</div><div style="flex:1;background:rgba(255,107,107,.85);color:#2a0606;display:flex;align-items:center;justify-content:center">100+ · 10%</div></div></div>
 ${quizRing('@end')}
</div>
<div ${A('fade', '@end', 0.2)} class="mu" style="margin-top:30px;font-size:28px">⏸ Pauza qiling yoki 5 soniya o‘ylang</div>` });
add({ tr: 'zoom', html: `
<div class="kick green" ${A('fade', '@start')}>Javob</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:30px;position:relative">
 <div style="font-size:44px" ${A('up', 'ikkinchi pog‘onada')}>90 mln — <span class="amber">2-pog‘ona</span> → <b>8%</b></div>
 <div class="big" ${A('pop', 'yetti million', 0, { sfx: 'success' })}>Ulush = <span class="green">${C(7200000, 'yetti million')}</span></div>
 ${BURST('yetti million+0.2')}
</div>` });

// 22. Outro
add({ tr: 'up', html: `
<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:34px;margin:auto 0">
 <div class="kick" ${A('fade', '@start')}>2-qism tugadi</div>
 <div class="big" ${A('split', 'Uchinchi qismda')}>Keyingi qism: <span class="grad">KPI va oylik hisob</span></div>
 <div class="row" style="gap:24px">${['To‘g‘ri KPI', 'Vazn va maqsad', '10 daqiqada hisob'].map((t, i) => `<span class="chip k" style="font-size:30px" ${A('pop', i ? 'o‘n daqiqada' : 'KPI tanlashni', i * 0.2, { sfx: i ? undefined : 'pop' })}>${t}</span>`).join('')}</div>
</div>` });

window.PART = { label: '2-qism · To‘rt variant', scenes: sc };
