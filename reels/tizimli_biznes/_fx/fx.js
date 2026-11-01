// Tizimli Biznes reellari uchun umumiy effektlar to‘plami.
// Hamma narsa faqat t (vaqt) ga bog‘liq — kadrlar istalgan tartibda, ko‘p oqimda render qilinadi.
(function () {
  const C = (x) => Math.max(0, Math.min(1, x));
  const eo = (x) => 1 - Math.pow(1 - C(x), 3);
  const eb = (x) => { x = C(x); const c = 1.7; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };
  const h = (n) => { const s = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return s - Math.floor(s); };
  const vis = (t, a, b, fi = .3, fo = .3) => Math.min(eo((t - a) / fi), 1 - C((t - b) / fo));
  function set(el, o, tf = '', extra) {
    el.style.opacity = o; el.style.transform = tf; el.style.visibility = o > .001 ? 'visible' : 'hidden';
    if (extra !== undefined) el.style.filter = extra;
  }
  // so‘zlarni <span class="w"> ga o‘rash (rangli span ichidagilar ham)
  function wrapWords(root) {
    const walk = (node) => {
      [...node.childNodes].forEach((ch) => {
        if (ch.nodeType === 3) {
          const parts = ch.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) frag.appendChild(document.createTextNode(p));
            else { const s = document.createElement('span'); s.className = 'w'; s.textContent = p; s.style.display = 'inline-block'; frag.appendChild(s); }
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && ch.tagName !== 'BR' && !ch.classList.contains('w')) walk(ch);
      });
    };
    walk(root); return [...root.querySelectorAll('.w')];
  }
  // sarlavha: blok ko‘rinadi, so‘zlar ketma-ket «sakrab» chiqadi
  function headline(el, t, a, b, stagger = .07) {
    if (!el._w) el._w = wrapWords(el);
    const o = vis(t, a - .05, b, .12, .25); set(el, o, `translateY(${(1 - eo((t - a) / .4)) * 30}px)`);
    el._w.forEach((w, i) => {
      const k = (t - a - i * stagger) / .38; const e = eb(k);
      w.style.opacity = C(k * 2.5); w.style.transform = `translateY(${(1 - e) * 46}px) scale(${.7 + .3 * e})`;
      w.style.filter = `blur(${(1 - C(k * 1.6)) * 10}px)`;
    });
    return o;
  }
  // ekran silkinishi: [[t0, amp, dur], ...]
  function shake(t, list) {
    let x = 0, y = 0, r = 0;
    list.forEach(([t0, amp, dur]) => { const k = (t - t0) / dur; if (k < 0 || k > 1) return; const d = Math.pow(1 - k, 2) * amp;
      x += Math.sin(t * 83) * d; y += Math.cos(t * 71) * d * .8; r += Math.sin(t * 57) * d * .02; });
    return `translate(${x}px,${y}px) rotate(${r}deg)`;
  }
  // tez o‘tish (whip): kiruvchi qatlam uchun
  function whip(t, t0, dir = 1, d = .35) {
    const k = eo((t - t0) / d); return { o: C((t - t0) / .12), tf: `translateX(${(1 - k) * 22 * dir}%) scale(${1.08 - .02 * k})`, f: `blur(${(1 - k) * 22}px)` };
  }
  // zarralar
  function dust(ctx, t, n = 60, col = '170,210,255', speed = 22, size = 3) {
    for (let i = 0; i < n; i++) {
      const sx = h(i) * 1080, sp = speed * (.5 + h(i + 99)), y = 1920 - ((t * sp + h(i + 7) * 1920) % 2100);
      const x = sx + Math.sin(t * .6 + i) * 30, a = (.25 + .5 * h(i + 3)) * (.6 + .4 * Math.sin(t * 3 + i * 1.7));
      ctx.fillStyle = `rgba(${col},${a})`; ctx.beginPath(); ctx.arc(x, y, size * (.5 + h(i + 11)), 0, 7); ctx.fill();
    }
  }
  function burst(ctx, t, t0, o) {
    const k = t - t0; if (k < 0 || k > (o.life || 2.2)) return;
    const n = o.n || 70, cols = o.colors || ['#f5b942', '#38bdf8', '#22c55e', '#ef4444', '#ffffff'];
    for (let i = 0; i < n; i++) {
      const ang = (o.dir || -Math.PI / 2) + (h(i + t0) - .5) * (o.spread || 2.2), v = (o.v || 1100) * (.35 + .65 * h(i * 3 + t0));
      const x = o.x + Math.cos(ang) * v * k, y = o.y + Math.sin(ang) * v * k + (o.g || 1600) * k * k * .5;
      const a = 1 - C((k - (o.life || 2.2) * .6) / ((o.life || 2.2) * .4)), rot = k * 12 * (h(i) - .5);
      ctx.save(); ctx.globalAlpha = a; ctx.translate(x, y); ctx.rotate(rot);
      if (o.kind === 'coin') { const w = 26 * Math.abs(Math.cos(k * 9 + i)); ctx.fillStyle = '#f5b942'; ctx.strokeStyle = '#a36b00'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(0, 0, w + 2, 28, 0, 0, 7); ctx.fill(); ctx.stroke(); }
      else { ctx.fillStyle = cols[i % cols.length]; ctx.fillRect(-9, -5, 18, 10); }
      ctx.restore();
    }
  }
  // kino donadorligi
  const gc = document.createElement('canvas'); gc.width = 270; gc.height = 480; const gx = gc.getContext('2d');
  function grain(ctx, t, a = .07) {
    const img = gx.createImageData(270, 480), seed = Math.floor(t * 30);
    for (let i = 0; i < img.data.length; i += 4) { const v = h(i * .37 + seed * 1.13) * 255; img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255; }
    gx.putImageData(img, 0, 0); ctx.save(); ctx.globalAlpha = a; ctx.globalCompositeOperation = 'overlay'; ctx.drawImage(gc, 0, 0, 1080, 1920); ctx.restore();
  }
  function chip(el, t, a, b) { const o = vis(t, a, b, .3, .3); set(el, o, `translateX(${(1 - eo((t - a) / .45)) * -60}px)`); }
  window.FX = { C, eo, eb, h, vis, set, wrapWords, headline, shake, whip, dust, burst, grain, chip };
})();
