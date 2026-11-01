# align.json (gap vaqtlari) -> timing.js (so‘z vaqtlari, bo‘g‘inlarga qarab taqsimlangan)
import json, re
d = json.load(open('align.json', encoding='utf-8'))
out = []
for s in d['sents']:
    ws = s['t'].split()
    syl = [max(1, len(re.findall(r'[aeiouAEIOU]', w))) for w in ws]
    tot, acc, a, b = sum(syl), 0, s['a'], s['b']
    words = []
    for w, k in zip(ws, syl):
        t0 = a + (b - a) * acc / tot; acc += k
        words.append({'w': w, 't': round(t0, 3), 'e': round(a + (b - a) * acc / tot, 3)})
    out.append({'a': a, 'b': b, 'p': s['p'], 'words': words})
open('timing.js', 'w', encoding='utf-8').write('window.S=' + json.dumps(out, ensure_ascii=False) + ';window.AUDIO=' + str(round(d['duration'], 3)) + ';')
print(len(out), 'sentences')
