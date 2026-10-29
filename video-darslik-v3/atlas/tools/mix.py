# Synthesises small UI sound effects and mixes them under the narration.
# Usage: python mix.py K   (reads build/narrK.raw, build/sfxK.json; writes build/audioK.wav)
import json, os, sys, wave
import numpy as np

K = sys.argv[1]
here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SR = 48000
rng = np.random.default_rng(7)

def env(n, a=0.005, d=0.2):
    t = np.arange(n) / SR
    return np.minimum(1, t / a) * np.exp(-t / d)

def tone(f, dur, d=0.3, a=0.004):
    n = int(dur * SR); t = np.arange(n) / SR
    return np.sin(2 * np.pi * f * t) * env(n, a, d)

def lowpass(x, k):
    return np.convolve(x, np.ones(k) / k, 'same')

def whoosh():
    n = int(0.55 * SR); t = np.arange(n) / SR
    noise = rng.standard_normal(n)
    sh = np.sin(np.pi * t / t[-1]) ** 2
    lo, hi = lowpass(noise, 40), lowpass(noise, 6)
    mix = lo * (1 - t / t[-1]) + (hi - lowpass(hi, 40)) * (t / t[-1]) * 0.6
    return mix * sh * 0.9

def swish():
    x = whoosh()[: int(0.3 * SR)]
    return x * np.linspace(1, 0.2, len(x))

def pop():
    n = int(0.12 * SR); t = np.arange(n) / SR
    f = 900 * np.exp(-t * 18) + 280
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.002, 0.035) * 0.8

def tick():
    n = int(0.03 * SR)
    return layer(rng.standard_normal(n) * env(n, 0.0005, 0.004), tone(2400, 0.03, 0.006)) * 0.5

def layer(*parts):
    n = max(len(p) for p in parts); out = np.zeros(n)
    for p in parts: out[: len(p)] += p
    return out

def ding():
    return layer(tone(1318.5, 1.4, 0.45), 0.5 * tone(2637, 1.0, 0.25), 0.25 * tone(3955, 0.6, 0.12)) * 0.5

def success():
    out = np.zeros(int(1.4 * SR))
    for i, f in enumerate([659.25, 830.6, 987.8, 1318.5]):
        s = int(i * 0.09 * SR); x = layer(tone(f, 1.0, 0.35), 0.3 * tone(2 * f, 0.6, 0.18))
        out[s:s + len(x)] += x[: len(out) - s] * 0.4
    return out

def thud():
    n = int(0.35 * SR); t = np.arange(n) / SR
    f = 140 * np.exp(-t * 6) + 50
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.002, 0.12) * 0.9

SFX = {'whoosh': (whoosh(), 0.16), 'swish': (swish(), 0.14), 'pop': (pop(), 0.20), 'tick': (tick(), 0.22),
       'ding': (ding(), 0.20), 'success': (success(), 0.22), 'thud': (thud(), 0.30)}

narr = np.fromfile(f'{here}/build/narr{K}.raw', np.int16).astype(np.float32) / 32768
events = json.load(open(f'{here}/build/sfx{K}.json'))
total = float(events['total'])
out = np.zeros(int((total + 0.5) * SR), np.float32)
out[: len(narr)] += narr[: len(out)]
last = {}
for t, name in events['events']:
    if name not in SFX or t < 0: continue
    if t - last.get(name, -9) < 0.12: continue  # avoid machine-gun repeats
    last[name] = t
    x, g = SFX[name]; s = int(t * SR)
    e = min(len(out), s + len(x)); out[s:e] += (x[: e - s] * g).astype(np.float32)
out /= max(1.0, np.abs(out).max() / 0.95)
pcm = (np.clip(out, -1, 1) * 32767).astype(np.int16)
with wave.open(f'{here}/build/audio{K}.wav', 'wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print(f'audio{K}.wav: {len(pcm) / SR:.1f}s, {len(events["events"])} sfx events')
