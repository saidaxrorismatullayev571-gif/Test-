# «Biznesni tizimlashtirish» blogi: to‘liq reja (NotebookLM holat tahlili asosida)

> **Yo‘nalish:** umuman biznesni tizimlashtirish. HR — uning eng katta qismi, lekin yagona mavzu emas.

> Asos: NotebookLM’dagi 7 ta prompt javobi (2026-11-01). Promptlar: `rejalar/NOTEBOOKLM_HOLAT_PROMPTLAR.md`. Umumiy g‘oya: `rejalar/INSTAGRAM_HR_PROFIL.md`.

---

## 1. Holat: bloknotda nima bor

| Ko‘rsatkich | Natija |
|---|---|
| Manbalar soni (NotebookLM bo‘yicha) | **196** |
| Takroriy yuklanganlar | **14 ta fayl ikki marta yuklangan** (`_1_, _23_, _31_, _47_, _54_, _72_, _78_, _96_, _109_, _111_, _148_, _153_, _154_, _160_`). Bundan tashqari `_100_` va `_103_` matni so‘zma-so‘z bir xil |
| Haqiqiy noyob darslar | **≈ 181** (`audio.mp3` + `audio__1_` … `audio__181_`). Bir xil `_100_`/`_103_` bitta deb hisoblandi |
| Tushib qolgan qism | **Yo‘q bo‘lishi ehtimoli katta.** Kurs nomi «182 qism», `audio.mp3` va 1–181 ham jami 182 ta bo‘ladi |
| Format | Hammasi mp3, har biri 0.2–4 daqiqa, o‘zbek tilida. Uzun darslar bo‘laklarga kesilgan |
| Sifatsiz yoki uzuq bo‘laklar | `_49_` (1 gap), `_130_` (faqat «pauza qiling»), `_101_`, `_106_`, `_128_`, `_181_` (uzuq) |
| **Spiker** | **1 kishi: Kozimxon To‘rayev** («HR va biznesni tizimlashtirish» kursi) |
| Uslubi | Samimiy ustoz: «aziz do‘stlar», «pauza qiling va yozing», ko‘p hayotiy keys |
| Auditoriya | Biznes egalari → bo‘lim rahbarlari → boshlovchi HRlar |

### Fayl raqami ≠ dars tartibi
`audio__N_` raqamlari darsning kursdagi o‘rnini bildirmaydi. Masalan, `_100_` «keyingi darsimiz ishga olish» deydi, lekin ishga olish darslari `_25_–_32_` va `_83_–_96_` da turibdi. NotebookLM tuzgan 11 modulli tartib **taxminiy**, ba’zi raqamlar ikki modulga tushgan. Blog uchun bu muhim emas, chunki har reel bitta mustaqil fikr. Katta videodars qilsak, tartibni alohida aniqlaymiz.

### Mavzular boyligi
| Yo‘nalish | Chuqurlik | Taxminan darslar |
|---|---|---|
| Maosh, greyding, KPI, motivatsiya | ⭐⭐⭐ juda chuqur | 45+ |
| Tizimlashtirish, SOP, ichki nizomlar, Checks & Balances | ⭐⭐⭐ juda chuqur | 25+ |
| Ishga olish (e’lon → STAR → Job Offer) | ⭐⭐⭐ chuqur | 23 |
| Baholash, 360, matritsa / O‘qitish 70-20-10 | ⭐⭐ chuqur | 25 |
| Onboarding / Madaniyat, missiya, qadriyat / Rahbarlik | ⭐⭐ chuqur | 30 |
| Intizom va ishdan bo‘shatish / Farovonlik | ⭐ o‘rtacha | 10 |
| Mehnat kodeksi / Buxgalteriya | yuzaki | 5 |
| **SWOT** | **yo‘q** | 0. Bu mavzu Rejabboyev darslarida bor |

**Xulosa:** kamida **40 ta tayyor reel mavzusi**, 15 ta mif va haqiqat, 15 ta rahbar xatosi, 14 ta raqamli misol, 10 ta lead-magnit va 5 ta seriya bor. Bu **3–4 oylik kundalik kontent** degani (har mavzudan 2–3 xil reel chiqadi).

