# Animatsiya rejasi — «Qog‘oz va Siyoh» uslubi

**Vazifa:** `diktor_matni_toliq.txt` matni asosida yozilgan audio uchun to‘liq animatsion videodarslik yaratish.
**Uslub:** «Qog‘oz va Siyoh» — iliq krem qog‘oz, siyoh chiziqlar, akvarel bo‘yoq, qo‘lda chizilgan izohlar, yarim-real (semi-realistic) illyustratsiya qahramonlari.
**Format:** 16:9, 1920×1080, 30 fps, MP4 (H.264 + AAC 48 kHz). Bitta umumiy video, taxminan 24–26 daqiqa.
**Matn:** 106 paragraf. Quyidagi storyboardda paragraflar `P1…P106` deb raqamlangan (matndagi bo‘sh qator bilan ajratilgan bloklar tartibida).

Ijrochi (AI yoki dizayner) avval 1–5-bo‘limlarni o‘qiydi, so‘ng 6-bo‘lim bo‘yicha sahnalarni yasaydi va 8-bo‘limdagi tekshiruvdan o‘tkazadi.

---

## 1. Asosiy qoidalar

1. **Ekranga diktor matni to‘liq yozilmaydi.** Faqat kalit so‘zlar (bir blokda 7 so‘zgacha), raqamlar, formulalar, sxemalar. To‘liq subtitr alohida `.srt` fayl.
2. **Vizual diktor aytgan so‘z bilan bir vaqtda chiqadi** (±0,15 s). Storyboarddagi «Cue» — aynan shu so‘z aytilgan lahza.
3. **Har harakat bitta ma’noni tushuntiradi.** Bezak uchun harakat yo‘q.
4. **Bir ekranda bitta g‘oya.** Hozir gap ketmayotgan elementlar 35% shaffoflikka tushadi.
5. **Uzluksizlik:** bir sahnadagi element (raqam, kartochka, qahramon) keyingi sahnaga ko‘chib o‘tadi.
6. **Raqamlar:** `2 500 000 so‘m` (minglik oraliq — ingichka probel), o‘nli kasr vergul bilan: `8,3%`, `0,8`.
7. **Ekranda atamalar asl yozuvda:** diktor «Key-Pi-Ay», «Si-Ar-Em», «Bitriks-yigirma to‘rt» desa, ekranda **KPI**, **CRM**, **Bitrix24** yoziladi. Brend logotiplari chizilmaydi, faqat matn.
8. **Qahramonlar ismi bilan:** Aziz, Bobur, Charos, Dilnoza. Har birining yonida kichik nishon: A, B, C, D.

---

## 2. Vizual uslub: «Qog‘oz va Siyoh»

### 2.1 Ranglar
| Token | HEX | Ma’nosi |
|---|---|---|
| `paper` | `#F4EEE3` | fon — iliq krem qog‘oz |
| `sheet` | `#FBF7F0` | kartochka / qog‘oz varaq |
| `ink` | `#1F1B16` | siyoh: matn, konturlar |
| `pencil` | `#6B6257` | ikkinchi darajali matn, yordamchi chiziqlar |
| `grid` | `rgba(42,111,151,.07)` | daftar katakchalari (44 px) |
| `oklad` | `#2A6F97` | siyoh ko‘k — **oklad** |
| `bonus` | `#2A9D8F` | dengiz yashil — **bonus** |
| `ulush` | `#E9A23B` | xantal — **ulush**, marker chiziq |
| `tushum` | `#5B8E3E` | o‘t yashil — **tushum**, to‘g‘ri javob, ijobiy natija |
| `xato` | `#D1495B` | qizil qalam — xato, «0», «tavsiya etilmaydi» |
| `sifat` | `#7D5BA6` | siyohrang — sifat KPI, 4-variant krani |

Rang ma’nosi butun video davomida o‘zgarmaydi.

### 2.2 Shriftlar (Google Fonts)
- Sarlavhalar: **Fraunces** 700–800 (serif), 64–96 px. Urg‘uli so‘z — *kursiv* + `oklad` rangi + ostida xantal marker.
- Asosiy matn va jadvallar: **Inter** 500–700, 26–32 px, raqamlar `tabular-nums`.
- Qo‘lyozma izohlar: **Caveat** 700, 34–44 px, `xato` yoki `ink` rangida. Faqat strelkali izohlar uchun.
- Yorliq (kicker): Inter 800, 22–24 px, KATTA harf, harflar oralig‘i 0,16 em, `xato` rangida.

### 2.3 Kompozitsiya
- Xavfsiz maydon: chap/o‘ng 120 px, yuqori 130 px, past 90 px.
- Doimiy HUD (yuqori qator): chapda «Maosh tizimi · Sotuv moduli» (Fraunces), o‘ngda joriy bob nomi (Inter, `pencil`). Ostida qalam bilan chizilgandek ingichka progress chiziq, boblar orasida kichik tik belgilar.

### 2.4 Teksturalar va fon
- Fon: krem qog‘oz + juda nozik qog‘oz donadorligi (noise 3–4%) + daftar katakchalari.
- Chetlarda ba’zan kichik «stol» detallari: qalam, qisqich, qog‘oz qisqichi, kofe dog‘i (faqat bob boshlarida, 10–15% shaffoflik, ma’lumotni to‘smasin).
- Har bob boshida yangi varaq: varaqning yuqori chetida yirtilgan daftar izi.

### 2.5 Kartochkalar va grafikalar
- Kartochka = qog‘oz varaq: `sheet` fon, 2,5 px `ink` kontur, radius 6 px, soyasi `0 3px 0 #E2D8C6, 0 16px 30px rgba(60,40,10,.12)`, biroz qiyshiq (−0,8°…+0,8°).
- Barcha chiziqlar «qo‘lda chizilgan»: 2,5–3 px, uchlari yumaloq, chetlari biroz notekis (rough.js uslubi yoki SVG `feTurbulence` + `feDisplacementMap`, kuchi 1,5–2 px).
- Ustunlar va bloklar **shtrixlab** (45° hatching) to‘ldiriladi, tepasida qalam bilan yozilgan qiymat.
- Ikonalar: siyoh konturli, 3 px, ichi akvarel dog‘i bilan bo‘yalgan. Emoji ishlatilmaydi.
- Jadvallar: sarlavha ostida 2 px siyoh chiziq, qatorlar orasida uzuq qalam chiziq.

### 2.6 Qahramonlar — yarim-real siyoh va akvarel illyustratsiya
Multfilm emas. **Jurnal illyustratsiyasi** uslubi (The Economist, The New Yorker portretlari kabi): haqiqiy inson proporsiyalari, siyoh kontur, yuzda yengil shtrix soyalar, ustidan akvarel bo‘yoq. Yuzlari tirik va ishonarli bo‘lsin.

