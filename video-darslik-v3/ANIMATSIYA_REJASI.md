# «Maosh tizimini tanlash va hisoblash» — animatsiya ishlab chiqarish rejasi

**Kimga:** animatsiyani yaratadigan ijrochiga (AI yoki motion-dizayner).
**Asos:** 05.2-qo‘llanma va unga yozilgan diktor matni (≈ 20 000 belgi, taxminan **21–23 daqiqa** audio).
**Format:** 16:9, 1920×1080, 30 fps (imkon bo‘lsa 60 fps), MP4 (H.264, AAC 48 kHz).

Bu hujjat ssenariyni 12 bobga va 57 sahnaga bo‘ladi. Har sahna uchun: diktor nima deydi, ekranda nima bo‘ladi, qaysi so‘zda nima harakatlanadi, qanday ovoz effekti va o‘tish ishlatiladi. Oxirida raqamlar jadvali, ishlab chiqarish tartibi va sifat nazorati ro‘yxati bor. **Ijrochi hujjatni boshidan oxirigacha o‘qib, 0-bo‘limdagi qoidalarga qat’iy amal qilsin.**

---

## 0. Asosiy tamoyillar (buzilmasin)

1. **Har bir harakat bitta ma’noni tushuntiradi.** Harakat bezak uchun emas. Agar element «chiroyli bo‘lsin» deb harakatlanayotgan bo‘lsa, uni olib tashlang. (Mayer: coherence)
2. **Ekranga diktor matni to‘liq yozilmaydi.** Ekranda faqat kalit so‘zlar, raqamlar, formulalar va sxemalar bo‘ladi. To‘liq subtitr alohida `.srt` fayl bo‘lib, YouTube/Telegram’da xohlovchi yoqadi. (Mayer: redundancy)
3. **Vizual diktor aytgan so‘z bilan bir vaqtda chiqadi** (±0,15 s). «D xodim» deyilganda D ajratiladi, «nol» deyilganda nol chiqadi. Buning uchun so‘z darajasidagi vaqt belgilari kerak (4-bo‘lim). (Mayer: signaling, temporal contiguity)
4. **Bir ekranda — bitta g‘oya.** Ko‘p elementli ekranlarda kamera hozir gap ketayotgan qismga yaqinlashadi yoki qolganlari xiralashadi (opacity 0.25).
5. **Uzluksizlik (3Blue1Brown usuli).** Bir sahnadagi element keyingi sahnaga «ko‘chib» o‘tadi: formula ichidagi raqam joyida o‘zgaradi, xodim kartochkasi keyingi jadvalga uchib kiradi. Tomoshabin ko‘zini yo‘qotmaydi.
6. **Takrorlanadigan vizual metaforalar** (2-bo‘lim) butun video davomida bir xil ko‘rinishda ishlatiladi. Tomoshabin «eshik»ni bir marta o‘rgansa, keyin uni darhol taniydi.
7. **Har 6–10 soniyada ekranda ma’noli o‘zgarish** bo‘lsin: yangi raqam, yaqinlashish, belgi. Lekin «bo‘sh» effekt emas.
8. **Raqamlar O‘zbekiston formatida:** `2 500 000 so‘m` (minglik ajratgich — ingichka probel), o‘nli kasr — vergul: `8,3%`, `0,8`.
9. **Ekranda atamalar asl yozuvda:** diktor «Key-Pi-Ay», «Si-Ar-Em» desa ham, ekranda **KPI**, **CRM** yoziladi.

---

## 1. Vizual uslub (style guide)

### 1.1 Umumiy kayfiyat
«Premium fintech» + «ta’limiy illyustratsiya»: to‘q ko‘k fon, yorqin aksent ranglar, yumshoq soyali shisha kartochkalar, oddiy flat-personajlar. Ilhom manbalari: Stripe va Linear sayt animatsiyalari (gradient, toza tipografiya), Kurzgesagt (chuqurlik, yorqin palitra, flat personajlar), Vox/Joss Fong (ma’lumotni bosqichma-bosqich ochish), 3Blue1Brown (formulalarning uzluksiz o‘zgarishi), Apple keynote (yirik tipografiya, ko‘p bo‘sh joy).

### 1.2 Rang tokenlari
| Token | HEX | Ma’nosi (qat’iy shu ma’noda ishlatilsin) |
|---|---|---|
| `bg-0` | `#070D1C` | asosiy fon |
| `bg-1` | `#0C1630` | fon gradientining ikkinchi rangi |
| `card` | `rgba(30,46,86,.78)` | kartochka foni, 1 px chegara `rgba(255,255,255,.10)` |
| `text` | `#F1F5FF` | asosiy matn |
| `muted` | `#9FB0D0` | ikkinchi darajali matn |
| `teal` | `#2EE6C5` | **Oklad**, asosiy aksent |
| `blue` | `#5AA8FF` | **Bonus**, 2-variant |
| `amber` | `#FFC24B` | **Ulush**, ogohlantirish, eshik chizig‘i |
| `green` | `#3DDC97` | **Tushum**, to‘g‘ri javob, ijobiy natija |
| `red` | `#FF6B6B` | xato, «tavsiya etilmaydi», ball 0 |
| `violet` | `#B08CFF` | Sifat KPI, 3-C usuli |

Rang ma’nosi butun videoda o‘zgarmaydi: oklad doim teal, bonus doim ko‘k, ulush doim sariq.

### 1.3 Tipografiya
- Shrift: **Inter** (yoki Manrope). Raqamlar uchun `tabular-nums`.
- Sarlavha (H1): 96–110 px, 900. Sahna sarlavhasi (H2): 60–66 px, 850. Kartochka sarlavhasi: 34–40 px, 800. Asosiy matn: 26–30 px. Kichik yorliq (kicker): 22–24 px, 800, harflar oralig‘i 0.16 em, KATTA harf.
- Ekrandagi bitta blokda 7 so‘zdan ko‘p bo‘lmasin.

