# TOPSHIRIQ

Sen professional motion-dizayner va animatorsan. Quyida uchta qism bor:
1) TOPSHIRIQ (shu qism),
2) «Qog‘oz va Siyoh» uslubidagi to‘liq animatsiya rejasi,
3) diktor matni — 106 paragraf (rejadagi P1–P106 aynan shu paragraflar, bo‘sh qator bilan ajratilgan tartibda).
Ilova qilingan audio — shu matnning diktor ovozi.

Vazifa: rejadagi barcha qoidalarga qat’iy amal qilib, audio bilan to‘liq sinxron, **bitta yakuniy animatsion videodarslik**ni boshidan oxirigacha bir martada yarat.
- Format: 16:9, 1920×1080, 30 fps, MP4 (H.264 + AAC), ovoz — ilova qilingan audio.
- Barcha 12 bob va 55 sahnani to‘liq bajar, hech birini qisqartirma yoki tashlab ketma.
- Har bir vizual rejadagi «Cue» so‘zi aytilgan lahzada chiqsin (±0,15 s).
- Raqamlarni faqat rejaning 7-bo‘limidagi jadvaldan ol.
- Qahramonlar (Aziz, Bobur, Charos, Dilnoza, Rahbar) butun video davomida bir xil ko‘rinishda bo‘lsin. Agar qahramon rasmlari ilova qilingan bo‘lsa, faqat ulardan foydalan.
- Ishni tugatgach, rejaning 8-bo‘limidagi tekshiruv ro‘yxatini o‘zing bajarib, topilgan xatolarni tuzat va shundan keyingina yakuniy videoni ber.

==========================================================================

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


==========================================================================

# DIKTOR MATNI (P1–P106)

P1. Assalomu alaykum, hurmatli rahbarlar va inson resurslari mutaxassislari! Korxona ichki akademiyasining sotuv moduliga xush kelibsiz. Bugungi videodarsimizning mavzusi — sotuv menejeriga to'g'ri maosh tizimini tanlash va hisoblash.

P2. Ushbu amaliy darsimiz sizga uchta eng muhim vazifani hal qilishda yordam beradi. Birinchisi — aynan sizning korxonangizga mos keladigan maosh tizimini xatosiz tanlash. Ikkinchisi — yangi yoki mavjud xodimga o'sha tizimni atigi bir daqiqa ichida tushunarli qilib yetkazish. Va uchinchisi — oy oxirida har bir xodimning maoshini o'n daqiqada aniq hisoblab chiqish.

P3. Agar siz ilgari Key-Pi-Ay va Si-Ar-Em nima ekanligini eshitmagan bo'lsangiz ham, hech qanday tashvishga o'rin yo'q. Hozir biz barcha asosiy atamalarni eng oddiy tilda ko'rib chiqamiz. Undan keyin barcha formulalar va jadvallar sizga yuz foiz tushunarli bo'ladi.

P4. Darsni boshlashdan oldin, har bir rahbar bilishi shart bo'lgan ikkita temir qoidani eslab qoling.

P5. Birinchi qoida: sotuv menejeriga hech qachon faqat qat'iy oklad berish tavsiya etilmaydi. Yangi xodimga ham, tajribali xodimga ham faqat oklad berish — biznes uchun eng katta xavf.

P6. Ikkinchi qoida: sotuvchining maoshi hech qachon faqat tushumdan beriladigan ulushdan, ya'ni quruq foizning o'zidan iborat bo'lmasligi kerak. Maoshda doim oldindan aniq belgilangan bazaviy oklad bo'lishi, bonus va ulush esa uning ustiga qo'shilishi shart.

P7. Endi qo'llanma davomida ishlatiladigan asosiy tushunchalar bilan tanishib olamiz.

P8. Key-Pi-Ay — bu xodim oy davomida bajarishi kerak bo'lgan aniq o'lchanadigan raqam. Shunchaki «yaxshi ishla» degan quruq gap emas, balki aniq me'yor. Masalan, oyiga oltmish million so'm sotuv qilish yoki kuniga o'ttizta qo'ng'iroq qilish.

