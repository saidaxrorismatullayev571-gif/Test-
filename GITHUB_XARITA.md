# GitHub xaritasi: videokontent bo‘yicha nima qayerda turadi

> **Kim uchun:** boshqa AI yoki boshqa chat shu repozitoriydan ma’lumot olib, ishni davom ettirishi uchun.
> **Repozitoriy:** https://github.com/saidaxrorismatullayev571-gif/Test-
> **Muhim:** hamma ish **`ccr-0e2a9464-zey97x`** branchida. `main` da yo‘q.
> Ushbu branch’ni ochish: https://github.com/saidaxrorismatullayev571-gif/Test-/tree/ccr-0e2a9464-zey97x

## 1. Asosiy qoidalar (eng avval o‘qing)
| Fayl | Nima |
|---|---|
| `CLAUDE.md` | Loyiha qoidalari: o‘zbek tilida gaplashish; videodars oxiriga **muallif ismi yozilmaydi**; HR-blog rejasini darsliklarga aralashtirmaslik |
| `.claude/skills/video-darslik/SKILL.md` | 16:9 videodarslik yasash tartibi (dvigatel, ovozni moslash, render) |
| `.claude/skills/reel-uslublari/SKILL.md` | 9:16 reel montaj uslublari |
| `.claude/skills/uslub-kutubxonasi/SKILL.md` | Foydalanuvchi yig‘gan namuna videolar kutubxonasi (36+ namuna) |

## 2. Papkalar
| Papka | Ichida nima |
|---|---|
| `video-darslik-v3/` | Katta videodarsliklar: `atlas/` (Maosh tizimi, Atlas Naqsh uslubi), `kirish/` (kirish darsi), `klon/` (diktor ovozi/yuzi klon qo‘llanmalari), `USLUBLAR.md` (uslublar katalogi), `uslub_namunalar/` (har namuna tahlili .md + kadr .jpg), `VARIANTLAR_VA_PROMPTLAR.md` (uslub variantlari va AI promptlar) |
| `boshqa/` | QGIS/GAT videodarslari (asl video + ovoz asosida noldan yasalgan): `qgis_mavzu4/` (Mavzu 4 Vektor modeli; `v2/` — yangi versiya), `mavzu13_dbscan/`, `mavzu7_kartografik/`, `mavzu10_tarmoq/` |
| `reels/` | Qisqa 9:16 videolar: `tizimli_biznes/` (Instagram @tizimli.biznes reellari 01–03 + `_fx/fx.js` umumiy effektlar), `imed/` (iMed Team reeli va ilova qo‘llanmasi tadqiqoti), `avatar_namuna/` |
| `qahramonlar/` | 32 ta AI portret (`portretlar/`), `KATALOG.md` (rollar, ranglar), `PORTRET_PROMPTLAR.md`, `GEMINI_REEL_RASMLAR.md` |
| `instagram/` | @tizimli.biznes profilini sozlash qo‘llanmasi, avatar va highlight muqovalari |
| `rejalar/` | Uzoq muddatli reja: biznesni tizimlashtirish blogi (NotebookLM tahlili, 30 kunlik reja) |

## 3. Har bir videodars papkasining tuzilishi (masalan `boshqa/mavzu10_tarmoq/`)
| Fayl | Vazifasi |
|---|---|
| `matn.txt` | Diktor matni (foydalanuvchi bergan), paragraflar bo‘sh qator bilan |
| `ovoz.mp3` | Diktor ovozi (Google AI Studio’da yasalgan). `.wav` asli gitga kirmaydi |
| `align.json` | Har bir gapning ovozdagi boshlanish/tugash vaqti (`video-darslik-v3/atlas/tools/align.py` chiqaradi) |
| `timing.js` | Har bir so‘zning vaqti (`gen_timing.py` chiqaradi) — animatsiya shu so‘zlarga bog‘lanadi |
| `index.html` | Butun animatsiya: `window.render(t)` funksiyasi har kadrni chizadi |
| `music.py` | Fon musiqasi va effekt tovushlarini sintez qiladi → `music.wav` |
| `render.mjs` | Playwright bilan kadrlarni olib, ffmpeg bilan MP4 qiladi |
| `*.mp4` | **Tayyor video** (ovoz + musiqa bilan) |
| `rasmlar/` | Asl videodan olingan kadrlar va fon rasmlari |

## 4. Ish tartibi (yangi videodars kelganda)
1. Foydalanuvchi beradi: **asl video** (slaydli MP4), **ovoz** (WAV), **diktor matni**.
2. `matn.txt` yoziladi → `align.py matn.txt ovoz.mp3 align.json` → `python3 gen_timing.py`.
3. Asl videodan kadrlar olinadi (mavzu, ranglar, xarita), so‘ng `index.html` da yangi animatsiya yoziladi: har bir tushuncha diktor aytgan so‘zda paydo bo‘ladi, pastda karaoke subtitr, bob belgilari, effektlar.
4. `node render.mjs --stills stills t1,t2,...` bilan tekshiruv kadrlari → tuzatish.
5. `python3 music.py` → ffmpeg bilan ovoz + musiqa aralashtiriladi (`mix.wav`, ovoz −16 LUFS, musiqa ovoz paytida pasayadi).
6. `node render.mjs 30 6` → `video.mp4`, keyin ovoz qo‘shilib yakuniy MP4.
7. Yakuniy kadr: «E’tiboringiz uchun rahmat!» + mavzu nomi. **Muallif yozilmaydi.**
8. Hammasi shu branch’ga commit va push qilinadi.

## 5. Tayyor videodarslar ro‘yxati
| Mavzu | Fayl | Uzunlik |
|---|---|---|
| Mavzu 4 — Vektor ma’lumotlar modeli | `boshqa/qgis_mavzu4/v2/QGIS_Mavzu4_Vektor_v2.mp4` | 2:53 |
| Mavzu 7 — Kartografik dizayn tamoyillari | `boshqa/mavzu7_kartografik/Mavzu7_Kartografik_dizayn.mp4` | 1:18 |
| Mavzu 10 — GIS’da tarmoq tahlili | `boshqa/mavzu10_tarmoq/Mavzu10_Tarmoq_tahlili.mp4` | 1:12 |
| Mavzu 13 — Fazoviy statistika va DBSCAN | `boshqa/mavzu13_dbscan/Mavzu13_DBSCAN_v2.mp4` | 2:53 |
| Maosh tizimi (Atlas Naqsh) | `video-darslik-v3/atlas/` (manba; MP4 katta bo‘lgani uchun gitda emas) | 24:41 |

## 6. Gitga kirmaydigan narsalar
- Foydalanuvchi yuborgan **asl videolar** (masalan `OB_Mavzu_10_Video.mp4`) — faqat sessiyada; ulardan olingan kadrlar `rasmlar/` da.
- `.wav` fayllar, `build/`, `stills/` (vaqtinchalik).
- Shaxsiy ovoz ma’lumotlari (diktor klon datasetlari).
