// 3-qism: KPI tanlash va oylik hisob.
const sc = [];
const add = (o) => sc.push(o);
const card = (inner, ex = '', st = '') => `<div class="card" ${ex} style="${st}">${inner}</div>`;

// 0. Hook
add({ tr: 'fade', html: `
<div class="kick" ${A('fade', 'Ikkita xodim')}>Bitta savol</div>
${H('Bir xil sotuv — <span class="grad2">bir xil maosh?</span>', 'Ikkita xodim', 0)}
<div class="row" style="justify-content:center;gap:120px;align-items:flex-end">
 <div style="display:flex;flex-direction:column;align-items:center;gap:16px" ${A('pop', 'Ikkita xodim', 0.2, { sfx: 'pop' })}>
  ${PERSON('Bobur', 170, '@start:0.4;Ikkinchisi:0.9', 'sotuv 60 mln')}
  <div class="col" style="gap:10px">
   <div class="chip k" ${A('left', 'qayta qo‘ng‘iroq')}>✓ Qayta aloqa</div>
   <div class="chip k" ${A('left', 'toza yuritadi')}>✓ CRM toza</div>
  </div>
 </div>
 <div style="font-size:90px;font-weight:900" class="mu" ${A('pop', 'bir xil maosh', 0, { sfx: 'pop' })}>=?</div>
 <div style="display:flex;flex-direction:column;align-items:center;gap:16px" ${A('pop', 'Ikkita xodim', 0.35)}>
  ${PERSON('Aziz', 170, '@start:0.4;Ikkinchisi:-0.5', 'sotuv 60 mln')}
  <div class="col" style="gap:10px">
   <div class="chip" style="color:var(--red)" ${A('left', 'Ikkinchisi')}>✕ Qayta aloqa</div>
   <div class="chip" style="color:var(--red)" ${A('left', 'Ikkinchisi', 0.2)}>✕ CRM tartibsiz</div>
  </div>
 </div>
</div>
<div style="text-align:center;font-size:40px;font-weight:850;margin-top:40px" ${A('up', 'Javob to‘g‘ri', 0, { sfx: 'ding' })}>Javob — <span ${A('mark', 'tanlangan KPI')} class="mk">to‘g‘ri tanlangan KPI</span>da</div>` });

// 1. Three KPI types
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'KPI uch')}>5-bo‘lim · KPI turlari</div>
${H('KPI — <span class="grad">uch turga</span> bo‘linadi', 'KPI uch', 0)}
<div class="g3">
 ${[['Natija', 'pul yoki bitim', ['Tushum', 'Bitim soni', 'Konversiya'], 'var(--green)', 'Natija —', '💰'], ['Harakat', 'xodim nima qildi', ['Qo‘ng‘iroqlar', 'Uchrashuvlar', 'Takliflar'], 'var(--blue)', 'Harakat —', '📞'], ['Sifat', 'ish qanchalik toza', ['CRM tozaligi', 'Qayta aloqa', 'Javob tezligi'], 'var(--violet)', 'Sifat —', '✨']].map((c) => `
 <div class="card" ${A('pop', c[4], 0, { sfx: 'pop' })} ${E('lift@' + c[4] + '+0.4')} style="min-height:440px;border-top:7px solid ${c[3]}">
  <h3 style="font-size:54px;color:${c[3]}">${c[0]}</h3><p style="font-size:30px">${c[1]}</p>
  <div style="margin-top:26px">${c[2].map((x, k) => `<span class="chip" ${A('up', c[4], 0.6 + k * 0.35)}>${x}</span>`).join('')}</div></div>`).join('')}