---

## 2. ⚠️ Boshlashdan oldin hal qilinadigan 4 ta masala

1. **Mualliflik huquqi.** Darslar **Kozimxon To‘rayevniki**. Ulardan keng foydalanadigan blog uchun **uning yozma roziligi** kerak. Rozilik bo‘lsa, har postga «Kozimxon To‘rayev kursi asosida» deb yoziladi. Rozilik bo‘lmasa, darslarni faqat ilhom sifatida olamiz: g‘oyalarni o‘z so‘zimiz va o‘z misollarimiz bilan aytamiz, aynan iqtibos va uning keyslarini ko‘chirmaymiz.
2. **Kim nomidan va kimning ovozi bilan.** Rejabboyevning klon ovozi va yuzi uchun rozilik bor. **To‘rayevning ovozi yoki yuzini klonlab bo‘lmaydi** (rozilik so‘ralmagan). Variantlar:
   - (a) Rejabboyev nomidan blog, To‘rayev materiali uning roziligi bilan;
   - (b) shaxsiz brend («HR tizimi»), diktor sifatida Rejabboyev klon ovozi;
   - (c) To‘rayev bilan hamkorlik: uning o‘z blogi bo‘ladi, biz ishlab chiqaramiz.
3. **Faktlarni tekshirish.** NotebookLM ba’zan raqam qo‘shib yuboradi yoki ikki darsni aralashtiradi. Masalan, greydlar maoshi bir joyda `_148_` ga, boshqa joyda `_149_` ga bog‘langan; `_102_` konspektida birorta manba havolasi yo‘q. **Qoida:** har reeldan oldin o‘sha darsdan aynan iqtibos olinadi (pastdagi 8.1-prompt).
4. **Eskirgan va huquqiy jihatdan xavfli joylar:**
   - **Kechikkani uchun «daqiqasiga jarima»:** Mehnat kodeksida maoshdan ushlash qat’iy cheklangan, yurist ko‘rmasdan bunday maslahat bermaymiz. Reelda «limit + rag‘bat» qismi qoladi.
   - **Maosh summalari** (1–15 mln, Matiz, Nexia, Lacetti) va **soliq stavkalari:** bugungi kunga yangilanadi yoki «misol uchun» deb beriladi.
   - **Vakansiya kanallari:** OLX va gazeta o‘rniga Telegram, hh.uz va LinkedIn.

---

## 3. Profil pozitsiyasi

> **Yo‘nalish (foydalanuvchi aniqlashtirdi, 2026-11-01):** blog **faqat HR haqida emas**. Mavzusi **umuman biznesni tizimlashtirish**. HR uning bitta, eng katta qismi. To‘rayev kursining nomi ham «HR va biznesni tizimlashtirish», ya’ni manba shu yo‘nalishga mos.

- **Kim uchun (asosiy):** 5–100 xodimli **biznes egalari va rahbarlar**. «Hamma narsa menga bog‘liq, men bo‘lmasam ish to‘xtaydi, xodim o‘g‘irlaydi, ketib qoladi» deydiganlar.
- **Ikkinchi auditoriya:** bo‘lim rahbarlari, operatsion direktorlar, HRlar.
- **Asosiy va’da:** «Biznesingiz sizsiz ham ishlashi uchun».
- **Bio:** «Biznesni tizimlashtirish: jarayon, xodim, maosh, KPI, nazorat. Har kuni 1 ta amaliy qoida.»
- **Nom g‘oyalari** (band emasligini tekshirish kerak): `tizimli.biznes` · `biznes.tizimi.uz` · `sizsiz.ishlaydi` · `tizim_bor` · `soatdek.biznes`.
- **Asosiy metafora:** «poyezd va mashina» (`_65_`). Tizimli biznes relsda yuradigan poyezdga o‘xshaydi, tizimsiz biznes esa haydovchiga bog‘liq mashinaga. Shu obrazni brend belgisi qilsa bo‘ladi.
- **Ohang:** samimiy ustoz, raqam va keys ko‘p. «Siz» deb murojaat qilinadi.

