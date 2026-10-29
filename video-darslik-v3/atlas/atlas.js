// «Atlas Naqsh» uslubidagi to‘liq videodarslik. Har sahna `n` ta diktor paragrafini qamraydi (P1–P106).
const sc = [];
const add = (n, o) => { o.n = n; sc.push(o); };
const card = (inner, ex = '', st = '', cls = 'card') => `<div class="${cls}" ${ex} style="${st}">${inner}</div>`;
const glass = (inner, ex = '', st = '') => card(inner, ex, st, 'glass');
const COL = { oklad: '#1FA3A3', bonus: '#3E7CC4', ulush: '#D4A437', tushum: '#5FAF6B', xato: '#C8463D', sifat: '#B565A7', gold: '#D4A437' };
const TAG = { Aziz: 'A', Bobur: 'B', Charos: 'C', Dilnoza: 'D', Rahbar: 'R' };

// 8 nurli girix yulduzi + halqalar, oltin chiziqlar bilan chiziladi
const rosette = (at, size = 260, st = '', d = 0) => {
  const c = 100, r = 86, pts = Array.from({ length: 8 }, (_, k) => [c + r * Math.cos(k * Math.PI / 4 - Math.PI / 2), c + r * Math.sin(k * Math.PI / 4 - Math.PI / 2)]);
  const star = Array.from({ length: 8 }, (_, k) => pts[(k * 3) % 8]).map((p, k) => (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ') + 'Z';
  const sq = (rot) => { const q = Array.from({ length: 4 }, (_, k) => [c + 60 * Math.cos(k * Math.PI / 2 + rot), c + 60 * Math.sin(k * Math.PI / 2 + rot)]); return q.map((p, k) => (k ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ') + 'Z'; };
  return `<svg width="${size}" height="${size}" viewBox="0 0 200 200" style="${st}">
   <circle cx="100" cy="100" r="96" fill="none" stroke="#D4A437" stroke-width="1.2" ${A('draw', at, d, { t: 1.6 })}/>
   <path d="${star}" fill="none" stroke="#D4A437" stroke-width="1.6" ${A('draw', at, d + 0.2, { t: 1.8, sfx: 'ding' })}/>
   <path d="${sq(Math.PI / 4)}" fill="none" stroke="#F3D27A" stroke-width="1" ${A('draw', at, d + 0.5, { t: 1.4 })}/>
   <path d="${sq(0)}" fill="none" stroke="#F3D27A" stroke-width="1" ${A('draw', at, d + 0.6, { t: 1.4 })}/>
   <circle cx="100" cy="100" r="22" fill="none" stroke="#1FA3A3" stroke-width="1.6" ${A('draw', at, d + 0.9, { t: 1 })}/>
  </svg>`;
};
const stamp = (text, color, at, d = 0, st = '') => `<div class="stamp" style="color:${color};${st}" ${A('pop', at, d, { sfx: 'thud' })}>${text}</div>`;
const niche = (name, size = 130, mood = '@start:0.4', sub = '', ex = '', st = '') =>
  `<div class="niche" ${ex} style="${st}">${AV(name, size, mood)}<div style="display:flex;gap:8px;align-items:center"><span class="nm">${name}</span><span class="tag">${TAG[name]}</span></div>${sub ? `<div class="sub">${sub}</div>` : ''}</div>`;
// Maosh minorasi: [yorliq, balandlik %, rang, at, d]
const tower = (levels, w = 240, h = 440) => `<div class="tower" style="width:${w}px;height:${h}px">${levels.map(([l, hp, c, at, d]) =>
  `<div class="lv" style="height:0;background:${c}" ${at ? A('hy', at, d || 0, { h: hp, sfx: 'pop' }) : ''} ${at ? '' : ''}>${l}</div>`).join('')}</div>`;
const towerStatic = (levels, w = 240, h = 440) => `<div class="tower" style="width:${w}px;height:${h}px">${levels.map(([l, hp, c]) => `<div class="lv" style="height:${hp}%;background:${c}">${l}</div>`).join('')}</div>`;
// Eshik: progress + 50% dagi ravoqli darvoza; closeAt bo‘lsa darvoza yopiladi
const gate = (pct, color, atFill, closeAt, lbl = 'eshik 50%') => `<div class="gateBox">
  <div class="fill" style="background:${color}" ${A('wx', atFill, 0, { w: pct, t: 1.2 })}></div>
  <div class="arc"></div><div class="lbl">${lbl}</div>
  ${closeAt ? `<div class="door" style="left:calc(50% - 36px);transform-origin:left" ${A('sx', closeAt, 0, { t: 0.5, sfx: 'thud' })}></div><div class="door" style="left:calc(50% + 2px);transform-origin:right" ${A('sx', closeAt, 0, { t: 0.5 })}></div>` : ''}
 </div>`;
const LEX = ['KPI', 'CRM', 'Lid', 'Bitim', 'Tushum', 'Reja', 'Oklad', 'Bonus', 'Bonus fondi', 'Ulush', 'Pog‘onali ulush', 'Konversiya', 'Qayta aloqa', 'CRM tozaligi', 'Bajarilish %', 'Vazn', 'KPI balli', 'Eshik qoidasi', 'Maosh / tushum', 'Bruto'];
// lug‘at ustuni: done — oldin yoritilganlar soni; now — [[indeks, kalit so‘z]]
const lex = (done, now = []) => glass(`<div class="kick" style="margin:0 0 10px;font-size:18px">Lug‘at</div><div class="lex">${LEX.map((t, i) => {
  const cur = now.find((x) => x[0] === i);
  const lit = i < done;
  return `<div><span style="color:${lit ? '#D4A437' : 'rgba(212,164,55,.3)'}" ${cur ? A('pop', cur[1], 0, { t: 0.4 }) : ''}>◆</span><b style="color:${lit || cur ? '#FFF7E6' : 'rgba(255,247,230,.45)'}">${t}</b></div>`;
}).join('')}</div>`, '', 'width:300px;flex:none;padding:18px 22px');
const lexScene = (done, now, inner) => `<div class="row" style="gap:40px;align-items:stretch;flex:1;margin:auto 0">
 <div style="flex:1;display:flex;flex-direction:column;justify-content:center">${inner}</div>${lex(done, now)}</div>`;

// =============== 1-bob. Kirish ===============
add(1, { ch: 'Kirish', tr: 'fade', html: `
<div style="display:flex;align-items:center;gap:70px;margin:auto 0">
 <div style="position:relative;flex:none">${rosette('@in', 440)}<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center" ${A('pop', 'hurmatli rahbarlar', 0, { sfx: 'pop' })}>${AV('Rahbar', 170, '@start:0.3;xush kelibsiz:0.9')}</div></div>
 <div style="flex:1">
  <div class="kick" ${A('fade', 'akademiyasining')}>Korxona ichki akademiyasi · Sotuv moduli</div>
  <div class="big" ${A('split', 'mavzusi')}>Maosh tizimini <span class="gold">tanlash va hisoblash</span></div>
  <div class="row" style="margin-top:30px;gap:12px"><span class="chip" ${A('up', 'rahbarlar')}>Rahbarlar uchun</span><span class="chip" ${A('up', 'inson resurslari')}>HR uchun</span></div>
 </div>
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'uchta eng muhim')}>Bu dars nima beradi</div>
${H('Uchta <span class="gold">vazifa</span>', 'uchta eng muhim')}
<div class="g3" style="gap:40px">
 ${[['1', 'Tanlash', 'Korxonangizga mos tizimni xatosiz tanlash', 'Birinchisi'], ['2', '1 daqiqada tushuntirish', 'Xodimga tizimni sodda yetkazish', 'Ikkinchisi'], ['3', '10 daqiqada hisoblash', 'Oy oxirida aniq maosh', 'uchinchisi']].map((c) => card(`
  <div class="circ" style="margin:0 auto 16px">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p>`, A('up', c[3], 0, { sfx: 'pop' }) + ' ' + E('lift@' + c[3] + '+0.6'), 'text-align:center;min-height:330px', 'card arch')).join('')}
</div>` });

add(1, { tr: 'curtain', html: `
<div style="display:flex;align-items:center;justify-content:center;gap:90px;margin:auto 0">
 <div style="text-align:center" ${O('tashvishga')}><div class="big" ${A('pop', 'Key-Pi-Ay', 0, { sfx: 'pop' })}>KPI?</div><div class="big" ${A('pop', 'Si-Ar-Em', 0, { sfx: 'pop' })}>CRM?</div></div>
 <div style="position:relative" ${A('blur', 'tashvishga')}>${rosette('tashvishga', 330)}<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-family:'Cormorant Garamond';font-size:64px;font-weight:700" class="gold">Lug‘at</div><div class="mu" style="font-size:22px">oddiy tilda</div></div></div>
 <div class="glass" ${A('up', 'yuz foiz')} style="font-size:34px;font-weight:800;display:flex;gap:14px;align-items:center"><div class="ok">✓</div>100% tushunarli</div>
</div>` });

add(2, { ch: 'Ikki temir qoida', tr: 'arch', cam: [['eng katta xavf', 1.06, 0, -10]], html: `
<div class="kick" ${A('fade', 'ikkita temir')}>Ikki temir qoida</div>
${H('1-qoida: <span style="color:#E86F64">faqat oklad</span> — yo‘q', 'Birinchi qoida')}
<div class="row" style="gap:50px;align-items:center">
 ${card(`<div style="display:flex;gap:18px;align-items:center"><div class="x" style="width:70px;height:70px;font-size:34px">✕</div><h3 style="margin:0;font-size:52px">Faqat oklad</h3></div>
  <div style="margin-top:22px"><span class="chip" ${A('pop', 'Yangi xodimga ham')}>Yangi xodimga ham</span><span class="chip" ${A('pop', 'tajribali xodimga ham')}>Tajribali xodimga ham</span></div>
  <p style="margin-top:20px;font-size:30px" ${A('fade', 'eng katta xavf')}><b class="xato">Biznes uchun eng katta xavf</b></p>`, A('blur', 'Birinchi qoida', 0.4), 'flex:1')}
 <div class="row" style="gap:24px">${niche('Aziz', 120, '@start:0.6', '4 mln')}${niche('Dilnoza', 120, '@start:0.3;eng katta xavf:-0.8', '4 mln')}</div>
</div>
<div style="position:absolute;right:170px;top:170px">${stamp('Tavsiya<br>etilmaydi', COL.xato, 'tavsiya etilmaydi')}</div>` });

add(1, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Ikkinchi qoida')}>Ikki temir qoida</div>
${H('2-qoida: <span style="color:#E86F64">okladsiz foiz</span> — yo‘q', 'Ikkinchi qoida')}
<div class="row" style="gap:70px;align-items:flex-end">
 <div class="col" style="flex:1;gap:30px">
  ${glass(`<span style="font-size:40px;font-weight:800;position:relative">Maosh = faqat foiz<i style="position:absolute;left:-6px;right:-6px;top:52%;height:4px;background:#C8463D;transform:scaleX(0);transform-origin:left" ${A('sx', 'quruq foizning', 0, { sfx: 'swish' })}></i></span>`, A('up', 'faqat tushumdan'), 'align-self:flex-start')}
  ${card(`<span class="eq" style="font-size:54px"><span class="oklad">Aniq oklad</span><span class="op">+</span><span class="ulush">bonus / ulush</span></span>`, A('blur', 'uning ustiga'), 'align-self:flex-start')}
 </div>
 ${tower([['OKLAD', 50, COL.oklad, 'bazaviy oklad'], ['BONUS', 22, COL.bonus, 'bonus va ulush'], ['ULUSH', 22, COL.ulush, 'uning ustiga']], 250, 470)}
</div>` });

// =============== 2-bob. Lug‘at ===============
add(1, { ch: 'Atamalar lug‘ati', tr: 'curtain', html: lexScene(0, [], `
 <div class="kick" ${A('fade', '@in')}>2-bob</div>
 <div class="big" ${A('split', 'asosiy tushunchalar')}>Atamalar <span class="gold">lug‘ati</span></div>
 <div class="mu" style="font-size:30px;margin-top:20px" ${A('fade', 'tanishib')}>20 ta tushuncha — eng oddiy tilda</div>`) });

add(1, { tr: 'fade', html: lexScene(0, [[0, 'Key-Pi-Ay']], `
 ${H('<span class="gold">KPI</span> — aniq raqam', 'Key-Pi-Ay')}
 <div class="row" style="gap:30px;align-items:stretch">
  ${glass(`<span style="font-size:36px;font-style:italic;position:relative">«Yaxshi ishla»<i style="position:absolute;left:-6px;right:-6px;top:52%;height:4px;background:#C8463D;transform:scaleX(0);transform-origin:left" ${A('sx', 'quruq gap', 0, { sfx: 'swish' })}></i></span><div class="mu" style="font-size:22px;margin-top:10px">bu — KPI emas</div>`, A('up', 'yaxshi ishla'), 'flex:1')}
  ${card(`<div class="mu" style="font-size:22px">Oyiga sotuv</div><div style="font-size:54px;font-weight:800" class="tushum">${C(60000000, 'oltmish million')}</div><div class="mu" style="font-size:22px;margin-top:14px">Kuniga qo‘ng‘iroq</div><div style="font-size:54px;font-weight:800" class="oklad">${C(30, 'o\'ttizta')}</div>`, A('up', 'Masalan'), 'flex:1.3')}
 </div>`) });

add(1, { tr: 'fade', html: lexScene(1, [[1, 'Si-Ar-Em —']], `
 ${H('<span class="gold">CRM</span> — elektron mijozlar daftari', 'Si-Ar-Em —')}
 <div class="row" style="gap:30px;align-items:stretch">
  ${card(`<table class="t" style="font-size:26px">${[['Kim qo‘ng‘iroq qildi', 'Kim qo\'ng\'iroq'], ['Nima gaplashildi', 'nima gaplashildi'], ['Kim sotib oldi', 'kim sotib oldi'], ['Qayta qo‘ng‘iroq: ertaga 10:00', 'kimga qachon']].map(([t, k]) => `<tr ${A('left', k, 0, { sfx: 'tick' })}><td>${t}</td><td class="tushum" style="text-align:right;font-weight:800">✓</td></tr>`).join('')}</table>`, A('up', 'kompyuterdagi'), 'flex:1.4')}
  <div class="col" style="flex:1">
   <div ${A('up', 'Amo-Si-Ar-Em')}><span class="chip">amoCRM</span><span class="chip">Bitrix24</span></div>
   ${glass(`<p><b>CRM bo‘lmasa:</b> kunlik hisobot daftari yoki Excel</p>`, A('up', 'bo\'lmasa'))}
  </div>
 </div>`) });

add(3, { tr: 'arch', cam: [['Masalan, o\'n million', 1.05, 0, -40]], html: lexScene(2, [[2, 'Lid —'], [3, 'Bitim —'], [4, 'Tushum —']], `
 <div class="row" style="gap:20px;align-items:center;justify-content:center;margin-bottom:40px">
  ${[['Lid', 'murojaat qildi, hali olmadi', COL.sifat, 'Lid —'], ['Bitim', 'rozi bo‘ldi va to‘ladi', COL.bonus, 'Bitim —'], ['Tushum', 'kassaga haqiqatan tushgan pul', COL.tushum, 'Tushum —']].map((c, i) => `
   ${i ? `<div style="font-size:44px;color:#D4A437" ${A('fade', c[3], -0.2)}>→</div>` : ''}
   ${card(`<h3 style="color:${c[2]}">${c[0]}</h3><p style="font-size:22px">${c[1]}</p>`, A('up', c[3], 0, { sfx: 'pop' }), 'width:300px;text-align:center', 'card arch')}`).join('')}
 </div>
 ${card(`<div style="display:flex;justify-content:space-between;font-size:26px;margin-bottom:12px"><span>Shartnoma: <b>10 mln</b></span><span class="mu" ${A('fade', 'Demak')}>qolgan 6 mln — <b class="xato">hali tushum emas</b></span></div>
  <div style="height:60px;border:1.5px solid #D4A437;position:relative;background:repeating-linear-gradient(45deg,rgba(30,27,75,.05) 0 12px,rgba(30,27,75,.1) 12px 24px)">
   <div style="position:absolute;left:0;top:0;bottom:0;width:0;background:#5FAF6B;display:flex;align-items:center;padding-left:18px;font-weight:800;font-size:26px;color:#fff;white-space:nowrap" ${A('wx', 'to\'rt million so\'m to\'ladi', 0, { w: 40, t: 1.2, sfx: 'whoosh' })}>4 mln to‘landi</div></div>
  <div style="margin-top:14px;font-size:40px;font-weight:800" ${A('pop', 'Demak', 0, { sfx: 'ding' })}>Tushum = <span class="tushum box">4 mln</span></div>`, A('up', 'o\'n million so\'mlik'))}`) });

add(3, { tr: 'fade', html: lexScene(5, [[5, 'Reja —'], [6, 'Oklad —'], [7, 'Bonus —']], `
 <div class="row" style="gap:50px;align-items:flex-end">
  <div class="col" style="flex:1;gap:20px">
   ${card(`<h3 class="ulush">Reja</h3><p>Oylik maqsad: <b>${C(60000000, 'oltmish million')}</b> so‘m</p>`, A('left', 'Reja —'))}
   ${card(`<h3 class="oklad">Oklad</h3><p>Har oy <b>kafolatlangan</b> — sotuv bo‘lsa ham, bo‘lmasa ham</p>`, A('left', 'Oklad —') + ' ' + E('lift@kafolatlangan'))}
   ${card(`<h3 class="bonus">Bonus</h3><p>KPI bajarilsa beriladigan qo‘shimcha pul</p>`, A('left', 'Bonus —'))}
  </div>
  ${tower([['OKLAD', 60, COL.oklad, 'Oklad —'], ['BONUS', 30, COL.bonus, 'Bonus —']], 240, 460)}
 </div>`) });

add(2, { tr: 'curtain', html: lexScene(8, [[8, 'Bonus fondi —'], [9, 'Ulush —']], `
 <div class="g2" style="gap:36px">
  ${card(`<h3 class="bonus">Bonus fondi</h3><p>Hamma KPI 100% bo‘lsa — eng yuqori bonus</p>
   <div style="height:200px;margin-top:20px;border:2px dashed #D4A437;position:relative"><div style="position:absolute;left:0;right:0;bottom:0;height:0;background:#3E7CC4" ${A('hy', 'yuz foiz bajargan', 0, { h: 100, t: 1.3 })}></div><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:800;color:#fff">${C(2500000, 'ikki yarim')}</div></div>`, A('up', 'Bonus fondi —'))}
  ${card(`<h3 class="ulush">Ulush</h3><p>Tushumning foiz qismi</p>
   <div style="margin-top:40px;font-size:36px;font-weight:800">10 000 000 × <span class="ulush">5%</span></div>
   <div style="font-size:64px;font-weight:800;margin-top:12px" class="tushum">= ${C(500000, 'besh yuz ming', { sfx: 'ding' })}</div>`, A('up', 'Ulush —'))}
 </div>`) });

add(1, { tr: 'arch', html: lexScene(10, [[10, 'Pog\'onali ulush']], `
 ${H('Pog‘onali ulush — <span class="gold">zinapoya</span>', 'Pog\'onali ulush')}
 <div style="display:flex;align-items:flex-end;gap:0;height:380px;margin-top:20px">
  ${[['0–50 mln', '5%', 33, 'besh foiz'], ['50–100 mln', '8%', 66, 'sakkiz foiz'], ['100 mln +', '10%', 100, 'o\'n foiz']].map(([r, f, h, k]) => `
  <div style="flex:1;height:${h}%;transform-origin:bottom;transform:scaleY(0);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding-top:16px;border:2px solid #D4A437;border-bottom:0;background:linear-gradient(180deg,rgba(212,164,55,.35),rgba(31,163,163,.25))" ${A('sy', k, 0, { sfx: 'pop', t: 0.8 })}>
   <div style="font-size:60px;font-weight:800" class="gold">${f}</div><div style="font-size:24px;font-weight:700">${r}</div></div>`).join('')}
 </div>`) });

add(1, { tr: 'fade', html: lexScene(11, [[11, 'Konversiya —']], `
 ${H('<span class="gold">Konversiya</span>', 'Konversiya —')}
 <div class="row" style="gap:50px;align-items:center">
  <div style="display:grid;grid-template-columns:repeat(10,30px);gap:10px">${Array.from({ length: 100 }, (_, k) => `<div style="width:30px;height:30px;transform:rotate(45deg) scale(.72);background:${k < 20 ? '#5FAF6B' : 'rgba(212,164,55,.25)'}" ${k < 20 ? A('pop', 'yigirmatasi', k * 0.04, { t: 0.35, sfx: k ? undefined : 'tick' }) : ''}></div>`).join('')}</div>
  <div class="col">
   ${card(`<div class="mu" style="font-size:22px">100 ta murojaatdan</div><div style="font-size:72px;font-weight:800" class="tushum">${C(20, 'yigirma foiz', { suf: '%' })}</div>`, A('up', 'yigirmatasi'), '', 'card arch')}
   ${glass(`<p>Sotuvchi mahoratini ko‘rsatadi</p>`, A('up', 'mahoratini') + ' ' + E('glow@eng muhim'))}
  </div>
 </div>`) });

add(2, { tr: 'curtain', html: lexScene(12, [[12, 'Qayta aloqa —'], [13, 'Si-Ar-Em tozaligi']], `
 <div class="g2" style="gap:36px">
  ${card(`<h3 class="sifat">Qayta aloqa</h3><p>Va’da qilingan vaqtda qo‘ng‘iroq yoki xabar</p><div style="display:flex;gap:16px;align-items:center;margin-top:30px;font-size:34px;font-weight:800">⏱ 15:00 <span class="tushum" ${A('pop', 'intizomi', 0, { sfx: 'pop' })}>✓ bajarildi</span></div>`, A('up', 'Qayta aloqa —'))}
  ${card(`<h3 class="sifat">CRM tozaligi</h3><p>To‘liq to‘ldirilgan kartochkalar ulushi</p>
   <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:20px">${Array.from({ length: 10 }, (_, k) => `<div style="height:52px;border:1.5px solid ${k < 9 ? '#5FAF6B' : '#C8463D'};display:flex;align-items:center;justify-content:center;font-weight:800;color:${k < 9 ? '#5FAF6B' : '#C8463D'}" ${A('pop', 'to\'qsontasi', k * 0.07, { t: 0.35 })}>${k < 9 ? '✓' : '✕'}</div>`).join('')}</div>
   <div style="font-size:52px;font-weight:800;margin-top:14px" class="tushum">${C(90, 'tozalik to\'qson', { suf: '%' })}</div>`, A('up', 'Si-Ar-Em tozaligi'))}
 </div>`) });

add(1, { tr: 'arch', html: lexScene(14, [[14, 'Bajarilish foizi']], `
 ${H('<span class="gold">Bajarilish</span> foizi', 'Bajarilish foizi')}
 <div class="row" style="gap:40px;align-items:center">
  ${card(`<div class="mu" style="font-size:24px">Formula</div><div class="eq" style="font-size:48px">haqiqiy <span class="op">÷</span> maqsad <span class="op">×</span> 100</div>
   <div class="eq" style="font-size:52px;margin-top:20px" ${A('up', 'qirq besh million')}>45 <span class="op">÷</span> 60 <span class="op">×</span> 100</div>`, A('blur', 'haqiqiy raqamni'), 'flex:1.3')}
  <div style="position:relative;width:300px;height:300px" ${A('fade', 'yetmish besh')}>
   <svg width="300" height="300" viewBox="0 0 300 300"><circle cx="150" cy="150" r="118" fill="none" stroke="rgba(212,164,55,.2)" stroke-width="22"/><circle cx="150" cy="150" r="118" fill="none" stroke="#D4A437" stroke-width="22" transform="rotate(-90 150 150)" style="stroke-dasharray:556 742" ${A('draw', 'yetmish besh', 0, { t: 1.3, sfx: 'ding' })}/></svg>
   <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond';font-size:84px;font-weight:700" class="gold">75%</div>
  </div>
 </div>`) });

add(2, { tr: 'fade', html: lexScene(15, [[15, 'Vazn —'], [16, 'Key-Pi-Ay balli']], `
 <div class="col" style="gap:34px">
  ${card(`<h3>Vazn</h3><p>Har KPI’ning bonusga ta’siri · jami doim 100%</p>
   <div style="display:flex;height:64px;margin-top:18px;border:1.5px solid #D4A437;font-weight:800;font-size:24px;color:#fff">${[[40, COL.oklad, 'Tushum 40'], [20, COL.bonus, 'Konv. 20'], [20, COL.sifat, 'CRM 20'], [20, COL.ulush, 'Q.aloqa 20']].map(([w, c, l], k) => `<div style="width:0;background:${c};display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;${k ? 'border-left:1.5px solid #D4A437' : ''}" ${A('wx', 'har bir Key-Pi-Ay', k * 0.35, { w, t: 0.6 })}>${l}</div>`).join('')}</div>`, A('up', 'Vazn —'))}
  ${card(`<h3>KPI balli: <span class="ulush">${C(46, 'qirq olti ball')}</span> / 100</h3>
   <div style="height:40px;margin-top:14px;border:1.5px solid #D4A437;position:relative"><div style="position:absolute;left:0;top:0;bottom:0;width:0;background:linear-gradient(90deg,#1FA3A3,#D4A437)" ${A('wx', 'qirq olti ball', 0, { w: 46, t: 1.2 })}></div></div>
   <p style="margin-top:12px" ${A('fade', 'bonus fondining')}>→ bonus fondining <b>46%</b> i beriladi</p>`, A('up', 'Key-Pi-Ay balli'))}
 </div>`) });

add(1, { tr: 'arch', cam: [['nolga', 1.1, 0, -30]], html: lexScene(17, [[17, 'Eshik qoidasi']], `
 ${H('<span class="gold">Eshik</span> qoidasi', 'Eshik qoidasi')}
 ${card(`<p style="font-size:30px">KPI bajarilishi <b>50% dan past</b> bo‘lsa — shu KPI bo‘yicha ball <b class="xato">0</b></p>
  <div style="margin:76px 10px 20px">${gate(45, '#C8463D', 'ellik foizdan past', 'nolga', 'eshik 50%')}</div>`, A('up', 'himoya mexanizmi'))}
 <div style="position:absolute;right:420px;bottom:120px">${stamp('Ball<br><span style="font-size:70px">0</span>', COL.xato, 'nolga', 0.4)}</div>`) });

add(2, { tr: 'curtain', html: lexScene(18, [[18, 'Maoshning tushumga'], [19, 'Bruto —']], `
 <div class="g2" style="gap:36px;align-items:stretch">
  ${card(`<h3>Maosh / tushum</h3><p>Maosh tushumning necha foizi</p>
   <div class="eq" style="font-size:44px;margin-top:40px">5 mln <span class="op">÷</span> 60 mln</div>
   <div style="font-size:84px;font-weight:800;margin-top:10px" class="ulush" ${E('pulse@sakkiz butun+0.9')}>${C(8.3, 'sakkiz butun', { dec: 1, suf: '%', sfx: 'ding' })}</div>`, A('up', 'Maoshning tushumga'))}
  ${card(`<h3>Bruto</h3><p>Soliq va ushlanmalardan <b>oldingi</b> summa</p><div style="margin-top:30px;display:flex;justify-content:center">${stamp('Bruto<br>soliqdan<br>oldin', COL.sifat, 'Bruto —', 0.5, 'width:190px;height:190px')}</div>`, A('up', 'Bruto —'))}
 </div>`) });

// =============== 3-bob. 4 shart ===============
const COND = [['Tushunarlilik', '«Qancha olaman?» — 1 daqiqada javob', 'bo‘lmasa: har oy tortishuv', 'Birinchi shart'], ['Ta’sir qila olish', 'Maosh o‘z mehnatiga bog‘liq', 'bo‘lmasa: harakat to‘xtaydi', 'Ikkinchi shart'], ['Korxonaga foydali', 'Ko‘p ishlasa — korxona ham ko‘p topadi', 'maosh — tushum ko‘tara oladigan chegarada', 'Uchinchi shart'], ['Hisoblash oson', 'Rahbar 10–15 daqiqada hisoblaydi', '', 'To\'rtinchi shart']];
add(5, { ch: 'Yaxshi tizimning 4 sharti', tr: 'curtain',
  cam: [['Birinchi shart', 1.1, 230, 110], ['Ikkinchi shart', 1.1, -230, 110], ['Uchinchi shart', 1.1, 230, -80], ['To\'rtinchi shart', 1.1, -230, -80], ['qiynalmay', 1.0, 0, 0]], html: `
<div class="kick" ${A('fade', 'to\'rtta shartga')}>Har biriga «ha» kerak</div>
${H('Yaxshi tizimning <span class="gold">4 sharti</span>', 'to\'rtta shartga')}
<div class="g2" style="gap:30px 36px">${COND.map((c, i) => card(`<div style="display:flex;gap:20px;align-items:flex-start"><div class="circ">${i + 1}</div><div><h3>${c[0]}</h3><p>${c[1]}</p>${c[2] ? `<p class="xato" style="font-size:22px;margin-top:8px">${c[2]}</p>` : ''}</div><div class="ok" style="margin-left:auto" ${A('pop', c[3], 1.2, { sfx: 'ding' })}>✓</div></div>`, A('up', c[3], 0, { sfx: 'pop' }), 'min-height:190px')).join('')}</div>
<div class="glass" ${A('up', 'bir-ikki oy')} style="position:absolute;right:120px;top:150px;border-color:#C8463D"><p class="xato" style="font-weight:800">Aks holda — 1–2 oyda buziladi</p></div>` });

// =============== 4-bob. 4 variant ===============
const VARS = [['1', 'Faqat oklad', [['', 100, COL.oklad]]], ['2', 'Oklad + KPI bonus', [['', 62, COL.oklad], ['', 30, COL.bonus]]], ['3', 'Oklad + ulush', [['', 50, COL.oklad], ['', 44, COL.ulush]]], ['4', 'Oklad + ulush + tartib', [['', 50, COL.oklad], ['', 30, COL.ulush], ['', 12, COL.sifat]]]];
const varGrid = (focus, extra = {}) => `<div class="g4" style="gap:30px">${VARS.map((v, i) => card(`
  <div style="font-family:'Cormorant Garamond';font-size:64px;font-weight:700;line-height:1" class="gold">${v[0]}</div><h3 style="font-size:32px;min-height:70px">${v[1]}</h3>
  <div style="display:flex;justify-content:center;margin-top:10px">${towerStatic(v[2], 130, 220)}</div>${extra[i] || ''}`,
  focus === i ? E('lift@@in') : '', `text-align:center;${focus !== null && focus !== i ? 'opacity:.35' : ''}`, 'card arch')).join('')}</div>`;
add(1, { ch: 'To‘rt variant', tr: 'arch', html: `
<div class="kick" ${A('fade', 'to\'rtta asosiy')}>4-bob</div>
${H('Maosh tizimining <span class="gold">to‘rt varianti</span>', 'to\'rtta asosiy')}
<div ${A('up', 'qisqacha')}>${varGrid(null)}</div>` });
add(1, { tr: 'fade', cam: [['Oqibatda', 1.04, 0, -20]], html: `
<div class="kick">1-variant</div><h2>Faqat oklad</h2>
<div class="row" style="gap:40px;align-items:center">
 <div style="flex:1">${varGrid(0)}</div>
</div>
<div class="row" style="gap:30px;position:absolute;left:120px;bottom:70px;align-items:flex-end">
 <div ${A('up', 'eng kuchli sotuvchi')} ${O('ketadi+0.6')}>${niche('Dilnoza', 100, '@start:-0.6', 'ketadi')}</div>
 <div ${A('up', 'sust xodimlar')}>${niche('Aziz', 100, '@start:0.7', 'qoladi')}</div>
</div>
<div style="position:absolute;left:250px;top:330px">${stamp('Tavsiya<br>etilmaydi', COL.xato, 'tavsiya etilmaydi')}</div>` });
add(1, { tr: 'fade', html: `
<div class="kick">2-variant</div><h2>Oklad + KPI bonus</h2>
${varGrid(1, { 1: `<div class="chip" style="margin-top:14px" ${A('pop', 'yuqori chegarasi', 0, { sfx: 'thud' })}>⌒ yuqori chegara bor</div>` })}
<div class="glass" ${A('up', 'barqarorlik va nazorat')} style="margin-top:30px;align-self:center"><p>Barqarorlik + nazorat · <span class="xato" ${A('fade', 'Kamchiligi')}>reja 100% dan oshsa ham — bonus oshmaydi</span></p></div>` });
add(1, { tr: 'fade', html: `
<div class="kick">3-variant</div><h2>Oklad + tushumdan ulush</h2>
${varGrid(2, { 2: `<div class="chip" style="margin-top:14px" ${A('pop', 'Ko\'p sotgan', 0, { sfx: 'pop' })}>Ko‘p sotgan — ko‘p oladi</div>` })}
<div class="glass" ${A('up', 'xavfli tomoni')} style="margin-top:30px;align-self:center;border-color:#C8463D"><p><b class="xato">Xavf:</b> CRM va qayta aloqa e’tibordan chetda qoladi</p></div>` });
add(1, { tr: 'fade', html: `
<div class="kick">4-variant</div><h2>Oklad + ulush + <span class="gold">tartib</span></h2>
${varGrid(3, { 3: `<div class="chip" style="margin-top:14px" ${A('pop', 'kamaytiriladi', 0, { sfx: 'pop' })}>CRM yomon → ulush kamayadi</div>` })}
<div style="position:absolute;right:150px;top:150px">${stamp('Barqarorlik<br>savdo<br>intizom', COL.tushum, 'bitta tizimga')}</div>` });

// =============== 5-bob. 6 savol ===============
const QS = [['Mijoz o‘zi murojaat qiladimi?', 'Birinchi savol', [['ha', '2'], ['o‘zi topsa', '3 / 4']]], ['Bitim 7 kundan tez yopiladimi?', 'Ikkinchi savol', [['tez', '2'], ['uzoq', '4 / 3']]], ['Tushum 30% dan ko‘p o‘zgaradimi?', 'Uchinchi savol', [['katta', '2 / 4'], ['kichik', '3 ham']]], ['Tushum shaxsiy mehnatmi?', 'To\'rtinchi savol', [['yakka', '3 / 4'], ['jamoa', '2']]], ['Rahbarda 10–15 daqiqa bormi?', 'Beshinchi savol', [['bor', '4'], ['yo‘q', '2 / 3']]], ['CRM / daftar to‘g‘ri yuritiladimi?', 'Oltinchi savol', [['ha', 'istalgan'], ['yo‘q', '3 + daftar']]]];
add(7, { ch: 'Qaysi variant? 6 savol', tr: 'curtain', html: `
<div class="kick" ${A('fade', 'qaysi variant mos')}>Test</div>
${H('Sizga <span class="gold">qaysi variant</span> mos?', 'qaysi variant mos')}
<div class="col" style="gap:14px">${QS.map((q, i) => `
 <div class="glass" ${A('left', q[1], 0, { sfx: 'tick' })} ${E('glow@' + q[1])} style="display:flex;align-items:center;gap:22px;padding:14px 24px">
  <div class="circ" style="width:50px;height:50px;font-size:26px">${i + 1}</div>
  <div style="flex:1;font-size:28px;font-weight:700">${q[0]}</div>
  ${q[2].map(([a, v], k) => `<div style="display:flex;align-items:center;gap:10px;min-width:250px" ${A('right', q[1], 1.2 + k * 0.9)}><span class="mu" style="font-size:21px">${a} →</span><span class="badge" style="background:${k ? 'rgba(212,164,55,.18)' : '#D4A437'};color:${k ? '#F3D27A' : '#1A1946'};border:1px solid #D4A437">${v}</span></div>`).join('')}
 </div>`).join('')}</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'Umumiy amaliy')}>Umumiy tavsiya</div>
<div style="display:flex;align-items:center;justify-content:center;gap:40px;margin-top:30px">
 ${card(`<div class="mu" style="font-size:24px">Boshlang</div><div style="font-family:'Cormorant Garamond';font-size:86px;font-weight:700" class="bonus">2-variant</div>`, A('pop', 'avval ikkinchi', 0, { sfx: 'pop' }), 'min-width:420px;text-align:center', 'card arch')}
 <div style="width:320px;position:relative"><div style="height:4px;background:linear-gradient(90deg,#D4A437,#F3D27A);width:0" ${A('wx', 'Uch oydan', 0, { w: 100, t: 1.2, sfx: 'whoosh' })}></div><div style="position:absolute;top:-56px;width:320px;text-align:center;font-size:30px;font-weight:800" class="gold" ${A('fade', 'Uch oydan')}>3 oydan keyin</div></div>
 ${card(`<div class="mu" style="font-size:24px">Natijaga qarab</div><div style="font-family:'Cormorant Garamond';font-size:86px;font-weight:700" class="tushum">3 yoki 4</div>`, A('pop', 'natijaga qarab', 0, { sfx: 'ding' }), 'min-width:420px;text-align:center', 'card arch')}
</div>` });

// =============== 6-bob. KPI tanlash ===============
add(1, { ch: 'KPI tanlash', tr: 'curtain', html: `
<div style="display:flex;align-items:center;gap:60px;margin:auto 0">
 ${rosette('@in', 320)}
 <div><div class="kick" ${A('fade', '@in')}>6-bob</div><div class="big" ${A('split', 'Ikkinchi va')}>KPI <span class="gold">tanlash</span></div>
 <div style="font-size:32px;margin-top:20px" ${A('up', 'hal qiluvchi')}>${MK('Hal qiluvchi ahamiyatga ega', 'hal qiluvchi+0.3')}</div></div>
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'uch turga')}>KPI turlari</div>
${H('KPI — <span class="gold">uch turga</span> bo‘linadi', 'uch turga')}
<div class="g3" style="gap:36px">${[['Natija', COL.tushum, ['Tushum', 'Bitimlar soni', 'Konversiya'], 'Birinchisi'], ['Harakat', COL.bonus, ['Qo‘ng‘iroqlar', 'Uchrashuvlar', 'Takliflar'], 'Ikkinchisi'], ['Sifat', COL.sifat, ['CRM tozaligi', 'Qayta aloqa', 'Javob tezligi'], 'Uchinchisi']].map((c) => card(`
 <h3 style="color:${c[1]};font-size:54px">${c[0]}</h3><div style="margin-top:20px">${c[2].map((x, k) => `<div class="chip" style="display:block;margin:10px 0" ${A('up', c[3], 0.8 + k * 0.5)}>${x}</div>`).join('')}</div>`, A('up', c[3], 0, { sfx: 'pop' }), `min-height:430px;text-align:center;border-top:6px solid ${c[1]}`, 'card arch')).join('')}</div>` });

add(1, { tr: 'fade', html: `
<div class="kick" ${A('fade', 'oltin qoida')}>Oltin qoida</div>
${H('Tushum + konversiya = <span class="gold">60%</span>', 'oltin qoida')}
<div style="position:relative;margin-top:70px">
 <div style="display:flex;height:150px;border:2px solid #D4A437;font-weight:800;font-size:30px;color:#fff">
  ${[[40, COL.oklad, 'Tushum 40%', 'tushum qirq'], [20, '#2bb8a8', 'Konversiya 20%', 'konversiya yigirma'], [20, COL.bonus, 'Uchrashuvlar 20%', 'uchrashuvlar soni'], [20, COL.sifat, 'CRM 20%', 'tozaligi yigirma']].map(([w, c, l, k], i) => `<div style="width:0;background:${c};display:flex;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;${i ? 'border-left:2px solid #D4A437' : ''}" ${A('wx', k, 0, { w, t: 0.8, sfx: 'pop' })}>${l}</div>`).join('')}
 </div>
 <div ${A('fade', 'oltmish foiz')} style="position:absolute;left:0;width:60%;top:-60px;text-align:center;font-size:30px;font-weight:800" class="gold">◆ Asosiy — 60%</div>
 <div ${A('fade', 'Qolgan qirq')} style="position:absolute;left:60%;width:40%;top:-60px;text-align:center;font-size:30px;font-weight:800" class="bonus">◆ Qolgan — 40%</div>
</div>
<div class="glass" ${A('up', 'to\'rtta yoki beshta', 0, { sfx: 'ding' })} style="margin-top:44px;align-self:center"><p style="font-size:32px;font-weight:800">Jami <span class="gold">4–5 ta KPI</span> — <span class="xato" ${A('fade', 'e\'tiborini')}>ko‘pi e’tiborni yo‘qotadi</span></p></div>` });

add(1, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Maqsad raqamini')}>Maqsad raqami</div>
<div class="row" style="gap:40px;align-items:stretch">
 ${card(`<h3>3 oy o‘rtachasi <span class="ulush">× 1,1</span></h3><div class="mu" style="font-size:20px">misol</div>
  <div class="chart" style="height:250px;gap:22px;margin:60px 10px 64px">
   ${BAR(70, '#3E7CC4', 'uch oyning', 0, '52', '1-oy')}${BAR(80, '#3E7CC4', 'uch oyning', 0.2, '60', '2-oy')}${BAR(75, '#3E7CC4', 'uch oyning', 0.4, '56', '3-oy')}${BAR(82.5, '#5FAF6B', 'o\'n foiz', 0, '62', 'Maqsad', A('fade', 'o\'n foiz', 0, { sfx: 'pop' }))}
  </div>`, A('up', 'eski bo\'lsa'), 'flex:1.2')}
 <div class="col" style="flex:1">
  ${card(`<h3 class="ulush">Ma’lumot yo‘qmi?</h3><p>Eng kuchli emas — <b>o‘rtacha xodim</b> natijasi</p>`, A('right', 'ma\'lumot yo\'q'))}
  ${card(`<div style="display:flex;gap:16px;align-items:center;justify-content:center">${AV('Rahbar', 90, '@start:0.6')}<span style="font-size:40px" class="gold">⇄</span>${AV('Bobur', 90, '@start:0.3;kelishib:0.9')}</div><p style="text-align:center;margin-top:10px">Maqsadni xodim bilan <b class="tushum">kelishing</b></p>`, A('right', 'kelishib'))}
 </div>
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'Yangi ishga')}>Yangi xodim maqsadi</div>
${H('Yumshoq boshlanish — <span class="gold">to‘liq rejagacha</span>', 'Yangi ishga')}
<div class="g3" style="gap:36px">${[['1–30 kun', '50–70%', 'eshik yo‘q', 'birinchi o\'ttiz', 60, COL.bonus], ['31–60 kun', '80–90%', 'eshik 30%', 'O\'ttiz birinchi', 85, COL.oklad], ['61-kundan', '100%', 'eshik 50%', 'Oltmish birinchi', 100, COL.tushum]].map((c) => card(`
 <div style="font-family:'Cormorant Garamond';font-size:46px;font-weight:700;color:${c[5]}">${c[0]}</div><div style="font-size:44px;font-weight:800;margin-top:6px">${c[1]}</div><div class="chip" style="margin-top:10px">${c[2]}</div>
 <div style="height:14px;border:1px solid #D4A437;margin-top:20px"><div style="height:100%;width:0;background:${c[5]}" ${A('wx', c[3], 0.4, { w: c[4] })}></div></div>`, A('up', c[3], 0, { sfx: 'pop' }), 'text-align:center;min-height:330px', 'card arch')).join('')}</div>` });

