# Builds per-part narration (with silent gaps for quiz countdowns) and the timing file the page reads.
# Usage: python prep.py K   (reads qismK_matn.txt, vaqtK.json, audio_in/qismK.mp3)
import json, os, re, subprocess, sys
import numpy as np

K = sys.argv[1]
here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GAP = 5.0
SR = 48000
paras = [p.strip() for p in open(f'{here}/qism{K}_matn.txt', encoding='utf-8').read().split('\n\n') if p.strip()]
al = json.load(open(f'{here}/vaqt{K}.json', encoding='utf-8'))
pcm = subprocess.run(['ffmpeg', '-v', 'error', '-i', f'{here}/audio_in/qism{K}.mp3', '-ac', '1', '-ar', str(SR), '-f', 's16le', '-'],
                     capture_output=True).stdout
x = np.frombuffer(pcm, np.int16).astype(np.float32) / 32768

scenes = []
for pi, p in enumerate(paras):
    ss = [s for s in al['sents'] if s['p'] == pi]
    quiz = bool(re.search(r'o‘ylang\.|O‘ylab ko‘ring\.', p))
    scenes.append({'text': p, 'a': ss[0]['a'], 'b': ss[-1]['b'], 'quiz': quiz,
                   'sents': [{'t': s['t'], 'a': s['a'], 'b': s['b']} for s in ss]})

# insert silence after each quiz paragraph and shift later times
out, cursor, shift = [], 0, 0.0
for sc in scenes:
    for key in ('a', 'b'): sc[key] += shift
    for s in sc['sents']: s['a'] += shift; s['b'] += shift
    if sc['quiz']:
        cut = sc['b'] - shift + 0.15
        n = int(cut * SR)
        out.append(x[cursor:n]); out.append(np.zeros(int(GAP * SR), np.float32)); cursor = n
        sc['gap'] = GAP
        shift += GAP
out.append(x[cursor:])
y = np.concatenate(out)
peak = np.abs(y).max() or 1
y = y / peak * 0.89
os.makedirs(f'{here}/build', exist_ok=True)
(np.clip(y, -1, 1) * 32767).astype(np.int16).tofile(f'{here}/build/narr{K}.raw')
dur = len(y) / SR
for sc in scenes:
    for key in ('a', 'b'): sc[key] = round(sc[key], 3)
open(f'{here}/build/timing{K}.js', 'w', encoding='utf-8').write(
    'window.TIMING=' + json.dumps({'dur': round(dur, 3), 'scenes': scenes}, ensure_ascii=False) + ';\n')
print(f'qism{K}: {len(scenes)} scenes, {sum(s["quiz"] for s in scenes)} quiz gaps, {dur:.1f}s')