---

## 4. Kontent ustunlari (haftalik aylanish)

| Kun | Ustun | Mavzular | Format (kutubxonadan) |
|---|---|---|---|
| Du | ⚙️ **Tizim va jarayon** | SOP, delegatsiya, rahbarni operatsion ishdan chiqarish, «5 marta Nimaga?», 7 bosqichli model | keys, oldin → keyin |
| Se | 👥 **Jamoa (HR)** | ishga olish, onboarding, baholash, o‘qitish | ro‘yxat, STAR, matritsa |
| Ch | 💰 **Maosh, KPI, motivatsiya** | greyding, KPI, bonus, kobra effekti | raqamli misol, glass-explainer |
| Pa | 🛡️ **Nazorat va nizom** | Checks & Balances, ombor, sir saqlash, qarz va kechikish nizomi, buxgalteriya nazorati | keys, telefon xabari (notify) bilan ochiladi |
| Ju | 🧭 **Strategiya va madaniyat** | missiya, qadriyat, SMART, HR strategiyasi, SWOT | hikoya, Neon Jamoa |
| Sh | ❌ **Rahbar xatosi / Mif** | «buni qilmang» → «buni qiling» | bo‘lingan ekran, raw → finished |
| Ya | 🎁 **Lead-magnit / savol-javob** | shablon, cheklist, kalkulyator | «Izohga KALIT so‘z yozing», karusel |

**Nisbat:** ~40% tizim, nazorat va strategiya; ~60% jamoa, maosh va KPI. Shunda profil «HR blog» emas, **«biznes tizimi» blogi** bo‘lib ko‘rinadi.

### 4.1. Manbada kam bo‘lgan tizimlashtirish yo‘nalishlari (keyin to‘ldiriladi)
| Yo‘nalish | Hozir bormi | Qayerdan olamiz |
|---|---|---|
| Sotuv tizimi (voronka, CRM, skript, sotuvchi maoshi) | qisman (KPI darslari) | Rejabboyevning «Maosh tizimi» darsi, yangi manbalar |
| Moliya (P&L, cash flow, budjet) | 1 ta dars (`_177_`) | yangi manba kerak |
| Marketing tizimi | yo‘q | yangi manba kerak |
| Avtomatlashtirish (IT, CRM, AI) | 1 bosqich sifatida (`_63_`) | yangi manba kerak |
| SWOT va strategik tahlil | yo‘q | Rejabboyevning SWOT darsi |
| Ishlab chiqarish va ombor jarayonlari | keyslarda bor | mavjud keyslar |

---

## 5. Birinchi 30 kunlik reja

(🔎 = raqamni manbadan tekshirish shart; ⚖️ = yurist yoki dolzarblik tekshiruvi kerak)

