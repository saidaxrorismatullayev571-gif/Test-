// Video engine v2: deterministic render(t) driven by narration timing.
// Every animation is anchored to a spoken keyword, so visuals land exactly when a word is said.
(function () {
'use strict';

// ---------- authoring helpers (used by qismN.js) ----------
const attr = (o) => Object.entries(o).filter(([, v]) => v !== undefined && v !== null)
  .map(([k, v]) => `data-${k}="${String(v).replace(/"/g, '&quot;')}"`).join(' ');
window.A = (type, at, d = 0, ex = {}) => attr({ a: type, at, d, ...ex });
window.O = (at) => attr({ out: at });
window.E = (spec) => attr({ e: spec });
window.fmt = (v, dec = 0) => {
  const n = Math.abs(v).toFixed(dec); let [i, f] = n.split('.');
  i = i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return (v < 0 ? '-' : '') + i + (f ? ',' + f : '');
};
window.C = (v, at, o = {}) => `<span class="num" ${A('count', at, o.d || 0, { v, dec: o.dec || 0, suf: o.suf || '', pre: o.pre || '', t: o.t || 1.3, sfx: o.sfx })}>${o.pre || ''}0${o.suf || ''}</span>`;
window.H = (text, at, d = 0, cls = '') => `<h2 class="${cls}" ${A('split', at, d)}>${text}</h2>`;
window.MK = (text, at, color) => `<span class="mk" ${A('mark', at)} ${color ? `style="--mkc:${color}"` : ''}>${text}</span>`;
window.BAR = (h, color, at, d, label, x, ex = '') =>
  `<div class="bcol"><div class="bar" style="background:${color};height:0" ${A('hy', at, d, { h, t: 1.1 })} ${ex}>${label ? `<div class="bl">${label}</div>` : ''}</div>${x ? `<div class="bx">${x}</div>` : ''}</div>`;
window.BURST = (at, n = 28) => `<div class="burst" ${A('burst', at, 0, { t: 1.6, n })}></div>`;
const PEOPLE = {
  Aziz:    { skin: '#e9b98f', hair: '#2b1d14', shirt: '#C8463D', style: 'short' },
  Bobur:   { skin: '#d9a27a', hair: '#1c1410', shirt: '#3E7CC4', style: 'side' },
  Charos:  { skin: '#f0c4a0', hair: '#3a2416', shirt: '#1FA3A3', style: 'long' },
  Dilnoza: { skin: '#e7b48e', hair: '#24160f', shirt: '#5FAF6B', style: 'bun' },
  Rahbar:  { skin: '#dba680', hair: '#3b3b44', shirt: '#2B2A6B', style: 'short', tie: true },
};
// Avatar: simple flat character with a mouth that follows a mood track (-1 sad .. 1 happy).
window.AV = (name, size = 150, mood = '@start:0.4', ex = '') => {
  const p = PEOPLE[name];
  const hair = {
    short: `<path d="M28 58 Q30 18 75 16 Q120 18 122 58 Q110 36 75 36 Q40 36 28 58Z" fill="${p.hair}"/>`,
    side: `<path d="M26 62 Q24 16 80 14 Q126 20 124 56 Q100 30 60 40 Q40 46 26 62Z" fill="${p.hair}"/>`,
    long: `<path d="M22 120 Q14 20 75 14 Q136 20 128 120 L116 120 Q120 50 75 40 Q30 50 34 120Z" fill="${p.hair}"/>`,
    bun: `<circle cx="75" cy="14" r="17" fill="${p.hair}"/><path d="M26 64 Q26 22 75 20 Q124 22 124 64 Q112 40 75 40 Q38 40 26 64Z" fill="${p.hair}"/>`,
  }[p.style];
  return `<svg class="av" viewBox="0 0 150 170" width="${size}" height="${size * 170 / 150}" ${attr({ av: name, mood })} ${ex}>
    <g class="avb">
    <path d="M18 170 Q22 122 75 118 Q128 122 132 170Z" fill="${p.shirt}"/>
    <path d="M44 128 Q75 146 106 128" stroke="#D4A437" stroke-width="4" fill="none" stroke-dasharray="7 4"/>
    ${p.tie ? '<path d="M70 120 L80 120 L84 150 L75 160 L66 150Z" fill="#D4A437"/><path d="M71 128 L79 128 M70 138 L80 138 M71 148 L79 148" stroke="#B565A7" stroke-width="3"/>' : ''}
    <rect x="64" y="100" width="22" height="22" rx="8" fill="${p.skin}"/>
    <ellipse cx="75" cy="66" rx="46" ry="50" fill="${p.skin}"/>
    ${hair}
    <g class="eyes"><ellipse cx="57" cy="70" rx="5.5" ry="6.5" fill="#1b1b24"/><ellipse cx="93" cy="70" rx="5.5" ry="6.5" fill="#1b1b24"/></g>
    <path class="brow" d="M47 56 Q57 51 67 56 M83 56 Q93 51 103 56" stroke="#2a1d16" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path class="mouth" d="M58 92 Q75 104 92 92" stroke="#7a2b2b" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="44" cy="84" rx="7" ry="4" fill="#ff8a8a" opacity=".35"/><ellipse cx="106" cy="84" rx="7" ry="4" fill="#ff8a8a" opacity=".35"/>
    </g></svg>`;
};
window.PERSON = (name, size, mood, sub = '', ex = '') =>
  `<div style="display:flex;flex-direction:column;align-items:center;gap:8px" ${ex}>${AV(name, size, mood)}<div style="font-weight:850;font-size:30px">${name}</div>${sub ? `<div class="mu" style="font-size:22px">${sub}</div>` : ''}</div>`;

// ---------- math ----------
const clamp = (x) => x < 0 ? 0 : x > 1 ? 1 : x;
function bez(x1, y1, x2, y2) {
  return (x) => {
    if (x <= 0) return 0; if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const cx = 3 * x1 * t * (1 - t) ** 2 + 3 * x2 * t * t * (1 - t) + t ** 3 - x;
      const d = 3 * x1 * (1 - t) ** 2 + 6 * (x2 - x1) * t * (1 - t) + 3 * (1 - x2) * t * t;
      if (Math.abs(d) < 1e-6) break; t -= cx / d; t = Math.min(1, Math.max(0, t));
    }
    return 3 * y1 * t * (1 - t) ** 2 + 3 * y2 * t * t * (1 - t) + t ** 3;
  };
}
const EMPH = bez(0.05, 0.7, 0.1, 1);       // Material emphasized decelerate
const STD = bez(0.2, 0, 0, 1);
const INOUT = bez(0.65, 0, 0.35, 1);
const back = (x) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2; };
const rnd = (s) => { const x = Math.sin(s * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const norm = (s) => s.toLowerCase().replace(/[‘’ʻʼ`']/g, "'");
const syl = (s) => Math.max(1, (s.match(/[aeiou]/gi) || []).length);

window.BUILD = function () {
// ---------- build ----------
const PART = window.PART;
// A scene may cover several narration paragraphs (sc.n, default 1): merge their timing.
const TM = (() => {
  const src = window.TIMING.scenes, out = []; let k = 0;
  PART.scenes.forEach((sc) => {
    const grp = src.slice(k, k + (sc.n || 1)); k += sc.n || 1;
    if (!grp.length) return;
    out.push({ text: grp.map((g) => g.text).join(' '), a: grp[0].a, b: grp[grp.length - 1].b,
      quiz: grp[grp.length - 1].quiz, sents: grp.flatMap((g) => g.sents) });
  });
  if (k !== src.length) console.error(`scenes cover ${k} paragraphs, narration has ${src.length}`);
  return { dur: window.TIMING.dur, scenes: out };
})();
const S = PART.scenes;
if (S.length !== TM.scenes.length) console.error(`scene count ${S.length} != paragraphs ${TM.scenes.length}`);
const WARN = [];
const END_HOLD = 2.4;
S.forEach((sc, i) => {
  const tm = TM.scenes[i];
  sc.tm = tm;
  sc.t0 = i === 0 ? 0 : (TM.scenes[i - 1].quiz ? tm.a - 0.3 : (TM.scenes[i - 1].b + tm.a) / 2);
});
S.forEach((sc, i) => { sc.t1 = i + 1 < S.length ? S[i + 1].t0 : TM.dur + END_HOLD; });
const TOTAL = S[S.length - 1].t1;

function sentenceOffsets(tm) {
  const text = norm(tm.text); let pos = 0;
  return tm.sents.map((s) => { const k = text.indexOf(norm(s.t), pos); const o = k < 0 ? pos : k; pos = o + s.t.length; return o; });
}
function resolve(sc, spec) {
  spec = String(spec).trim();
  const tm = sc.tm;
  let m;
  if (/^-?[\d.]+$/.test(spec)) return sc.t0 + parseFloat(spec);
  if (spec === '@start') return tm.a;
  if (spec === '@end') return tm.b;
  if (spec === '@in') return sc.t0 + 0.2;
  if ((m = spec.match(/^s(\d+)(e?)([+-][\d.]+)?$/))) {
    const s = tm.sents[+m[1]]; if (!s) { WARN.push(`no sentence ${spec}`); return tm.a; }
    return (m[2] ? s.b : s.a) + (m[3] ? parseFloat(m[3]) : 0);
  }
  m = spec.match(/^(.*?)(?:#(\d+))?([+-][\d.]+)?$/);
  const kw = norm(m[1]), nth = m[2] ? +m[2] : 1, off = m[3] ? parseFloat(m[3]) : 0;
  const text = norm(tm.text);
  let idx = -1, from = 0;
  for (let k = 0; k < nth; k++) { idx = text.indexOf(kw, from); if (idx < 0) break; from = idx + 1; }
  if (idx < 0) { WARN.push(`scene ${S.indexOf(sc) + 1}: keyword "${spec}" not found`); return tm.a + 0.5; }
  const offs = sc.offs || (sc.offs = sentenceOffsets(tm));
  let si = 0; for (let k = 0; k < offs.length; k++) if (offs[k] <= idx) si = k;
  const s = tm.sents[si];
  const frac = syl(tm.text.slice(offs[si], idx) || '') / syl(s.t);
  const pre = (tm.text.slice(offs[si], idx).match(/[aeiou]/gi) || []).length ? frac : 0;
  return s.a + pre * (s.b - s.a) - 0.12 + off;
}

const root = document.getElementById('scenes');
const DUR = { count: 1.3, draw: 1.4, hy: 1.1, wx: 1.0, type: 1.2, burst: 1.6, cd: 5, split: 0.8, mark: 0.6 };
S.forEach((sc, i) => {
  const el = document.createElement('div'); el.className = 'scene';
  el.innerHTML = `<div class="world">${sc.html}</div>`; root.appendChild(el);
  sc.el = el; sc.world = el.firstElementChild;
  el.querySelectorAll('[data-a="split"]').forEach((h) => {
    const walk = (node) => {
      [...node.childNodes].forEach((c) => {
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) frag.appendChild(document.createTextNode(w));
            else { const s = document.createElement('span'); s.className = 'w'; s.textContent = w; frag.appendChild(s); }
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1 && !c.classList.contains('w')) {
          if (getComputedStyle(c).display === 'inline' || c.tagName === 'SPAN') { c.classList.add('w'); c.style.display = 'inline-block'; }
          else walk(c);
        }
      });
    };
    walk(h);
    h._words = [...h.querySelectorAll('.w')];
  });
  sc.anims = [...el.querySelectorAll('[data-a]')].map((e) => {
    const a = e.dataset.a;
    const o = { el: e, a, st: resolve(sc, e.dataset.at || '@in') + (+e.dataset.d || 0), t: e.dataset.t ? +e.dataset.t : (DUR[a] || 0.75) };
    if (a === 'draw') { o.len = e.getTotalLength(); e.style.strokeDasharray = o.len; }
    if (a === 'type') { o.full = e.textContent; }
    if (a === 'burst') {
      const n = +e.dataset.n || 28, cols = ['#D4A437', '#F3D27A', '#1FA3A3', '#3E7CC4', '#B565A7', '#5FAF6B'];
      e.innerHTML = Array.from({ length: n }, (_, k) => `<i style="background:${cols[k % cols.length]}"></i>`).join('');
      o.parts = [...e.children].map((c, k) => ({ c, ang: rnd(k + 1) * Math.PI * 2, sp: 260 + rnd(k + 9) * 420, rot: rnd(k + 5) * 720 }));
    }
    if (e.dataset.sfx) o.sfx = e.dataset.sfx;
    return o;
  });
  sc.outs = [...el.querySelectorAll('[data-out]')].map((e) => ({ el: e, st: resolve(sc, e.dataset.out) }));
  sc.emph = [];
  el.querySelectorAll('[data-e]').forEach((e) => e.dataset.e.split(';').forEach((x) => {
    const [kind, spec] = x.split('@'); if (!spec) return;
    sc.emph.push({ el: e, kind: kind.trim(), st: resolve(sc, spec) });
  }));
  sc.avs = [...el.querySelectorAll('[data-av]')].map((e, k) => ({
    el: e, mouth: e.querySelector('.mouth'), eyes: e.querySelector('.eyes'), body: e.querySelector('.avb'), seed: k + i * 7,
    track: e.dataset.mood.split(';').map((x) => { const j = x.lastIndexOf(':'); return [resolve(sc, x.slice(0, j)), +x.slice(j + 1)]; }).sort((p, q) => p[0] - q[0]),
  }));
  sc.camK = [[sc.t0, 1, 0, 0]].concat((sc.cam || []).map(([spec, s, x, y]) => [resolve(sc, spec), s, x, y])).sort((p, q) => p[0] - q[0]);
});

// ---------- HUD / background ----------
document.getElementById('part').textContent = PART.label;
const partEl = document.getElementById('part');
let chap = PART.label; S.forEach((sc) => { if (sc.ch) chap = sc.ch; sc.chap = chap; });
const bar = document.getElementById('bar');
S.forEach((sc, i) => { if (i) { const b = document.createElement('b'); b.style.left = (sc.t0 / TOTAL * 100) + '%'; bar.appendChild(b); } });
const dots = document.getElementById('dots');
for (let k = 0; k < 46; k++) dots.appendChild(document.createElement('i'));
const dotEls = [...dots.children];

// ---------- render ----------
function applyAnim(o, t) {
  const raw = clamp((t - o.st) / o.t), p = EMPH(raw), el = o.el;
  switch (o.a) {
    case 'up': el.style.opacity = clamp(raw * 2.2); el.style.transform = `translateY(${(1 - p) * 46}px)`; break;
    case 'down': el.style.opacity = clamp(raw * 2.2); el.style.transform = `translateY(${-(1 - p) * 46}px)`; break;
    case 'left': el.style.opacity = clamp(raw * 2.2); el.style.transform = `translateX(${-(1 - p) * 90}px)`; break;
    case 'right': el.style.opacity = clamp(raw * 2.2); el.style.transform = `translateX(${(1 - p) * 90}px)`; break;
    case 'fade': el.style.opacity = p; break;
    case 'blur': el.style.opacity = p; el.style.filter = raw < 1 ? `blur(${(1 - p) * 16}px)` : 'none'; el.style.transform = `scale(${1.06 - 0.06 * p})`; break;
    case 'pop': el.style.opacity = clamp(raw * 3); el.style.transform = `scale(${raw <= 0 ? 0.5 : 0.5 + 0.5 * back(raw)})`; break;
    case 'zoom': el.style.opacity = clamp(raw * 2); el.style.transform = `scale(${1.6 - 0.6 * p})`; el.style.filter = raw < 1 ? `blur(${(1 - p) * 10}px)` : 'none'; break;
    case 'wx': el.style.width = (p * +el.dataset.w) + '%'; break;
    case 'hy': el.style.height = (p * +el.dataset.h) + '%'; break;
    case 'sx': el.style.transform = `scaleX(${p})`; break;
    case 'sy': el.style.transform = `scaleY(${p})`; break;
    case 'draw': el.style.strokeDashoffset = o.len * (1 - STD(raw)); break;
    case 'mark': el.style.setProperty('--m', STD(raw)); break;
    case 'count': {
      const v = +el.dataset.v, dec = +el.dataset.dec;
      el.textContent = (el.dataset.pre || '') + fmt(STD(raw) * v, dec) + (el.dataset.suf || '');
      el.style.opacity = raw > 0 ? 1 : 0.2; break;
    }
    case 'type': { const n = Math.round(o.full.length * raw); el.textContent = o.full.slice(0, n); el.style.opacity = raw > 0 ? 1 : 0; break; }
    case 'split': {
      const W = el._words, st = 0.05;
      W.forEach((w, k) => {
        const r = clamp((t - o.st - k * st) / 0.7), q = EMPH(r);
        w.style.opacity = clamp(r * 2); w.style.transform = `translateY(${(1 - q) * 60}px) rotate(${(1 - q) * 4}deg)`;
        w.style.filter = r < 1 ? `blur(${(1 - q) * 8}px)` : 'none';
      });
      break;
    }
    case 'burst': {
      o.parts.forEach((q) => {
        const tt = raw * o.t, x = Math.cos(q.ang) * q.sp * tt, y = Math.sin(q.ang) * q.sp * tt - 260 * tt + 520 * tt * tt;
        q.c.style.transform = `translate(${x}px,${y}px) rotate(${q.rot * raw}deg)`;
        q.c.style.opacity = raw <= 0 || raw >= 1 ? 0 : 1 - raw * raw;
      });
      break;
    }
    case 'cd': { // countdown ring: stroke + number
      const c = el.querySelector('circle.fg'), n = el.querySelector('.n'), L = 2 * Math.PI * 70;
      c.style.strokeDasharray = L; c.style.strokeDashoffset = L * raw;
      n.textContent = raw <= 0 ? Math.round(o.t) : raw >= 1 ? '0' : Math.ceil(o.t * (1 - raw));
      el.style.opacity = raw > 0 && raw < 1 ? 1 : raw >= 1 ? Math.max(0, 1 - (t - o.st - o.t) * 3) : 0;
      el.style.transform = `scale(${raw > 0 ? 1 + 0.06 * Math.max(0, 1 - ((t - o.st) % 1) * 4) : 0.8})`;
      break;
    }
  }
}
function emphasis(e, t) {
  const r = (t - e.st) / 0.9;
  if (r < 0 || r > 1) return null;
  const k = Math.sin(r * Math.PI);
  if (e.kind === 'pulse') return { s: 1 + 0.09 * k, x: 0, y: 0, glow: k };
  if (e.kind === 'shake') return { s: 1, x: Math.sin(r * 30) * 12 * (1 - r), y: 0, glow: 0 };
  if (e.kind === 'glow') return { s: 1, x: 0, y: 0, glow: k };
  if (e.kind === 'lift') return { s: 1 + 0.05 * k, x: 0, y: -14 * k, glow: k * 0.6 };
  return null;
}
function moodAt(track, t) {
  let v = track[0][1];
  for (let k = 1; k < track.length; k++) if (t >= track[k][0]) { const r = EMPH(clamp((t - track[k][0]) / 0.5)); v = track[k - 1][1] + (track[k][1] - track[k - 1][1]) * r; }
  return v;
}
function transition(type, q, prev, cur) {
  const e = INOUT(q);
  prev.el.style.clipPath = cur.el.style.clipPath = 'none';
  prev.el.style.filter = cur.el.style.filter = 'none';
  switch (type) {
    case 'push':
      prev.el.style.opacity = 1 - e; prev.el.style.transform = `translateX(${-e * 320}px)`;
      cur.el.style.opacity = e; cur.el.style.transform = `translateX(${(1 - e) * 320}px)`; break;
    case 'zoom':
      prev.el.style.opacity = 1 - e; prev.el.style.transform = `scale(${1 + 0.35 * e})`; prev.el.style.filter = `blur(${e * 12}px)`;
      cur.el.style.opacity = e; cur.el.style.transform = `scale(${0.82 + 0.18 * e})`; break;
    case 'wipe':
      prev.el.style.opacity = 1; prev.el.style.transform = `scale(${1 - 0.05 * e})`;
      cur.el.style.opacity = 1; cur.el.style.transform = 'none'; cur.el.style.clipPath = `circle(${e * 120}% at 50% 55%)`; break;
    case 'up':
      prev.el.style.opacity = 1 - e; prev.el.style.transform = `translateY(${-e * 200}px)`;
      cur.el.style.opacity = e; cur.el.style.transform = `translateY(${(1 - e) * 200}px)`; break;
    case 'arch':
      prev.el.style.opacity = 1; prev.el.style.transform = `scale(${1 - 0.04 * e})`;
      cur.el.style.opacity = 1; cur.el.style.transform = 'none';
      cur.el.style.clipPath = `inset(${(1 - e) * 46}% ${(1 - e) * 40}% ${(1 - e) * 30}% ${(1 - e) * 40}% round ${Math.max(0, 50 - e * 50)}% ${Math.max(0, 50 - e * 50)}% 0 0)`; break;
    case 'curtain':
      prev.el.style.opacity = 1; prev.el.style.transform = `translateX(${-e * 60}px)`;
      cur.el.style.opacity = 1; cur.el.style.transform = 'none'; cur.el.style.clipPath = `inset(0 0 0 ${(1 - e) * 100}%)`; break;
    default:
      prev.el.style.opacity = 1 - e; prev.el.style.transform = 'none';
      cur.el.style.opacity = e; cur.el.style.transform = `scale(${1.02 - 0.02 * e})`;
  }
}

const TW = 0.8;
function render(t) {
  // background
  document.getElementById('b1').style.transform = `translate(${-260 + Math.sin(t * 0.07) * 180}px,${-300 + Math.cos(t * 0.05) * 140}px)`;
  document.getElementById('b2').style.transform = `translate(${1300 + Math.cos(t * 0.06) * 200}px,${480 + Math.sin(t * 0.08) * 160}px)`;
  document.getElementById('b3').style.transform = `translate(${600 + Math.sin(t * 0.045) * 300}px,${700 + Math.cos(t * 0.05) * 120}px)`;
  dotEls.forEach((d, k) => {
    const sp = 6 + rnd(k) * 14, y = (rnd(k + 3) * 1200 - t * sp) % 1200;
    d.style.transform = `translate(${rnd(k + 7) * 1920 + Math.sin(t * 0.3 + k) * 20}px,${(y + 1200) % 1200 - 60}px)`;
    d.style.opacity = 0.08 + 0.22 * (0.5 + 0.5 * Math.sin(t * (0.6 + rnd(k)) + k));
  });
  bar.firstElementChild.style.width = (t / TOTAL * 100) + '%';

  S.forEach((sc) => { sc.on = t >= sc.t0 - TW / 2 && t < sc.t1 + TW / 2; if (!sc.on && sc.el.style.opacity !== '0') sc.el.style.opacity = 0; });
  let i = S.findIndex((sc) => t >= sc.t0 && t < sc.t1); if (i < 0) i = S.length - 1;
  const cur = S[i];
  if (partEl.textContent !== cur.chap) partEl.textContent = cur.chap;
  // transitions
  const nb = i + 1 < S.length ? S[i + 1] : null, pv = i > 0 ? S[i - 1] : null;
  if (pv && t < cur.t0 + TW / 2) transition(cur.tr, (t - (cur.t0 - TW / 2)) / TW, pv, cur);
  else if (nb && t >= nb.t0 - TW / 2) transition(nb.tr, (t - (nb.t0 - TW / 2)) / TW, cur, nb);
  else { cur.el.style.opacity = i === 0 ? clamp(t / 0.6) : 1; cur.el.style.transform = 'none'; cur.el.style.clipPath = 'none'; cur.el.style.filter = 'none';
    if (i === S.length - 1) cur.el.style.opacity = Math.min(+cur.el.style.opacity, clamp((TOTAL - t) / 0.8)); }

  S.forEach((sc) => {
    if (!sc.on) return;
    // camera
    let cs = 1, cx = 0, cy = 0;
    const K = sc.camK;
    if (K.length > 1 && t >= K[1][0]) {
      // when several keys passed, the last finished segment defines the base
      let k = 1; while (k + 1 < K.length && t >= K[k + 1][0]) k++;
      const r = INOUT(clamp((t - K[k][0]) / 1.2)), a = K[k - 1];
      cs = a[1] + (K[k][1] - a[1]) * r; cx = a[2] + (K[k][2] - a[2]) * r; cy = a[3] + (K[k][3] - a[3]) * r;
    }
    const drift = 1 + 0.012 * clamp((t - sc.t0) / Math.max(1, sc.t1 - sc.t0)); // slow push-in
    sc.world.style.transform = `translate(${cx}px,${cy}px) scale(${cs * drift})`;
    sc.anims.forEach((o) => applyAnim(o, t));
    const act = new Map();
    sc.emph.forEach((e) => { const r = emphasis(e, t); if (r) act.set(e.el, r); });
    sc.emph.forEach((e) => {
      const r = act.get(e.el);
      e.el.style.scale = r ? String(r.s) : ''; e.el.style.translate = r ? `${r.x}px ${r.y}px` : '';
      e.el.style.boxShadow = r && r.glow ? `0 0 ${46 * r.glow}px ${10 * r.glow}px rgba(255,194,75,${0.5 * r.glow})` : '';
      e.el.style.zIndex = r ? 3 : '';
    });
    sc.outs.forEach((o) => {
      const r = clamp((t - o.st) / 0.5); if (r <= 0) return;
      o.el.style.opacity = Math.min(+o.el.style.opacity || 1, 1 - EMPH(r)); o.el.style.filter = `blur(${r * 8}px)`;
    });
    sc.avs.forEach((a) => {
      const m = moodAt(a.track, t);
      a.mouth.setAttribute('d', `M58 ${94 - m * 3} Q75 ${94 + m * 16} 92 ${94 - m * 3}`);
      const bl = ((t + rnd(a.seed) * 4) % 3.6) < 0.13 ? 0.1 : 1;
      a.eyes.style.transform = `scaleY(${bl})`; a.eyes.style.transformOrigin = '75px 70px';
      a.body.style.transform = `translateY(${Math.sin(t * 2.2 + a.seed) * 2.5}px)`;
    });
  });
}

window.TOTAL = TOTAL;
window.render = render;
window.WARN = WARN;
window.SFX_EVENTS = () => {
  const ev = [];
  S.forEach((sc, i) => {
    if (i && sc.tr && sc.tr !== 'fade') ev.push([sc.t0 - 0.3, 'whoosh']);
    sc.anims.forEach((o) => { if (o.sfx) ev.push([o.st, o.sfx]); if (o.a === 'cd') for (let k = 0; k < Math.round(o.t); k++) ev.push([o.st + k, 'tick']); });
  });
  return ev.sort((a, b) => a[0] - b[0]);
};
window.CHAPTERS = () => S.map((sc) => [sc.t0, sc.tm.text.slice(0, 40)]);
if (!/render=1/.test(location.search)) { const t0 = performance.now(); (function loop() { render(((performance.now() - t0) / 1000) % TOTAL); requestAnimationFrame(loop); })(); }
};
})();