### 1.4 Kompozitsiya
- Xavfsiz maydon: chap/o‘ng 120 px, yuqori 130 px (HUD uchun), pastki 90 px.
- 12 ustunli grid, oraliq 24–28 px.
- Doimiy HUD: yuqori chapda «Maosh tizimi · Sotuv moduli 05.2», yuqori o‘ngda joriy bob nomi, ostida bo‘limlarga bo‘lingan ingichka progress chizig‘i.
- Fon: 2–3 ta katta, sekin suzuvchi rangli dog‘ (radial-gradient, blur emas — render tez bo‘ladi), juda past shaffoflikdagi zarrachalar, chetlarida vignette.

### 1.5 Personajlar
| Kod | Ism (ixtiyoriy) | Kiyim rangi | Roli |
|---|---|---|---|
| A | Aziz | qizil | rejaning 45%, sifat past |
| B | Bobur | ko‘k | reja 100% |
| C | Charos | teal | reja 150% |
| D | Dilnoza | yashil | reja 200%, eng kuchli |
| R | Rahbar | binafsha, galstuk | rahbar / HR |

- Uslub: flat, oddiy geometriya (bosh, soch, yelka), yuz: ko‘z + qosh + og‘iz.
- Har doim «tirik»: 3–4 soniyada bir ko‘z yumish (0,12 s), nafas olish (±2,5 px vertikal), kayfiyat og‘iz shakli orqali (−1 xafa … +1 xursand), kayfiyat 0,5 s davomida silliq o‘zgaradi.
- Diktor «A xodim» desa, ekranda doim **A** harfi bilan nishon ko‘rinsin (ism ixtiyoriy, kichik yozuvda).

### 1.6 Ikonalar va grafikalar
- Ikonalar: chiziqli, 3 px qalinlik, yumaloq uchlar (Lucide uslubi). Emoji ishlatilmasin (render muhitida turlicha chiqadi).
- Ustunli diagramma: yuqori burchaklari 16 px, ichida yuqoridan oq 2 px chiziq (yorug‘lik), qiymat ustida 30 px yozuv.
- Reja chizig‘i: `amber` rangli uzuq chiziq, chap tomonda yorliq.

---

## 2. Takrorlanadigan vizual metaforalar

| Metafora | Ko‘rinishi | Qayerda |
|---|---|---|
| **Maosh minorasi** | Ustma-ust bloklar: pastda teal OKLAD, ustida ko‘k BONUS yoki sariq ULUSH | atamalar, 4 variant, barcha hisob-kitoblar |
| **Eshik** | Progress chizig‘idagi 50% belgisida turgan darvoza. Bajarilish 50% ga yetmasa, darvoza yopiladi va ball «0» bo‘lib tushib ketadi | eshik qoidasi, A xodim hisobi, yangi xodim (eshik 30% → 50%) |
| **Zinapoya** | Uch pog‘onali zina: 5% → 8% → 10%. Butun summa bitta pog‘onaga sakraydi | 3-B usuli |
| **Bosqichli idish** | Uch qavatli idish pastdan to‘ladi, har qavatning o‘z foizi | 3-C usuli |
| **Sifat krani** | Ulush oqimini to‘sadigan kran: 1,0 / 0,8 / 0,5 | 4-variant |
| **Kassa tekshiruvi** | Raqam kassa ikonasi orqali o‘tgandagina «tushum» bo‘ladi | tushum ta’rifi, ma’lumot manbalari |
| **Taqvim** | Oy taqvimi, kunlar belgilanadi | oy oxiri tartibi, yangi xodim, «oy o‘rtasida o‘zgarmaydi» |

---

## 3. Harakat tili (motion spec)

### 3.1 Easing tokenlari
| Token | cubic-bezier | Qachon |
|---|---|---|
| `emph-in` (asosiy) | `0.05, 0.7, 0.1, 1` | elementlarning paydo bo‘lishi |
| `standard` | `0.2, 0, 0, 1` | chiziq chizish, ustun o‘sishi, raqam sanash |
| `in-out` | `0.65, 0, 0.35, 1` | kamera, sahna o‘tishlari |
| `back` (overshoot 1.7) | — | «pop»: belgilar, nishonlar, javoblar |

### 3.2 Davomiylik
| Harakat | Davomiylik |
|---|---|
| Kichik element (chip, belgi) | 250–400 ms |
| Kartochka paydo bo‘lishi | 600–750 ms |
| Ustun o‘sishi / chiziq chizilishi | 900–1400 ms |
| Raqam sanab chiqishi (count-up) | 800–1300 ms |
| Sahna o‘tishi | 700–800 ms |
| Kamera harakati | 1000–1300 ms |
| Ta’kid (pulse/lift) | 900 ms, keyin asl holat |

### 3.3 Qoidalar
- **Stagger:** guruh elementlari 80–150 ms farq bilan chiqadi. Sarlavha so‘zlari 50 ms farq bilan, har biri pastdan 60 px, 8 px blur → aniq.
- **Anticipation:** muhim natija (javob, yakuniy maosh) chiqishidan oldin 150 ms ichida element 3% kichrayib, keyin `back` bilan kattalashadi.
- **Follow-through:** kartochka joyiga tushgach, ichidagi matn 60–100 ms keyin chiqadi.
- **Kamera:** sahnada butun vaqt davomida 1–1,5% sekin yaqinlashish (push-in). Diktor kichik detalni aytganda 1,05–1,25 × yaqinlashish, keyin qaytish. Yaqinlashganda muhim matn kadrdan chiqib ketmasin.
- **Ta’kid turlari:** `pulse` (1,09 ×, sariq nur), `lift` (−14 px, 1,05 ×), `shake` (xato uchun, 12 px, so‘nuvchi), `mark` (matn ostidan sariq marker chiziq o‘tadi).
- **Raqamlar:** pul summalari doim 0 dan sanab chiqadi. Formula natijasi sanash tugagach 0,3 s `pulse` qiladi.
- **Chiqib ketish:** element o‘chganda shaffoflik + 8 px blur, 500 ms.

### 3.4 Sahna o‘tishlari (kutubxona)
| Nom | Tavsif | Qachon |
|---|---|---|
| `fade` | oddiy almashish | bir sahna ichida davom etganda |
| `push` | eski sahna chapga, yangisi o‘ngdan | ketma-ket mavzular |
| `zoom-through` | eski sahna kattalashib xiralashadi, yangisi 0,82 dan 1 ga | yangi bob, javob sahnasi |
| `circle-wipe` | yangi sahna markazdan doira bo‘lib ochiladi | savol, muhim burilish |
| `up` | vertikal siljish | xulosa, bob yakuni |
| `morph` | umumiy element (kartochka, raqam) joyini saqlab keyingi sahnaga o‘tadi | hisob-kitob zanjirlari |