</div>` });

// 2. Weights rule
add({ tr: 'zoom', html: `
<div class="kick" ${A('fade', 'Asosiy qoida')}>Asosiy qoida</div>
${H('Tushum + konversiya = <span class="teal">60%</span>', 'Asosiy qoida', 0)}
<div style="position:relative;margin-top:90px">
 <div style="display:flex;height:160px;border-radius:24px;overflow:hidden;font-weight:900;font-size:34px">
  <div ${A('wx', 'tushum va konversiya', 0, { w: 40, sfx: 'pop' })} style="width:0;background:linear-gradient(180deg,#5ff3d8,var(--teal));color:#05201c;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap">Tushum 40%</div>
  <div ${A('wx', 'tushum va konversiya', 0.5, { w: 20 })} style="width:0;background:#7ef0dc;color:#05201c;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap">Konversiya 20%</div>
  <div ${A('wx', 'harakat', 0, { w: 20, sfx: 'pop' })} style="width:0;background:linear-gradient(180deg,#8cc4ff,var(--blue));color:#071a33;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap">Harakat 20%</div>
  <div ${A('wx', 'sifat KPI', 0, { w: 20, sfx: 'pop' })} style="width:0;background:linear-gradient(180deg,#cdb6ff,var(--violet));color:#160b33;display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap">Sifat 20%</div>
 </div>
 <div ${A('fade', 'oltmish foiz')} style="position:absolute;left:0;width:60%;top:-62px;text-align:center;font-size:32px;font-weight:850" class="teal">Asosiy — 60%</div>
 <div ${A('sx', 'oltmish foiz')} style="position:absolute;left:0;width:59.5%;top:-16px;border-top:5px solid var(--teal);transform:scaleX(0);transform-origin:left"></div>
 <div ${A('fade', 'Qolgan qirq')} style="position:absolute;left:60%;width:40%;top:-62px;text-align:center;font-size:32px;font-weight:850" class="blue">Qolgan — 40%</div>
 <div ${A('sx', 'Qolgan qirq')} style="position:absolute;left:60.5%;width:39.5%;top:-16px;border-top:5px solid var(--blue);transform:scaleX(0);transform-origin:left"></div>
</div>
<div class="card" ${A('up', 'Jami to‘rt', 0, { sfx: 'ding' })} style="margin-top:50px;align-self:center;font-size:36px;font-weight:850">Jami <span class="green">4–5 ta KPI</span> — undan ko‘p emas</div>` });

// 3. Good KPI conditions
add({ tr: 'wipe', html: `
<div class="kick" ${A('fade', 'Yaxshi KPI')}>Yaxshi KPI</div>
${H('Yaxshi KPIning <span class="green">4 sharti</span>', 'Yaxshi KPI', 0)}
<div class="g4">
 ${[['Ta’sir qila oladi', 'Raqam xodimning o‘z ishiga bog‘liq', 'ta’sir qila'], ['Ko‘rinadi', 'CRM yoki hisobotda — so‘zda emas', 'Raqam CRM'], ['Oyda o‘lchanadi', 'Har oy aniq raqam', 'Har oy'], ['Bitta ma’no', 'Hamma bir xil tushunadi', 'bir xil tushunadi']].map((c, i) => `
 <div class="card" ${A('up', c[2], 0, { sfx: 'pop' })} style="min-height:330px">
  <div class="ok" style="width:72px;height:72px;font-size:38px" ${A('pop', c[2], 0.4)}>✓</div>
  <h3 style="margin-top:24px">${c[0]}</h3><p>${c[1]}</p></div>`).join('')}
</div>` });

// 4. Ready-made sets
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'Vaziyatga')}>Tayyor to‘plamlar</div>
<div class="col" style="gap:16px">
 ${[['📞 Call-markaz · kiruvchi', ['Javob berish tezligi', 'Qayta aloqa', 'CRM tozaligi'], 'Kiruvchi'], ['📲 Operator · chiquvchi', ['Haqiqiy gaplashuvlar soni', 'Qayta aloqa', 'CRM tozaligi'], 'Bazaga'], ['🏥 Klinika, do‘kon', ['O‘rtacha bitim summasi', 'Qayta aloqa', 'CRM tozaligi'], 'Klinika'], ['💎 Qimmat, uzoq sotuv', ['Uchrashuvlar soni', 'Takliflar soni', 'Qayta aloqa'], 'Qimmat']].map((r) => `
 <div class="card" ${A('left', r[2], 0, { sfx: 'whoosh' })} style="display:flex;align-items:center;gap:26px;padding:22px 30px">
  <div style="width:460px;font-size:32px;font-weight:850">${r[0]}</div>
  <div><span class="chip k">Tushum</span><span class="chip k">Konversiya</span>${r[1].map((x, k) => `<span class="chip" ${k ? '' : E('pulse@' + r[2] + '+1.2')}>${x}</span>`).join('')}</div></div>`).join('')}
</div>` });