// =============== 7-bob. Raqamlar qayerdan ===============
add(2, { ch: 'Raqamlar qayerdan olinadi', tr: 'curtain', html: `
<div class="kick" ${A('fade', 'ikkita yo\'li')}>Ikki yo‘l</div>
${H('Raqamlar <span class="gold">har kuni</span> yozib boriladi', 'har kuni yozib')}
<div class="g2" style="gap:40px">
 ${card(`<div class="badge" style="background:#3E7CC4;color:#fff">1-yo‘l</div><h3 style="margin-top:16px">CRM tizimi</h3><p>Har qo‘ng‘iroq va bitim dasturga · oy oxirida tayyor hisobot</p>`, A('up', 'Birinchi yo\'l', 0, { sfx: 'pop' }), 'min-height:280px')}
 ${card(`<div class="badge" style="background:#D4A437;color:#1A1946">2-yo‘l</div><h3 style="margin-top:16px">Kunlik hisobot daftari</h3><p>CRM bo‘lmasa — har kuni kechqurun</p>`, 'style="opacity:.3"', 'min-height:280px')}
</div>` });

add(1, { tr: 'fade', html: `
<div class="kick">2-yo‘l</div>
${H('Kunlik hisobot <span class="gold">daftari</span>', 'Ikkinchi yo\'l')}
<div class="row" style="gap:36px;align-items:stretch">
 ${card(`<table class="t" style="font-size:22px"><tr>${['Sana', 'Qo‘ng‘iroq', 'Taklif', 'Bitim', 'Tushum', 'Q.aloqa'].map((h, k) => `<th ${A('fade', 'sana,', k * 0.25)}>${h}</th>`).join('')}</tr>
  <tr ${A('left', 'ustunlarini', 0, { sfx: 'tick' })}><td>12.03</td><td>34</td><td>6</td><td>2</td><td>4 mln</td><td>5 / 5</td></tr></table>
  <p style="margin-top:16px">Har kuni kechqurun — <b>${C(5, 'besh daqiqa')} daqiqa</b></p>`, A('up', 'kechqurun'), 'flex:1.3')}
 ${card(`<h3 class="sifat" style="font-size:34px">CRM tozaligi o‘rniga</h3><p style="font-size:22px">vaqtida topshirilgan kunlar</p>
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-top:14px">${Array.from({ length: 26 }, (_, k) => `<div style="height:30px;border:1px solid ${k === 9 || k === 17 ? '#C8463D' : '#5FAF6B'};background:${k === 9 || k === 17 ? 'rgba(200,70,61,.15)' : 'rgba(95,175,107,.2)'}" ${A('pop', 'yigirma olti', k * 0.05, { t: 0.3 })}></div>`).join('')}</div>
  <div style="font-size:54px;font-weight:800;margin-top:10px" class="tushum">24 / 26 = ${C(92, 'to\'qson ikki', { suf: '%', sfx: 'ding' })}</div>`, A('up', 'o\'z vaqtida'), 'flex:1')}
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick xato" ${A('fade', 'Muhim qoida')}>Muhim qoida</div>
<div class="row" style="gap:40px;align-items:center">
 <div class="col" style="flex:1;gap:26px">
  ${glass(`<span style="font-size:34px;font-style:italic;position:relative">«50 mln sotdim!»<i style="position:absolute;left:-6px;right:-6px;top:52%;height:4px;background:#C8463D;transform:scaleX(0);transform-origin:left" ${A('sx', 'og\'zaki', 0.4, { sfx: 'swish' })}></i></span><div class="mu" style="font-size:22px;margin-top:8px">og‘zaki so‘z — hisob emas</div>`, A('up', 'og\'zaki'))}
  ${card(`<div style="display:flex;gap:16px;align-items:center"><div class="ok">✓</div><p style="font-size:30px">Tushum — faqat <b>kassa yoki bank</b> ko‘chirmasi bilan</p></div>`, A('up', 'kassa yoki bank', 0, { sfx: 'ding' }))}
  ${card(`<div style="display:flex;gap:16px;align-items:center"><div class="circ" style="width:56px;height:56px;font-size:26px">3</div><p style="font-size:28px">Haftada 3 ta tasodifiy yozuv — mijozga qo‘ng‘iroq</p></div>`, A('up', 'tasodifiy uchta'))}
 </div>
 <div class="row" style="gap:24px">${niche('Rahbar', 120, '@start:0.3;halol:0.8', 'tekshiradi', A('pop', 'rahbar haftada'))}${niche('Bobur', 120, '@start:0.1;halol:0.9', 'halol yozadi', A('pop', 'halol'))}</div>
</div>` });

