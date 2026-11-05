# Mavzu 7: yumshoq fon + SFX.
import json, re, numpy as np, wave
js = open('timing.js', encoding='utf-8').read()
S = json.loads(re.search(r'window\.S=(\[.*\]);window', js).group(1)); AUD = float(re.search(r'AUDIO=([\d.]+)', js).group(1))
T = AUD + 1.8; SR = 48000; N = int(SR * T); L = np.zeros(N); R = np.zeros(N); rng = np.random.default_rng(7)
A = lambda i: S[i]['a']
def WT(i, w):
    for x in S[i]['words']:
        if re.sub(r"[«»\"'’‘—:,.!?=()/]", '', x['w'].lower()).startswith(w): return x['t']
    return S[i]['a']
def at(t): return int(t * SR)
def add(sig, t, g=1.0):
    i = at(t); j = min(N, i + len(sig))
    if j <= i or i < 0: return
    L[i:j] += sig[: j - i] * g; R[i:j] += sig[: j - i] * g
def env(n, a=.002, d=.2): t = np.arange(n) / SR; return np.minimum(1, t / a) * np.exp(-t / d)
def pop(f=900): n = at(.12); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(f - 450 * t / .12) / SR) * env(n, .001, .04)
def ding(f=1320): n = at(1.0); t = np.arange(n) / SR; return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * f * 2.01 * t)) * env(n, .002, .4)
def whoosh(d=.5): n = at(d); x = np.arange(n) / n; return np.convolve(rng.standard_normal(n), np.ones(40) / 40, 'same') * np.sin(np.pi * x) ** 2 * 2.4
def pad(fr, d, g=.1):
    n = at(d); t = np.arange(n) / SR; x = t / d
    return sum(np.sin(2 * np.pi * f * t + i) * .6 + .2 * np.sin(2 * np.pi * f * 2.003 * t) for i, f in enumerate(fr)) * np.minimum(1, x * 4) * np.minimum(1, (1 - x) * 4) * g
CH = [[146.8, 220, 293.7, 370], [123.5, 185, 246.9, 293.7], [98, 146.8, 196, 246.9], [110, 164.8, 220, 277.2]]
t, k = 0.0, 0
while t < T: add(pad(CH[k % 4], 7.5, .05), t); t += 6; k += 1
for b in np.arange(A(2), A(18), 60 / 96):
    n = at(.3); tt = np.arange(n) / SR; add(np.sin(2 * np.pi * np.cumsum(50 + 60 * np.exp(-tt * 30)) / SR) * env(n, .001, .12), b, .1)
add(whoosh(.7), 0, .4); add(ding(990), .5, .2)
for i in range(2, 18): add(whoosh(.45), A(i) - .2, .3)
W = [(3, ['tugunlar', 'qirralar', 'ogirlik']), (9, ['closest', 'eng']), (11, ['shortest', 'service']), (12, ['pgrouting']),
     (5, ['dijkstra']), (7, ['service']), (8, ['tez']), (13, ['transport', 'tez', 'logistika']),
     (14, ['5', '10', '15']), (15, ['tez', 'ot']), (16, ['biznes'])]
for i, ws in W:
    for j, w in enumerate(ws): add(pop(900 + 120 * j), WT(i, w), .3)
add(ding(1320), A(18), .35); add(ding(1760), A(18) + .25, .25)
fade = np.minimum(1, (T - np.arange(N) / SR) / 1.5); L *= fade; R *= fade
m = np.max(np.abs(np.stack([L, R]))); st = (np.stack([L, R], 1) / m * .9 * 32767).astype(np.int16)
with wave.open('music.wav', 'wb') as w: w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(st.tobytes())
print('music', round(T, 2))