P9. Si-Ar-Em — bu kompyuterdagi elektron mijozlar daftari. Kim qo'ng'iroq qildi, kim bilan nima gaplashildi, kim sotib oldi va kimga qachon qayta qo'ng'iroq qilish kerak — barchasi shu dasturda yoziladi. Bunga Amo-Si-Ar-Em yoki Bitriks-yigirma to'rt dasturlari misol bo'ladi. Agar korxonada Si-Ar-Em bo'lmasa, oddiy kunlik hisobot daftari yoki Eksel jadvalidan foydalanish ham mumkin.

P10. Lid — bu sizning reklamangizni ko'rib murojaat qilgan, ammo hali xarid qilmagan potensial mijoz.

P11. Bitim — bu mijoz sotib olishga rozi bo'lgan va pulini to'lagan savdo.

P12. Tushum — bu sizning bank hisobingizga yoki kassangizga haqiqatan kelib tushgan pul. Diqqat qiling: shartnoma imzolangan bo'lsa-yu, lekin pul hali kelmagan bo'lsa — bu tushum hisoblanmaydi. Masalan, o'n million so'mlik shartnoma tuzildi, ammo mijoz to'rt million so'm to'ladi. Demak, tushum — to'rt million so'm.

P13. Reja — bu oy uchun belgilangan maqsad raqami, odatda oylik tushum rejasi. Masalan, oltmish million so'm.

P14. Oklad — bu sotuv bo'lsa ham, bo'lmasa ham xodimga har oy kafolatlangan summa.

P15. Bonus — bu okladdan tashqari, Key-Pi-Ay ko'rsatkichlari bajarilsa beriladigan qo'shimcha pul.

P16. Bonus fondi — bu xodim barcha Key-Pi-Ay ko'rsatkichlarini yuz foiz bajargan taqdirda olishi mumkin bo'lgan eng yuqori bonus summasi. Masalan, ikki yarim million so'm.

P17. Ulush — bu sotuv tushumining xodimga foiz hisobida beriladigan qismi. Masalan, o'n million so'm tushumning besh foizi — besh yuz ming so'm bo'ladi.

P18. Pog'onali ulush — bunda tushum oshgan sari ulush foizi ham oshib boradi. Masalan, ellik million so'mgacha besh foiz, ellik milliondan yuz million so'mgacha sakkiz foiz, yuz million so'mdan ortig'iga esa o'n foiz.

P19. Konversiya — bu yuzta murojaatdan nechtasi haqiqiy xarid bilan yakunlanganini ko'rsatadigan foiz. Masalan, yuzta liddan yigirmatasi sotib olsa, konversiya yigirma foiz bo'ladi. Bu sotuvchi mahoratini ko'rsatadigan eng muhim ko'rsatkichlardan biri.

P20. Qayta aloqa — bu mijozga va'da qilingan vaqtda qayta qo'ng'iroq qilish yoki xabar yozish intizomi.

P21. Si-Ar-Em tozaligi — bu mijoz kartochkalarining necha foizi to'liq va xatosiz to'ldirilganini bildiradi. Agar yuzta kartochkadan to'qsontasi to'liq yozilgan bo'lsa, tozalik to'qson foiz bo'ladi.

P22. Bajarilish foizi — bu xodim maqsadning necha foizini bajarganini ko'rsatadi. Uni topish uchun haqiqiy raqamni maqsad raqamiga bo'lib, yuzga ko'paytiramiz. Masalan, maqsad oltmish million so'm, xodim qirq besh million so'm savdo qildi. Bajarilish foizi — yetmish besh foiz.

P23. Vazn — bu har bir Key-Pi-Ay ko'rsatkichining bonusga qanchalik ta'sir qilishi. Barcha ko'rsatkichlar vazni qo'shilganda yuz foiz bo'lishi shart.

P24. Key-Pi-Ay balli — bu barcha ko'rsatkichlar bo'yicha to'plangan ballar yig'indisi bo'lib, noldan yuzgacha o'lchanadi. Agar xodim qirq olti ball to'plasa, u bonus fondining qirq olti foizini oladi.

