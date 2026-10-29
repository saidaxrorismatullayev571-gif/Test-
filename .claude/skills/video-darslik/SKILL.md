---
name: video-darslik
description: O‘zbekcha animatsiyali videodarslik (16:9) yasash — matn yoki docx dan diktor matni, Google AI Studio ovozi, ovozga so‘z-so‘z bog‘langan HTML animatsiya, SFX va MP4 render. Foydalanuvchi "video darslik", "animatsiyali video", "dars videosi", "diktor ovozi bilan video", "Atlas Naqsh uslubida" kabi so‘rov berganda ishlating.
---

# Videodarslik yasash (repo: `video-darslik-v3/atlas` — andoza)

Foydalanuvchi bilan **o‘zbek tilida** gaplashing. Matnlarni copy-paste uchun tayyor bering; TTS uchun berilgan faylda faqat aytiladigan matn bo‘lsin, ko‘rsatma yozmang. Natija **bitta umumiy video** (qismlarga bo‘lmang, alohida so‘ralmasa).

## 1. Diktor matni
- Manbadan (docx/pdf) to‘liq diktor matni yozing: paragraflar bo‘sh qator bilan ajratiladi, har paragraf ≈ bitta sahna.
- Raqamlarni **so‘z bilan** yozing ("ikki million besh yuz ming so‘m"), qavs ishlatmang, misollarda ism bering (Aziz, Bobur, Charos, Dilnoza).
- Ovoz: Google AI Studio → Generate speech (Gemini TTS). Foydalanuvchi MP3 yuboradi (30 MB dan katta bo‘lsa MP3 ga o‘girib yoki Drive orqali).

## 2. Loyiha tuzilmasi
`video-darslik-v3/atlas/` ni yangi papkaga nusxalang (build/, out/ siz). Fayllar:
- `qism1_matn.txt` — diktor matni; `audio_in/qism1.mp3` — ovoz.
- `engine.js` — dvigatel (o‘zgartirmang): `A(type, at, d, ex)` animatsiya, `C(v, at, o)` sanagich, `H(text, at)` sarlavha, `E('pulse@kalit')` effekt, `BAR`, `BURST`, `AV(ism, size, mood)` avatar.
  - `at` — **diktor matnidagi kalit so‘z** (`"kalit#2+0.5"` = 2-uchrashuvdan 0.5 s keyin). Animatsiya shu so‘z aytilganda boshlanadi.
  - Animatsiya turlari: up/down/left/right/fade/blur/pop/zoom/wx/hy/sx/sy/draw/mark/count/type/split/burst/cd.
  - O‘tishlar (`tr`): push/zoom/wipe/up/fade/arch/curtain. Kamera: `cam: [['kalit', scale, x, y]]`.
- `atlas.js` — sahnalar: `add(n, { ch: 'Bob nomi', tr, cam, html })`; `n` = sahna nechta paragrafni qamraydi. **n lar yig‘indisi = paragraflar soni** bo‘lishi shart. Oxirida `window.PART = { label, scenes: sc }`.
- `style.css` + `fonts/` — uslub (lokal shriftlar, tarmoqsiz render uchun).

## 3. Ovozni matnga moslash
```bash
PY=<venv python (numpy, scipy)>
$PY tools/align.py qism1_matn.txt audio_in/qism1.mp3 vaqt1.json   # gaplar vaqti
$PY tools/prep.py 1                                                # build/timing1.js, build/narr1.raw
```
Ratio 0.4–2.0 oralig‘ida bo‘lsa yaxshi. Kalit so‘z topilmasa render `WARN` chiqaradi — tuzating.

## 4. Tekshirish va render
```bash
node render.mjs 1 --stills <scratchpad>/st     # har sahnadan bitta kadr
# kadrlarni ffmpeg hstack/vstack bilan kontakt varaqqa yig‘ib ko‘ring: ustma-ust tushish, chiqib ketish
PY=$PY node render.mjs 1 30 4                  # to‘liq: out/qism1.mp4 (~90 ms/kadr, 4 worker)
END=60 PY=$PY node render.mjs 1 30 4           # 60 s sinov
```
- To‘liq render uzoq (25 daqiqa video ≈ 45–50 daqiqa) — `run_in_background` bilan; tugashini kutishda `pgrep` ni o‘z buyrug‘ingizga mos keladigan pattern bilan ishlatmang.
- Tekshiring: davomiylik ≈ audio, audio oqimi bor, `volumedetect` ≈ −19 dB. So‘ng nom bering (masalan `Mavzu_Uslub.mp4`) va SendUserFile bilan yuboring.
- 100 MB dan katta videolarni git ga qo‘shmang (`out/`, `build/`, `audio_in/` — .gitignore).

## 5. Ishlash qoidalari (render tezligi)
- Katta elementlarga CSS `filter: blur`, `backdrop-filter`, `mix-blend-mode` qo‘ymang — fon uchun radial-gradient bloblar.
- Ekranda to‘liq subtitr bermang (Mayer tamoyillari): kalit so‘z, raqam, diagramma, signal.
- Tashqi shrift/CDN yuklamang — Chromium tarmoqsiz ishlaydi.

## 6. Uslublar
Katalog: `video-darslik-v3/USLUBLAR.md` (0 Tungi Fintech, 1 Qog‘oz va Siyoh, 2 Pop Stiker, 3 Keynote Oq, 4 Izometrik Ofis, 5 Atlas Naqsh). Atlas Naqsh tayyor: `video-darslik-v3/atlas/style.css`, palitra va sahna rejalari `REJA_ATLAS_NAQSH.md`. Yangi uslub uchun `style.css` ni qayta yozing, `atlas.js` dagi helperlarni (card, glass, niche, stamp, tower, gate, rosette) moslang.

## 7. Diktor klon (ixtiyoriy)
Haqiqiy shaxs ovozi/yuzi faqat **uning roziligi** bilan. Bepul yo‘l — `video-darslik-v3/klon/Diktor_klon.ipynb` (Colab T4): RVC (Applio) bilan AI Studio ovozini uning ovoziga aylantirish (vaqtlar saqlanadi → animatsiya qayta moslanmaydi), SadTalker bilan portretdan gapiradigan yuz. Natija pastki chap burchakda dumaloq oynaga qo‘yiladi.
