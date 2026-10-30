# 25 s reel uchun sintez musiqa va effektlar (120 BPM), kadrlar vaqtiga mos.
import numpy as np, wave
SR = 48000; T = 25.0; N = int(SR * T)
L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(5)
def at(t): return int(t * SR)
def add(sig, t, g=1.0, pan=0.0):
    i = at(t); j = min(N, i + len(sig)); s = sig[: j - i] * g
    L[i:j] += s * (1 - max(pan, 0)); R[i:j] += s * (1 + min(pan, 0))
def env(n, a=.002, d=.2):
    t = np.arange(n) / SR; return np.minimum(1, t / a) * np.exp(-t / d)
def kick(g=1):
    n = at(.45); t = np.arange(n) / SR; f = 50 + 120 * np.exp(-t * 28)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, .001, .16) * g
def hat():
    n = at(.06); return rng.standard_normal(n) * env(n, .0005, .018) * np.where(np.arange(n) % 2, 1, -1)
def snare():
    n = at(.25); t = np.arange(n) / SR
    return (rng.standard_normal(n) * .6 + np.sin(2 * np.pi * 190 * t) * .5) * env(n, .001, .08)
def impact(d=1.6):
    n = at(d); t = np.arange(n) / SR
    boom = np.sin(2 * np.pi * np.cumsum(40 + 60 * np.exp(-t * 6)) / SR) * env(n, .002, .55)
    noise = rng.standard_normal(n) * env(n, .001, .25) * .5
    return boom + np.convolve(noise, np.ones(30) / 30, 'same')
def riser(d):
    n = at(d); t = np.arange(n) / SR; x = t / d
    sw = np.sin(2 * np.pi * np.cumsum(200 + 1800 * x ** 2) / SR) * .25
    no = rng.standard_normal(n) * .5
    hp = no - np.convolve(no, np.ones(8) / 8, 'same')
    return (sw + hp * .6) * x ** 2.2
def whoosh(d=.45):
    n = at(d); x = np.arange(n) / n; no = rng.standard_normal(n)
    k = 40; sm = np.convolve(no, np.ones(k) / k, 'same')
    return sm * np.sin(np.pi * x) ** 2 * 2.5
def beep(f=1000, d=.18):
    n = at(d); t = np.arange(n) / SR; return np.sin(2 * np.pi * f * t) * env(n, .003, .08)
def pop():
    n = at(.12); t = np.arange(n) / SR; return np.sin(2 * np.pi * np.cumsum(900 - 500 * t / .12) / SR) * env(n, .001, .04)
def ding(f=1320):
    n = at(.9); t = np.arange(n) / SR; return (np.sin(2 * np.pi * f * t) + .4 * np.sin(2 * np.pi * f * 2.01 * t)) * env(n, .002, .35)
def pad(freqs, d, g=.12):
    n = at(d); t = np.arange(n) / SR; x = t / d
    s = sum(np.sin(2 * np.pi * f * t + i) + .3 * np.sin(2 * np.pi * f * 2 * t) for i, f in enumerate(freqs))
    return s * np.minimum(1, x * 6) * np.minimum(1, (1 - x) * 3) * g
def bass(f, d):
    n = at(d); t = np.arange(n) / SR
    return (np.sin(2 * np.pi * f * t) + .25 * np.sign(np.sin(2 * np.pi * f * t))) * env(n, .005, d * .6)

# A: past dron, yurak urishi, zarba
add(pad([55, 82.4], 3.0, .10), 0)
for p in [1.03, 1.43]:
    add(beep(1000), p, .35); add(kick(.8), p - .02)
add(riser(.7), 1.55, .5)
add(impact(), 2.25, 1.0)
# B..: barabanlar (120 BPM)
BEAT = .5
CH = [(3.0, 5.6, 55), (5.6, 11.4, 49), (11.4, 16.9, 41.2), (16.9, 20.4, 55)]
for a, b, root in CH:
    t = a
    while t < b - 1e-6:
        k = round((t - a) / BEAT)
        add(kick(.9), t)
        if k % 2 == 1: add(snare(), t, .35)
        add(hat(), t + BEAT / 2, .12, .3); add(hat(), t + BEAT / 4, .05, -.3)
        add(bass(root if k % 4 < 2 else root * 1.335, BEAT * .95), t, .32)
        t += BEAT
    add(pad([root * 2, root * 3, root * 4.76], b - a, .05), a)
# riserlar va kesim zarbalari
for c in [5.6, 11.4, 16.9, 20.4]:
    add(riser(1.2), c - 1.2, .45); add(impact(1.2), c, .7)
# C: kartalar kirishi (whoosh), tasdiq belgilari (pop)
for i in range(4):
    add(whoosh(), 5.6 + .5 + i * .45 - .1, .5, (-.4, .4, -.4, .4)[i])
    add(pop(), 5.6 + 3.6 + i * .3 + .3, .45)
# D: tugun, shoxlar, chiplar
add(pop(), 11.6, .4)
for i in range(3):
    st = 11.4 + 2.2 + i * .9
    add(whoosh(.35), st, .3); add(ding(1320 + i * 220), st + .7, .25)
# E: so'zlar zarbasi
for w in [17.0, 18.0, 19.0]:
    add(impact(.8), w, .55); add(whoosh(.3), w - .2, .4)
# F: logo — katta zarba, porloq akkord, uchqun
add(pad([110, 164.8, 220, 277.2, 329.6], 4.6, .07), 20.4)
add(ding(1760), 21.2, .3); add(ding(2217), 21.3, .2)
add(pop(), 22.4, .4)
for t in np.arange(20.4, 24.4, BEAT):
    add(kick(.6), t); add(hat(), t + BEAT / 2, .08)
st = np.stack([L, R], 1)
st /= np.abs(st).max() / .89
fade = np.ones(N); fade[-at(.6):] = np.linspace(1, 0, at(.6)); st *= fade[:, None]
w = wave.open('music.wav', 'wb'); w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
w.writeframes((st * 32767).astype(np.int16).tobytes()); w.close(); print('music.wav', T, 's')