P25. Eshik qoidasi — bu eng muhim himoya mexanizmi. Agar biror Key-Pi-Ay bajarilishi ellik foizdan past bo'lsa, o'sha ko'rsatkich bo'yicha ball nolga tenglashtiriladi va bonus berilmaydi.

P26. Maoshning tushumga nisbati — bu xodimga to'langan maosh u olib kelgan tushumning necha foizini tashkil etishini ko'rsatadi. Masalan, oltmish million so'm tushum keltirgan xodim besh million so'm maosh olsa, bu nisbat sakkiz butun o'ndan uch foiz bo'ladi.

P27. Bruto — bu soliq va ushlanmalardan oldingi summa. Qo'llanmamizdagi barcha raqamlar bruto shaklida berilgan.

P28. Qaysi maosh tizimini tanlamang, u muvaffaqiyatli ishlashi uchun to'rtta shartga javob berishi kerak. Aks holda tizim bir-ikki oy ichida buziladi.

P29. Birinchi shart — tushunarlilik. Xodim «bu oy qancha maosh olaman?» degan savolga bir daqiqa ichida o'zi javob topa olishi kerak. Bo'lmasa, xodim rahbarga ishonmaydi va har oy tortishuv chiqadi.

P30. Ikkinchi shart — xodimning ta'sir qila olishi. Maosh xodimning o'z mehnatiga bog'liq bo'lishi shart. Aks holda u «baribir hech narsa o'zgarmaydi» deb harakat qilishni to'xtatadi.

P31. Uchinchi shart — korxona uchun foydalilik. Xodim ko'p ishlasa, korxona ham ko'p daromad topishi va maosh tushumning ko'tara oladigan chegarasida bo'lishi lozim.

P32. To'rtinchi shart — hisoblash osonligi. Rahbar oy oxirida maoshni o'n-o'n besh daqiqada qiynalmay hisoblay olishi kerak.

P33. Endi maosh tizimining to'rtta asosiy variantini qisqacha ko'rib chiqamiz.

P34. Birinchi variant — faqat oklad. Bunda har oy natijadan qat'i nazar bir xil summa to'lanadi. Bu variant tavsiya etilmaydi, chunki ko'p ishlagan ham, kam ishlagan ham bir xil pul oladi. Oqibatda eng kuchli sotuvchi ketadi, korxonada esa faqat sust xodimlar qoladi.

P35. Ikkinchi variant — oklad plyus Key-Pi-Ay bonus. Bunda oklad kichikroq bo'ladi, ammo Key-Pi-Ay bajarilsa ustiga bonus qo'shiladi. Bu barqarorlik va nazoratni birlashtiradi. Kamchiligi shundaki, bonusning yuqori chegarasi bor: reja yuz foizdan oshib ketsa ham, bonus fondidan ortiqcha pul to'lanmaydi.

P36. Uchinchi variant — oklad plyus tushumdan ulush. Bunda oklad ustiga tushumdan foiz beriladi. Ko'p sotgan xodim ko'p pul oladi. Biroq xavfli tomoni bor: xodim faqat sotuv ketidan quvib, Si-Ar-Em to'ldirish va qayta aloqa kabi sifat ishlariga e'tibor bermay qo'yishi mumkin.

P37. To'rtinchi variant — oklad plyus ulush va tartib sharti. Bu uchinchi variantning takomillashgan shakli: agar xodimning Si-Ar-Em va qayta aloqa intizomi yomon bo'lsa, uning ulushi kamaytiriladi. Bu variant barqarorlik, yuqori savdo va temir intizomni bitta tizimga birlashtiradi.

P38. Xo'sh, sizning biznesingizga qaysi variant mos keladi? Buni aniqlash uchun oltita savolga javob beramiz.

P39. Birinchi savol: mijoz reklamadan o'zi murojaat qiladimi va xodim faqat kiruvchi murojaatni yopadimi? Agar «ha» bo'lsa — ikkinchi variantni tanlang. Agar xodim mijozni o'zi qidirib topsa — uchinchi yoki to'rtinchi variantni tanlang.

P40. Ikkinchi savol: bitim odatda yetti kundan tez yopiladimi? Tez yopilsa — ikkinchi variant. Uzoq davom etadigan savdolarda esa to'rtinchi yoki uchinchi variant mos keladi.

