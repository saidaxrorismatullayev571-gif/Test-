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

const TEAM = [['Aziz', 27, 45, COL.xato], ['Bobur', 60, 100, COL.bonus], ['Charos', 90, 150, COL.oklad], ['Dilnoza', 120, 200, COL.tushum]];

// =============== Kirish (A. Rejabboyev ovozida, 75 s) ===============
// Pastki chap burchak (≈330×330) dumaloq avatar uchun bo‘sh qoldiriladi — .world padding-bottom: 300px.
add(1, { ch: 'Kirish', tr: 'fade', html: `
<div style="display:flex;align-items:center;gap:80px;margin:auto 0">
 <div style="flex:none">${rosette('@in', 380)}</div>
 <div style="flex:1">
  <div class="kick" ${A('fade', 'Assalomu alaykum')}>Korxona ichki akademiyasi</div>
  <div class="big" ${A('split', 'Assalomu alaykum')}>Assalomu <span class="gold">alaykum</span></div>
  <div class="row" style="margin-top:34px;gap:12px"><span class="chip" ${A('up', 'rahbarlar', 0, { sfx: 'pop' })}>Rahbarlar uchun</span><span class="chip k" ${A('up', 'HR mutaxassislari', 0, { sfx: 'pop' })}>HR mutaxassislari uchun</span></div>
 </div>
</div>` });

add(1, { tr: 'arch', html: `
<div style="margin:auto 0">
 <div class="kick" ${A('fade', 'sotuv menejerlari')}>Sotuv moduli · Bugungi mavzu</div>
 <div class="big" style="font-size:104px" ${A('split', 'maosh tizimini')}>Maosh tizimini <span class="gold">tanlash</span><br>va <span class="gold">hisoblash</span></div>
 <div class="row" style="margin-top:36px;gap:24px">
  ${glass(`<p style="font-size:30px"><b class="gold">01</b> · Qaysi tizim mos?</p>`, A('up', 'tanlash', 0, { sfx: 'pop' }))}
  ${glass(`<p style="font-size:30px"><b class="gold">02</b> · Qanday hisoblanadi?</p>`, A('up', 'hisoblashni', 0, { sfx: 'pop' }))}
 </div>
</div>` });

add(1, { tr: 'curtain', html: `
<div class="kick xato" ${A('fade', 'muammoga')}>Muammo</div>
${H('Maosh — ko‘p korxonada <span style="color:#E86F64">muammo</span>', 'muammoga')}
<div class="g2" style="gap:44px">
 ${card(`<div style="display:flex;gap:16px;align-items:center"><div class="x">✕</div><h3>Hammaga bir xil oklad</h3></div><p style="margin-top:12px">Natijadan qat’i nazar, hamma bir xil oladi</p>`, A('left', 'bir xil oklad', 0, { sfx: 'thud' }))}
 ${card(`<div style="display:flex;gap:16px;align-items:center"><div class="x">✕</div><h3>Faqat foiz</h3></div><p style="margin-top:12px">Oylik kafolati yo‘q — past oyda xodim qiynaladi</p>`, A('right', 'faqat foiz', 0, { sfx: 'thud' }))}
</div>` });

add(1, { tr: 'arch', html: `
<div class="row" style="gap:60px;align-items:center;margin:auto 0">
 <div class="row" style="gap:30px;flex:none">
  <div ${A('pop', 'yaxshi sotuvchi', 0, { sfx: 'pop' })}>${niche('Dilnoza', 120, '@start:0.5;qadrsiz:-0.9', 'yaxshi sotuvchi')}</div>
  <div ${A('pop', 'sust sotuvchi', 0, { sfx: 'pop' })}>${niche('Aziz', 120, '@start:0.2', 'sust sotuvchi')}</div>
 </div>
 <div class="col" style="flex:1;gap:20px">
  ${glass(`<p style="font-size:30px">Yaxshi sotuvchi — <b class="xato">o‘zini qadrsiz his qiladi</b></p>`, A('up', 'qadrsiz', 0, { sfx: 'tick' }))}
  ${glass(`<p style="font-size:30px">Sust sotuvchi — <b class="mu">hech narsani o‘zgartirmaydi</b></p>`, A('up', 'o\'zgartirmaydi', 0, { sfx: 'tick' }))}
  <div style="display:flex;justify-content:center;margin-top:10px">${stamp('Kuchlilar<br>ketadi', COL.xato, 'ketib qoladi')}</div>
 </div>
</div>` });