| Kod | Ism | Tavsif | Kiyim aksenti |
|---|---|---|---|
| A | **Aziz** | o‘zbek erkak, 28 yosh, qisqa qora soch, soqoli olingan, biroz bo‘shashgan qiyofa | qizil-terrakota sviter (`xato` rangiga yaqin) |
| B | **Bobur** | o‘zbek erkak, 32 yosh, yaxshi taralgan soch, kalta soqol, ishonchli | ko‘k ko‘ylak (`oklad` rangi) |
| C | **Charos** | o‘zbek ayol, 27 yosh, uzun to‘q jigarrang soch, yoqimli tabassum | dengiz yashil bluzka (`bonus` rangi) |
| D | **Dilnoza** | o‘zbek ayol, 30 yosh, soch yig‘ilgan (bulochka), qat’iyatli nigoh, eng kuchli sotuvchi | yashil jaket (`tushum` rangi) |
| R | **Rahbar** | o‘zbek erkak, 45 yosh, sochi chakkada oqargan, ko‘zoynak, galstuk | to‘q ko‘k kostyum, siyohrang galstuk |

**Har qahramon uchun kerakli rasmlar** (PNG, shaffof fon, 2000 px balandlik):
1. Bel balandligidan portret, to‘g‘ri qarab, **3 xil yuz ifodasi**: neytral, xursand, xafa/xavotirda.
2. **2 ta poza:** stol yonida noutbuk bilan o‘tirgan; telefonda gaplashayotgan.
3. Faqat D uchun qo‘shimcha: sumka ko‘tarib eshik tomon ketayotgan (1-variant sahnasi).
4. Faqat R uchun qo‘shimcha: hujjatga imzo qo‘yayotgan.

**Rasm yaratish uchun prompt** (Gemini/Imagen, Midjourney, Flux va boshqalar uchun; hamma qahramonda uslub qismi aynan bir xil bo‘lsin):

> **Uslub qismi (doimiy):** `editorial ink and watercolor illustration, semi-realistic proportions, fine black ink linework with light cross-hatching on the face, soft watercolor washes, muted warm palette, cream paper texture background, isolated figure, consistent character design, The New Yorker magazine illustration style, no text`
>
> **Aziz:** `Uzbek man, 28 years old, short black hair, clean-shaven, slightly tired relaxed look, terracotta red sweater, waist-up portrait, facing camera, [neutral / smiling / worried] expression`
> **Bobur:** `Uzbek man, 32 years old, neatly combed hair, short trimmed beard, confident, blue shirt, waist-up portrait, facing camera, [neutral / smiling / worried] expression`
> **Charos:** `Uzbek woman, 27 years old, long dark brown hair, friendly smile, teal blouse, waist-up portrait, facing camera, [neutral / smiling / worried] expression`
> **Dilnoza:** `Uzbek woman, 30 years old, hair tied in a neat bun, determined gaze, green blazer, waist-up portrait, facing camera, [neutral / smiling / worried] expression`
> **Rahbar:** `Uzbek man, 45 years old, greying temples, glasses, dark navy suit with purple tie, waist-up portrait, facing camera, [neutral / smiling / serious] expression`

Bir qahramonning barcha rasmlari bitta seed yoki «reference image» bilan yaratilsin, aks holda yuz o‘zgarib ketadi. Fonni olib tashlab, shaffof PNG qiling.

**Qahramon animatsiyasi (2,5D cut-out):**
- Rasm qatlamlarga bo‘linadi: tana, bosh, ko‘z (yumilgan holat alohida), og‘iz (ifodalar).
- Doimiy «tiriklik»: 3–5 soniyada bir ko‘z yumish (0,12 s); nafas olish — yelka va bosh 0,6% masshtab, 3,5 s sikl; boshning ±1,5° sekin qiyshayishi.
- Ifoda almashishi: 0,25 s crossfade.
- Harakat «ikkiliklarda» (12 fps) — qo‘lda chizilgan animatsiya hissi. Kamera va grafikalar esa 30 fps.
- Qahramon kirishi: qog‘oz qirqma kabi pastdan «ko‘tariladi» (0,6 s, yengil tebranish) yoki siyoh kontur avval chiziladi, so‘ng akvarel to‘ladi (0,9 s).

---

## 3. Harakat tili

### 3.1 Easing va davomiylik
| Harakat | Easing | Davomiylik |
|---|---|---|
| Element paydo bo‘lishi | `cubic-bezier(.45,0,.2,1)` | 600–800 ms |
| Siyoh chiziq chizilishi (stroke) | `cubic-bezier(.4,0,.2,1)` | 700–1400 ms |
| Akvarel to‘lishi (chiziqdan keyin) | `ease-out` | 400–600 ms, chiziq tugagach 100 ms keyin |
| Raqam sanash | `cubic-bezier(.2,0,0,1)` | 800–1200 ms |
| Kamera | `cubic-bezier(.65,0,.35,1)` | 1000–1400 ms |
| Sahna o‘tishi | `cubic-bezier(.65,0,.35,1)` | 800–1000 ms |

Overshoot (sakrash) ishlatilmaydi. Uslub xotirjam, «qalam tezligida».

### 3.2 Uslubning imzo harakatlari
1. **Siyoh bilan chizish:** sarlavha harflari, chiziqlar, kontur — chap-yuqoridan chizilib chiqadi (stroke-dashoffset). Keyin ichi akvarel bilan to‘ladi (dog‘ markazdan yoyiladi, chetlari notekis).
2. **Marker:** muhim so‘z ostidan xantal marker chiziq chapdan o‘ngga tortiladi (0,5 s).
3. **Qalam izohi:** Caveat yozuvi + egri strelka chizilib, muhim joyni ko‘rsatadi («eshik yopiq!», «tushum emas!»).
4. **Doiraga olish:** muhim raqam atrofi qizil qalam bilan ikki marta aylantirib chiziladi.
5. **Ustidan chizish:** noto‘g‘ri variant qizil qalam bilan ikki marta chiziladi (✕ yoki gorizontal chiziq).
6. **Muhr:** «TAVSIYA ETILMAYDI», «TASDIQLANDI» kabi so‘zlar rezina muhr bo‘lib bosiladi (110% → 100%, siyoh izi biroz notekis, 0,3 s).
7. **Qog‘oz yopishtirish:** yangi kartochka yuqoridan tushib, 1–2° tebranib qoladi, ustida yopishqoq lenta (washi tape) bo‘lagi.
8. **Raqamlar yozuv mashinkasi kabi** harfma-harf chiqadi (yakuniy summalar uchun), oraliq raqamlar oddiy sanaladi.
9. **Kamera:** sahna davomida 1,5% sekin yaqinlashish; detal aytilganda 1,1–1,3× yaqinlashib, so‘ng qaytish. Kamera «stol ustidagi qog‘ozga qarayotgandek» biroz yuqoridan (2–3° perspektiva, ixtiyoriy).