// 5. Target
add({ tr: 'zoom', html: `
<div class="kick" ${A('fade', 'Maqsad raqamini')}>Maqsad raqami</div>
<div class="g2" style="grid-template-columns:1.15fr 1fr;gap:34px">
 <div class="card" ${A('up', 'Ma’lumot bo‘lsa')}>
  <h3>3 oy o‘rtachasi <span class="amber">× 1,1</span></h3>
  <div class="chart" style="height:260px;gap:24px;margin:66px 10px 60px">
   ${BAR(70, 'rgba(90,168,255,.6)', 'uch oyning', 0, '52', '1-oy')}${BAR(80, 'rgba(90,168,255,.6)', 'uch oyning', 0.2, '60', '2-oy')}${BAR(75, 'rgba(90,168,255,.6)', 'uch oyning', 0.4, '56', '3-oy')}${BAR(82.5, 'var(--green)', 'o‘n foiz', 0, '62', 'Maqsad', A('fade', 'o‘n foiz', 0, { sfx: 'pop' }))}
  </div>
  <div style="font-size:30px" ${A('fade', 'o‘n foiz')}>56 × 1,1 ≈ <b class="green">62 mln</b> · +10% o‘sish</div>
 </div>
 <div class="col">
  ${card(`<h3 class="amber">Ma’lumot yo‘qmi?</h3><p>Eng yaxshi emas — <b>o‘rtacha xodim</b> raqami</p>`, A('right', 'Ma’lumot yo‘q'))}
  ${card(`<div style="display:flex;gap:20px;align-items:center">${AV('Rahbar', 90, '@start:0.6')}<div style="font-size:40px">🤝</div>${AV('Bobur', 90, '@start:0.3;birga kelishing:0.9')}</div><p style="margin-top:12px">Maqsadni xodim bilan <b class="green">birga kelishing</b></p>`, A('right', 'birga kelishing'))}
 </div>
</div>` });

// 6. Data sources
add({ tr: 'wipe', html: `
<div class="kick" ${A('fade', 'Raqamlar qayerdan')}>Raqamlar qayerdan?</div>
<div class="g2" style="gap:34px">
 ${card(`<div class="badge" style="background:var(--blue);color:#071a33">CRM bor</div><h3 style="margin-top:20px;font-size:42px">CRM hisoboti</h3><p>Oy oxirida raqamlar avtomatik</p>`, A('left', 'CRM bo‘lsa', 0, { sfx: 'pop' }), 'min-height:300px')}
 ${card(`<div class="badge" style="background:var(--amber);color:#2a1c00">CRM yo‘q</div><h3 style="margin-top:20px;font-size:42px">Kunlik hisobot</h3><p>Har kuni kechqurun — <b>${C(5, 'besh daqiqada')} daqiqa</b></p>`, A('right', 'CRM bo‘lmasa', 0, { sfx: 'pop' }), 'min-height:300px')}
</div>
<div class="card" ${A('up', 'Tushumni esa', 0, { sfx: 'ding' })} ${E('pulse@kassa yoki bank+0.4')} style="margin-top:30px;display:flex;gap:20px;align-items:center;font-size:34px;border-color:var(--green)"><div class="ok">✓</div>Tushum — doim <b class="green">kassa yoki bank</b> bilan solishtiriladi</div>` });

// 7. Six steps
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'oylik hisob')}>Oylik hisob</div>
${H('Har oy — <span class="grad">6 qadam</span>', 'Olti qadam', 0)}
<div class="g3" style="gap:20px">
 ${[['Raqamlarni oling', 'CRM yoki hisobot', 'Bir: raqam'], ['Bajarilish %', 'haqiqiy ÷ maqsad, ≤ 100', 'Ikki: har'], ['Eshik qoidasi', '< 50% → ball 0', 'Uch: eshik'], ['KPI balli', 'Σ bajarilish × vazn', 'To‘rt: bajar'], ['Formulaga qo‘ying', '2, 3 yoki 4-variant', 'Besh: formula'], ['Xodimga yuboring', 'hisobi bilan', 'Olti: xodim']].map((c, i) => `
 <div class="card" ${A('pop', c[2], 0, { sfx: 'pop' })} style="display:flex;gap:20px;align-items:center;padding:26px">
  <div class="circ" style="background:var(--teal);color:#05201c">${i + 1}</div>
  <div><h3 style="font-size:31px;margin:0">${c[0]}</h3><p style="font-size:23px">${c[1]}</p></div></div>`).join('')}
