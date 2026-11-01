# Reel 02 (Kobra effekti): sintez fon + SFX, timing.js ga bog‘langan.
import json, re, numpy as np, wave, sys
sys.path.insert(0, '../01_sizsiz')
js = open('timing.js', encoding='utf-8').read()
S = json.loads(re.search(r'window\.S=(\[.*\]);window', js).group(1))
AUD = float(re.search(r'AUDIO=([\d.]+)', js).group(1))
T = AUD + 1.6; SR = 48000; N = int(SR * T)
L = np.zeros(N); R = np.zeros(N); rng = np.random.default_rng(11)
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
    n = at(.4); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(48 + 110 * np.exp(-t * 30)) / SR) * env(n, .001, .14) * g
def hat(): n = at(.05); return rng.standard_normal(n) * env(n, .0005, .015)
def impact(d=1.8):
    n = at(d); t = np.arange(n) / SR
    return np.sin(2 * np.pi * np.cumsum(38 + 70 * np.exp(-t * 5)) / SR) * env(n, .002, .6) + np.convolve(rng.standard_normal(n) * env(n, .001, .3) * .5, np.ones(30) / 30, 'same')
def riser(d):
    n = at(d); t = np.arange(n) / SR; x = t / d; no = rng.standard_normal(n); hp = no - np.convolve(no, np.ones(8) / 8, 'same')
    return (np.sin(2 * np.pi * np.cumsum(220 + 1500 * x ** 2) / SR) * .2 + hp * .5) * x ** 2.4
def whoosh(d=.5):
    n = at(d); x = np.arange(n) / n; return np.convolve(rng.standard_normal(n), np.ones(40) / 40, 'same') * np.sin(np.pi * x) ** 2 * 2.4
def pop(f=900):
    n = at(.12); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(f - 450 * t / .12) / SR) * env(n, .001, .04)
def ding(f=1320):
    n = at(1.0); t = np.arange(n) / SR; return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * f * 2.01 * t)) * env(n, .002, .4)
def coin():
    return np.concatenate([ding(1975)[:at(.08)] * .7, ding(2637)[:at(.4)]])
def hiss(d=.7):
    n = at(d); x = np.arange(n) / n; no = rng.standard_normal(n); hp = no - np.convolve(no, np.ones(4) / 4, 'same')
    return hp * np.sin(np.pi * x) ** .5 * (1 - x) * .9
def key(): n = at(.025); return rng.standard_normal(n) * env(n, .0002, .004)
def pad(fr, d, g=.1):
    n = at(d); t = np.arange(n) / SR; x = t / d
    s = sum(np.sin(2 * np.pi * f * t + i) + .25 * np.sin(2 * np.pi * f * 2.003 * t) for i, f in enumerate(fr))
    return s * np.minimum(1, x * 5) * np.minimum(1, (1 - x) * 4) * g
def bass(f, d): n = at(d); t = np.arange(n) / SR; return np.sin(2 * np.pi * f * t) * env(n, .01, d * .7)
BEAT = 60 / 92
# Sharqona moda (D frigiy) — hikoya qismi; keyin biznes qismi minor puls
PH = [[73.4, 110, 146.8], [77.8, 116.5, 155.6], [73.4, 110, 146.8], [65.4, 98, 130.8]]
MN = [[110, 130.8, 164.8], [87.3, 110, 130.8], [98, 123.5, 146.8], [82.4, 103.8, 123.5]]
MJ = [[130.8, 164.8, 196], [98, 123.5, 146.8], [110, 130.8, 164.8], [87.3, 110, 130.8]]
def section(a, b, ch, drums=True, g=1.0, tabla=False):
    t, k = a, 0
    while t < b - .05:
        d = min(BEAT * 4, b - t); c = ch[k % 4]
        add(pad(c, d + .3, .07 * g), t); add(bass(c[0] / 2, d), t, .35 * g)
        for q in range(4):
            bt = t + q * BEAT
            if bt >= b: break
            if drums and q in (0, 2): add(kick(.5 * g), bt)
            if tabla: add(pop(260 + 60 * (q % 2)), bt + BEAT * .5, .25 * g)
            elif drums: add(hat(), bt + BEAT / 2, .12 * g, .3)
        t += BEAT * 4; k += 1
add(whoosh(.7), 0, .5); add(hiss(), A(0) + .1, .5); add(impact(), A(1), .6)
section(A(2), A(10) - .3, PH, drums=False, tabla=True)
add(coin(), WT(3, 'pul'), .45)
c0, c1 = A(4) + .3, A(6) - .3
for k in range(16): add(pop(500 + 40 * k), c0 + (c1 - c0) * (k / 16) ** .7, .25)
add(impact(1.0), WT(6, 'bekor'), .7)
add(hiss(1.0), A(7) + .2, .4, -.3); add(hiss(1.0), A(7) + .8, .35, .3)
add(pop(700), A(8) + .3, .4); add(riser(.8), WT(8, 'ko‘paydi') - .5, .3); add(impact(.9), WT(8, 'ko‘paydi') + .2, .5)
add(riser(1.2), A(10) - 1.2, .35); add(impact(2.0), WT(10, 'kobra'), .9)
section(A(11), A(15), MN)
for k in range(int((A(15) - A(12) - .5) * 12)):
    tt = A(12) + .5 + k / 12; add(key(), tt, .35 if tt < A(13) else .55, (k % 3 - 1) * .3)
add(pop(400), WT(14, 'matn'), .5)
section(A(15), T, MJ)
add(ding(1320), A(16), .35); add(pop(300), A(17), .45)
add(whoosh(), A(19) + .1, .4); add(ding(1568), A(20), .3)
fade = np.minimum(1, (T - np.arange(N) / SR) / 1.2); L *= fade; R *= fade
m = np.max(np.abs(np.stack([L, R]))); st = (np.stack([L, R], 1) / m * .9 * 32767).astype(np.int16)
with wave.open('music.wav', 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(st.tobytes())
print('music.wav', round(T, 2))
