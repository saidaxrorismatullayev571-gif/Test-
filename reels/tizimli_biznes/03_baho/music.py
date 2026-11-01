# Reel 03 (BAHO): sintez fon + SFX, timing.js ga bog‘langan.
import json, re, numpy as np, wave
js = open('timing.js', encoding='utf-8').read()
S = json.loads(re.search(r'window\.S=(\[.*\]);window', js).group(1))
AUD = float(re.search(r'AUDIO=([\d.]+)', js).group(1))
T = AUD + 1.8; SR = 48000; N = int(SR * T)
L = np.zeros(N); R = np.zeros(N); rng = np.random.default_rng(23)
A = lambda i: S[i]['a']
def WT(i, s):
    for w in S[i]['words']:
        if w['w'].lower().replace('«', '').replace('»', '').startswith(s): return w['t']
    return S[i]['a']
def at(t): return int(t * SR)
def add(sig, t, g=1.0, pan=0.0):
    i = at(t); j = min(N, i + len(sig))
    if j <= i: return
    s = sig[: j - i] * g; L[i:j] += s * (1 - max(pan, 0)); R[i:j] += s * (1 + min(pan, 0))
def env(n, a=.002, d=.2): t = np.arange(n) / SR; return np.minimum(1, t / a) * np.exp(-t / d)
def kick(g=1): n = at(.4); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(48 + 110 * np.exp(-t * 30)) / SR) * env(n, .001, .14) * g
def snare(): n = at(.2); t = np.arange(n) / SR; return (rng.standard_normal(n) * .6 + np.sin(2 * np.pi * 190 * t) * .4) * env(n, .001, .07)
def hat(): n = at(.05); return rng.standard_normal(n) * env(n, .0005, .015)
def impact(d=1.6):
    n = at(d); t = np.arange(n) / SR
    return np.sin(2 * np.pi * np.cumsum(38 + 70 * np.exp(-t * 5)) / SR) * env(n, .002, .55) + np.convolve(rng.standard_normal(n) * env(n, .001, .3) * .5, np.ones(30) / 30, 'same')
def riser(d):
    n = at(d); t = np.arange(n) / SR; x = t / d; no = rng.standard_normal(n); hp = no - np.convolve(no, np.ones(8) / 8, 'same')
    return (np.sin(2 * np.pi * np.cumsum(220 + 1500 * x ** 2) / SR) * .2 + hp * .5) * x ** 2.4
def whoosh(d=.45):
    n = at(d); x = np.arange(n) / n; return np.convolve(rng.standard_normal(n), np.ones(40) / 40, 'same') * np.sin(np.pi * x) ** 2 * 2.4
def pop(f=900): n = at(.12); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(f - 450 * t / .12) / SR) * env(n, .001, .04)
def ding(f=1320): n = at(1.0); t = np.arange(n) / SR; return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * f * 2.01 * t)) * env(n, .002, .4)
def tick(): n = at(.02); return rng.standard_normal(n) * env(n, .0002, .004)
def buzz(): n = at(.35); t = np.arange(n) / SR; return np.sign(np.sin(2 * np.pi * 110 * t)) * env(n, .005, .12) * .5
def pad(fr, d, g=.1):
    n = at(d); t = np.arange(n) / SR; x = t / d
    s = sum(np.sin(2 * np.pi * f * t + i) + .25 * np.sin(2 * np.pi * f * 2.003 * t) for i, f in enumerate(fr))
    return s * np.minimum(1, x * 5) * np.minimum(1, (1 - x) * 4) * g
def bass(f, d): n = at(d); t = np.arange(n) / SR; return np.sin(2 * np.pi * f * t) * env(n, .01, d * .7)
BEAT = 60 / 92
MN = [[110, 130.8, 164.8], [87.3, 110, 130.8], [98, 123.5, 146.8], [82.4, 103.8, 123.5]]
MJ = [[130.8, 164.8, 196], [98, 123.5, 146.8], [110, 130.8, 164.8], [87.3, 110, 130.8]]
def section(a, b, ch, drums=True, g=1.0):
    t, k = a, 0
    while t < b - .05:
        d = min(BEAT * 4, b - t); c = ch[k % 4]
        add(pad(c, d + .3, .07 * g), t); add(bass(c[0] / 2, d), t, .35 * g)
        if drums:
            for q in range(4):
                bt = t + q * BEAT
                if bt >= b: break
                if q in (0, 2): add(kick(.55 * g), bt)
                if q in (1, 3): add(snare(), bt, .18 * g)
                add(hat(), bt + BEAT / 2, .12 * g, .3)
        t += BEAT * 4; k += 1
add(pad([55, 82.4], A(6), .07), 0)
add(impact(), WT(0, 'uch'), .8); add(pop(500), A(2), .5); add(impact(.8), WT(2, 'menga'), .5)
add(riser(.8), A(3) - .3, .3)
c0, c1 = A(4) + .3, A(4) + 2.6
for k in range(36): add(tick(), c0 + (c1 - c0) * k / 36, .5)
for k in range(3): add(pop(700 + 120 * k), A(4) + 1.6 + k * .5, .5)
add(buzz(), WT(5, 'xafagarchilik'), .5); add(buzz(), WT(5, 'adolatsizlik'), .5)
add(whoosh(.5), A(6) - .25, .6); add(impact(1.0), A(6) - .05, .4)
section(A(6), A(14), MN)
for k in range(5): add(pop(600 + 150 * k), A(6) + .6 + k * .15, .35)
add(whoosh(), A(7) - .2, .4); add(pop(1300), A(8), .4); add(pop(900), A(9), .4)
add(ding(1568), WT(10, 'javob'), .35)
for i in range(6): add(tick(), A(11) + .3 + i * .28, .9); add(pop(1500), A(11) + .3 + i * .28, .15)
add(buzz(), WT(12, 'qizil'), .35)
add(whoosh(.6), A(13) - .2, .55); add(pop(500), A(13) + .9, .5)
section(A(14), T, MJ)
add(ding(1320), WT(14, 'to‘rt'), .3)
add(riser(.9), A(15) - .9, .3); add(impact(1.0), WT(15, 'bepul'), .5); add(ding(2093), WT(15, 'bepul') + .05, .3)
for k in range(4): add(tick(), WT(16, 'baho') + k * .15, .9)
add(ding(1760), WT(16, 'baho') + .7, .35)
fade = np.minimum(1, (T - np.arange(N) / SR) / 1.2); L *= fade; R *= fade
m = np.max(np.abs(np.stack([L, R]))); st = (np.stack([L, R], 1) / m * .9 * 32767).astype(np.int16)
with wave.open('music.wav', 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(st.tobytes())
print('music.wav', round(T, 2))