// =============== 8-bob. Misol ===============
const TEAM = [['Aziz', 27, 45, COL.xato], ['Bobur', 60, 100, COL.bonus], ['Charos', 90, 150, COL.oklad], ['Dilnoza', 120, 200, COL.tushum]];
add(2, { ch: 'Bitta misolda 4 variant', tr: 'curtain', html: `
<div style="display:flex;align-items:center;gap:60px;margin:auto 0">
 ${rosette('@in', 300)}
 <div style="flex:1"><div class="kick" ${A('fade', '@in')}>8-bob · Misol</div>
  <div class="big" ${A('split', 'bitta aniq misolda')}>Bitta <span class="gold">misol</span></div>
  <div style="margin-top:30px;font-size:40px;font-weight:800" ${A('up', 'tushum rejasi')}>Reja: <span class="gold">${C(60000000, 'oltmish million')}</span> so‘m</div>
  <div style="margin-top:20px"><span class="chip" ${A('pop', 'Konversiya maqsadi')}>Konversiya 20%</span><span class="chip" ${A('pop', 'tozaligi maqsadi')}>CRM tozaligi 90%</span><span class="chip" ${A('pop', 'qayta aloqa maqsadi')}>Qayta aloqa 90%</span></div>
 </div>
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'to\'rtta sotuvchi')}>To‘rt sotuvchi</div>
<div class="row" style="gap:40px;align-items:flex-end;flex:1;max-height:740px">
 ${TEAM.map(([n, v, p, c]) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:14px">
  <div style="font-size:30px;font-weight:800" ${A('fade', n + (n === 'Dilnoza' ? ' esa' : ''), 0.6)}>${v} mln · <span class="gold">${p}%</span></div>
  <div style="width:150px;height:0;background:${c};border:2px solid #D4A437;border-bottom:0;border-radius:80px 80px 2px 2px" ${A('hy', n + (n === 'Dilnoza' ? ' esa' : ''), 0.3, { h: v / 120 * 46, sfx: 'pop' })} ${n === 'Dilnoza' ? E('glow@ikki yuz foizga') : ''}></div>
  <div ${A('up', n + (n === 'Dilnoza' ? ' esa' : ''))}>${niche(n, 100, n === 'Dilnoza' ? '@start:0.5;ikki yuz foizga:0.95' : '@start:0.4', n === 'Aziz' ? 'konv. 16% · CRM 72% · q.a. 63%' : '')}</div>
 </div>`).join('')}
 <div class="hline" style="bottom:calc(23% + 220px)" ${A('fade', 'Bizda')}><span>Reja 60 mln</span></div>