P41. Uchinchi savol: oylik tushum oydan oyga o'ttiz foizdan ko'proq o'zgarib turadimi? Agar tebranish katta bo'lsa — oklad qismi ko'proq bo'lgan ikkinchi yoki to'rtinchi variantni tanlang. Tebranish kichik bo'lsa, uchinchi variant ham bo'ladi.

P42. To'rtinchi savol: tushum aynan shu xodimning shaxsiy mehnatimi yoki jamoa bo'lib sotiladimi? Agar yakka o'zi sotsa — ulushli uchinchi yoki to'rtinchi variant. Agar bir mijoz ustida bir necha kishi ishlasa — ikkinchi variantni tanlang, chunki jamoaviy savdoda ulush adolatsiz chiqadi.

P43. Beshinchi savol: rahbar oy oxirida hisob-kitobga o'n-o'n besh daqiqa vaqt ajrata oladimi? Ajrata olsa — to'rtinchi variant juda mos. Ajrata olmasa — ikkinchi yoki uchinchi variantni tanlang.

P44. Oltinchi savol: korxonada Si-Ar-Em yoki kunlik hisobot daftari to'g'ri yuritiladimi? Agar to'g'ri yuritilsa, istalgan variant ishlaydi. Agar hali hisobot tizimi yo'q bo'lsa — vaqtincha uchinchi variantni, ya'ni oklad plyus kassa tushumidan ulushni tanlang va darhol kunlik hisobot daftarini yo'lga qo'ying.

P45. Umumiy amaliy tavsiya shunday: avval ikkinchi variant bilan ishni boshlang. Uch oydan keyin tizim izga tushgach, natijaga qarab uchinchi yoki to'rtinchi variantga o'ting.

P46. Ikkinchi va to'rtinchi variantlarda maosh Key-Pi-Ayga bog'lanadi. Shuning uchun ko'rsatkichlarni to'g'ri tanlash hal qiluvchi ahamiyatga ega.

P47. Barcha Key-Pi-Ay ko'rsatkichlari uch turga bo'linadi. Birinchisi — natija ko'rsatkichlari: tushum, bitimlar soni va konversiya. Ikkinchisi — harakat ko'rsatkichlari: qo'ng'iroqlar soni, uchrashuvlar soni va yuborilgan takliflar soni. Uchinchisi — sifat ko'rsatkichlari: Si-Ar-Em tozaligi, qayta aloqa bajarilishi va murojaatga javob berish tezligi.

P48. Asosiy oltin qoida: har bir sotuvchida tushum va konversiya doim birinchi o'rinda turadi. Ularning umumiy vazni oltmish foiz — masalan, tushum qirq foiz va konversiya yigirma foiz. Qolgan qirq foizga bitta-ikkita harakat va sifat ko'rsatkichi qo'shiladi. Masalan, uchrashuvlar soni yigirma foiz va Si-Ar-Em tozaligi yigirma foiz. Bir xodimga ko'pi bilan to'rtta yoki beshta Key-Pi-Ay bog'lanadi. Undan ko'p bo'lsa, xodim e'tiborini yo'qotadi.

P49. Maqsad raqamini qanday belgilaymiz? Agar xodim eski bo'lsa va sizda statistika bo'lsa, oxirgi uch oyning o'rtacha natijasini oling va uni bir butun o'ndan birga ko'paytiring, ya'ni o'n foiz o'sish qo'ying. Agar ma'lumot yo'q bo'lsa, eng kuchli xodimning emas, o'rtacha xodimning natijasini asos qilib oling va maqsadni xodim bilan kelishib belgilang.

P50. Yangi ishga kirgan xodim uchun birinchi o'ttiz kunda tushum va konversiya maqsadini o'rtacha xodim rejasining ellik-yetmish foizi qilib yumshoq qo'ying va eshik qoidasini vaqtincha o'chirib turing. Ya'ni birinchi oyda qancha bajarsa, shunga yarasha bonus olsin. O'ttiz birinchi kundan oltmishinchi kungacha maqsadni sakson-to'qson foizga ko'tarib, eshik qoidasini o'ttiz foiz qilib belgilang. Oltmish birinchi kundan boshlab xodim to'liq rejaga va ellik foizlik eshik qoidasiga o'tadi.