### 3.3 Sahna o‘tishlari
| O‘tish | Tavsif | Qachon |
|---|---|---|
| **Varaq ag‘darish** | joriy varaq o‘ng-pastdan buklanib ag‘dariladi (page curl), ostidan keyingi varaq | yangi bob |
| **Varaq tushishi** | yangi varaq yuqoridan tushib eskisini yopadi, yengil soya va chang | bir bob ichidagi yangi mavzu |
| **Qalam wipe** | yo‘g‘on siyoh chizig‘i ekranni kesib o‘tadi, ortidan yangi sahna | savol / burilish |
| **Surilish** | varaq stol ustida chapga suriladi, o‘ngdan yangisi | ketma-ket kartochkalar |
| **Kamera ko‘chishi** | bitta katta varaq ichida kamera boshqa joyga suriladi | jadval/hisob zanjirlari |

Bir xil o‘tish ketma-ket ikki martadan ortiq ishlatilmaydi.

### 3.4 Ovoz dizayni
| Effekt | Qachon | Daraja (diktorga nisbatan) |
|---|---|---|
| qalam chizishi (pencil scratch) | chiziq, kontur, marker | −20 dB |
| qog‘oz shitirlashi / varaq ag‘darish | sahna o‘tishlari | −16 dB |
| muhr bosilishi (stamp thump) | muhrlar, «0», xato | −12 dB |
| yozuv mashinkasi tiqillashi | yakuniy summalar | −18 dB |
| yengil qo‘ng‘iroqcha (bell) | to‘g‘ri natija | −16 dB |
| fon musiqa | litsenziyasi aniq akustik gitara / pianino, xotirjam | −28 dB, diktor gapirganda yana −4 dB |

Diktor −16 LUFS, cho‘qqi −1 dBTP.

---

## 4. Takrorlanadigan obrazlar (shu uslubda)

| Obraz | Ko‘rinishi | Qayerda ishlatiladi |
|---|---|---|
| **Maosh minorasi** | ustma-ust qo‘yilgan rangli qog‘oz bloklar: pastda ko‘k OKLAD, ustida yashil BONUS yoki xantal ULUSH; har birida qalam yozuvi | P5–P6, P14–P17, P34–P37, 7-bob, P106 |
| **Eshik** | progress chizig‘idagi 50% joyida qalamda chizilgan yog‘och darvoza; bajarilish yetmasa darvoza yopiladi va ball «0» muhri bosiladi | P25, P63, P50, P83, P90–P92 |
| **Zinapoya** | qalamda chizilgan 3 pog‘onali zina: 5% · 8% · 10% | P18, P71, P75 |
| **Bosqichli idish** | uch qavatli shisha idish eskizi, pastdan akvarel bilan to‘ladi | P72, P76 |
| **Sifat krani** | eskiz uslubidagi suv krani, ulush «oqimi» xantal akvarel tomchilar; 1,0 / 0,8 / 0,5 holatlar | P37, P77–P79 |
| **Kassa tekshiruvi** | kichik kassa apparati eskizi; faqat undan o‘tgan pul «tushum» bo‘ladi | P12, P54, P97 |
| **Taqvim** | qog‘oz taqvim varag‘i, kunlar qalam bilan belgilanadi | P50, P87, P89–P93 |

---

## 5. Ishlab chiqarish tartibi

1. **Audio:** `diktor_matni_toliq.txt` → bitta audio fayl (yoki uzilsa, 2 ta qism; keyin birlashtiriladi).
2. **So‘z vaqtlari:** WhisperX yoki boshqa forced-alignment vositasi bilan har so‘zning boshlanish vaqti (Whisper o‘zbek tilini qo‘llaydi). Muqobil: bo‘g‘in sanash + pauzalarga moslash. Natija: `[{so‘z, start, end, paragraf}]`.
3. **Qahramon rasmlari** (2.6) va obrazlar (4) tayyorlanadi.
4. **Animatik:** har sahnadan bitta kadr + audio, vaqtni tekshirish.
5. **Animatsiya:** After Effects + Duik (qahramonlar), yoki Remotion / Motion Canvas, yoki HTML + deterministik `render(t)` + Playwright (shu repozitoriydagi `video-darslik-v2/engine.js` misolida: animatsiya `data-at="kalit so‘z"` bilan diktor so‘ziga bog‘lanadi).
6. **Ovoz dizayni** (3.4), yakuniy miks.
7. **Tekshiruv** (8-bo‘lim), render.

---

## 6. Storyboard

Belgilar: **P** — matn paragrafi · **Cue** — vizual boshlanadigan so‘z · **Ekran** — ekrandagi matn · **SFX** — ovoz effekti · **O‘tish** — sahnaga kirish usuli.

### 1-bob. Kirish (P1–P6)

**S1 · P1 — Salomlashish** · O‘tish: qorong‘idan krem qog‘oz «yonadi»
- Stol ustida ochiq daftar. Sarlavha siyoh bilan chizilib chiqadi: **«Maosh tizimini tanlash va hisoblash»**. Ostida qalam yozuvi: «Sotuv moduli · Korxona ichki akademiyasi».
- Cue «hurmatli rahbarlar» → chap chetga Rahbar portreti (neytral → tabassum) qirqma bo‘lib ko‘tariladi. «inson resurslari» → ikkinchi kichik yorliq «HR».
- SFX: varaq ochilishi, qalam chizishi.

**S2 · P2 — Uch vazifa** · O‘tish: varaq tushishi
- 3 ta qog‘oz kartochka yopishtiriladi, har birida eskiz ikona: nishon (tanlash) · nutq pufakchasi + soat «1 daq» · kalkulyator + «10 daq».
- Cue «Birinchisi» / «Ikkinchisi» / «uchinchisi» → mos kartochka chizilib chiqadi, raqami doiraga olinadi; qolganlari 35% ga xiralashadi.
- Ekran: `Tanlash` · `1 daqiqada tushuntirish` · `10 daqiqada hisoblash`

**S3 · P3 — «Tashvishga o‘rin yo‘q»** · O‘tish: surilish
- Varaqda katta «KPI?» va «CRM?» so‘roqlari. Cue «tashvishga o‘rin yo‘q» → so‘roqlar o‘chirg‘ich bilan o‘chiriladi, o‘rniga kichik kitobcha eskizi «Lug‘at» chiziladi. Cue «yuz foiz» → yashil ✓.