| Kun | Ustun | Sarlavha | Ilgak (birinchi 2 soniya) | Manba |
|---|---|---|---|---|
| 1 | Tizim | Biznesingiz sizsiz ishlaydimi? | «1 oyga ketsangiz, daromad nima bo‘ladi?» | `_59_` |
| 2 | KPI | KPI = kema navigatsiyasi | «KPIsiz kompaniya — rulsiz kema» | `_150_` |
| 3 | Ishga olish | Ishga olishni faqat HRga bermang | «Bitta odamga vakolat = o‘z odamlari jamoasi» | `_100_` |
| 4 | Mif | Bilim treningdan kelmaydi | «Xodim bilimining atigi 10% i treningdan» | `_113_` |
| 5 | Keys | 10 ta o‘rniga 12 ta karobka | «Omborchi va mijoz til biriktirdi…» | `_100_` |
| 6 | Xato | Kobra effekti | «Ilonga mukofot berishdi — ilon ko‘paydi» | `_176_` |
| 7 | 🎁 | Xodimni 1–5 ball bilan baholash shabloni | «Izohga BAHO yozing» | `_101_` |
| 8 | Maosh | Lead, Match, Lag: 3 xil maosh strategiyasi | «McDonald’s nega kam to‘laydi?» | `_126_` |
| 9 | Ishga olish | STAR: nomzod yolg‘onini ushlash | «Quruq gapga emas, real holatga so‘rang» | `_110_` |
| 10 | Tizim | Retsept siri: nom o‘rniga kod | «“1822 dan 5 gramm”: sir chiqmaydi» 🔎 | `_100_` |
| 11 | Mif | Yulduz xodim intizomni tan olmaydimi? | «Haqiqiy yulduz tanqidni yaxshi ko‘radi» | `_105_` |
| 12 | Keys | Tugmacha bosishga bonus | «Bir qo‘l bilan klaviatura bosib o‘tirishdi» | `_176_` |
| 13 | Rahbar | Qayiqdagi 35 / 52 / 13 | «Xodimlarning 13% i qayiqni teshyapti» 🔎 | `_136_` |
| 14 | 🎁 | 2 kunlik onboarding cheklisti | «Izohga START yozing» | `_20_` |
| 15 | KPI | Kiyim do‘koni sotuvchisiga KPI | «Faqat hajmga KPI → qimmat tovar omborda qoladi» | `_164_` |
| 16 | Ishga olish | «1–5 mln» degan e’lon nega qo‘rqitadi | oldin → keyin e’lon | `_90_` |
| 17 | Tizim | Qarz so‘ragan xodim: nizom | «Biriga berdingiz, ikkinchisiga yo‘q → jamoa sovidi» | `_78_` |
| 18 | Baholash | Potensial × natija matritsasi | «Qaysi xodimga tegmaslik kerak?» | `_106_` |
| 19 | Mif | Pul motivatsiyani o‘ldiradimi? | «Bolalar futboli tajribasi» | `_173_` |
| 20 | Keys | NASA farroshi | «“Men odamni Oyga chiqaryapman”» | `_46_` |
| 21 | 🎁 | Izohlardagi savollarga javob | 1-haftadagi eng ko‘p savol | — |
| 22 | Maosh | A–E greydlar va maosh shkalasi | «Farroshdan direktorgacha: 5 pog‘ona» ⚖️🔎 | `_148_` |
| 23 | Ishga olish | Intervyudagi 4 soniyalik tuzoq | «Birinchi taassurot sizni aldaydi» | `_89_` |
| 24 | Tizim | «5 marta Nimaga?» | «Stanok buzildi. Aybdor kim?» | `_67_` |
| 25 | Xato | Treningga kimni yuborish kerak | «Sevimli xodimni emas, bali eng pastini» | `_114_` |
| 26 | KPI | Avto-oyna: +50% unumdorlik | «10 ta oyna → 15 ta, xarajat +17%» 🔎 | `_174_` |
| 27 | Ishga olish | Exit interview | «Ketayotgan xodim — eng halol maslahatchi» | `_154_` |
| 28 | 🎁 | KPI bonus kalkulyatori | «Izohga KPI yozing» | `_174_` |
| 29 | Rahbar | Kechikishni limit va rag‘bat bilan hal qilish | «Hech kechikmaganga oziq-ovqat sovg‘asi» ⚖️ | `_75_` |
| 30 | Tizim | 5 ta agentdan 2 tasi ortiqcha | «250 do‘kon × 50 daqiqa = …» 🔎 | `_58_` |

**Keyingi oylar:** 5 ta seriya (Tizim 7 kun, Rekruting 6, Maosh 5, KPI 6, Baholash 5). Qolgan 40 ta mavzu va 15 ta mif bilan **2–4-oy** to‘ladi.

---

## 6. Lead-magnitlar (ustuvorlik bo‘yicha)

1. **Kompetensiyani baholash shabloni (Excel)**: 1-hafta, kalit so‘z `BAHO`.
2. **Onboarding cheklisti**: 2-hafta, `START`.
3. **KPI bonus kalkulyatori (Excel)**: 4-hafta, `KPI`.
4. Keyin: STAR savollari to‘plami, shtat kalkulyatori, greyding shkalasi, qarz nizomi namunasi, Requisition form.

