# Reel 01: sintez fon musiqasi + SFX, timing.js dagi so‘z vaqtlariga bog‘langan.
import json, re, numpy as np, wave
js = open('timing.js', encoding='utf-8').read()
S = json.loads(re.search(r'window\.S=(\[.*\]);window', js).group(1))
AUD = float(re.search(r'AUDIO=([\d.]+)', js).group(1))
T = AUD + 1.6; SR = 48000; N = int(SR * T)
L = np.zeros(N); R = np.zeros(N); rng = np.random.default_rng(7)
A = lambda i: S[i]['a']
def WT(i, s):
    for w in S[i]['words']:
        if w['w'].lower().startswith(s): return w['t']
    return S[i]['a']
def at(t): return int(t * SR)
def add(sig, t, g=1.0, pan=0.0):
    i = at(t); j = min(N, i + len(sig))
    if j <= i: return
    s = sig[: j - i] * g; L[i:j] += s * (1 - max(pan, 0)); R[i:j] += s * (1 + min(pan, 0))
def env(n, a=.002, d=.2): t = np.arange(n) / SR; return np.minimum(1, t / a) * np.exp(-t / d)
def kick(g=1):
    n = at(.4); t = np.arange(n) / SR; f = 48 + 110 * np.exp(-t * 30)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, .001, .14) * g
def hat(): n = at(.05); return rng.standard_normal(n) * env(n, .0005, .015)
def impact(d=1.8):
    n = at(d); t = np.arange(n) / SR
    boom = np.sin(2 * np.pi * np.cumsum(38 + 70 * np.exp(-t * 5)) / SR) * env(n, .002, .6)
    no = rng.standard_normal(n) * env(n, .001, .3) * .5
    return boom + np.convolve(no, np.ones(30) / 30, 'same')
def riser(d):
    n = at(d); t = np.arange(n) / SR; x = t / d
    no = rng.standard_normal(n); hp = no - np.convolve(no, np.ones(8) / 8, 'same')
    return (np.sin(2 * np.pi * np.cumsum(220 + 1500 * x ** 2) / SR) * .2 + hp * .5) * x ** 2.4
def whoosh(d=.5):
    n = at(d); x = np.arange(n) / n; sm = np.convolve(rng.standard_normal(n), np.ones(40) / 40, 'same')
    return sm * np.sin(np.pi * x) ** 2 * 2.4
def pop(f=900):
    n = at(.12); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(f - 450 * t / .12) / SR) * env(n, .001, .04)
def ding(f=1320):
    n = at(1.0); t = np.arange(n) / SR; return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * f * 2.01 * t)) * env(n, .002, .4)
def tick():
    n = at(.03); return rng.standard_normal(n) * env(n, .0003, .006)
def notif():
    return np.concatenate([pop(1400) * .8, np.zeros(at(.05)), pop(1800) * .8])
def pad(fr, d, g=.1):
    n = at(d); t = np.arange(n) / SR; x = t / d
    s = sum(np.sin(2 * np.pi * f * t + i) + .25 * np.sin(2 * np.pi * f * 2.003 * t) for i, f in enumerate(fr))
    return s * np.minimum(1, x * 5) * np.minimum(1, (1 - x) * 4) * g
def bass(f, d):
    n = at(d); t = np.arange(n) / SR; return np.sin(2 * np.pi * f * t) * env(n, .01, d * .7)

BEAT = 60 / 96
# akkordlar: muammo qismi minor, yechim qismi major
MIN = [[110, 130.8, 164.8], [87.3, 110, 130.8], [98, 123.5, 146.8], [82.4, 103.8, 123.5]]   # Am F G E
MAJ = [[130.8, 164.8, 196], [98, 123.5, 146.8], [110, 130.8, 164.8], [87.3, 110, 130.8]]   # C G Am F
def section(a, b, chords, drums=True, g=1.0):
    t, k = a, 0
    while t < b - .05:
        d = min(BEAT * 4, b - t); c = chords[k % 4]
        add(pad(c, d + .3, .07 * g), t); add(bass(c[0] / 2, d), t, .35 * g)
        if drums:
            for q in range(4):
                bt = t + q * BEAT
                if bt >= b: break
                if q in (0, 2): add(kick(.55 * g), bt)
                add(hat(), bt + BEAT / 2, .12 * g, .3)
        t += BEAT * 4; k += 1

# hook: past dron, keyin puls
add(pad([55, 82.4], A(2), .08), 0)
add(whoosh(.7), 0, .5); add(impact(), A(0) + .05, .7)
add(riser(1.3), A(1) - .2, .35); add(impact(1.2), A(2) - .05, .45)
section(A(2), A(13), MIN)
section(A(13), A(16), MIN[:1] * 4, drums=False, g=.8)
section(A(16), T, MAJ)
# SFX
for k in range(3): add(pop(1000 + 150 * k), A(2) + .3 + k * .22, .5)
add(whoosh(), A(3) - .3, .4)
add(impact(.8), WT(4, 'to‘xtab'), .5)
for s in ['chegirma', 'erta', 'ta’til']: add(notif(), WT(7, s), .45, .2)
for k in range(10): add(notif(), A(8) + k * .14, .18, (k % 3 - 1) * .5)
add(whoosh(), A(9) - .3, .4)
c0, c1 = A(10) + .5, A(11) - .7
for k in range(29): add(tick(), c0 + (c1 - c0) * k / 29, .6)
for s, f in [('o‘sadimi', 1500), ('joyida', 1200)]: add(pop(f), WT(11, s), .45)
add(pop(600), WT(12, 'tushib'), .5)
add(whoosh(.6), WT(13, 'hamma') - .2, .5)
add(pop(500), WT(14, 'emas'), .5)
add(impact(2.0), WT(15, 'tizim'), .9)
add(riser(.9), A(16) - .9, .25)
add(ding(1320), WT(16, 'tabriklayman'), .4); add(ding(1760), WT(16, 'tabriklayman') + .3, .25)
for k in range(3): add(pop(1200 + 200 * k), WT(18, '«ha»') + k * .25, .45)
add(whoosh(), A(20) - .2, .4); add(ding(990), A(20) + .1, .3)
add(ding(1568), A(21), .3)
# yakun so‘nishi
fade = np.minimum(1, (T - np.arange(N) / SR) / 1.2); L *= fade; R *= fade
m = np.max(np.abs(np.stack([L, R]))); st = (np.stack([L, R], 1) / m * .9 * 32767).astype(np.int16)
with wave.open('music.wav', 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(st.tobytes())
print('music.wav', round(T, 2), 's')