**S4 · P4–P5 — 1-temir qoida** · O‘tish: qalam wipe
- Kicker: `IKKI TEMIR QOIDA`. Varaqqa «FAQAT OKLAD» kartochkasi yopishtiriladi.
- Cue «tavsiya etilmaydi» → qizil qalam bilan ikki marta chiziladi + muhr `YO‘Q`. Cue «yangi xodimga ham, tajribali xodimga ham» → ikki chip. Cue «eng katta xavf» → qizil Caveat izohi «⚠ eng katta xavf».
- Yon tomonda Dilnoza (xavotirda) va Aziz (bo‘shashgan) portretlari, ikkalasi ostida bir xil «4 mln» yorlig‘i.

**S5 · P6 — 2-temir qoida** · O‘tish: varaq tushishi
- «Maosh = faqat foiz» yozuvi chiziladi, so‘ng qizil qalam bilan o‘chiriladi.
- Cue «bazaviy oklad» → **Maosh minorasi** quriladi: ko‘k OKLAD bloki tushadi (muhr ovozi). Cue «uning ustiga» → xantal ULUSH va yashil BONUS bloklari ustiga tushadi.
- Ekran: `Oklad + bonus / ulush`

### 2-bob. Atamalar lug‘ati (P7–P27)

Butun bob davomida o‘ng chetda **lug‘at varag‘i**: 20 ta atama ro‘yxati, har biri tushuntirilganda qalam bilan ✓ qo‘yiladi va satr marker bilan belgilanadi. Asosiy maydon chapda.

**S6 · P7** — Varaq ag‘dariladi, yangi varaq sarlavhasi: «Lug‘at». O‘ngda 20 ta bo‘sh katakli ro‘yxat chiziladi.

**S7 · P8 — KPI**
- Pufakcha «Yaxshi ishla» → qizil qalam bilan o‘chiriladi (Cue «quruq gap emas»).
- Cue «oltmish million» → `60 000 000 so‘m / oy` yoziladi; Cue «o‘ttizta qo‘ng‘iroq» → `30 qo‘ng‘iroq / kun` + telefon eskizi.

**S8 · P9 — CRM**
- Noutbuk eskizi, ekranida 4 qator ro‘yxat ketma-ket yoziladi: «Kim qo‘ng‘iroq qildi ✓ · Nima gaplashildi ✓ · Kim sotib oldi ✓ · Qayta qo‘ng‘iroq: ertaga 10:00».
- Cue «Amo-Si-Ar-Em yoki Bitriks» → ikki matnli chip: `amoCRM`, `Bitrix24`.
- Cue «kunlik hisobot daftari yoki Eksel» → noutbuk yonida qog‘oz daftar va jadval eskizi.

**S9 · P10–P12 — Lid → Bitim → Tushum** · kamera ko‘chishi
- Gorizontal zanjir: odam siluet (Lid) → qo‘l siqish (Bitim) → **Kassa** (Tushum); har bosqich o‘z Cue’sida chiziladi, strelkalar qalam bilan.
- Cue «o‘n million so‘mlik shartnoma» → uzun shartnoma chizig‘i (10 katak). Cue «to‘rt million so‘m to‘ladi» → 4 katak yashil akvarel bilan to‘ladi, kassadan o‘tadi. Cue «Demak, tushum» → `Tushum = 4 mln` doiraga olinadi; qolgan 6 katak shtrixli, Caveat izohi «hali tushum emas!».

**S10 · P13–P15 — Reja · Oklad · Bonus**
- Reja: nishon eskizi + `60 mln`.
- Oklad: **Maosh minorasi**ning ko‘k bloki + qalqon belgisi; Cue «sotuv bo‘lsa ham, bo‘lmasa ham» → yonida sotuv grafigi tushib ketadi, ko‘k blok joyida qoladi.
- Bonus: yashil blok ustiga qo‘yiladi, Cue «bajarilsa» → KPI ✓ belgisi.

**S11 · P16–P17 — Bonus fondi · Ulush**
- Bonus fondi: yashil blok ustida punktir quti «maksimum». Cue «yuz foiz bajargan» → quti to‘liq to‘ladi; Cue «ikki yarim million» → `2 500 000`.
- Ulush: 10 mln tangalar ustuni eskizi, Cue «besh foizi» → bir tilim ajralib xodim tomon «uchadi» → `500 000 so‘m`.

**S12 · P18 — Pog‘onali ulush**
- **Zinapoya** chiziladi; Cue «ellik million so‘mgacha besh foiz» / «sakkiz foiz» / «o‘n foiz» → pog‘onalar birma-bir xantal bilan bo‘yaladi, ustiga foiz yoziladi.

**S13 · P19 — Konversiya**
- 10×10 = 100 ta kichik odamcha eskizi. Cue «yigirmatasi» → 20 tasi yashil akvarel bilan bo‘yaladi (40 ms farq bilan). Ekran: `20 / 100 = 20%`. Cue «eng muhim ko‘rsatkichlardan biri» → foiz doiraga olinadi.

**S14 · P20–P21 — Qayta aloqa · CRM tozaligi**
- Qayta aloqa: soat + telefon eskizi, «va’da: 15:00» → ✓.
- CRM tozaligi: 10 ta kartochka eskizi, 9 tasi to‘liq (yashil ✓), 1 tasi chala (qizil ✕). Cue «to‘qson foiz» → `90%`.

**S15 · P22 — Bajarilish foizi**
- Formula siyoh bilan yoziladi: `haqiqiy ÷ maqsad × 100`. Cue «qirq besh million» → raqamlar formulaga «tushadi»: `45 ÷ 60 × 100`. Cue «yetmish besh» → `= 75%`, atrofida qalam halqa 75% gacha chiziladi.

**S16 · P23–P24 — Vazn · KPI balli**
- Vazn: 100% uzunlikdagi qog‘oz lenta qaychi bilan 40 / 20 / 20 / 20 bo‘laklarga bo‘linadi (qaychi eskizi o‘tadi). Cue «yuz foiz bo‘lishi shart» → `= 100%` ✓.
- KPI balli: qalamda chizilgan yarim doira shkala 0–100. Cue «qirq olti» → strelka 46 ga boradi, yonidagi bonus fondi qutisining 46% i akvarel bilan to‘ladi.