Bir xil o‘tish ketma-ket 2 martadan ko‘p ishlatilmasin.

---

## 4. Ishlab chiqarish tartibi (pipeline)

1. **Ssenariyni tayyorlash** (5-bo‘lim tuzatishlari bilan).
2. **Audio — bob bo‘yicha alohida fayllar.** 12 ta bob = 12 ta audio. Bitta 22 daqiqalik audio qilinmasin: uzilib qolishi va sinxronlash qiyinligi xavfi bor. Hamma boblarda bitta ovoz va bitta uslub ko‘rsatmasi.
3. **So‘z darajasidagi vaqt belgilari.** WhisperX yoki shunga o‘xshash forced-alignment vositasi (Whisper o‘zbek tilini qo‘llaydi) yoki «bo‘g‘in + pauza» usuli. Natija: `{so‘z, boshlanish, tugash}` ro‘yxati. Bu vaqtlar 6-bo‘limdagi «kalit so‘z» (cue) ustunidagi so‘zlarga bog‘lanadi.
4. **Animatik.** Har sahnadan bitta asosiy kadr + audio. Faqat vaqt va kompozitsiyani tekshirish uchun.
5. **Animatsiya.** Tavsiya etilgan vositalar: Remotion (React), Motion Canvas yoki HTML + deterministik `render(t)` funksiyasi va Playwright orqali kadrma-kadr render. Shu repozitoriydagi `video-darslik-v2/engine.js` aynan shunday ishlaydi va qayta ishlatilishi mumkin: animatsiyalar `data-at="kalit so‘z"` orqali diktor so‘ziga bog‘lanadi.
6. **Ovoz dizayni** (3.5 bo‘lim).
7. **Sifat nazorati** (9-bo‘lim) va yakuniy render.

### 4.1 Ovoz dizayni
| Effekt | Qachon | Daraja (diktorga nisbatan) |
|---|---|---|
| whoosh | sahna o‘tishi (fade’dan tashqari) | −16 dB |
| pop | kartochka, nishon, belgi chiqishi | −14 dB |
| tick | jadval qatori, taymer soniyasi | −13 dB |
| ding | to‘g‘ri natija, yakuniy summa | −14 dB |
| success (arpedjio) | savol javobi + konfetti | −13 dB |
| thud | xato, «0», «tavsiya etilmaydi» | −10 dB |

- Diktor −16 LUFS (integrated), cho‘qqi −1 dBTP.
- Fon musiqasi ixtiyoriy: litsenziyasi aniq (masalan, YouTube Audio Library) korporativ ambient, −28 dB atrofida, diktor gapirganda yana −4 dB pasayadi (ducking).
- Bir xil effekt 120 ms ichida takrorlanmasin.

---

## 5. Ssenariy bo‘yicha eslatmalar (audiodan oldin)

1. Qavslar ichidagi matn — `(Tavsiya etilmaydi)`, `(Oklad plyus Key-Pi-Ay bonus)` — TTS’da g‘alati o‘qilishi mumkin. Qavslarni olib, gapga aylantiring: «Birinchi variant — faqat oklad. Bu variant tavsiya etilmaydi.»
2. `"A" xodim` kabi qo‘shtirnoqlar shart emas: «A xodim».
3. «Konversiya — sotuvchi mahoratini ko‘rsatuvchi **eng muhim** ko‘rsatkich» — qo‘llanmada «eng muhim KPIlardan biri» deyilgan. Shunday tuzatish tavsiya etiladi.
4. «Beshinchi savol»da faqat «ha» javobi bor. Qo‘llanmaga ko‘ra «yo‘q» bo‘lsa — 2- yoki 3-variant. Shu qo‘shilsin.
5. Ekranda diktor matni emas, 6-bo‘limdagi «Ekran matni» ustuni ishlatiladi.

---

## 6. Sahnama-sahna storyboard

Ustunlar: **Cue** — vizual aynan shu so‘z aytilganda boshlanadi. Vaqtlar taxminiy (≈14,5 belgi/s); aniq vaqt audiodan olinadi.

### BOB 0. Kirish (≈ 1:40)

**S01 · Salomlashish va mavzu** (≈ 0:18) · o‘tish: fade-in qorong‘ilikdan
- **Vizual:** fon dog‘lari asta yonadi. Markazda katta sarlavha so‘zma-so‘z chiqadi. Pastda «Rahbar uchun», «HR uchun» chiplari. Fonda kalkulyator, taqvim, grafik, pul ikonalaridan iborat yengil «suzuvchi» kollaj (opacity 0.15, parallaks).
- **Ekran matni:** `Maosh tizimini tanlash va hisoblash` · `Korxona ichki akademiyasi · Sotuv moduli`
- **Cue:** «rahbarlar» → «Rahbar uchun» chipi (pop); «inson resurslari» → «HR uchun»; «mavzusi» → sarlavha.
- **SFX:** yumshoq «swell» (whoosh teskari), sarlavhada pop.

**S02 · Uch vazifa** (≈ 0:25) · push
- **Vizual:** 3 ta yirik kartochka, har birida ikona + raqam: 🎯 → chiziqli «nishon» (tanlash), «nutq pufakchasi + 1:00 taymer» (tushuntirish), «kalkulyator + 10:00» (hisoblash).
- **Cue:** «Birinchisi» → 1-kartochka `lift`, qolganlari 40% xira; «Ikkinchisi» → 2-kartochka, taymer 60 dan 0 ga tez aylanadi; «uchinchisi» → 3-kartochka, «10 daqiqa» sanab chiqadi.
- **Ekran matni:** `Tanlash` · `1 daqiqada tushuntirish` · `10 daqiqada hisoblash`