add(1, { ch: 'To‘g‘ri tizim', tr: 'curtain', cam: [['Uchinchisi', 1.03, 0, -10]], html: `
<div class="kick" ${A('fade', 'uchta narsaga')}>To‘g‘ri maosh tizimi</div>
${H('Uchta <span class="gold">ustun</span>', 'uchta narsaga')}
<div class="g3" style="gap:40px">
 ${[['Oklad', 'Xavfsizlik va barqarorlik', COL.oklad, 'Birinchisi', 'xavfsizlik'], ['Bonus', 'Natijaga bog‘liq rag‘bat', COL.bonus, 'Ikkinchisi', 'undaydi'], ['KPI', 'Adolatli o‘lchov', COL.ulush, 'Uchinchisi', 'adolatli']].map((c, i) => card(`
  <div class="circ" style="margin:0 auto 14px;border-color:${c[2]};color:${c[2]}">${i + 1}</div>
  <h3 style="color:${c[2]}">${c[0]}</h3><p ${A('fade', c[4], 0)}>${c[1]}</p>`, A('up', c[3], 0, { sfx: 'pop' }) + ' ' + E('lift@' + c[4] + '+0.3'), 'text-align:center;min-height:300px', 'card arch')).join('')}
</div>` });

add(1, { tr: 'arch', html: `
<div class="kick" ${A('fade', 'to\'rtta maosh')}>Bu darsda</div>
${H('<span class="gold">4</span> variant · bitta misol', 'to\'rtta maosh')}
<div class="row" style="gap:26px;justify-content:center">${TEAM.map(([n, v]) => `<div ${A('pop', 'to\'rt nafar', TEAM.findIndex((t) => t[0] === n) * 0.25, { sfx: 'pop' })}>${niche(n, 104, '@start:0.6', 'sotuv ' + v + ' mln')}</div>`).join('')}</div>` });

add(1, { tr: 'curtain', html: `
<div class="kick" ${A('fade', 'Qaysi variant')}>Siz o‘rganasiz</div>
<div class="g3" style="gap:40px;margin-top:20px">
 ${[[6, 'savol', 'Qaysi variant mos?', 'oltita savolga'], [6, 'qadam', 'Har oy maosh hisobi', 'olti qadamda'], [9, 'xato', 'Eng ko‘p uchraydigan', 'to\'qqizta xatoni']].map((c) => card(`
  <div style="font-family:'Cormorant Garamond';font-size:150px;font-weight:700;line-height:1" class="ulush">${C(c[0], c[3], { t: 0.8 })}</div>
  <h3>${c[1]}</h3><p>${c[2]}</p>`, A('up', c[3], 0, { sfx: 'pop' }), 'text-align:center;min-height:360px', 'card arch')).join('')}
</div>` });

add(1, { tr: 'arch', html: `
<div style="display:flex;align-items:center;justify-content:center;gap:70px;margin:auto 0">
 ${stamp('Tayyor<br>tizim', COL.tushum, 'tayyor tizim')}
 <div class="col" style="gap:22px">
  ${glass(`<div style="display:flex;gap:14px;align-items:center"><div class="ok">✓</div><p style="font-size:32px">Bugunoq <b class="gold">joriy qilasiz</b></p></div>`, A('right', 'bugunoq', 0, { sfx: 'ding' }))}
  ${glass(`<div style="display:flex;gap:14px;align-items:center"><div class="ok">✓</div><p style="font-size:32px">Xodimga <b class="gold">1 daqiqada</b> tushuntirasiz</p></div>`, A('right', 'bir daqiqada', 0, { sfx: 'ding' }))}
 </div>
</div>` });

add(1, { tr: 'fade', html: `
<div style="display:flex;flex-direction:column;align-items:center;gap:20px;margin:auto 0;position:relative">
 <div style="position:absolute;top:-80px;opacity:.25">${rosette('Qani', 520)}</div>
 <div class="big" style="font-size:150px;z-index:1" ${A('split', 'Qani')}>Qani, <span class="gold">boshladik!</span></div>
 ${BURST('boshladik+0.2', 30)}
</div>` });

window.PART = { label: 'Kirish', scenes: sc };