</div>` });

// 8. Inverse KPI
add({ tr: 'zoom', cam: [['oltmish ikki', 1.08, 0, -40]], html: `
<div class="kick amber" ${A('fade', 'nozik joy')}>Nozik joy</div>
${H('Teskari KPI: <span class="amber">kam — yaxshi</span>', 'teskari KPI', 0)}
<div class="row" style="gap:40px;align-items:stretch">
 ${card(`<div class="mu" style="font-size:24px">Oddiy KPI</div><div style="font-size:46px;font-weight:850;margin-top:10px">haqiqiy ÷ maqsad</div>`, A('left', 'Bunda', -1), 'flex:1;opacity:.6')}
 ${card(`<div class="mu" style="font-size:24px">Teskari KPI · javob tezligi</div><div style="font-size:46px;font-weight:850;margin-top:10px" class="amber">maqsad ÷ haqiqiy</div>`, A('right', 'Bunda', 0, { sfx: 'swish' }), 'flex:1;border-color:var(--amber)')}
</div>
<div class="card" ${A('up', 'Maqsad besh')} style="margin-top:34px;display:flex;align-items:center;gap:40px;padding:30px 40px">
 <div style="font-size:40px">⏱ Maqsad <b>5 daq</b> · Javob <b class="red">8 daq</b></div>
 <div class="eq" style="margin-left:auto" ${A('pop', 'Beshni', 0, { sfx: 'pop' })}>5 ÷ 8 = <span class="amber">${C(62.5, 'oltmish ikki', { dec: 1, suf: '%' })}</span></div>
</div>` });

// 9-10. Clinic example
const CL = [['Tushum', '40%', '60 mln', '48 mln', '80%', 32, 'ball o‘ttiz ikki'], ['Konversiya', '20%', '25%', '22%', '88%', 17.6, 'ball o‘n yetti'], ['Uchrashuvlar', '20%', '30', '22', '73%', 14.7, 'ball o‘n to‘rt'], ['CRM tozaligi', '20%', '90%', '95%', '100%', 20, 'ball yigirma']];
const clinic = (keys, total) => `
<div class="row" style="gap:30px;align-items:flex-start">
 <div class="card" style="flex:1.7;padding:14px 26px">
  <table class="t"><tr><th>KPI</th><th>Vazn</th><th>Maqsad</th><th>Haqiqiy</th><th>Bajarilish</th><th>Ball</th></tr>
  ${CL.map((r, i) => { const k = keys[i]; const vis = k === null ? '' : k === '-' ? 'style="opacity:.16"' : A('left', k, 0, { sfx: 'tick' });
    return `<tr ${vis}><td><b>${r[0]}</b></td><td>${r[1]}</td><td class="mu">${r[2]}</td><td>${r[3]}</td><td><b>${r[4]}</b>${i === 3 && k && k !== '-' ? ` <span class="badge" style="background:rgba(255,194,75,.2);color:var(--amber);font-size:18px;padding:4px 10px" ${A('pop', 'yuz deb', 0, { sfx: 'pop' })}>105% → 100</span>` : ''}</td><td class="green" style="font-size:36px;font-weight:900" ${k && k !== '-' ? A('pop', r[6], 0) : ''}>${fmt(r[5], r[5] % 1 ? 1 : 0)}</td></tr>`; }).join('')}
  </table></div>
 <div class="col" style="flex:1">
  ${total ? card(`<div class="mu" style="font-size:22px">KPI balli</div><div style="font-size:66px;font-weight:900" class="amber">${C(84.3, 'KPI balli', { dec: 1, sfx: 'ding' })}</div>`, A('right', 'KPI balli')) : `<div style="display:flex;justify-content:center;padding-top:20px">${PERSON('Charos', 150, '@start:0.6', 'klinika sotuvchisi')}</div>`}
  ${total ? card(`<div class="mu" style="font-size:22px">Maosh ≈</div><div style="font-size:50px;font-weight:900" class="green">${C(4606667, 'taxminan')}</div><div class="mu" style="font-size:20px">2,5 mln + 2,5 mln × 84,3%</div>`, A('right', 'Maosh —', 0, { sfx: 'success' }), 'border-color:var(--green)') : ''}
 </div>