**S03 · «Tashvish yo‘q»** (≈ 0:12) · fade
- **Vizual:** «KPI?» va «CRM?» degan ikki katta so‘roq-nishon; «tashvishga o‘rin yo‘q» so‘zida ular lug‘at kitobchasiga aylanib, kitob ochiladi.
- **Cue:** «Key-Pi-Ay va Si-Ar-Em» → so‘roqlar pop; «yuz foiz tushunarli» → ✓ belgisi.

**S04 · 1-temir qoida** (≈ 0:20) · circle-wipe
- **Vizual:** chapda katta qizil «✕ FAQAT OKLAD» kartochkasi, o‘ngda A va D personajlari. D ning ustida «4 mln», A ning ustida «4 mln».
- **Cue:** «faqat qat’iy oklad» → kartochka pop + thud; «yangi xodimga ham» → chip; «tajribali xodimga ham» → chip; «eng katta xavf» → kartochka `shake`, D personaji xafa.
- **Ekran matni:** `1-qoida: faqat oklad — YO‘Q`

**S05 · 2-temir qoida** (≈ 0:22) · push
- **Vizual:** «Maosh = faqat ulush» yozuvi qizil chiziq bilan ustidan chiziladi. Pastda **Maosh minorasi** quriladi: avval teal OKLAD bloki (asos), ustiga sariq ULUSH bloki tushadi.
- **Cue:** «quruq foizning o‘zidan» → chiziq chiziladi (swish); «bazaviy oklad» → OKLAD bloki tushadi (thud yumshoq); «uning ustiga» → ULUSH bloki tushib, minora biroz siqilib tiklanadi (squash & stretch).
- **Ekran matni:** `2-qoida: okladsiz ulush — YO‘Q` · `Oklad + ulush`

### BOB 1. Atamalar lug‘ati (≈ 4:30)

Butun bob davomida o‘ng chetda **lug‘at paneli** turadi: 20 ta kichik katak. Har atama tushuntirilganda uning katagi yonadi, shunda tomoshabin «nechtasi qoldi»ni ko‘radi.

**S06 · KPI** (≈ 0:20)
- Chapda «Yaxshi ishla» degan pufakcha qizil chiziq bilan o‘chiriladi. Uning o‘rnida aniq ko‘rsatkichlar paydo bo‘ladi: `60 000 000 so‘m / oy`, `30 qo‘ng‘iroq / kun` (raqamlar sanab chiqadi).
- **Cue:** «yaxshi ishla» → o‘chirish; «oltmish million» → 1-raqam; «o‘ttizta qo‘ng‘iroq» → 2-raqam.

**S07 · CRM** (≈ 0:25)
- Noutbuk ekranida mijozlar ro‘yxati, qatorlar birin-ketin qo‘shiladi: «Qo‘ng‘iroq qildi ✓», «Gaplashildi ✓», «Sotib oldi ✓», «Qayta qo‘ng‘iroq: ertaga 10:00 ⏰».
- «AmoCRM, Bitrix24» logotiplari emas, faqat matn-chiplar (brendlar ishlatilmasin).
- **Cue:** «bo‘lmasa» → noutbuk yonida qog‘oz daftar va Excel jadvali ikonasi paydo bo‘ladi.

**S08 · Lid → Bitim → Tushum** (≈ 0:35) · morph zanjiri
- 3 bosqichli voronka: odam ikonasi (lid) → qo‘l siqish (bitim) → kassa (tushum).
- So‘ng shartnoma chizig‘i: 10 mln uzunlikdagi bo‘sh chiziqqa 4 mln yashil to‘lov to‘ladi. Kassa ikonasidan faqat 4 mln o‘tadi.
- **Cue:** «Lid» → 1-bosqich; «Bitim» → 2; «Tushum» → 3; «o‘n million» → chiziq; «to‘rt million so‘m to‘ladi» → to‘lish; «Demak, tushum» → `Tushum = 4 mln` pop + ding; qolgan 6 mln «hali tushum emas» xira holda.

**S09 · Reja · Oklad** (≈ 0:20)
- Reja: nishon taxtasi ustida `60 mln`. Oklad: **Maosh minorasi**ning teal asosi + «kafolat» qalqoni.
- **Cue:** «sotuv bo‘lsa ham, bo‘lmasa ham» → sotuv grafigi tushadi, lekin OKLAD bloki joyida qoladi.

**S10 · Bonus · Bonus fondi** (≈ 0:25)
- Minoraga ko‘k BONUS bloki qo‘shiladi. Uning ustida punktir «quti» — **bonus fondi** (maksimum 2,5 mln). KPI to‘lgan sari ko‘k blok shu qutini to‘ldiradi.
- **Cue:** «yuz foiz bajargan taqdirda» → quti to‘liq to‘ladi; «ikki yarim million» → `2 500 000` sanaladi.

**S11 · Ulush · Pog‘onali ulush** (≈ 0:35)
- Ulush: 10 mln tanga to‘plamidan 5% «tilim» ajralib xodimga uchadi → `500 000`.
- Pog‘onali: **Zinapoya** 3 pog‘ona: 0–50 → 5%, 50–100 → 8%, 100+ → 10%; har pog‘ona aytilganda yonadi.
- **Cue:** «besh foizi» → tilim; «ellik million so‘mgacha» / «sakkiz foiz» / «o‘n foiz» → pog‘onalar.

**S12 · Konversiya** (≈ 0:22)
- 10×10 = 100 ta odam ikonasi, 20 tasi birin-ketin yashilga bo‘yaladi (40 ms stagger) → `20%`.
- **Cue:** «yigirmatasi» → bo‘yash; «eng muhim» → % raqami `pulse`.

**S13 · Qayta aloqa · CRM tozaligi** (≈ 0:25)
- Qayta aloqa: soat va «va’da qilingan vaqt» belgisi, telefon jiringlaydi, ✓.
- CRM tozaligi: 10 ta kartochka, 9 tasi to‘liq (yashil), 1 tasi chala (qizil) → `90%`.

**S14 · Bajarilish foizi** (≈ 0:22)
- Formula kinetik tarzda: `haqiqiy ÷ maqsad × 100`. So‘ng raqamlar formula ichiga «tushadi»: `45 ÷ 60 × 100 = 75%`. Halqa-progress 75% gacha chiziladi.
- **Cue:** «bo‘lib, yuzga ko‘paytiramiz» → formula; «qirq besh» → raqam tushadi; «yetmish besh» → halqa + ding.

