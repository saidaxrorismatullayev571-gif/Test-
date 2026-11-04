# QGIS darsi: yumshoq fon + SFX (sichqoncha bosishlari clicks.json dan).
import json, re, numpy as np, wave
js = open('timing.js', encoding='utf-8').read()
S = json.loads(re.search(r'window\.S=(\[.*\]);window', js).group(1)); AUD = float(re.search(r'AUDIO=([\d.]+)', js).group(1))
T = AUD + 1.8; SR = 48000; N = int(SR * T); L = np.zeros(N); R = np.zeros(N); rng = np.random.default_rng(4)
A = lambda i: S[i]['a']
import re as _re
def WT(i, w):
    for x in S[i]['words']:
        if _re.sub(r"[«»\"'’‘—:,.!?]", '', x['w'].lower()).startswith(w): return x['t']
    return S[i]['a']
def at(t): return int(t * SR)
def add(sig, t, g=1.0, pan=0.0):
    i = at(t); j = min(N, i + len(sig))
    if j <= i or i < 0: return
    s = sig[: j - i] * g; L[i:j] += s * (1 - max(pan, 0)); R[i:j] += s * (1 + min(pan, 0))
def env(n, a=.002, d=.2): t = np.arange(n) / SR; return np.minimum(1, t / a) * np.exp(-t / d)
def click(): n = at(.03); t = np.arange(n) / SR; return (np.sin(2 * np.pi * 2400 * t) * .5 + rng.standard_normal(n) * .5) * env(n, .0003, .006)
def pop(f=900): n = at(.12); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(f - 450 * t / .12) / SR) * env(n, .001, .04)
def ding(f=1320): n = at(1.0); t = np.arange(n) / SR; return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * f * 2.01 * t)) * env(n, .002, .4)
def whoosh(d=.5): n = at(d); x = np.arange(n) / n; return np.convolve(rng.standard_normal(n), np.ones(40) / 40, 'same') * np.sin(np.pi * x) ** 2 * 2.4
def pad(fr, d, g=.1):
    n = at(d); t = np.arange(n) / SR; x = t / d
    s = sum(np.sin(2 * np.pi * f * t + i) * .6 + .2 * np.sin(2 * np.pi * f * 2.003 * t) for i, f in enumerate(fr))
    return s * np.minimum(1, x * 4) * np.minimum(1, (1 - x) * 4) * g
CH = [[130.8, 196, 261.6, 329.6], [110, 164.8, 220, 261.6], [87.3, 130.8, 174.6, 220], [98, 146.8, 196, 246.9]]
t, k, bar = 0.0, 0, 6.0
while t < T:
    add(pad(CH[k % 4], bar + 1.5, .05), t); t += bar; k += 1
# yengil puls (amaliyot qismida)
for b in np.arange(A(16), A(41), 60 / 84):
    n = at(.3); tt = np.arange(n) / SR; add(np.sin(2 * np.pi * np.cumsum(50 + 60 * np.exp(-tt * 30)) / SR) * env(n, .001, .12), b, .12)
for c in json.load(open('clicks.json')): add(click(), c, .55)
add(whoosh(.7), 0, .4); add(ding(990), .5, .2)
for k in range(30): add(pop(700 + 15 * k), A(2) + .6 + k * .06, .12)
add(ding(1320), WT(3, 'zich'), .3)
for k in range(6): add(pop(900 + 100 * k), A(4) + .2 + k * .55, .25)
add(whoosh(.6), WT(8, 'radiusi') - .3, .4)
for k in range(5): add(pop(1200 + 120 * k), A(12) + k * .5, .3)
add(ding(1568), A(13), .3)
add(whoosh(.6), A(16) - .6, .5)
for k in range(60): add(pop(500 + 10 * k), WT(16, 'crimepoints') + .3 + k * .05, .08)
for k in range(17): add(click(), WT(20, 'dbscan') + k / 14, .35)
for k in range(20): add(click(), S[24]['b'] + k * .06, .25)
add(ding(1760), A(25) + .4, .35)
for j in range(4): add(pop(1100 + 150 * j), WT(31, 'classify') + .4 + j * .35, .4)
for w in [34, 35, 36]: add(ding(1320 + 120 * (w - 34)), A(w), .25)
add(whoosh(.6), A(39) + .4, .5)
for w in ['sarlavha', 'legendasi', 'masshtab', 'shimol']: add(pop(1000), WT(40, w), .35)
for w in [(41, 'patrullash'), (41, 'qaror'), (42, 'epidemiologiya'), (42, 'yol'), (42, 'ekologik')]: add(pop(1200), WT(*w), .3)
add(ding(1320), A(43), .35); add(ding(1760), A(43) + .25, .25)
fade = np.minimum(1, (T - np.arange(N) / SR) / 1.5); L *= fade; R *= fade
m = np.max(np.abs(np.stack([L, R]))); st = (np.stack([L, R], 1) / m * .9 * 32767).astype(np.int16)
with wave.open('music.wav', 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(st.tobytes())
print('music', round(T, 2))