</div>` });

add(1, { tr: 'fade', html: `
<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px;margin:auto 0">
 <div class="row" style="gap:30px">${TEAM.map(([n]) => niche(n, 110, '@start:0.4', '', A('pop', 'to\'rt xodim', 0, { sfx: 'pop' })))}</div>
 <div style="font-family:'Cormorant Garamond';font-size:64px;font-weight:700" ${A('up', 'qancha maosh')}>Har variantda — <span class="gold">qancha maosh?</span></div>
</div>` });

// 1-variant
add(2, { tr: 'arch', html: `
<div class="kick xato" ${A('fade', 'Birinchi variant')}>1-variant · tavsiya etilmaydi</div>
${H('Faqat oklad: hammaga <span style="color:#E86F64">4 mln</span>', 'bir xil — to\'rt million')}
<div class="row" style="gap:28px">${TEAM.map(([n, v]) => card(`
  <div style="display:flex;justify-content:center">${AV(n, 100, n === 'Dilnoza' ? '@start:0.4;adolatsizlik:-0.9' : n === 'Aziz' ? '@start:0.5;ortiqcha:0.9' : '@start:0.4')}</div>
  <div style="font-family:'Cormorant Garamond';font-size:32px;font-weight:700">${n}</div><div class="mu" style="font-size:21px">sotuv ${v} mln</div>
  <div style="font-size:42px;font-weight:800;margin:6px 0">4 mln</div>
  ${n === 'Aziz' ? `<div style="font-size:34px;font-weight:800" class="xato" ${A('pop', 'o\'n to\'rt butun', 0, { sfx: 'pop' })}>14,8%</div><div class="mu" style="font-size:17px">maosh / tushum</div>` : ''}
  ${n === 'Dilnoza' ? `<div style="font-size:34px;font-weight:800" class="ulush" ${A('pop', 'uch butun o\'ndan uch', 0, { sfx: 'pop' })}>3,3%</div><div class="mu" style="font-size:17px">maosh / tushum</div>` : ''}`,
  A('up', 'Faraz qilaylik', 0) + ' ' + (n === 'Aziz' || n === 'Dilnoza' ? E('lift@' + (n === 'Aziz' ? 'Aziz yigirma' : 'Dilnoza esa')) : ''), 'flex:1;text-align:center;min-height:400px')).join('')}</div>