P51. Maosh aniq raqamga bog'langanidan keyin, o'sha raqamlar har kuni yozib borilishi shart. Buning ikkita yo'li bor.

P52. Birinchi yo'l — Si-Ar-Em tizimi. Xodim har bir qo'ng'iroq va bitimni dasturga kiritib boradi, oy oxirida esa tayyor hisobot olinadi.

P53. Ikkinchi yo'l — agar korxonada Si-Ar-Em bo'lmasa, kunlik hisobot daftari tutiladi. Xodim har kuni kechqurun besh daqiqa vaqt ajratib, sana, qo'ng'iroq yoki uchrashuvlar soni, takliflar, bitimlar, tushum va qayta aloqa ustunlarini to'ldiradi. Bunda Si-Ar-Em tozaligi o'rniga hisobot o'z vaqtida topshirilgan kunlar ulushi hisoblanadi. Masalan, yigirma olti ish kunidan yigirma to'rttasida vaqtida topshirsa — to'qson ikki foiz bo'ladi.

P54. Muhim qoida: tushum raqamini hech qachon xodimning og'zaki so'ziga ishonib yozmang. Uni faqat kassa yoki bank ko'chirmasi bilan solishtirib tasdiqlang. Shuningdek, rahbar haftada bir marta tasodifiy uchta yozuvni tanlab, mijozga qo'ng'iroq qilib tekshiradi. Xodim buni bilgani uchun daftarni doim halol to'ldiradi.

P55. Endi barcha to'rtta variantni bitta aniq misolda solishtirib ko'ramiz.

P56. Tasavvur qiling: korxonaning bir oylik tushum rejasi — oltmish million so'm. Konversiya maqsadi — yigirma foiz, Si-Ar-Em tozaligi maqsadi — to'qson foiz, qayta aloqa maqsadi — to'qson foiz.

P57. Bizda to'rtta sotuvchi bor. Aziz oy davomida yigirma yetti million so'm tushum qildi, ya'ni rejani atigi qirq besh foizga bajardi. Uning konversiyasi o'n olti foiz, Si-Ar-Em tozaligi yetmish ikki foiz, qayta aloqasi oltmish uch foiz. Bobur oltmish million so'm tushum qilib, rejani yuz foizga bajardi. Charos to'qson million so'm tushum bilan rejani bir yuz ellik foizga bajardi. Dilnoza esa bir yuz yigirma million so'm tushum keltirib, rejani ikki yuz foizga bajardi.

P58. Keling, har bir variantda ushbu to'rt xodim qancha maosh olishini hisoblaymiz.

P59. Birinchi variant — faqat oklad. Bu variant tavsiya etilmaydi, lekin solishtirish uchun ko'rib chiqamiz. Faraz qilaylik, barcha xodimlarga bir xil — to'rt million so'm oklad belgilangan. Natijaga qarang: Aziz yigirma yetti million so'm, Dilnoza esa undan to'rt yarim baravar ko'p — bir yuz yigirma million so'm tushum olib keldi. Ammo ikkalasi ham bir xil — to'rt million so'm maosh oldi.

P60. Azizning maoshi tushumning o'n to'rt butun o'ndan sakkiz foizini tashkil etdi, eng kuchli xodim Dilnozaning maoshi esa atigi uch butun o'ndan uch foiz. Oqibatda korxona sust xodimga ortiqcha pul to'laydi, eng kuchli sotuvchini esa adolatsizlik sababli yo'qotadi.

P61. Ikkinchi variant — oklad plyus Key-Pi-Ay bonus. Bu variantda oklad ikki yarim million so'm, bonus fondi ham ikki yarim million so'm. Formula: maosh teng oklad qo'shuv bonus fondi ko'paytiruv Key-Pi-Ay balli.

P62. Hisoblash to'rt qadamda bajariladi. Keling, buni Aziz misolida ko'ramiz.