**S17 · P25 — Eshik qoidasi** · kamera 1,2× yaqinlashadi
- **Eshik** obrazi ilk bor: progress chizig‘i, 50% da yog‘och darvoza. Bajarilish 45% gacha boradi. Cue «ellik foizdan past» → darvoza yopiladi. Cue «nolga tenglashtiriladi» → `0` muhri bosiladi.

**S18 · P26–P27 — Maosh / tushum · Bruto**
- Pallali tarozi eskizi: chap pallada `60 mln tushum`, o‘ngda `5 mln maosh`. Cue «sakkiz butun o‘ndan uch» → `8,3%` doiraga olinadi.
- Bruto: maosh varag‘i, Cue «soliq va ushlanmalardan oldingi» → muhr `BRUTO · soliqdan oldin`.
- Bob oxiri: lug‘atdagi 20 ta ✓ to‘liq, varaq burchagiga yashil «✓ Lug‘at» stikeri yopishtiriladi.

### 3-bob. Yaxshi tizimning 4 sharti (P28–P32)

**S19 · P28–P32** · O‘tish: varaq ag‘darish
- Varaqda 2×2 joylashgan to‘rt kartochka joyi (punktir ramkalar). Kicker: `4 SHART`.
- Har shart aytilganda (Cue «Birinchi shart», «Ikkinchi shart», «Uchinchi shart», «To‘rtinchi shart») kamera o‘sha kartochkaga 1,15× yaqinlashadi, kartochka chizilib to‘ladi, ✓ qo‘yiladi, pastida qizil Caveat izohi — «bo‘lmasa: …».
  1. **Tushunarlilik** — Bobur portreti, boshida «bu oy qancha olaman?» pufakchasi + soat «1 daq». Izoh: «bo‘lmasa — tortishuv».
  2. **Ta’sir qila olish** — qo‘l ostida o‘suvchi grafik. Izoh: «bo‘lmasa — harakat to‘xtaydi».
  3. **Korxonaga foydali** — ikki ustun birga o‘sadi (xodim mehnati ↔ korxona daromadi). Izoh: «maosh — tushum ko‘tara oladigan chegarada».
  4. **Hisoblash oson** — kalkulyator + «10–15 daq». 
- Cue «bir-ikki oy ichida buziladi» (P28) → varaq tepasida qizil «⚠ 1–2 oyda buziladi» izohi.

### 4-bob. To‘rt variant (P33–P37)

**S20 · P33** — Varaqda 4 ta ustun-kartochka, har birining tepasida kichik **Maosh minorasi** eskizi: (1) faqat ko‘k · (2) ko‘k + yashil · (3) ko‘k + xantal · (4) ko‘k + xantal + siyohrang kran.

**S21 · P34 — 1-variant** · kamera 1-kartochkaga
- Cue «tavsiya etilmaydi» → qizil qalam bilan ikki marta chiziladi + muhr `TAVSIYA ETILMAYDI`.
- Cue «eng kuchli sotuvchi ketadi» → pastda Dilnoza (sumka bilan, ketayotgan poza) asta kadrdan chiqadi; Cue «sust xodimlar qoladi» → Aziz (bo‘shashgan) o‘tirib qoladi.

**S22 · P35 — 2-variant**
- Minoraga yashil BONUS bloki. Cue «yuqori chegarasi bor» → blok ustida qopqoq chiziladi; reja 120% ga yetsa ham blok o‘smaydi (Caveat izohi «chegara!»).

**S23 · P36 — 3-variant**
- Xantal ULUSH bloki tushum bilan birga uzayadi. Cue «sifat ishlariga e’tibor bermay» → yonidagi CRM kartochkalari g‘ijimlanadi va qiyshayadi.

**S24 · P37 — 4-variant**
- Ulush ustida **Sifat krani**. Cue «ulushi kamaytiriladi» → kran yarim yopiladi, oqim ingichkalashadi. Cue «bitta tizimga birlashtiradi» → 3 belgi (qalqon, grafik, ✓) bitta muhrga birlashadi: `4-VARIANT`.

### 5-bob. Qaysi variant? Oltita savol (P38–P45)

**S25 · P38–P44 — Qaror daraxti** · O‘tish: varaq ag‘darish
- Bitta katta varaq: chapda 1–6 savollar ro‘yxati (har biri qisqa: «Mijoz o‘zi keladimi?», «Bitim 7 kundan tezmi?», «Tushum 30%+ o‘zgaradimi?», «Shaxsiy sotuvmi?», «Rahbarda 10–15 daqiqa bormi?», «CRM/daftar to‘g‘rimi?»). O‘ngda manzillar: **2**, **3**, **4**-variant kartochkalari.
- Har savolda (Cue «Birinchi savol» … «Oltinchi savol»): savol satri marker bilan belgilanadi, undan «HA» va «YO‘Q» shoxlari qalam bilan chiziladi, diktor aytgan javob bo‘yicha strelka mos variant kartochkasiga yetib boradi va o‘sha kartochkaga kichik nuqta (hisoblagich) qo‘shiladi.
- Javoblar aniq matnga ko‘ra:
  1. Ha → 2 · Mijozni o‘zi topsa → 3 yoki 4
  2. Ha → 2 · Uzoq → 4 yoki 3
  3. Katta tebranish → 2 yoki 4 · Kichik → 3 ham bo‘ladi
  4. Yakka → 3 yoki 4 · Jamoa → 2 (Caveat izohi «ulush adolatsiz»)
  5. Ha → 4 · Yo‘q → 2 yoki 3
  6. To‘g‘ri yuritilsa → istalgan · Yo‘q → 3 + daftar ikonasi «darhol yo‘lga qo‘ying»

**S26 · P45 — Umumiy tavsiya** · O‘tish: varaq tushishi
- Qalam bilan chizilgan yo‘l: `2-variant` → (taqvim 3 varaq ag‘dariladi, Cue «Uch oydan keyin») → `3 yoki 4-variant`. Yakunda muhr `TAVSIYA`.

### 6-bob. KPI tanlash (P46–P50)

**S27 · P46** — Varaq sarlavhasi «KPI tanlash», Cue «hal qiluvchi» → so‘z ostiga marker.

**S28 · P47 — KPI 3 turi**
- 3 ustun-kartochka: **Natija** (yashil) · **Harakat** (ko‘k) · **Sifat** (siyohrang). Cue «Birinchisi», «Ikkinchisi», «Uchinchisi» → mos ustun to‘ladi; misollar chiplari (tushum, bitimlar soni, konversiya / qo‘ng‘iroqlar, uchrashuvlar, takliflar / CRM tozaligi, qayta aloqa, javob tezligi) bittadan yoziladi.