<div class="glass" ${A('up', 'to\'rt yarim baravar')} style="position:absolute;right:120px;top:150px"><p style="font-size:30px;font-weight:800">Sotuv: Dilnoza = Aziz × <span class="gold">4,4</span></p></div>
<div style="position:absolute;right:560px;top:120px">${stamp('Adolat-<br>sizlik', COL.xato, 'adolatsizlik')}</div>` });

// 2-variant formula
add(2, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Ikkinchi variant')}>2-variant</div>
${H('Oklad + <span class="gold">KPI bonus</span>', 'Ikkinchi variant')}
${card(`<span class="eq" style="font-size:60px">Maosh<span class="op">=</span><span class="oklad" ${A('pop', 'teng oklad', 0, { sfx: 'pop' })} style="display:inline-block">Oklad</span><span class="op">+</span><span class="bonus" ${A('pop', 'qo\'shuv bonus', 0, { sfx: 'pop' })} style="display:inline-block">Bonus fondi</span><span class="op">×</span><span class="ulush" ${A('pop', 'ko\'paytiruv', 0, { sfx: 'pop' })} style="display:inline-block">KPI balli</span></span>`, A('blur', 'Formula'), 'text-align:center;padding:44px', 'card arch')}
<div class="row" style="margin-top:34px;gap:30px">
 ${glass(`<div class="mu" style="font-size:22px">Oklad</div><div style="font-size:50px;font-weight:800" class="oklad">${C(2500000, 'oklad ikki yarim')}</div>`, A('up', 'oklad ikki yarim'), 'flex:1')}
 ${glass(`<div class="mu" style="font-size:22px">Bonus fondi</div><div style="font-size:50px;font-weight:800" class="bonus">${C(2500000, 'bonus fondi ham')}</div>`, A('up', 'bonus fondi ham'), 'flex:1')}
 ${glass(`<div class="mu" style="font-size:22px">Hisob</div><div style="font-size:40px;font-weight:800">4 qadam · <span class="gold">Aziz</span></div>`, A('up', 'to\'rt qadamda'), 'flex:1')}
</div>` });