**S15 · Vazn · KPI balli** (≈ 0:25)
- Vazn: 100% lik gorizontal chiziq 40/20/20/20 bo‘laklarga bo‘linadi.
- KPI balli: tezlik o‘lchagich (gauge) 0–100; strelka 46 ga boradi va bonus fondi qutisining 46% i to‘ladi.
- **Cue:** «yuz foiz bo‘lishi shart» → jami 100% ding; «qirq olti» → strelka.

**S16 · Eshik qoidasi** (≈ 0:18) · kamera yaqinlashadi
- **Eshik metaforasi** ilk bor: progress chizig‘ida 50% da darvoza. Bajarilish 45% gacha boradi, darvoza yopiladi, ball «0» bo‘lib pastga tushadi (thud).
- **Cue:** «ellik foizdan past» → to‘xtash; «nolga tenglashtiriladi» → yopilish + 0.

**S17 · Maosh / tushum · Bruto** (≈ 0:25)
- Tarozi: bir pallada 60 mln tushum, ikkinchisida 5 mln maosh → `8,3%`.
- Bruto: maosh qog‘ozi, «soliqdan oldin» muhri.
- **Cue:** «sakkiz butun o‘ndan uch» → foiz pop; «bruto» → muhr bosiladi (thud yengil).
- Bob oxirida lug‘at panelining 20 katagi to‘liq yonadi va qisqa «success».

### BOB 2. Yaxshi tizimning 4 sharti (≈ 1:15)

**S18 · 4 shart** (≈ 1:15) · bitta sahna, kamera har kartochkaga suriladi
- 2×2 kartochka panjarasi. Har shart aytilganda kamera o‘sha kartochkaga 1,15 × yaqinlashadi, ✓ belgisi chiziladi, kartochka pastida «bo‘lmasa…» oqibati qizil rangda chiqadi; keyin kamera umumiy rejaga qaytadi.
  1. Tushunarlilik — personaj boshida «qancha olaman?» pufakchasi + 1:00 taymer.
  2. Ta’sir qila olish — personajning qo‘li ostida ko‘tariluvchi grafik.
  3. Korxonaga foydali — ikki ustun birga o‘sadi (xodim mehnati ↔ korxona daromadi).
  4. Hisoblash oson — kalkulyator va 10–15 daqiqa soati.
- **Cue:** «Birinchi shart», «Ikkinchi shart», «Uchinchi shart», «To‘rtinchi shart»; «bir-ikki oy ichida buziladi» → bob boshida yuqorida qizil ogohlantirish.

### BOB 3. To‘rt variant (≈ 1:50)

**S19 · Variantlar sahnasi** (≈ 0:08) · zoom-through
- 4 ta ustun-kartochka, har birining tepasida kichik **Maosh minorasi**: (1) faqat teal, (2) teal + ko‘k, (3) teal + sariq, (4) teal + sariq + binafsha «kran».

**S20 · 1-variant** (≈ 0:25) — 1-kartochka kattalashadi. Ustidan qizil chiziq chiziladi, «TAVSIYA ETILMAYDI» muhri bosiladi (thud). Pastda kuchli personaj eshikdan chiqib ketadi, sust personaj o‘tirib qoladi.
**S21 · 2-variant** (≈ 0:25) — Minorada ko‘k bonus bloki; «yuqori chegarasi bor» so‘zida bonus qutisi ustida qopqoq yopiladi va reja 120% ga chiqsa ham blok o‘smaydi.
**S22 · 3-variant** (≈ 0:22) — Sariq ulush bloki tushum bilan cheksiz o‘sadi. «sifat ishlariga e’tibor bermay» so‘zida yonidagi CRM kartochkalari xiralashib qiyshayadi.
**S23 · 4-variant** (≈ 0:22) — 3-variant + **Sifat krani**: CRM yomonlashganda kran yarim yopilib, ulush oqimi ingichkalashadi. «temir intizom» so‘zida 4 ta element (oklad, ulush, kran, ✓) bitta qalqonga birlashadi.

### BOB 4. Qaysi variant? 6 savol (≈ 2:00)

**S24–S29 · Qaror daraxti** (har savol ≈ 0:15–0:20) · bitta doimiy sxema
- Chap tomonda savollar ro‘yxati (1–6), o‘ngda 2, 3, 4-variant «manzil» kartochkalari.
- Har savolda savol qatori yonadi, undan «HA» va «YO‘Q» shoxlari chiziladi va tegishli variant kartochkalariga yorug‘ nuqta yugurib boradi.
- Savollar, javoblar va manzillar aniq 8-bo‘limdagi jadval bo‘yicha.
- 5-savolda «yo‘q» shoxi ham chizilsin (→ 2 yoki 3).
- 6-savolda «yo‘q» shoxi bo‘lsa: 3-variant + «kunlik hisobot daftari» ikonasi.
- **Cue:** «Birinchi savol» … «Oltinchi savol»; har savolda «ha» / «yo‘q» so‘zlari.

**S30 · Umumiy tavsiya** (≈ 0:12) · up
- Gorizontal yo‘l: `2-variant` → (3 oy, taqvim varaqlanadi) → `3 yoki 4-variant`.
- **Cue:** «avval ikkinchi variant» → 1-kartochka; «uch oydan keyin» → yo‘l chiziladi + taqvim; «uchinchi yoki to‘rtinchi» → 2-kartochka + ding.

### BOB 5. KPI tanlash (≈ 2:10)