</div>`;
add({ tr: 'wipe', html: `
<div class="kick" ${A('fade', 'Amaliy misol')}>Amaliy misol · klinika · 2-variant</div>
${H('Klinikadagi sotuvchi', 'Amaliy misol', 0)}
${clinic(['Tushum qirq', 'Konversiya yigirma', '-', '-'], false)}` });
add({ tr: 'fade', html: `
<div class="kick">Amaliy misol · klinika · 2-variant</div>
<h2>Klinikadagi sotuvchi</h2>
${clinic([null, null, 'Uchrashuvlar', 'CRM tozaligi'], true)}` });

// 11. Month-end timeline
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'Oy oxiri')}>Oy oxiri tartibi</div>
${H('Har oy bir xil <span class="grad">jadval</span>', 'Oy oxiri', 0)}
<div style="position:relative;margin-top:30px">
 <div style="position:absolute;left:4%;right:4%;top:48px;height:6px;background:rgba(255,255,255,.1);border-radius:4px"></div>
 <div style="position:absolute;left:4%;top:48px;height:6px;width:0;background:linear-gradient(90deg,var(--teal),var(--green));border-radius:4px" ${A('wx', 'birinchi-uchinchi', 0, { w: 92, t: 9 })}></div>
 <div class="tl">
 ${[['1–3', 'Raqamlar olinadi', 'birinchi-uchinchi'], ['3–4', 'Hisoblanadi', 'Uchinchi-to‘rtinchi'], ['5 gacha', 'Hisob xodimga', 'Beshinchi'], ['+3 kun', 'E’tiroz', 'E’tiroz'], ['Doim bir sana', 'To‘lov', 'bir xil sanada']].map((c, i) => `
 <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:24px" ${A('up', c[2], 0, { sfx: 'pop' })}>
  <div class="circ" style="background:var(--teal);color:#05201c;width:100px;height:100px;font-size:42px;z-index:1">${i + 1}</div>
  <div class="card" style="width:100%;text-align:center;padding:24px 16px"><div class="teal" style="font-size:32px;font-weight:900">${c[0]}</div><h3 style="font-size:28px;margin-top:10px">${c[1]}</h3></div></div>`).join('')}
 </div>
</div>` });

// 12. New employee
add({ tr: 'zoom', html: `
<div class="kick" ${A('fade', 'Yangi xodim')}>Yangi xodim</div>
<div class="row" style="align-items:center;gap:30px;margin-bottom:30px">
 <div ${A('pop', 'Yangi xodim', 0, { sfx: 'pop' })}>${AV('Charos', 120, '@start:0.2;Oltmish birinchi:0.9')}</div>
 ${H('Unga ham <span class="red">faqat oklad</span> bermang', 'faqat oklad', 0)}
</div>
<div class="tl">
 ${[['1–30 kun', '2-variant', 'Maqsad 50–70%', 'Eshik yo‘q', 'var(--blue)', 'Birinchi o‘ttiz'], ['31–60 kun', '2-variant', 'Maqsad 80–90%', 'Eshik 30%', 'var(--teal)', 'O‘ttiz birinchidan'], ['61-kundan', 'To‘liq', 'Maqsad 100%', 'Eshik 50%', 'var(--green)', 'Oltmish birinchi']].map((c) => `
 <div class="card" ${A('up', c[5], 0, { sfx: 'pop' })} style="border-top:7px solid ${c[4]};min-height:300px">
  <div style="font-size:38px;font-weight:900;color:${c[4]}">${c[0]}</div><h3 style="margin-top:12px;font-size:32px">${c[1]}</h3><p style="font-size:28px">${c[2]}</p><div class="chip" style="margin-top:14px">${c[3]}</div>
  <div style="height:12px;border-radius:6px;background:rgba(255,255,255,.1);margin-top:18px;overflow:hidden"><div style="height:100%;width:0;background:${c[4]}" ${A('wx', c[5], 0.4, { w: c[2].includes('100') ? 100 : c[2].includes('80') ? 85 : 60 })}></div></div>
 </div>`).join('')}
</div>` });