P63. Birinchi qadam — har bir ko'rsatkichning bajarilish foizini topamiz va ellik foizlik eshik qoidasini tekshiramiz. Tushum: yigirma yetti millionni oltmish millionga bo'lib, yuzga ko'paytirsak — qirq besh foiz chiqadi. Bu ellik foizlik eshikdan past, shuning uchun tushum bo'yicha ball — nol. Konversiya: o'n olti foizni yigirma foizga bo'lsak — sakson foiz. Eshikdan o'tdi. Sakson foizni yigirma foizlik vaznga ko'paytirsak — o'n olti ball. Si-Ar-Em tozaligi: yetmish ikki foizni to'qson foizga bo'lsak — sakson foiz, bu ham o'n olti ball. Qayta aloqa: oltmish uch foizni to'qson foizga bo'lsak — yetmish foiz, bu o'n to'rt ball. Hamma ballarni qo'shamiz: nol, o'n olti, o'n olti va o'n to'rt — jami qirq olti ball.

P64. Ikkinchi qadam — bonusni hisoblaymiz. Ikki yarim million so'm bonus fondining qirq olti foizi — bir million bir yuz ellik ming so'm.

P65. Uchinchi qadam — maoshni hisoblaymiz. Ikki yarim million so'm oklad ustiga bir million bir yuz ellik ming so'm bonus qo'shilsa, Aziz jami uch million olti yuz ellik ming so'm maosh oladi.

P66. To'rtinchi qadam — xodimga tushuntiramiz. Azizga shunday deyiladi: tushum rejasining yarmiga yetmadingiz, shuning uchun tushum qismidan bonus bo'lmadi. Konversiya, Si-Ar-Em va qayta aloqa bo'yicha esa yaxshi ishladingiz, shuning uchun bonus oldingiz.

P67. Xuddi shu tartibda hisoblasak, rejani to'liq bajargan Bobur to'qson sakkiz ball to'plab, to'rt million to'qqiz yuz ellik ming so'm oladi. Charos va Dilnoza esa yuz ball to'plab, eng ko'p mumkin bo'lgan besh million so'mdan maosh oladi. Bu variantning kamchiligi shu yerda ko'rinadi: Dilnoza Azizdan to'rt yarim baravar ko'p sotdi, maoshi esa bir yarim baravarga ham yetmaydi.

P68. Uchinchi variant — oklad plyus tushumdan ulush. Avvalo muhim eslatma: nima uchun hech qachon okladsiz, faqat tushumdan ulush berilmaydi? Birinchidan, islom moliyasi qoidalariga ko'ra, yollanma xodimning ish haqi oldindan aniq bo'lishi kerak. Faqat tushumga bog'langan, miqdori noma'lum to'lovda noaniqlik, ya'ni g'arar bor. Shuning uchun doim oldindan aniq oklad belgilanadi, ulush esa uning ustiga qo'shiladi. Bu diniy hukm emas — shartlarni ishonchli mutaxassis bilan tekshirib oling. Ikkinchidan, amaliy jihatdan ham savdo past bo'lgan oyda xodim daromadsiz qolib, kompaniyani tark etadi.

P69. Bu variantda oklad ikki yarim million so'm. Ulushni hisoblashning esa uch xil usuli bor.

P70. Birinchi usul — bitta o'zgarmas foiz. Masalan, barcha tushumdan besh foiz.

P71. Ikkinchi usul — zinapoya. Tushum ellik million so'mgacha bo'lsa — besh foiz. Ellik milliondan yuz million so'mgacha bo'lsa — butun summaga sakkiz foiz. Yuz million so'mdan oshsa — butun summaga o'n foiz.

P72. Uchinchi usul — bosqichma-bosqich. Bunda har bir pog'onadagi summaga o'z foizi qo'llanadi: dastlabki ellik million so'mga besh foiz, keyingi ellik million so'mga sakkiz foiz, yuz milliondan oshgan qismiga esa o'n foiz.

P73. Keling, oltmish million so'm tushum keltirgan Bobur misolida uchala usulni solishtiramiz.

P74. Birinchi usulda: oltmish millionning besh foizi — uch million so'm ulush. Ikki yarim million oklad bilan jami maosh — besh million besh yuz ming so'm.

