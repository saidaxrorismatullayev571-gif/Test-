# Aligns narration sentences to an audio file.
# Syllable nuclei (loudness peaks) give a time warp from text syllables to audio time;
# each sentence boundary is then snapped to the nearest real pause.
# Usage: python align.py matn.txt audio.mp3 out.json
import json, re, subprocess, sys
import numpy as np
from scipy.signal import find_peaks

txt, audio, out = sys.argv[1:4]
paras = [p.strip() for p in open(txt, encoding='utf-8').read().split('\n\n') if p.strip()]
sents = [(pi, s.strip()) for pi, p in enumerate(paras) for s in re.split(r'(?<=[.?!])\s+', p) if s.strip()]
syl = np.array([max(1, len(re.findall(r'[aeiouAEIOU]', s))) for _, s in sents], float)

SR = 16000
pcm = subprocess.run(['ffmpeg', '-v', 'error', '-i', audio, '-ac', '1', '-ar', str(SR), '-f', 's16le', '-'],
                     capture_output=True).stdout
x = np.frombuffer(pcm, np.int16).astype(np.float32) / 32768
dur = len(x) / SR
hop, win = 160, 400
n = 1 + (len(x) - win) // hop
frames = np.lib.stride_tricks.as_strided(x, (n, win), (x.strides[0] * hop, x.strides[0]))
db = 10 * np.log10((frames ** 2).mean(1) + 1e-10)
db = np.convolve(db, np.ones(3) / 3, 'same')
t = np.arange(n) * hop / SR + win / 2 / SR
floor = np.percentile(db, 95) - 28
speech = db > floor

# pauses: runs of non-speech >= 180 ms
pauses, i = [], 0
while i < n:
    if not speech[i]:
        j = i
        while j < n and not speech[j]: j += 1
        if (j - i) * hop / SR >= 0.18: pauses.append((t[i], t[j - 1]))
        i = j
    else: i += 1
start = pauses[0][1] if pauses and pauses[0][0] < 0.05 else 0.0
endt = pauses[-1][0] if pauses and pauses[-1][1] > dur - 0.15 else dur

pk, _ = find_peaks(np.where(speech, db, floor), prominence=2.0, distance=7)
nuc = t[pk]
nuc = nuc[(nuc > start) & (nuc < endt)]
# time warp: cumulative syllable fraction -> nucleus time
cum = np.concatenate([[0], np.cumsum(syl)]) / syl.sum()
grid = np.concatenate([[start], nuc, [endt]])
gf = np.linspace(0, 1, len(grid))
bt = np.interp(cum, gf, grid)  # boundary times (len = sentences + 1)

iv = []
prev_end = start
for k in range(len(sents)):
    a = prev_end
    if k == len(sents) - 1:
        b = endt
    else:
        guess = bt[k + 1]
        near = [p for p in pauses if abs((p[0] + p[1]) / 2 - guess) < 1.2 and p[0] > a + 0.3]
        if near:
            p = min(near, key=lambda p: abs((p[0] + p[1]) / 2 - guess) - 0.6 * (p[1] - p[0]))
            b, prev_end = p[0], p[1]
        else:
            b = prev_end = max(guess, a + 0.5 * syl[k] * (endt - start) / syl.sum())
    iv.append((a, b))

rate = (endt - start) / syl.sum()
ratios = np.array([(b - a) / (s * rate) for (a, b), s in zip(iv, syl)])
json.dump({'duration': dur, 'paras': len(paras),
           'sents': [{'p': p, 't': s, 'a': round(float(a), 3), 'b': round(float(b), 3)} for (p, s), (a, b) in zip(sents, iv)]},
          open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print(f'{txt}: {len(sents)} sentences, {len(nuc)} nuclei / {int(syl.sum())} syllables, {len(pauses)} pauses, '
      f'ratio {ratios.min():.2f}..{ratios.max():.2f}, audio {dur:.1f}s')
for k in np.argsort(np.abs(np.log(ratios)))[-3:]:
    print('  ', round(float(ratios[k]), 2), sents[k][1][:60])