// Aziz KPI table
const ROWS = [['Tushum', '27 ÷ 60', 45, 'yopiq', 40, 0, 'Tushum:', 'ball — nol'], ['Konversiya', '16 ÷ 20', 80, 'o‘tdi', 20, 16, 'Konversiya:', 'o\'n olti ball'], ['CRM tozaligi', '72 ÷ 90', 80, 'o‘tdi', 20, 16, 'Si-Ar-Em tozaligi:', 'bu ham o\'n olti'], ['Qayta aloqa', '63 ÷ 90', 70, 'o‘tdi', 20, 14, 'Qayta aloqa:', 'o\'n to\'rt ball']];
add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'Birinchi qadam')}>2-variant · 1-qadam · Aziz</div>
<div class="row" style="gap:30px;align-items:flex-start;margin-top:10px">
 <div style="flex:none">${niche('Aziz', 120, '@start:0.3;ball — nol:-0.6;jami qirq olti:0.5', '27 mln sotdi')}</div>
 <div class="col" style="flex:1;gap:24px">
 ${card(`<table class="t"><tr><th>KPI</th><th>Hisob</th><th>Bajarilish</th><th>Eshik</th><th>Vazn</th><th>Ball</th></tr>
 ${ROWS.map((r) => `<tr ${A('left', r[6], 0, { sfx: 'tick' })}><td><b>${r[0]}</b></td><td class="mu">${r[1]}</td><td><b ${r[5] === 0 ? 'class="xato"' : ''}>${r[2]}%</b></td>
  <td><span class="badge" style="font-size:17px;padding:3px 10px;background:${r[5] === 0 ? 'rgba(200,70,61,.15)' : 'rgba(95,175,107,.18)'};color:${r[5] === 0 ? '#C8463D' : '#3f8a4c'}">${r[3]}</span></td><td>${r[4]}%</td>
  <td style="font-size:38px;font-weight:800" class="${r[5] === 0 ? 'xato' : 'tushum'}" ${A('pop', r[7], 0, { sfx: r[5] === 0 ? 'thud' : 'pop' })}>${r[5]}</td></tr>`).join('')}
 <tr ${A('up', 'Hamma ballarni')}><td colspan="5" style="border:0;text-align:right;font-size:30px;font-weight:800">0 + 16 + 16 + 14 =</td><td style="border:0;font-size:56px;font-weight:800" class="ulush" ${E('pulse@jami qirq olti+0.4')}>${C(46, 'jami qirq olti', { sfx: 'ding', t: 0.9 })}</td></tr></table>`, A('up', 'Birinchi qadam', 0.3))}
 <div style="padding:0 30px" ${A('up', 'qirq besh foiz')}>${gate(45, '#C8463D', 'qirq besh foiz', 'eshikdan past', 'tushum: eshik 50%')}</div>
 </div>
</div>` });

add(2, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Ikkinchi qadam')}>2-variant · 2–3-qadam</div>
<div class="row" style="gap:50px;align-items:center">
 <div class="col" style="flex:1;gap:30px">
  ${card(`<div class="mu" style="font-size:22px">2-qadam · Bonus</div><span class="eq" style="font-size:50px">2 500 000<span class="op">×</span><span class="ulush">46%</span><span class="op">=</span><span class="bonus">${C(1150000, 'bir million bir yuz ellik ming so\'m.')}</span></span>`, A('left', 'Ikkinchi qadam'))}
  ${card(`<div class="mu" style="font-size:22px">3-qadam · Maosh</div><span class="eq" style="font-size:50px"><span class="oklad">2 500 000</span><span class="op">+</span><span class="bonus">1 150 000</span><span class="op">=</span><span class="tushum box">${C(3650000, 'uch million olti yuz', { sfx: 'ding' })}</span></span>`, A('left', 'Uchinchi qadam'))}
 </div>
 <div style="display:flex;flex-direction:column;align-items:center;gap:14px">${tower([['OKLAD 2,5', 68, COL.oklad, 'Uchinchi qadam'], ['BONUS 1,15', 31, COL.bonus, 'bonus qo\'shilsa']], 230, 420)}<div ${A('pop', 'uch million olti yuz', 0.4)}>${AV('Aziz', 110, '@start:0.6')}</div></div>
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'To\'rtinchi qadam')}>2-variant · 4-qadam</div>
${H('Xodimga <span class="gold">tushuntiring</span>', 'xodimga tushuntiramiz')}
<div class="row" style="gap:40px;align-items:flex-end">
 ${niche('Rahbar', 140, '@start:0.4', '', A('pop', 'Azizga shunday'))}
 <div class="col" style="flex:1;gap:20px">
  ${glass(`<div style="display:flex;gap:16px;align-items:center"><div class="x">✕</div><p style="font-size:30px">Tushum — reja yarmiga yetmadi → <b class="xato">bonus 0</b></p></div>`, A('up', 'yarmiga yetmadingiz', 0, { sfx: 'thud' }))}
  ${glass(`<div style="display:flex;gap:16px;align-items:center"><div class="ok">✓</div><p style="font-size:30px">Konversiya, CRM, qayta aloqa — yaxshi → <b class="tushum">bonus bor</b></p></div>`, A('up', 'yaxshi ishladingiz', 0, { sfx: 'ding' }))}
 </div>
 ${niche('Aziz', 140, '@start:-0.4;yaxshi ishladingiz:0.7', '', A('pop', 'Azizga shunday', 0.3))}
</div>` });