**S31 · KPI 3 turi** (≈ 0:30) — 3 ustun: Natija (yashil), Harakat (ko‘k), Sifat (binafsha). Har turda misollar chiplari ketma-ket chiqadi (stagger 350 ms).
**S32 · Oltin qoida: vaznlar** (≈ 0:35) — 100% lik chiziq: Tushum 40, Konversiya 20 (ustida qavs «Asosiy — 60%»), Uchrashuvlar 20, CRM 20 (qavs «Qolgan — 40%»). «to‘rtta yoki beshta» so‘zida 6-, 7-chi KPI qo‘shilishga uriniladi, lekin «✕» bilan qaytariladi (shake).
**S33 · Maqsad raqami** (≈ 0:30) — 3 oylik ustunlar (52, 60, 56), o‘rtacha chiziq 56 ga, keyin ×1,1 → 62 yashil ustun. «o‘rtacha xodim» so‘zida 5 ta personaj qatori, eng kuchli emas, o‘rtadagisi tanlanadi. «kelishib» → rahbar va xodim qo‘l siqishadi.
**S34 · Yangi xodim maqsadi** (≈ 0:35) — 3 bosqichli vaqt chizig‘i (1–30, 31–60, 61+ kun). Har bosqichda progress chizig‘i va **Eshik** belgisi: 1-bosqichda eshik yo‘q (darvoza ochiq, xira), 2-da 30% da, 3-da 50% da.

### BOB 6. Raqamlar qayerdan? (≈ 1:30)

**S35 · Ikki yo‘l** (≈ 0:20) — chap: CRM (noutbuk), o‘ng: kunlik hisobot daftari.
**S36 · Kunlik hisobot jadvali** (≈ 0:35) — jadval ustunlari ketma-ket chiziladi: Sana · Qo‘ng‘iroq/uchrashuv · Gaplashuv/taklif · Bitim · Tushum · Qayta aloqa · Izoh. So‘ng 26 kunlik taqvim, 24 kun yashil → `92%`.
**S37 · Tekshiruv qoidalari** (≈ 0:30) — tushum raqami **Kassa tekshiruvi** orqali o‘tadi (✓). Keyin rahbar 3 ta tasodifiy yozuvni lupa bilan tanlaydi, telefon ikonasi. «halol to‘ldiradi» → xodim personaji tabassum qiladi.

### BOB 7. Bitta misolda 4 variant (≈ 6:00) — videoning yuragi

**S38 · Misol sharti** (≈ 0:20) — reja 60 mln chizig‘i, maqsadlar chiplari: konversiya 20%, CRM 90%, qayta aloqa 90%.
**S39 · To‘rt xodim** (≈ 0:35) — A, B, C, D personajlari chapdan kirib, ustunlar diagrammasining tagida turadi. Har biri aytilganda ustun o‘sadi: 27 (45%), 60 (100%), 90 (150%), 120 (200%). A ning yonida uning ko‘rsatkichlari kartochkasi: 16% · 72% · 63%. D aytilganda unga konfetti.
**S40 · 1-variant: hisob** (≈ 0:35) — har xodimning ustida bir xil `4 mln` yorlig‘i. Pastda «maosh/tushum»: A 14,8% (qizil), D 3,3% (sariq). D personaji xafa bo‘lib asta kadrdan chiqib ketadi, A esa o‘tirib qoladi.
**S41 · 2-variant: formula** (≈ 0:20) — `Maosh = Oklad + Bonus fondi × KPI balli` kinetik yig‘iladi, tagida `2 500 000` va `2 500 000`.
**S42 · A ning KPI jadvali** (≈ 1:00) · morph (A personaji jadval yoniga uchib keladi)
- 4 qatorli jadval, har qator diktor aytgan payt chiziladi:
  | KPI | Hisob | Bajarilish | Eshik | Vazn | Ball |
  |---|---|---|---|---|---|
  | Tushum | 27 ÷ 60 | 45% | **yopiq** | 40% | **0** |
  | Konversiya | 16 ÷ 20 | 80% | o‘tdi | 20% | 16 |
  | CRM | 72 ÷ 90 | 80% | o‘tdi | 20% | 16 |
  | Qayta aloqa | 63 ÷ 90 | 70% | o‘tdi | 20% | 14 |
- Tushum qatorida **Eshik** animatsiyasi takrorlanadi: darvoza yopiladi, «0» tushadi (thud).
- **Cue:** «jami qirq olti» → `0 + 16 + 16 + 14 = 46` yig‘indisi, 46 sanab chiqadi + ding.
**S43 · Bonus va maosh** (≈ 0:30) · morph: «46%» formulaga uchadi
- `2 500 000 × 46% = 1 150 000` → `2 500 000 + 1 150 000 = 3 650 000 so‘m`. **Maosh minorasi**: teal 2,5 + ko‘k 1,15. A personaji yengil tabassum.
**S44 · B, C, D natijalari** (≈ 0:20) — 4 ta minora yonma-yon: 3,65 · 4,95 · 5,0 · 5,0. «maksimal besh million» so‘zida minoralar ustida qopqoq (chegara chizig‘i), C va D minorasi unga tegib to‘xtaydi.
**S45 · 3-variant: nega oklad shart** (≈ 0:40)
- Ikkita sabab kartochkasi: (1) «Ish haqi oldindan aniq bo‘lsin» — tarozi va «g‘arar = noaniqlik» izohi; (2) «Savdo past oyda ham daromad».
- Pastda kichik yozuv: «Bu diniy hukm emas — mutaxassis bilan tekshiring» (qo‘llanmadagi eslatma, ekranda qolsin).
**S46 · 3 usul** (≈ 0:35) — uch ustun: 3-A (bitta foiz — tekis chiziq), 3-B (**Zinapoya**), 3-C (**Bosqichli idish**). Har usul aytilganda o‘z metaforasi animatsiyalanadi.
**S47 · B xodim — uch usulda** (≈ 0:50) — B personaji markazda, 60 mln «tangalar»i uch usulga oqib boradi:
  - 3-A: `60 mln × 5% = 3 000 000` → maosh `5 500 000`
  - 3-B: B zinapoyaning 2-pog‘onasiga chiqadi, butun 60 mln ga 8% → `4 800 000` → `7 300 000`
  - 3-C: idishning 1-qavati (50 mln × 5% = 2 500 000), 2-qavati (10 mln × 8% = 800 000) to‘ladi → `3 300 000` → `5 800 000`
  - Yakunda uchala maosh minorasi yonma-yon, eng balandi (3-B) `pulse`.
