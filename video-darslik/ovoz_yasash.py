# Darslik izohlaridan (SRT) bepul o‘zbekcha diktor ovozini yasaydi.
# O‘z kompyuteringizda ishga tushiring (internet kerak):
#   pip install edge-tts
#   python ovoz_yasash.py                  # erkak ovozi (Sardor)
#   python ovoz_yasash.py --ayol           # ayol ovozi (Madina)
# Natija: ovoz/001.mp3, ovoz/002.mp3, ... — shu papkani menga yuboring.
import asyncio, os, re, sys
import edge_tts

voice = 'uz-UZ-MadinaNeural' if '--ayol' in sys.argv else 'uz-UZ-SardorNeural'
here = os.path.dirname(os.path.abspath(__file__))
srt = open(os.path.join(here, 'maosh_tizimi_darslik.srt'), encoding='utf-8').read()
lines = [b.split('\n', 2)[2].strip() for b in re.split(r'\n\s*\n', srt.strip()) if b.count('\n') >= 2]
out = os.path.join(here, 'ovoz')
os.makedirs(out, exist_ok=True)

async def main():
    for i, text in enumerate(lines, 1):
        path = os.path.join(out, f'{i:03d}.mp3')
        if os.path.exists(path):
            continue
        await edge_tts.Communicate(text, voice, rate='+0%').save(path)
        print(f'{i}/{len(lines)}')

asyncio.run(main())
print('Tayyor:', out)