add(1, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Xuddi shu tartibda')}>2-variant · to‘rt xodim</div>
<div class="row" style="gap:50px;align-items:flex-end">
 <div class="chart" style="height:440px;width:900px;margin-top:70px;gap:50px">
  <div class="hline" style="bottom:${5 / 6 * 100}%" ${A('fade', 'eng ko\'p mumkin')}><span>Chegara — 5 mln</span></div>
  ${BAR(3.65 / 6 * 100, COL.bonus, 'Xuddi shu', 0, '3,65', 'Aziz')}${BAR(4.95 / 6 * 100, COL.bonus, 'Bobur', 0, '4,95', 'Bobur')}${BAR(5 / 6 * 100, COL.bonus, 'Charos va', 0, '5,0', 'Charos')}${BAR(5 / 6 * 100, COL.bonus, 'Charos va', 0.3, '5,0', 'Dilnoza')}
 </div>
 <div class="col" style="flex:1">
  ${card(`<div class="mu" style="font-size:22px">Dilnoza / Aziz — sotuv</div><div style="font-size:76px;font-weight:800" class="tushum">${C(4.4, 'to\'rt yarim', { dec: 1, suf: '×' })}</div>`, A('right', 'to\'rt yarim'))}
  ${card(`<div class="mu" style="font-size:22px">Dilnoza / Aziz — maosh</div><div style="font-size:76px;font-weight:800" class="xato">${C(1.4, 'bir yarim', { dec: 1, suf: '×' })}</div>`, A('right', 'bir yarim', 0, { sfx: 'thud' }))}
 </div>
</div>` });

// 3-variant
add(1, { tr: 'arch', html: `
<div class="kick ulush" ${A('fade', 'Uchinchi variant')}>3-variant · muhim eslatma</div>
${H('Nega <span class="gold">okladsiz ulush</span> berilmaydi?', 'nima uchun')}
<div class="g2" style="gap:36px">
 ${card(`<div class="circ">1</div><h3 style="margin-top:14px">Ish haqi oldindan aniq</h3><p>Miqdori noma’lum to‘lov — noaniqlik, ya’ni <b>g‘arar</b>. Oklad aniq, ulush — ustiga.</p>`, A('up', 'Birinchidan', 0, { sfx: 'pop' }), 'min-height:300px')}
 ${card(`<div class="circ">2</div><h3 style="margin-top:14px">Past oyda ham daromad</h3><p>Savdo kam oyda xodim daromadsiz qolib, ketib qoladi.</p>`, A('up', 'Ikkinchidan', 0, { sfx: 'pop' }), 'min-height:300px')}
</div>
<div class="glass" ${A('up', 'diniy hukm emas')} style="margin-top:30px;align-self:center"><p style="font-size:24px">Bu diniy hukm emas — shartlarni ishonchli mutaxassis bilan tekshiring.</p></div>` });

const METH = [['Bitta foiz', 'Hamma tushumga 5%', 'Birinchi usul —'], ['Zinapoya', 'Butun summaga pog‘ona foizi', 'Ikkinchi usul —'], ['Bosqichma-bosqich', 'Har pog‘onaga o‘z foizi', 'Uchinchi usul —']];
add(4, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'uch xil usuli')}>3-variant · oklad 2,5 mln + ulush</div>
${H('Ulushning <span class="gold">uch usuli</span>', 'uch xil usuli')}
<div class="g3" style="gap:36px">
 ${card(`<h3>1 · ${METH[0][0]}</h3><p>${METH[0][1]}</p><div style="height:180px;margin-top:20px;border-bottom:2px solid #D4A437;position:relative"><div style="position:absolute;left:0;right:0;bottom:0;height:0;background:linear-gradient(180deg,#F3D27A,#D4A437);border:2px solid #D4A437;border-bottom:0" ${A('hy', 'barcha tushumdan', 0, { h: 40 })}></div><div style="position:absolute;top:30px;width:100%;text-align:center;font-size:54px;font-weight:800" class="ulush">5%</div></div>`, A('up', METH[0][2], 0, { sfx: 'pop' }))}
 ${card(`<h3>2 · ${METH[1][0]}</h3><p>${METH[1][1]}</p><div style="display:flex;align-items:flex-end;height:180px;margin-top:20px">${[['5%', 33, 'Tushum ellik'], ['8%', 66, 'sakkiz foiz'], ['10%', 100, 'butun summaga o\'n']].map(([f, h, k]) => `<div style="flex:1;height:${h}%;transform-origin:bottom;transform:scaleY(0);border:2px solid #D4A437;border-bottom:0;background:rgba(31,163,163,.3);display:flex;justify-content:center;padding-top:6px;font-weight:800;font-size:24px" ${A('sy', k, 0, { sfx: 'pop', t: 0.6 })}>${f}</div>`).join('')}</div>`, A('up', METH[1][2], 0, { sfx: 'pop' }))}
 ${card(`<h3>3 · ${METH[2][0]}</h3><p>${METH[2][1]}</p><div style="height:180px;margin:20px auto 0;width:160px;border:2px solid #D4A437;border-radius:30px 30px 60px 60px;position:relative;overflow:hidden">${[['5%', 0, '#1FA3A3', 'dastlabki ellik'], ['8%', 33.3, '#3E7CC4', 'keyingi ellik'], ['10%', 66.6, '#D4A437', 'oshgan qismiga']].map(([f, b, c, k]) => `<div style="position:absolute;left:0;right:0;bottom:${b}%;height:33.3%;background:${c};transform-origin:bottom;transform:scaleY(0);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:22px;border-top:1.5px solid #F3D27A" ${A('sy', k, 0, { sfx: 'pop', t: 0.6 })}>${f}</div>`).join('')}</div>`, A('up', METH[2][2], 0, { sfx: 'pop' }))}
</div>` });

add(4, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'Bobur misolida')}>3-variant · Bobur, 60 mln</div>
<div class="row" style="gap:30px;align-items:center">
 <div style="flex:none">${niche('Bobur', 120, '@start:0.4;zinapoyada:0.9', '60 mln')}</div>
 <div class="g3" style="flex:1;gap:26px">
  ${[['1 · Bitta foiz', '60 mln × 5%', 3000000, 5500000, 'Birinchi usulda', 'besh million besh yuz'], ['2 · Zinapoya', '60 mln × 8%', 4800000, 7300000, 'zinapoyada', 'yetti million uch yuz'], ['3 · Bosqichma', '50×5% + 10×8%', 3300000, 5800000, 'bosqichma-bosqich hisoblashda', 'besh million sakkiz yuz']].map((m, i) => card(`
   <h3 style="font-size:34px">${m[0]}</h3><p style="font-size:24px">${m[1]}</p>
   <div class="mu" style="font-size:20px;margin-top:16px">Ulush</div><div style="font-size:40px;font-weight:800" class="ulush">${C(m[2], m[4], { d: 1, t: 0.9 })}</div>
   <div class="mu" style="font-size:20px;margin-top:10px">Maosh</div><div style="font-size:46px;font-weight:800" class="tushum">${C(m[3], m[5], { sfx: 'ding', t: 0.9 })}</div>`,
   A('up', m[4], 0, { sfx: 'pop' }) + ' ' + (i === 1 ? E('pulse@bosqichma-bosqich hisoblashda+6') : ''), 'min-height:380px', 'card arch')).join('')}
 </div>
</div>` });

// 4-variant
add(2, { tr: 'curtain', html: `
<div class="kick sifat" ${A('fade', 'To\'rtinchi variant')}>4-variant</div>
${card(`<span class="eq" style="font-size:52px">Maosh<span class="op">=</span><span class="oklad">Oklad</span><span class="op">+</span><span class="ulush">Ulush</span><span class="op">×</span><span class="sifat" ${E('pulse@sifat koeffitsienti+0.4')} style="display:inline-block">Sifat koeffitsienti</span></span>`, A('blur', 'Formula'), 'text-align:center;padding:30px', 'card arch')}
<div class="g3" style="gap:30px;margin-top:40px">
 ${[['≥ 90%', '1,0', COL.tushum, 'to\'qson foiz va', 'to‘liq ulush'], ['70–89%', '0,8', COL.ulush, 'sakson to\'qqiz', 'ulushning 80%'], ['< 70%', '0,5', COL.xato, 'yetmish foizdan past', 'faqat yarmi']].map((r) => card(`
  <div class="mu" style="font-size:20px">CRM / qayta aloqa — eng pasti</div><div style="font-size:40px;font-weight:800">${r[0]}</div>
  <div style="font-family:'Cormorant Garamond';font-size:96px;font-weight:700;line-height:1;color:${r[2]}">${r[1]}</div><div class="chip">${r[4]}</div>`, A('pop', r[3], 0, { sfx: 'pop' }), 'text-align:center')).join('')}
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick sifat" ${A('fade', 'Aziz misolida')}>4-variant · Aziz va Dilnoza</div>
<div class="row" style="gap:36px;align-items:center">
 <div style="flex:none">${niche('Aziz', 110, '@start:0.3;nol butun o\'ndan sakkiz:-0.3;uch million besh yuz:0.4')}</div>
 <div class="col" style="flex:1;gap:18px">
  ${card(`<div class="mu" style="font-size:20px">1 · Ulush</div><div style="font-size:38px;font-weight:800">27 000 000 × 5% = <span class="ulush">${C(1350000, 'besh foizlik ulushi')}</span></div>`, A('left', 'besh foizlik'))}
  ${card(`<div class="mu" style="font-size:20px">2 · Eng past sifat</div><div style="font-size:36px;font-weight:800">CRM 80% · Qayta aloqa <span class="ulush" ${E('pulse@Eng pasti yetmish+0.4')} style="display:inline-block">70%</span> → koef. <span class="ulush">0,8</span></div>`, A('left', 'Si-Ar-Em tozaligi bajarilishi'))}
  ${card(`<div class="mu" style="font-size:20px">3 · Maosh</div><div style="font-size:36px;font-weight:800">1 350 000 × 0,8 = <span class="bonus">${C(1080000, 'bir million sakson')}</span> → <span class="tushum box">${C(3580000, 'uch million besh yuz', { sfx: 'ding' })}</span></div>`, A('left', 'Bir million uch yuz ellik mingni'))}
 </div>
 <div style="flex:none;display:flex;flex-direction:column;align-items:center;gap:10px" ${A('pop', 'Tartibni a\'lo', 0, { sfx: 'success' })}>
  ${niche('Dilnoza', 110, '@start:0.95', 'tartib a’lo')}
  <div style="font-size:42px;font-weight:800" class="tushum">${C(8500000, 'sakkiz million besh yuz')}</div>
 </div>