**S48 · 4-variant: formula va kran** (≈ 0:35) — `Maosh = Oklad + Ulush × Sifat koeffitsienti`. **Sifat krani** 3 holatda ko‘rsatiladi: ≥90% → 1,0 (to‘liq ochiq), 70–89% → 0,8, <70% → 0,5.
**S49 · A va D: 4-variantda** (≈ 0:45)
  - A: `27 mln × 5% = 1 350 000`. CRM 80% va qayta aloqa 70% kartochkalari, eng pasti (70%) ajratiladi → kran 0,8 → `1 080 000` → maosh `3 580 000`.
  - D: kran to‘liq ochiq, `6 000 000` ulush → maosh `8 500 000`, D personaji xursand, konfetti.

### BOB 8. Har oy: 6 qadam (≈ 1:40)

**S50 · 6 qadam** (≈ 1:10) — gorizontal «konveyer»: 6 ta stansiya. Har qadam aytilganda bitta xodim kartochkasi keyingi stansiyaga suriladi va stansiya yonadi.
  - 2-qadamda **teskari KPI** qo‘shimcha oynasi: soat ikonasi, `maqsad ÷ haqiqiy`, `5 ÷ 8 × 100 = 62,5%`. Oddiy formula bilan yonma-yon solishtiriladi, o‘q almashadi (swap animatsiyasi).
  - 3-qadamda **Eshik** kichik shaklda.
**S51 · Oy oxiri taqvimi** (≈ 0:30) — oy taqvimi: 1–3 (raqamlarni yig‘ish), 3–4 (jadval), 5 gacha (hisob varag‘i yuboriladi — konvert uchadi), +3 kun (e’tiroz — ikki personaj stolda), to‘lov sanasi (pul belgisi). Kunlar ketma-ket bo‘yaladi.

### BOB 9. Yangi xodim (≈ 1:30)

**S52 · 4 bosqich** (≈ 1:10) — vaqt chizig‘i, yangi xodim personaji uning ustida yuradi:
  - 16 kun akademiya — kitob, imtihon varag‘i, «✓ imtihondan o‘tdi».
  - 1–30 kun — 2-variant, maqsad 50–70%, eshik yo‘q (darvoza ochiq).
  - 31–60 kun — maqsad 80–90%, eshik 30%.
  - 61–90 kun — to‘liq reja, eshik 50%; 90-kundan keyin «3 yoki 4-variant» yo‘l ko‘rsatkichi.
**S53 · «Oy o‘rtasida o‘zgarmaydi»** (≈ 0:20) — taqvimning 15-kuni qizil ✕, keyingi oyning 1-kuni yashil ✓, «yozma» hujjat va imzo chizilishi (draw animatsiyasi).

### BOB 10. 9 ta xato (≈ 1:40)

**S54 · Xatolar** (≈ 1:40) — 3×3 panjara. Har xato aytilganda kartochka qizil ✕ bilan chiqadi (thud), 1,5 s dan keyin ostida yashil «→ to‘g‘ri yo‘l» qatori chiqadi:
  1. Faqat oklad → kamida 2-variant
  2. Okladsiz foiz → doim oklad + ulush
  3. «Tushum» yozilmagan → tushum = hisobga kelgan pul
  4. 5 tadan ko‘p KPI → 4–5 ta yetarli
  5. Og‘zaki shartlar → yozma, imzo bilan
  6. Oy o‘rtasida o‘zgartirish → keyingi oyning 1-sanasidan
  7. Hammaga bir xil reja → yangi xodimga yumshoq maqsad
  8. Tekshirilmagan raqamlar → avval CRM / daftar tartibi
  9. Kechikkan maosh → to‘lov sanasi doim bir xil
- Ekranda bir vaqtda faqat joriy kartochka to‘liq yorug‘, oldingilari 60% shaffoflikda.

### BOB 11. Tasdiq varaqasi va yakun (≈ 1:00)

**S55 · Rahbar tasdiq varaqasi** (≈ 0:35) — hujjat varag‘i yuqoridan tushadi, maydonlar ketma-ket to‘ladi (typewriter): F.I.SH., variant, oklad, bonus fondi/ulush, KPI vaznlari, eshik qoidasi, to‘lov sanasi. Ikkita imzo chiziladi, varaq ikki nusxaga bo‘linib, biri rahbarga, biri xodimga uchadi.
**S56 · Yakun** (≈ 0:25) — **Maosh minorasi** oxirgi marta: Oklad (xavfsizlik) + Natija (rag‘bat) + KPI (tartib). Barcha personajlar sahnaga chiqib, tabassum qiladi. «bugunoq joriy qiling» so‘zida katta CTA: `Bugunoq joriy qiling`.
**S57 · Yopilish kartasi** (≈ 0:05, diktorsiz) — logotip/modul nomi, «Excel hisoblagich — alohida fayl» eslatmasi, fade-out.

---

## 7. Interaktivlik va diqqatni ushlash

- **Savol-pauzalar** (diktor matnida yo‘q, audioga 5 s jimlik qo‘shiladi): har bob oxirida ixtiyoriy bitta savol kartochkasi + 5 soniyalik halqa-taymer + javob (success + konfetti). Tavsiya:
  1. 1-bob oxiri: «Shartnoma 10 mln, to‘landi 3 mln. Tushum?» → 3 mln.
  2. 7-bob (2-variant) oxiri: «KPI 40% bajarildi. Ball?» → 0 (eshik).
  3. 7-bob (3-variant) oxiri: «C xodim 90 mln, zinapoya. Ulush?» → 7 200 000.
  4. 8-bob oxiri: «Maqsad 4 daq, javob 6 daq. Bajarilish?» → ≈ 66,7%.
  Savollar qo‘shilsa, diktor ularni o‘qishi uchun qisqa qo‘shimcha audio yozish kerak, yoki savol faqat ekranda ko‘rsatiladi.
- **Bob kartalari:** har bob boshida 1,5 s lik sarlavha kartasi (raqam + nom), progress chizig‘ida joriy bob yonadi.
- **Qahramonlar hikoyasi:** D xodimning taqdiri ip bo‘lib o‘tadi: 1-variantda ketadi, 2-variantda «chegaraga uriladi», 3/4-variantda xursand. Bu tomoshabinni oxirigacha ushlab turadi.
- **Ochiq savol (hook):** kirishda «Eng yaxshi sotuvchingizni qaysi maosh tizimi saqlab qoladi?» degan savol qo‘yilib, javobi 7-bobda beriladi.
- **Video uzunligi:** umumiy video 22 daqiqa atrofida bo‘ladi. Xodimlar uchun uni 4–5 qismga bo‘lish tavsiya etiladi (6 daqiqadan qisqa videolar oxirigacha ko‘riladi): 1) Kirish + lug‘at, 2) 4 shart + 4 variant + test, 3) KPI + raqamlar, 4) Misol (7-bob), 5) Oylik hisob + yangi xodim + xatolar + yakun.