**S29 · P48 — Oltin qoida: vaznlar**
- 100% lik qog‘oz lenta: Tushum 40 · Konversiya 20 (ustida qavs-izoh «asosiy — 60%») · Uchrashuvlar 20 · CRM tozaligi 20 (qavs «qolgan 40%»). Har bo‘lak Cue’sida bo‘yaladi.
- Cue «to‘rtta yoki beshta» → yonida 6-, 7-lenta qo‘shilmoqchi bo‘ladi, qizil qalam bilan o‘chiriladi. Caveat: «ko‘pi — e’tibor yo‘qoladi».

**S30 · P49 — Maqsad raqami**
- 3 ta ustun (oxirgi uch oy, masalan 52, 60, 56 — **namuna, ekranda «misol» deb yozilsin**). Cue «o‘rtacha natijasini» → o‘rtacha chiziq 56. Cue «bir butun o‘ndan birga» → `× 1,1` yoziladi, yashil ustun 62 ga o‘sadi, Caveat «+10%».
- Cue «o‘rtacha xodimning» → 5 ta xodim siluetlari qatori, eng kuchlisi emas, o‘rtadagisi doiraga olinadi. Cue «kelishib» → Rahbar va Bobur qo‘l siqishadi.

**S31 · P50 — Yangi xodim maqsadi**
- Taqvim lentasi 3 bosqich: 1–30 kun · 31–60 kun · 61-kundan. Har bosqichda progress chizig‘i va **Eshik**: 1-bosqichda darvoza ochiq va xira («eshik yo‘q»), 2-da 30% da, 3-da 50% da.
- Ekran: `50–70%, eshik yo‘q` · `80–90%, eshik 30%` · `100%, eshik 50%`.

### 7-bob. Raqamlar qayerdan olinadi (P51–P54)

**S32 · P51–P52 — Birinchi yo‘l: CRM** — chapda noutbuk eskizi, oy oxirida undan hisobot varag‘i chiqadi.
**S33 · P53 — Ikkinchi yo‘l: kunlik hisobot daftari**
- Daftar ochiladi, ustunlar qalam bilan chiziladi: Sana · Qo‘ng‘iroq/uchrashuv · Taklif · Bitim · Tushum · Qayta aloqa. Bitta qator to‘ldiriladi.
- Cue «yigirma olti ish kunidan yigirma to‘rttasida» → 26 kunlik taqvim, 24 kun yashil ✓, 2 kun qizil ✕ → `24 / 26 = 92%`.
**S34 · P54 — Tekshiruv qoidasi**
- Cue «og‘zaki so‘ziga» → xodim pufakchasi «50 mln sotdim!» qizil qalam bilan o‘chiriladi. Cue «kassa yoki bank» → raqam **Kassa**dan o‘tadi, ✓.
- Cue «tasodifiy uchta yozuvni» → Rahbar lupa bilan 3 qatorni tanlaydi, telefon eskizi. Cue «halol to‘ldiradi» → xodim portreti xursand.

### 8-bob. Bitta misolda to‘rt variant (P55–P79) — asosiy qism

**S35 · P55–P56 — Misol sharti** · O‘tish: varaq ag‘darish
- Kicker `MISOL`. Varaqda reja chizig‘i `60 mln` (xantal uzuq chiziq). Maqsadlar chiplari: `konversiya 20%` · `CRM 90%` · `qayta aloqa 90%`.

**S36 · P57 — To‘rt sotuvchi**
- To‘rt portret varaq pastiga qirqma bo‘lib ko‘tariladi; ustlarida shtrixli ustunlar o‘sadi:
  - Cue «Aziz» → `27 mln · 45%` + kichik kartochka `konv. 16% · CRM 72% · q.aloqa 63%`
  - Cue «Bobur» → `60 mln · 100%`
  - Cue «Charos» → `90 mln · 150%`
  - Cue «Dilnoza» → `120 mln · 200%`, ustuni doiraga olinadi, Dilnoza tabassum.

**S37 · P58–P60 — 1-variant: faqat oklad**
- Har portret ustida bir xil `4 mln` yorlig‘i yopishtiriladi.
- Cue «to‘rt yarim baravar» → Aziz va Dilnoza ustunlari orasida qalam strelka `× 4,4`.
- Cue «o‘n to‘rt butun o‘ndan sakkiz» → Aziz ostida `14,8%` (qizil); Cue «uch butun o‘ndan uch» → Dilnoza ostida `3,3%`.
- Cue «yo‘qotadi» → Dilnoza portreti xavotirli ifodaga o‘tadi va «ketayotgan» pozasi bilan asta kadrdan chiqadi. Muhr `TAVSIYA ETILMAYDI`.

**S38 · P61–P62 — 2-variant formulasi**
- Formula siyoh bilan yoziladi: `Maosh = Oklad + Bonus fondi × KPI balli` (har qism o‘z Cue’sida: «oklad», «bonus fondi», «Key-Pi-Ay balli»). Ostida `Oklad 2 500 000` · `Fond 2 500 000`.

**S39 · P63 — Azizning KPI jadvali** · O‘tish: kamera ko‘chishi; Aziz portreti jadval yoniga suriladi
- Jadval qatorma-qator chiziladi (har qator o‘z Cue’sida: «Tushum», «Konversiya», «Si-Ar-Em tozaligi», «Qayta aloqa»):

| KPI | Hisob | Bajarilish | Eshik | Vazn | Ball |
|---|---|---|---|---|---|
| Tushum | 27 ÷ 60 | 45% | yopiq | 40% | **0** |
| Konversiya | 16 ÷ 20 | 80% | o‘tdi | 20% | 16 |
| CRM tozaligi | 72 ÷ 90 | 80% | o‘tdi | 20% | 16 |
| Qayta aloqa | 63 ÷ 90 | 70% | o‘tdi | 20% | 14 |

- Tushum qatorida **Eshik** qayta ko‘rsatiladi: darvoza yopiladi, `0` muhri. Caveat izohi «eshik yopiq!».
- Cue «jami qirq olti» → `0 + 16 + 16 + 14 = 46` yoziladi, `46` doiraga olinadi.

**S40 · P64–P65 — Bonus va maosh**
- `46` formulaga «uchadi»: `2 500 000 × 46% = 1 150 000` (Cue «bir million bir yuz ellik ming»).
- `2 500 000 + 1 150 000 = 3 650 000 so‘m` — yozuv mashinkasi bilan; **Maosh minorasi**: ko‘k 2,5 + yashil 1,15.

**S41 · P66 — Xodimga tushuntirish**
- Aziz va Rahbar stol atrofida (o‘tirgan pozalar). Rahbar ustida nutq pufakchasi, ichida qisqa: «Tushum — reja yarmiga yetmadi → 0» · «Konversiya, CRM, qayta aloqa — yaxshi → bonus ✓». Aziz ifodasi xavotirdan neytral-xursandga o‘tadi.