Shablonlarni men Excel yoki PDF qilib tayyorlab beraman (manbadagi tuzilma asosida, raqamlarni yangilab).

---

## 7. Ishlab chiqarish quvuri (haftalik partiya)

1. **Dushanba, 1 soat:** haftaning 7 mavzusi bo‘yicha NotebookLM’dan aynan iqtiboslar olinadi (8.1-prompt). Foydalanuvchi ularni menga yuboradi.
2. **Men:** 7 ta ssenariy (30–45 s: ilgak → muammo → yechim yoki raqam → CTA), caption va heshteglar.
3. **Ovoz:** Gemini TTS, keyin RVC (Rejabboyev ovozi, rozilik bor).
4. **Video:** 9:16 HTML dvigatel, ovozga moslanadi, render qilinadi.
5. **Tekshiruv:** kadrlar varag‘i siz ko‘rishingiz uchun yuboriladi, keyin siz joylaysiz.
6. **Yakshanba:** haftalik statistika (ko‘rish, saqlash, izoh). Eng yaxshi 2 format keyingi haftada ko‘paytiriladi.

---

## 8. Keyingi NotebookLM promptlari (ishlab chiqarish paytida)

### 8.1. Bitta reel uchun aniq material (har reel oldidan)
```
Faqat [audio__NN_.mp3] manbasidan foydalan. Quyidagilarni ber:
1) Spikerning shu mavzudagi gaplari — AYNAN iqtibos, so‘zma-so‘z, 3–6 ta.
2) Barcha raqamlar va ular nimani anglatishi — aynan manbadagidek.
3) Keys/hikoya bo‘lsa — boshidan oxirigacha qisqa bayon (kim, nima bo‘ldi, natija).
4) Manbada YO‘Q narsani qo‘shma. Ishonching komil bo‘lmasa "aniq emas" deb yoz.
```

### 8.1-b. Tizimlashtirish kontentini ajratib olish (bir marta)
```
Bu kurs "HR va biznesni tizimlashtirish" deb ataladi. HR dan TASHQARI bo‘lgan barcha biznesni tizimlashtirish mazmunini ajratib ber:
1) Rahbarni operatsion ishdan chiqarish, delegatsiya, SOP, jarayonlar xaritasi, Kaizen, 7 bosqichli rivojlanish modeli, nazorat (Checks & Balances), moliya/buxgalteriya nazorati, ombor, sir saqlash, strategiya — har biri bo‘yicha: manba fayl nomi, asosiy qoida, raqam/misol, aynan iqtibos.
2) Shulardan 30 ta reel mavzusi: sarlavha (≤ 8 so‘z), ilgak (1 gap), manba.
3) "Biznesingiz sizsiz ishlaydimi?" degan savolga oid barcha test-savollar va mezonlar (masalan, 3 savol, 5 daqiqa qoidasi).
Faqat manbalardan foydalan; manbada yo‘q narsani qo‘shma.
```

### 8.2. Bahsli mavzu uchun ikki qarash (ixtiyoriy)
```
[MAVZU] bo‘yicha manbalardagi barcha fikrlarni yig‘. Keyin "Rahbar nuqtai nazari" va "Xodim nuqtai nazari" deb ikki ustunda yoz. Qaysi joyi O‘zbekiston Mehnat kodeksi bilan zid kelishi mumkinligini alohida belgila. Faqat manbalardan foydalan.
```

---

## 9. Qaror kutilayotgan savollar

| Savol | Variantlar |
|---|---|
| Mualliflik huquqi | To‘rayevdan rozilik olinadimi? (ha / yo‘q, faqat ilhom sifatida) |
| Blog kimniki | Rejabboyev / shaxsiz brend / To‘rayev bilan hamkorlik |
| Yuz | Rejabboyev klon (dumaloq oyna) / faqat animatsiya va ovoz / avatarlar |
| Boshlash sanasi | Partiya 1 (1-hafta) qachon tayyor bo‘lsin |