P75. Ikkinchi usul — zinapoyada: oltmish million so'm ikkinchi pog'onaga chiqqani uchun butun summaga sakkiz foiz qo'llanadi — to'rt million sakkiz yuz ming so'm ulush. Oklad bilan jami maosh — yetti million uch yuz ming so'm.

P76. Uchinchi usul — bosqichma-bosqich hisoblashda: birinchi ellik millionning besh foizi — ikki yarim million so'm, qolgan o'n millionning sakkiz foizi — sakkiz yuz ming so'm. Jami ulush — uch million uch yuz ming so'm, oklad bilan birga maosh — besh million sakkiz yuz ming so'm.

P77. To'rtinchi variant — oklad plyus ulush va tartib sharti. Formula: maosh teng oklad qo'shuv ulush ko'paytiruv sifat koeffitsienti.

P78. Sifat koeffitsienti Si-Ar-Em tozaligi va qayta aloqa bajarilishining eng pastiga qarab belgilanadi. Agar ikkalasi ham to'qson foiz va undan yuqori bo'lsa — koeffitsient bir, ya'ni ulush to'liq to'lanadi. Agar eng pasti yetmish foizdan sakson to'qqiz foizgacha bo'lsa — koeffitsient nol butun o'ndan sakkiz, ya'ni ulushning sakson foizi to'lanadi. Agar yetmish foizdan past bo'lsa — koeffitsient nol butun o'ndan besh, ya'ni ulushning faqat yarmi to'lanadi.

P79. Aziz misolida ko'ramiz. Uning tushumi yigirma yetti million so'm, besh foizlik ulushi — bir million uch yuz ellik ming so'm. Uning Si-Ar-Em tozaligi bajarilishi sakson foiz, qayta aloqasi esa yetmish foiz. Eng pasti yetmish foiz bo'lgani uchun koeffitsient nol butun o'ndan sakkiz. Bir million uch yuz ellik mingni nol butun o'ndan sakkizga ko'paytirsak — bir million sakson ming so'm ulush chiqadi. Ikki yarim million so'm oklad bilan Aziz uch million besh yuz sakson ming so'm oladi. Tartibni a'lo bajargan va bir yuz yigirma million tushum keltirgan Dilnoza esa sakkiz million besh yuz ming so'm maosh oladi.

P80. Endi har oy maoshni qanday hisoblashni ko'ramiz. Bu olti qadamdan iborat bo'lib, bitta xodimga atigi uch-besh daqiqa vaqt ketadi.

P81. Birinchi qadam: Si-Ar-Em yoki kunlik hisobot daftaridan haqiqiy raqamlarni olasiz.

P82. Ikkinchi qadam: har bir Key-Pi-Ay bo'yicha bajarilish foizini hisoblaysiz. Yuz foizdan oshsa, yuz deb olinadi. Eslatma: agar javob berish tezligi kabi teskari Key-Pi-Ay bo'lsa, ya'ni raqam qancha kichik bo'lsa shuncha yaxshi bo'lsa, maqsadni haqiqiy natijaga bo'lib, yuzga ko'paytirasiz. Masalan, maqsad besh daqiqa, xodim sakkiz daqiqada javob berdi. Beshni sakkizga bo'lsak — oltmish ikki yarim foiz.

P83. Uchinchi qadam: ellik foizlik eshik qoidasini tekshirasiz.

P84. To'rtinchi qadam: bajarilish foizini vaznga ko'paytirib, hammasini qo'shasiz va Key-Pi-Ay ballini chiqarasiz.

P85. Beshinchi qadam: natijani tanlangan variant formulasiga qo'yasiz.

P86. Oltinchi qadam: maoshni yozasiz va hisob varag'ini xodimga yuborasiz.

P87. Oy oxiridagi tartib esa quyidagicha. Oyning birinchi-uchinchi sanalarida rahbar yoki inson resurslari mutaxassisi raqamlarni yig'adi. Uchinchi-to'rtinchi sanalarda hisoblash jadvali to'ldiriladi. Beshinchi sanagacha har bir xodimga o'z hisob varag'i yuboriladi. Xodimda e'tiroz bo'lsa, uch kun ichida birgalikda tekshiriladi. So'ng buxgalteriya maoshni belgilangan sanada to'laydi.