**S42 · P67 — Boshqa xodimlar va kamchilik**
- To‘rt minora yonma-yon: `3,65` · `4,95` · `5,0` · `5,0` mln. Cue «eng ko‘p mumkin bo‘lgan besh million» → minoralar tepasida qalam chizig‘i-chegara, Charos va Dilnoza minorasi unga tegib to‘xtaydi.
- Cue «bir yarim baravarga ham yetmaydi» → Dilnoza va Aziz orasida ikki strelka: sotuv `× 4,4`, maosh `× 1,4` (qizil). Dilnoza ifodasi xavotirda.

**S43 · P68 — 3-variant: nega oklad shart** · O‘tish: varaq tushishi
- Ikki qog‘oz kartochka: (1) tarozi eskizi + `Ish haqi oldindan aniq bo‘lsin` + kichik izoh `noaniqlik = g‘arar`; (2) bo‘sh hamyon eskizi + `Past oyda ham daromad`.
- Cue «diniy hukm emas» → varaq pastida kichik, aniq yozuv: `Bu diniy hukm emas — mutaxassis bilan tekshiring` (diktor gapi tugaguncha ekranda qoladi).

**S44 · P69–P72 — Ulushning uch usuli**
- Varaqda 3 ustun: (1) **Bitta foiz** — tekis chiziq «5%» · (2) **Zinapoya** obrazi · (3) **Bosqichli idish** obrazi. Har usul o‘z Cue’sida («Birinchi usul», «Ikkinchi usul», «Uchinchi usul») chizilib, akvarel bilan to‘ladi; pog‘ona foizlari yoziladi.

**S45 · P73–P76 — Bobur uch usulda**
- Bobur portreti markazda; uning `60 mln` tangalari uch ustunga oqadi:
  - Cue «Birinchi usulda» → `60 mln × 5% = 3 000 000` → maosh `5 500 000`
  - Cue «zinapoyada» → Bobur zinaning 2-pog‘onasiga chiqadi, butun summaga 8% → `4 800 000` → maosh `7 300 000`
  - Cue «bosqichma-bosqich hisoblashda» → idishning 1-qavati (`50 mln × 5% = 2 500 000`), 2-qavati (`10 mln × 8% = 800 000`) to‘ladi → `3 300 000` → maosh `5 800 000`
- Yakunda uch maosh yonma-yon, eng kattasi (7 300 000) doiraga olinadi.

**S46 · P77–P78 — 4-variant: sifat koeffitsienti**
- Formula: `Maosh = Oklad + Ulush × Sifat koeffitsienti`.
- **Sifat krani** uch holatda (har biri o‘z Cue’sida): `≥ 90% → 1,0` (to‘liq ochiq) · `70–89% → 0,8` · `< 70% → 0,5` (yarim yopiq). Kran ostida «ulush oqimi» tomchilari soni o‘zgaradi.

**S47 · P79 — Aziz va Dilnoza 4-variantda**
- Aziz: `27 mln × 5% = 1 350 000`. Ikki kichik kartochka: `CRM 80%`, `Qayta aloqa 70%`; Cue «Eng pasti yetmish» → 70% doiraga olinadi, kran 0,8 ga buraladi. `1 350 000 × 0,8 = 1 080 000` → maosh `3 580 000`.
- Cue «Dilnoza esa» → kran to‘liq ochiq, Dilnoza xursand ifodada qaytib keladi (1-variantda ketgan edi — hikoya yopiladi), maosh `8 500 000` yozuv mashinkasi bilan, yashil muhr `ADOLATLI`.

### 9-bob. Har oy: olti qadam (P80–P87)

**S48 · P80–P86 — Olti qadam** · O‘tish: varaq ag‘darish
- Varaq bo‘ylab gorizontal 6 ta «stansiya» (raqamli doiralar), ular orasida qalam yo‘l. Bitta xodim kartochkasi yo‘l bo‘ylab suriladi; har qadam o‘z Cue’sida («Birinchi qadam» … «Oltinchi qadam») yonadi va ostiga 2–3 so‘zlik yozuv chiqadi: `Raqamlarni olish` · `Bajarilish %` · `Eshik qoidasi` · `KPI balli` · `Formula` · `Xodimga yuborish`.
- 2-qadamda yon oyna (P82): Cue «yuz deb olinadi» → `105% → 100%`. Cue «teskari» → soat eskizi, ikki formula yonma-yon: `haqiqiy ÷ maqsad` ↔ `maqsad ÷ haqiqiy` (strelkalar almashadi). Cue «oltmish ikki yarim» → `5 ÷ 8 × 100 = 62,5%`.
- 3-qadamda kichik **Eshik**.

**S49 · P87 — Oy oxiri tartibi**
- **Taqvim** varag‘i: Cue bo‘yicha kunlar qalam bilan belgilanadi: `1–3` raqamlar yig‘iladi · `3–4` jadval · `5 gacha` hisob varag‘i (konvert uchadi) · `+3 kun` e’tiroz (ikki portret stolda) · `to‘lov sanasi` (muhr `TO‘LANDI`).

### 10-bob. Yangi xodim (P88–P93)

**S50 · P88–P92 — To‘rt bosqich** · O‘tish: varaq tushishi
- Vaqt chizig‘i, uning ustida Charos portreti bosqichdan bosqichga suriladi:
  - Cue «o‘n olti kunlik» → kitob va imtihon varag‘i eskizi, Cue «Imtihondan o‘tgan» → ✓.
  - Cue «birinchi o‘ttiz kun» → `2-variant · maqsad 50–70% · eshik yo‘q` (darvoza ochiq).
  - Cue «o‘ttiz birinchi kundan» → `80–90% · eshik 30%`.
  - Cue «oltmish birinchi kundan» → `to‘liq reja · eshik 50%`; Cue «to‘qsoninchi kundan keyin» → yo‘l ko‘rsatkichi `3 yoki 4-variant`.

**S51 · P93 — Oy o‘rtasida o‘zgarmaydi**
- Taqvim: 15-kun qizil qalam bilan ✕. Cue «keyingi oyning birinchi sanasidan» → keyingi oyning 1-kuni yashil doira. Cue «yozma» → hujjat varag‘i; Cue «imzosini» → imzo chizilib chiqadi.

### 11-bob. To‘qqizta xato (P94–P103)