---

## 8. Raqamlar jadvali (ekranda faqat shular ishlatilsin)

| Ma’lumot | Qiymat |
|---|---|
| Oylik reja | 60 000 000 so‘m |
| Maqsadlar | konversiya 20%, CRM tozaligi 90%, qayta aloqa 90% |
| A | tushum 27 mln (45%), konv. 16%, CRM 72%, q.aloqa 63% |
| B | 60 mln (100%), konv. 20%, CRM 81%, q.aloqa 90% |
| C | 90 mln (150%), konv. 24%, CRM 95%, q.aloqa 99% |
| D | 120 mln (200%), konv. 25%, CRM 98%, q.aloqa 100% |
| 1-variant | hammaga 4 000 000; maosh/tushum: A 14,8% · B 6,7% · C 4,4% · D 3,3% |
| 2-variant | oklad 2 500 000, fond 2 500 000; KPI balli A 46 · B 98 · C 100 · D 100; maosh 3 650 000 · 4 950 000 · 5 000 000 · 5 000 000 |
| Pog‘onalar | 0–50 mln 5% · 50–100 mln 8% · 100+ mln 10% |
| 3-A maosh | A 3 850 000 · B 5 500 000 · C 7 000 000 · D 8 500 000 |
| 3-B maosh | A 3 850 000 · B 7 300 000 · C 9 700 000 · D 14 500 000 |
| 3-C maosh | A 3 850 000 · B 5 800 000 · C 8 200 000 · D 11 000 000 |
| 4-variant koef. | sifat KPI **bajarilish foizi**ning eng pastiga qarab: ≥90% → 1,0 · 70–89% → 0,8 · <70% → 0,5 (A: CRM 72÷90 = 80%, q.aloqa 63÷90 = 70% → 0,8) |
| 4-variant maosh | A 3 580 000 (ulush 1 350 000 × 0,8) · B 5 500 000 · C 7 000 000 · D 8 500 000 |
| Teskari KPI | 5 ÷ 8 × 100 = 62,5% |
| Kunlik hisobot | 24 / 26 kun = 92% |
| Maosh/tushum misoli | 5 mln / 60 mln = 8,3% |
| Yangi xodim | akademiya 16 kun; 1–30 kun maqsad 50–70%, eshik yo‘q; 31–60 kun 80–90%, eshik 30%; 61-kundan 100%, eshik 50% |
| 6 savol | 1) Mijoz o‘zi keladimi: ha → 2; yo‘q → 3/4 · 2) Bitim 7 kundan tez: ha → 2; yo‘q → 4/3 · 3) Tushum 30% dan ko‘p o‘zgaradimi: ha → 2/4; yo‘q → 3 ham bo‘ladi · 4) Tushum shu xodimnikimi: ha → 3/4; yo‘q → 2 · 5) Rahbarda 10–15 daqiqa bormi: ha → 4; yo‘q → 2/3 · 6) CRM/daftar to‘g‘rimi: ha → hammasi; yo‘q → 3 |

---

## 9. Sifat nazorati (har bob uchun)

- [ ] Har bir raqam 8-bo‘limdagi jadvalga mos.
- [ ] Ekranda diktor gapi to‘liq takrorlanmagan; bir blokda 7 so‘zdan ko‘p emas.
- [ ] Har bir vizual o‘z cue-so‘zidan 0,15 s dan ortiq kechikmaydi va oldin chiqmaydi.
- [ ] Hech bir matn yaqinlashgan kamerada kadrdan chiqib ketmaydi; xavfsiz maydon saqlangan.
- [ ] Rang ma’nolari to‘g‘ri: oklad teal, bonus ko‘k, ulush sariq, xato qizil.
- [ ] Bir xil o‘tish ketma-ket 2 martadan ko‘p emas.
- [ ] Raqam sanash yakuniy kadrda tugagan (yarim sanalgan raqam qolmagan).
- [ ] Ovoz: diktor −16 LUFS, effektlar diktorni bosib ketmaydi, takrorlanuvchi «pop» yo‘q.
- [ ] Brend logotiplari va emoji ishlatilmagan.
- [ ] 1080p kadrlar telefonda ham o‘qiladi (eng kichik matn 22 px).
- [ ] Yakuniy faylda tasvir va ovoz uzunligi bir xil, boshida/oxirida jimlik ≤ 1 s.

---

## 10. Ilhom va manbalar

- R. Mayer, multimedia orqali o‘qitish tamoyillari (coherence, signaling, redundancy, segmenting): learningscientists.org/blog/2021/7/1-1
- Guo, Kim, Rubin (2014), edX’dagi 6,9 mln video ko‘rish tahlili — 6 daqiqadan qisqa videolar afzal: up.csail.mit.edu/other-pubs/las2014-pguo-engagement.pdf
- Disney’ning 12 animatsiya tamoyilining interfeys harakatiga tatbiqi: ixdf.org (UI animation: Disney’s 12 principles)
- Material Design motion: emphasized easing `cubic-bezier(0.05, 0.7, 0.1, 1)` va davomiylik tokenlari: api.flutter.dev (Easing.emphasizedDecelerate), m1.material.io/motion/duration-easing.html
- Kurzgesagt ish jarayoni (chuqur o‘rganish → ssenariy → illyustratsiya → diktor → animatsiya → ovoz dizayni): kurzgesagt.org/youtube
- 3Blue1Brown / manim — formulalarning uzluksiz o‘zgarishi.
- Shu repozitoriydagi tayyor dvigatel: `video-darslik-v2/engine.js` (so‘zga bog‘langan animatsiyalar, kamera, o‘tishlar, personajlar, taymer, konfetti) va `tools/mix.py` (ovoz effektlari).