</div>
<div style="position:absolute;right:120px;top:120px">${stamp('Adolatli', COL.tushum, 'sakkiz million besh yuz', 0.8)}</div>
${BURST('sakkiz million besh yuz+0.6', 26)}` });

// =============== 9-bob. Oylik hisob ===============
const STEPS = [['Raqamlarni olish', 'Birinchi qadam:'], ['Bajarilish %', 'Ikkinchi qadam:'], ['Eshik qoidasi', 'Uchinchi qadam:'], ['KPI balli', 'To\'rtinchi qadam:'], ['Formulaga qo‘yish', 'Beshinchi qadam:'], ['Xodimga yuborish', 'Oltinchi qadam:']];
add(7, { ch: 'Har oy: 6 qadam', tr: 'curtain', cam: [['teskari', 1.0, 0, 0]], html: `
<div class="kick" ${A('fade', 'olti qadamdan')}>Har oy · bitta xodimga 3–5 daqiqa</div>
${H('Oylik hisob — <span class="gold">6 qadam</span>', 'olti qadamdan')}
<div style="position:relative;margin-top:20px">
 <div style="position:absolute;left:5%;right:5%;top:44px;height:3px;background:rgba(212,164,55,.25)"></div>
 <div style="position:absolute;left:5%;top:44px;height:3px;width:0;background:#D4A437" ${A('wx', 'Birinchi qadam:', 0, { w: 90, t: 40 })}></div>
 <div class="row" style="gap:16px">${STEPS.map((s, i) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:16px" ${A('up', s[1], 0, { sfx: 'pop' })}><div class="circ" style="width:90px;height:90px;font-size:44px;background:#1A1946;z-index:1">${i + 1}</div><div style="font-size:24px;font-weight:800;text-align:center">${s[0]}</div></div>`).join('')}</div>
</div>
<div class="row" style="gap:30px;margin-top:40px">
 ${card(`<div class="mu" style="font-size:20px">2-qadam · eslatma</div><p style="font-size:26px"><b>105% → 100%</b> · teskari KPI: <b class="ulush">maqsad ÷ haqiqiy</b></p><div class="eq" style="font-size:42px;margin-top:10px">5 ÷ 8 × 100 = <span class="ulush">${C(62.5, 'oltmish ikki yarim', { dec: 1, suf: '%', sfx: 'ding' })}</span></div>`, A('up', 'yuz deb olinadi'), 'flex:1.3')}
 <div style="flex:1;padding-top:60px" ${A('up', 'Uchinchi qadam:')}>${gate(62, '#5FAF6B', 'Uchinchi qadam:', null, 'eshik 50%')}<div class="tushum" style="font-size:26px;font-weight:800;margin-top:16px" ${A('fade', 'Uchinchi qadam:', 1)}>✓ o‘tdi</div></div>
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'Oy oxiridagi')}>Oy oxiri tartibi</div>
${H('Har oy — bir xil <span class="gold">jadval</span>', 'Oy oxiridagi')}
<div class="tl" style="gap:20px">${[['1–3', 'Raqamlar yig‘iladi', 'birinchi-uchinchi'], ['3–4', 'Jadval to‘ldiriladi', 'Uchinchi-to\'rtinchi'], ['5 gacha', 'Hisob varag‘i xodimga', 'Beshinchi sanagacha'], ['+3 kun', 'E’tiroz — birga tekshirish', 'e\'tiroz'], ['To‘lov', 'Belgilangan sanada', 'buxgalteriya']].map((c, i) => card(`
 <div class="circ" style="margin:0 auto 14px">${i + 1}</div><div style="font-family:'Cormorant Garamond';font-size:44px;font-weight:700" class="ulush">${c[0]}</div><p style="font-size:24px;margin-top:8px">${c[1]}</p>`, A('up', c[2], 0, { sfx: 'pop' }), 'text-align:center;min-height:330px', 'card arch')).join('')}</div>` });

// =============== 10-bob. Yangi xodim ===============
add(5, { ch: 'Yangi xodim', tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Yangi xodimning')}>Yangi xodim</div>
${H('Maosh — <span class="gold">bosqichma-bosqich</span>', 'Yangi xodimning')}
<div class="row" style="gap:24px;align-items:flex-end">
 <div style="flex:none">${niche('Charos', 110, '@start:0.2;Oltmish birinchi:0.95', 'yangi xodim')}</div>
 <div class="tl" style="flex:1;gap:18px">${[['16 kun', 'Akademiya', 'O‘qiydi, imtihon', 'o\'n olti kunlik', COL.sifat], ['1–30 kun', '2-variant', '50–70% · eshik yo‘q', 'birinchi o\'ttiz', COL.bonus], ['31–60 kun', '2-variant', '80–90% · eshik 30%', 'o\'ttiz birinchi kundan', COL.oklad], ['61–90 kun', 'To‘liq reja', 'eshik 50%', 'oltmish birinchi kundan', COL.tushum]].map((c) => card(`
  <div style="font-family:'Cormorant Garamond';font-size:40px;font-weight:700;color:${c[4]}">${c[0]}</div><h3 style="font-size:30px;margin-top:6px">${c[1]}</h3><p style="font-size:22px">${c[2]}</p>`, A('up', c[3], 0, { sfx: 'pop' }), `min-height:270px;border-top:5px solid ${c[4]}`)).join('')}</div>
</div>
<div class="glass" ${A('up', 'To\'qsoninchi kundan keyin')} style="margin-top:30px;align-self:flex-end"><p style="font-size:26px">90-kundan keyin → <b class="gold">3 yoki 4-variant</b> ko‘rib chiqiladi</p></div>` });

add(1, { tr: 'arch', html: `
<div class="kick xato" ${A('fade', 'Muhim qoida')}>Muhim qoida</div>
<div class="row" style="gap:50px;align-items:center">
 ${card(`<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:8px">${Array.from({ length: 30 }, (_, k) => `<div style="height:46px;border:1px solid #E6D8B8;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:18px;${k === 14 ? 'background:rgba(200,70,61,.15);color:#C8463D' : ''}">${k + 1}</div>`).join('')}</div>
  <div style="font-size:34px;font-weight:800;margin-top:16px;text-align:center" class="xato" ${A('pop', 'o\'zgartirilmaydi', 0, { sfx: 'thud' })}>Oy o‘rtasida — o‘zgarmaydi</div>`, A('up', 'oyning o\'rtasida'), 'flex:1')}
 <div class="col" style="flex:1;gap:20px">
  ${glass(`<div style="display:flex;gap:14px;align-items:center"><div class="ok">✓</div><p style="font-size:28px">Keyingi oyning <b>1-sanasidan</b></p></div>`, A('right', 'birinchi sanasidan', 0, { sfx: 'pop' }))}
  ${glass(`<div style="display:flex;gap:14px;align-items:center"><div class="ok">✓</div><p style="font-size:28px"><b>Yozma</b> xabardor qilib</p></div>`, A('right', 'yozma', 0, { sfx: 'pop' }))}
  ${glass(`<div style="display:flex;gap:14px;align-items:center"><div class="ok">✓</div><p style="font-size:28px">Xodim <b>imzosi</b> bilan</p></div>`, A('right', 'imzosini', 0, { sfx: 'pop' }))}
 </div>
</div>` });

// =============== 11-bob. 9 xato ===============
const ERR = [['Faqat oklad', 'kamida 2-variant', 'Birinchi xato'], ['Okladsiz foiz', 'doim oklad + ulush', 'Ikkinchi xato'], ['«Tushum» yozilmagan', 'tushum = kassaga kelgan pul', 'Uchinchi xato'], ['5 tadan ko‘p KPI', '4–5 ta yetarli', 'To\'rtinchi xato'], ['Og‘zaki shartlar', 'yozma, imzo bilan', 'Beshinchi xato'], ['Oy o‘rtasida o‘zgartirish', 'keyingi oy 1-sanasidan', 'Oltinchi xato'], ['Hammaga bir xil reja', 'yangiga yumshoq reja', 'Yettinchi xato'], ['Tekshirilmagan raqamlar', 'avval CRM / daftar', 'Sakkizinchi xato'], ['Kechikkan maosh', 'sana doim bir xil', 'To\'qqizinchi xato']];
add(10, { ch: 'To‘qqizta xato', tr: 'curtain', html: `
<div class="kick xato" ${A('fade', 'to\'qqizta xatoni')}>Eng ko‘p uchraydigan xatolar</div>
${H('Bu <span style="color:#E86F64">9 xato</span>dan saqlaning', 'to\'qqizta xatoni')}
<div class="g3" style="gap:22px 26px">${ERR.map((e, i) => card(`<div style="display:flex;gap:14px;align-items:flex-start"><div class="x" style="width:44px;height:44px;font-size:20px">✕</div><div><div style="font-size:26px;font-weight:800">${e[0]}</div><div class="tushum" style="font-size:21px;font-weight:700;margin-top:4px" ${A('fade', e[2], 1.2)}>→ ${e[1]}</div></div></div>`, A('pop', e[2], 0, { sfx: 'thud' }), 'padding:18px 22px')).join('')}</div>` });

// =============== 12-bob. Tasdiq varaqasi va yakun ===============
const FIELDS = [['Xodim F.I.SH.', 'ism-sharifi'], ['Tanlangan variant', 'tanlangan variant'], ['Oklad summasi', 'oklad summasi'], ['Bonus fondi / ulush', 'bonus fondi yoki'], ['KPI vaznlari', 'vaznlari'], ['Eshik qoidasi', 'eshik qoidasi'], ['«Tushum» ta’rifi', 'tushum ta\'rifi'], ['To‘lov sanasi', 'to\'lanadigan sana']];
add(1, { ch: 'Tasdiq varaqasi', tr: 'arch', html: `
<div class="kick" ${A('fade', 'tasdiq varaqasi')}>Rahbar tasdiq varaqasi</div>
<div class="row" style="gap:40px;align-items:center">
 ${card(`<h3 style="text-align:center">Tasdiq varaqasi</h3>${FIELDS.map(([f, k]) => `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid #E6D8B8;font-size:24px"><span>${f}</span><span class="tushum" style="font-weight:800" ${A('pop', k, 0, { sfx: 'tick' })}>✓</span></div>`).join('')}`, A('up', 'tasdiq varaqasi'), 'flex:1.2;padding:24px 34px')}
 <div class="col" style="flex:1;align-items:center;gap:20px">
  <div class="row" style="gap:20px">${niche('Rahbar', 100, '@start:0.6', 'imzo', A('pop', 'rahbar va xodim imzolaydi'))}${niche('Bobur', 100, '@start:0.7', 'imzo', A('pop', 'rahbar va xodim imzolaydi', 0.3))}</div>
  ${glass(`<p style="font-size:26px;text-align:center">2 nusxa: <b class="gold">rahbarda</b> va <b class="gold">xodimda</b></p>`, A('up', 'Bir nusxasi', 0, { sfx: 'ding' }))}
 </div>
</div>` });

add(1, { tr: 'curtain', html: `
<div style="display:flex;align-items:center;justify-content:center;gap:60px;margin:auto 0">
 ${stamp('Bruto<br>soliqdan<br>oldin', COL.sifat, 'soliqdan oldingi')}
 ${card(`<h3>Esda tuting</h3><p style="font-size:30px">Barcha summalar — <b>soliqdan oldin</b>.</p><p style="font-size:30px;margin-top:14px">Shartnomaga yozishdan oldin <b>buxgalter yoki yurist</b> bilan tekshiring.</p>`, A('up', 'Esda tuting'), 'max-width:900px')}
</div>` });

add(1, { ch: 'Yakun', tr: 'arch', html: `
<div style="display:flex;flex-direction:column;align-items:center;gap:24px;margin:auto 0;position:relative">
 <div style="position:absolute;top:-60px;opacity:.22">${rosette('@in', 620)}</div>
 <div class="row" style="gap:26px;z-index:1;align-items:flex-end">${['Aziz', 'Bobur', 'Rahbar', 'Charos', 'Dilnoza'].map((n, i) => `<div ${A('up', 'Hurmatli rahbarlar', i * 0.15)}>${niche(n, n === 'Rahbar' ? 120 : 100, '@start:0.9')}</div>`).join('')}</div>
 <div class="row" style="gap:20px;z-index:1" ${A('up', 'darsimiz yakunlandi')}><span class="chip k" style="font-size:28px">Oklad — xavfsizlik</span><span class="chip" style="font-size:28px">Natija — rag‘bat</span><span class="chip" style="font-size:28px">KPI — tartib</span></div>
 <div class="big" style="z-index:1" ${A('split', 'bugunoq joriy qiling')}><span class="gold">Bugunoq joriy qiling</span></div>
 ${BURST('bugunoq joriy qiling+0.5', 30)}
</div>` });

window.PART = { label: 'Atlas Naqsh', scenes: sc };