**S52 · P94–P103** · O‘tish: qalam wipe
- Varaqda 3×3 joylashgan 9 ta kartochka joyi. Har xato o‘z Cue’sida («Birinchi xato» … «To‘qqizinchi xato») yopishtiriladi, qizil qalam ✕ + muhr ovozi; 1,2 s dan keyin ostida yashil qalam bilan «→ to‘g‘ri yo‘l» yoziladi:
  1. Faqat oklad → kamida 2-variant
  2. Okladsiz foiz → doim oklad + ulush
  3. «Tushum» yozilmagan → tushum = kassaga kelgan pul (kichik **Kassa**)
  4. 5 tadan ko‘p KPI → 4–5 ta
  5. Og‘zaki shartlar → yozma, imzo bilan
  6. Oy o‘rtasida o‘zgartirish → keyingi oyning 1-sanasidan
  7. Hammaga bir xil reja → yangi xodimga yumshoq reja
  8. Tekshirilmagan raqamlar → avval CRM / daftar tartibi
  9. Kechikkan maosh → sana doim bir xil
- Joriy kartochka to‘liq yorug‘, oldingilari 60% shaffoflikda.

### 12-bob. Tasdiq varaqasi va yakun (P104–P106)

**S53 · P104 — Rahbar tasdiq varaqasi** · O‘tish: varaq tushishi
- Rasmiy blanka varag‘i stolga tushadi. Maydonlar diktor aytganda yozuv mashinkasi bilan to‘ladi: F.I.SH. · Variant · Oklad · Bonus fondi / ulush · KPI vaznlari · Eshik qoidasi · Tushum ta’rifi · To‘lov sanasi.
- Cue «rahbar va xodim imzolaydi» → ikki imzo chiziladi (Rahbar va Bobur portretlari yonida). Cue «Bir nusxasi» → varaq ikki nusxaga ajralib, biri Rahbarga, biri Boburga suriladi.

**S54 · P105 — Soliq va yuridik eslatma**
- Varaq burchagiga kichik qog‘oz yopishtiriladi: `Summalar soliqdan oldin · Shartnomadan oldin buxgalter / yurist bilan tekshiring`.

**S55 · P106 — Yakun** · O‘tish: kamera uzoqlashadi
- Kamera butun «stol»ni ko‘rsatadi: video davomida ishlatilgan barcha varaqlar kichrayib ko‘rinadi (eslatma kollaji).
- Markazda so‘nggi **Maosh minorasi**: `Oklad · Natija · Tartib`. Barcha 5 qahramon portreti xursand ifodada qirqma bo‘lib ko‘tariladi.
- Cue «bugunoq joriy qiling» → Fraunces kursivda yirik yozuv **«Bugunoq joriy qiling»**, ostiga xantal marker.
- So‘ng 2–3 s jim: «Excel hisoblagich — alohida fayl» kichik yozuv, varaq yopiladi, qorong‘ilashadi.

---

## 7. Raqamlar jadvali (ekranda faqat shular)

| Ma’lumot | Qiymat |
|---|---|
| Reja | 60 000 000 so‘m |
| Maqsadlar | konversiya 20%, CRM tozaligi 90%, qayta aloqa 90% |
| Aziz (A) | tushum 27 mln (45%), konversiya 16%, CRM 72%, qayta aloqa 63% |
| Bobur (B) | 60 mln (100%) |
| Charos (C) | 90 mln (150%) |
| Dilnoza (D) | 120 mln (200%) |
| 1-variant | hammaga 4 000 000; maosh/tushum: Aziz 14,8%, Dilnoza 3,3%; Dilnoza/Aziz sotuvi × 4,4 |
| 2-variant | oklad 2 500 000, fond 2 500 000; Aziz: ballar 0 · 16 · 16 · 14 = 46 → bonus 1 150 000 → maosh 3 650 000; Bobur 98 ball → 4 950 000; Charos, Dilnoza 100 → 5 000 000; maosh nisbati Dilnoza/Aziz × 1,4 |
| Pog‘onalar | 0–50 mln 5% · 50–100 mln 8% · 100+ mln 10% |
| 3-variant, Bobur | bitta foiz: ulush 3 000 000 → 5 500 000 · zinapoya: 4 800 000 → 7 300 000 · bosqichma-bosqich: 2 500 000 + 800 000 = 3 300 000 → 5 800 000 |
| 4-variant | koeffitsient sifat KPI bajarilishining eng pastiga qarab: ≥90% → 1,0 · 70–89% → 0,8 · <70% → 0,5. Aziz: 1 350 000 × 0,8 = 1 080 000 → 3 580 000. Dilnoza: 8 500 000 |
| Lug‘at misollari | tushum: 10 mln shartnoma, 4 mln to‘langan → 4 mln · ulush: 10 mln × 5% = 500 000 · konversiya: 20/100 = 20% · CRM tozaligi 90/100 = 90% · bajarilish 45 ÷ 60 = 75% · maosh/tushum 5 / 60 = 8,3% |
| Maqsad | 3 oy o‘rtachasi × 1,1 (ekrandagi 52/60/56 → 62 — faqat misol) |
| Yangi xodim | akademiya 16 kun · 1–30 kun 50–70%, eshik yo‘q · 31–60 kun 80–90%, eshik 30% · 61-kundan to‘liq, eshik 50% · 90-kundan keyin 3/4-variant ko‘rib chiqiladi |
| Kunlik hisobot | 24 / 26 = 92% |
| Teskari KPI | 5 ÷ 8 × 100 = 62,5% |

---

## 8. Tekshiruv ro‘yxati

- [ ] Har bir raqam 7-bo‘limdagi jadvalga mos.
- [ ] Ekranda diktor gapi to‘liq takrorlanmagan; bir blokda 7 so‘zdan ko‘p emas.
- [ ] Har bir vizual o‘z Cue so‘zidan 0,15 s dan ortiq kechikmagan va oldin chiqmagan.
- [ ] Qahramonlarning yuzi butun video davomida bir xil (bitta seed / reference).
- [ ] Rang ma’nolari to‘g‘ri: oklad ko‘k, bonus dengiz yashil, ulush xantal, tushum o‘t yashil, xato qizil, sifat siyohrang.
- [ ] Kamera yaqinlashganda matn kadrdan chiqib ketmaydi.
- [ ] Qo‘lda chizilgan effekt raqamlarni o‘qishni qiyinlashtirmaydi: asosiy raqamlar toza va yirik.
- [ ] Brend logotiplari va emoji yo‘q.
- [ ] Ovoz: diktor −16 LUFS, effektlar diktorni bosmaydi.
- [ ] Telefonda ham o‘qiladi: eng kichik matn 22 px.
- [ ] Tasvir va ovoz uzunligi bir xil, boshida va oxirida jimlik 1 s dan oshmaydi.