P88. Yangi xodimning maoshi bosqichma-bosqich shakllanadi.

P89. Birinchi bosqich — o'n olti kunlik ichki akademiya. Bu vaqtda xodim hali sotmaydi, faqat mahsulot va skriptlarni o'rganadi. Imtihondan o'tgan xodimgina sotuvga chiqadi.

P90. Ikkinchi bosqich — sotuvga chiqqandan keyingi birinchi o'ttiz kun. Xodimga ikkinchi variant, ya'ni oklad plyus Key-Pi-Ay bonus qo'llanadi. Maqsad o'rtacha xodim rejasining ellik-yetmish foizi qilib belgilanadi, eshik qoidasi qo'llanmaydi. Xodim birinchi kundanoq natija pul keltirishini his qiladi.

P91. Uchinchi bosqich — o'ttiz birinchi kundan oltmishinchi kungacha. Maqsad o'rtacha xodim natijasining sakson-to'qson foiziga ko'tariladi, eshik qoidasi o'ttiz foiz bo'ladi.

P92. To'rtinchi bosqich — oltmish birinchi kundan to'qsoninchi kungacha. Xodim to'liq rejaga va ellik foizlik eshik qoidasiga o'tadi. To'qsoninchi kundan keyin natijaga qarab uchinchi yoki to'rtinchi variantga o'tkazish masalasi ko'rib chiqiladi.

P93. Muhim qoida: maosh tizimi hech qachon oyning o'rtasida o'zgartirilmaydi. Har qanday o'zgarish faqat keyingi oyning birinchi sanasidan, xodimni oldindan yozma xabardor qilib va imzosini olib, kuchga kiradi.

P94. Darsimiz yakunida rahbarlar eng ko'p yo'l qo'yadigan to'qqizta xatoni sanab o'tamiz.

P95. Birinchi xato — xodimga faqat qat'iy oklad berish.

P96. Ikkinchi xato — okladsiz, faqat tushumdan foiz va'da qilish.

P97. Uchinchi xato — tushum nima ekanini boshidan yozma belgilamaslik. Natijada pul kassaga tushmasdan turib, shartnoma uchun bonus talab qilinadi.

P98. To'rtinchi xato — xodimga beshtadan ko'p Key-Pi-Ay yuklash.

P99. Beshinchi xato — maosh shartlarini og'zaki aytish. Har oy «men boshqacha tushungandim» degan nizo chiqmasligi uchun hammasi yozma bo'lishi shart.

P100. Oltinchi xato — oy o'rtasida qoidalar va foizlarni o'zgartirish.

P101. Yettinchi xato — yangi xodimga ham, tajribali xodimga ham bir xil reja qo'yish.

P102. Sakkizinchi xato — Si-Ar-Em yoki kunlik hisobot tekshirilmasdan, ishonchsiz raqamlar asosida maosh hisoblash.

P103. To'qqizinchi xato — maoshni belgilangan sanadan kechiktirib to'lash. To'lov kechiksa, eng mukammal tizimga ham ishonch yo'qoladi.

P104. Shuning uchun qo'llanmada maxsus rahbar tasdiq varaqasi berilgan. Unda xodimning ism-sharifi, tanlangan variant, oklad summasi, bonus fondi yoki ulush foizlari, Key-Pi-Ay vaznlari, eshik qoidasi, tushum ta'rifi hamda maosh to'lanadigan sana yoziladi. Varaqani rahbar va xodim imzolaydi. Bir nusxasi rahbarda, ikkinchisi xodimda qoladi.

P105. Esda tuting: qo'llanmadagi barcha summalar soliqdan oldingi summalar. Maosh shartlarini mehnat shartnomasiga yozishdan oldin buxgalter yoki yurist bilan tekshiring.

P106. Hurmatli rahbarlar! Shu bilan sotuv menejeriga maosh tizimini tanlash va hisoblash bo'yicha amaliy darsimiz yakunlandi. Ushbu tizimni korxonangizda bugunoq joriy qiling va savdo jamoangiz samaradorligini yangi bosqichga olib chiqing!