// 13. No mid-month changes
add({ tr: 'up', html: `
<div class="kick amber" ${A('fade', 'qat’iy qoida')}>Qat’iy qoida</div>
<div class="row" style="gap:50px;align-items:center">
 <div class="card" ${A('pop', 'oy o‘rtasida', 0, { sfx: 'thud' })} ${E('shake@o‘zgarmaydi')} style="flex:1;text-align:center;border-color:var(--red)">
  <div style="font-size:120px">🚫</div><div style="font-size:40px;font-weight:850">Oy o‘rtasida — <span class="red">o‘zgarmaydi</span></div></div>
 <div class="col" style="flex:1">
  ${card(`<div style="display:flex;gap:16px;align-items:center;font-size:32px"><div class="ok">✓</div>Keyingi oyning <b>1-sanasidan</b></div>`, A('right', 'birinchi sanasidan', 0, { sfx: 'pop' }))}
  ${card(`<div style="display:flex;gap:16px;align-items:center;font-size:32px"><div class="ok">✓</div><b>Yozma</b> ravishda</div>`, A('right', 'yozma', 0, { sfx: 'pop' }))}
  ${card(`<div style="display:flex;gap:16px;align-items:center;font-size:32px"><div class="ok">✓</div>Xodim <b>imzosi</b> bilan ✍</div>`, A('right', 'imzosi', 0, { sfx: 'pop' }))}
 </div>
</div>` });

// 14. Common mistakes
add({ tr: 'wipe', html: `
<div class="kick red" ${A('fade', 'xatolar')}>Eng ko‘p xatolar</div>
${H('Bu xatolarni <span class="red">qilmang</span>', 'xatolar', 0)}
<div class="g3" style="gap:22px">
 ${[['Faqat oklad', 'faqat oklad berish'], ['Okladsiz ulush', 'Okladsiz ulush'], ['«Tushum» yozilmagan', 'Tushum nima'], ['KPI juda ko‘p', 'KPI juda'], ['Hisob og‘zaki', 'og‘zaki'], ['Maosh kechikadi', 'Va maoshni']].map((c) => `
 <div class="card" ${A('pop', c[1], 0, { sfx: 'thud' })} style="display:flex;gap:18px;align-items:center;padding:26px"><div class="x" style="width:60px;height:60px;font-size:30px">✕</div><div style="font-size:32px;font-weight:850">${c[0]}</div></div>`).join('')}
</div>` });

// 15. Approval sheet
add({ tr: 'push', html: `
<div class="kick" ${A('fade', 'tasdiq varaqasi')}>Oxirgi qadam</div>
<div class="row" style="gap:40px;align-items:flex-start">
 <div class="card" ${A('up', 'tasdiq varaqasi')} style="flex:1.2;padding:24px 34px">
  <h3>📝 Rahbar tasdiq varaqasi</h3>
  ${[['Variant', 'variant,'], ['Oklad', 'oklad,'], ['Bonus yoki ulush', 'bonus yoki ulush'], ['KPIlar va vaznlari', 'KPIlar va'], ['Eshik qoidasi', 'eshik qoidasi'], ['Tushum ta’rifi', 'tushum ta’rifi'], ['Sanalar', 'sanalar']].map(([f, k]) => `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--line);font-size:28px"><span>${f}</span><span class="green" style="font-weight:900;font-size:30px" ${A('pop', k, 0, { sfx: 'tick' })}>✓</span></div>`).join('')}
 </div>
 <div class="col" style="flex:1">
  ${card(`<div style="display:flex;gap:20px;align-items:center">${AV('Bobur', 90, '@start:0.6')}<div style="font-size:30px">✍ Xodim imzolaydi.<br><b>Nusxa ikkalasida.</b></div></div>`, A('right', 'Xodim imzolaydi', 0, { sfx: 'pop' }))}
  ${card(`<h3 class="amber">Eslatma</h3><p>Summalar <b>soliqdan oldin</b>. Shartnomadan oldin buxgalter yoki yurist bilan tekshiring.</p>`, A('right', 'Summalar'), 'border-color:var(--amber)')}
 </div>
</div>` });

// 16-17. Quiz
add({ tr: 'wipe', html: `
<div class="kick amber" ${A('fade', '@start')}>Oxirgi savol</div>
<div class="row" style="align-items:center;gap:50px">
 <div class="card quiz" ${A('blur', '@start')} style="flex:1;padding:44px"><div style="font-size:50px;font-weight:850;line-height:1.35">⏱ Javob tezligi: maqsad <b>4 daq</b>.<br>Xodim <b class="red">6 daqiqada</b> javob berdi.<br>Bajarilish — <span class="amber">necha foiz?</span></div></div>
 <div ${A('cd', '@end', 0, { t: 5 })} style="opacity:0;position:relative;width:200px;height:200px;flex:none">
  <svg width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="14"/><circle class="fg" cx="100" cy="100" r="70" fill="none" stroke="var(--amber)" stroke-width="14" stroke-linecap="round" transform="rotate(-90 100 100)"/></svg>
  <div class="n" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:84px;font-weight:900">5</div></div>
</div>
<div ${A('fade', '@end', 0.2)} class="mu" style="margin-top:30px;font-size:28px">⏸ Pauza qiling yoki 5 soniya o‘ylang</div>` });
add({ tr: 'zoom', html: `
<div class="kick green" ${A('fade', '@start')}>Javob</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:30px;position:relative">
 <div style="font-size:40px" ${A('up', 'teskari KPI')}>Teskari KPI → <span class="amber">maqsad ÷ haqiqiy</span></div>
 <div class="big" ${A('pop', 'To‘rtni', 0, { sfx: 'success' })}>4 ÷ 6 ≈ <span class="green">${C(66, 'oltmish olti', { suf: '%' })}</span></div>
 ${BURST('oltmish olti+0.3')}
 <div class="card" ${A('up', 'Ellikdan yuqori')} style="font-size:32px;display:flex;gap:16px;align-items:center"><div class="ok">✓</div>50% dan yuqori — <b class="green">eshikdan o‘tdi</b></div>
</div>` });

// 18. Summary
add({ tr: 'up', html: `
<div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:30px;margin:auto 0">
 <div class="kick" ${A('fade', 'Xulosa')}>Xulosa</div>
 <div class="row" style="gap:30px">
  ${[['Oklad', 'xavfsizlik', 'var(--teal)', 'oklad —'], ['Natija', 'rag‘bat', 'var(--amber)', 'natijaga'], ['KPI', 'tartib', 'var(--violet)', 'KPI —']].map((c) => card(`<div style="font-size:64px;font-weight:900;color:${c[2]}">${c[0]}</div><div style="font-size:32px">${c[1]}</div>`, A('pop', c[3], 0, { sfx: 'pop' }), 'min-width:330px')).join('')}
 </div>
 <div style="font-size:34px" ${A('up', 'Ikkinchi variant')}><b class="blue">2-variant</b> bilan boshlang → <b class="green">3 oydan keyin</b> rivojlantiring</div>
 <div class="chip k" style="font-size:28px" ${A('pop', 'Excel')}>📊 Excel hisoblagich hisobni o‘zi bajaradi</div>
 <div class="big grad" ${A('zoom', 'Omad', 0, { sfx: 'success' })}>Omad!</div>
 <div class="row" style="gap:40px">${['Aziz', 'Bobur', 'Charos', 'Dilnoza'].map((n, i) => `<div ${A('pop', 'Omad', 0.2 + i * 0.1)}>${AV(n, 100, '@start:0.9')}</div>`).join('')}</div>
</div>` });

window.PART = { label: '3-qism · KPI va hisob', scenes: sc };
