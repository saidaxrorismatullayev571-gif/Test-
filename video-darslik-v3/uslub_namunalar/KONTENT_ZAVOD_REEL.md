# «Kontent zavodi» reel — tahlil

**Manba:** foydalanuvchi yuborgan 2-namuna. 720×1280, 25 fps, 53 s, ovozli (≈ −17,5 dB).
**Kadrlar:** `kontent_zavod_subtitr.jpg` (spiker va subtitrlar), `lavanda_glass_ekran.jpg` (monitordagi motion-video).

## 1. Mazmun va tuzilma (hikoya)
Spiker (Ibrohim Qodirov) o‘z kabinetidan gapiradi va AI yasagan videoni monitorda ko‘rsatadi. G‘oya: **«Mening ovozimni klonlab, o‘zi video yasab, 5 ta platformaga o‘zi joylayapti — men qatnashmasam ham».** Bu aynan bizning yo‘limiz: ovoz klon + avtomatik motion video.

| Vaqt | Kadr | Mazmun |
|---|---|---|
| 0–4 s | Spiker, selfi, pastdan keng burchak | Kirish: «Xullas, **YETIB KELDIK** … mana shu joyi … ko‘rsataman» |
| 4–23 s | Telefon bilan **monitorni** filmga olish (qo‘lda, biroz qimirlaydi) | AI yasagan motion-video: uning klon ovozi bilan gapiradi |
| 23–53 s | Yana spiker | «**OVOZNI ESHITDINGIZMI** — menikini **BIRGA-BIR KO‘CHIRGAN** … **AVTOMATLASHDI** … targetga chiqarib yuboryapti … **20-KUNI** … **KONTENT ZAVODNI** … Instagram, YouTube, Threads, Facebook … **1 TA VIDEONI** … o‘zi montaj … **SIZ QATNASHMASANGIZ HAM** … **HAMMASINI O‘ZI QILADI** … izohlarda «…» degan so‘zni qoldirasiz — vebinarga ishtirok linkini tashlab beraman» |

**Formula:** ilgak (natija ko‘rsatiladi) → isbot (ekrandagi demo) → «bu sizda ham bo‘lishi mumkin» → CTA (izohga kalit so‘z yozish → link).

## 2. Kinetik subtitr — ikki darajali (asosiy montaj usuli)
- **Oddiy so‘zlar:** oq, qalin, kichik (720 kenglikda ~20px; 1080 da ~30px), Inter yoki SF Pro Semibold, oddiy registr. Bir ibora **so‘zma-so‘z to‘lib boradi**: «Threads» → «Threads Facebook», «sizga qiziq» → «sizga qiziq bo‘lsa». Fon/plashka yo‘q, faqat yumshoq soya.
- **Urg‘u so‘zlar:** KATTA HARFLI, tor shrift (Bebas Neue / Oswald SemiBold), ~3× katta (720 da ~44px), 1–3 qatorga bo‘linadi. Rang: **oq** yoki **sariq `#F5C518`** — eng muhim emotsional yoki «siz» haqidagi gaplarda («BIRGA-BIR KO‘CHIRGAN», «SIZ QATNASHMASANGIZ HAM»). Urg‘u so‘z ~0,6–1,0 s ekranda turadi va kichik pop (scale 1.1→1) bilan chiqadi.
- **Joylashuvi:** gorizontal markazda, vertikal ~68% (yuz va qo‘llar ustida, pastki interfeys zonasidan yuqorida). Urg‘u so‘zlar shu joyda markazlashadi, ko‘p qatorli bo‘lsa yuqoriga o‘sadi.
- **Ritm:** har 0,3–0,8 s yangi so‘z yoki ibora. Taxminan har 3–4 sekundda bitta urg‘u so‘z.
- **Kamera:** telefonda selfi, keng burchak, past rakurs, qo‘l bilan ushlangan — jonli, «hozir, shu yerda» hissi. Jest bilan urg‘u (barmoq ko‘tarish) urg‘u so‘zlarga to‘g‘ri keladi.

## 3. Ekrandagi motion-video uslubi → **«Lavanda Glass»** (7-uslub)
Yorug‘ va havodor, «AI/SaaS» kayfiyatida:
- **Fon:** och lavanda→havorang→oq gradient (`#E9E6FF` → `#DCEBFF` → `#F7F8FF`), yumshoq bloblar.
- **Kartalar:** oq, 24–28px radius, juda yumshoq soya, ichki ingichka chegara (glassmorphism yengil varianti).
- **Matn:** to‘q siyoh-ko‘k `#1B1F3B`, qalin geometrik sans. Kalit so‘z gradientli matn: binafsha→ko‘k (`#7B5CFF` → `#3D7BFF`) yoki to‘q sariq «15 soat uxlab qolibman» (`#F59E0B`) / yashil «har kuni o‘smoqda» (`#22A35A`).
- **Elementlar (ketma-ket sahnalar):**
  1. Dumaloq avatar (real spiker fotosi), burchagida holat badgi: «😴 10 daqiqa» → «⏰ 15 soat» (qizil). Yonida «z z» uyqu belgisi suzadi. Sarlavha «10 daqiqa uxlayman deb / 15 soat uxlab qolibman».
  2. «Lekin bu paytda ham / **kontentim o‘zi chiqaveradi**» — gradient so‘z.
  3. Pill «• AI kontent zavodi · 24/7» va **izometrik 3D zavod** illyustratsiyasi: robot qo‘llar, konveyer, markazda yonib turgan protsessor, lentada video kartochkalar.
  4. «**5 ta platformaga** o‘zi joylaydi» — markazda telefon (play belgisi), atrofida Instagram, Telegram, YouTube, Facebook, Threads ikonkalari orbita bo‘ylab uchib keladi va ✓ oladi.
  5. «Obunachilar esa / **har kuni o‘smoqda**» — karta: «Yangi obunachilar · o‘sish», katta **sanagich +1 → +152 → +830 → +2 486** va pastda yashil o‘sish chizig‘i chiziladi.
  6. CTA kartasi: platforma ikonkalari qatori, chiplar «Jonli vebinar» + «20-oktabr · 19:30», sarlavha «2 soatda **o‘z kontent zavodingizni** qurasiz», spiker avatar + ism, binafsha-ko‘k gradient tugma «Ro‘yxatdan o‘ting →».
- **Harakat:** har sahna 2–4 s. Elementlar pastdan yumshoq chiqadi (ease-out 0,4 s). Sahna almashishi oq flash/blur-dissolve. Raqamlar sanaladi, ikonkalar pop bo‘ladi.

## 4. Bizga foydali xulosalar
1. **Diktor klon + motion-video formati aynan shu reeldagidek ishlaydi.** Spikerning klon ovozi motion-video ichida gapiradi, keyin spikerning o‘zi «ovozni eshitdingizmi?» deb isbot qiladi — kuchli ilgak.
2. **Reel montaji uchun:** talking-head + ikki darajali kinetik subtitr (`/kinetik-subtitr` qoidalari shu tahlil bilan yangilandi) + oxirida izohga kalit so‘z CTA.
3. **Motion-video uchun:** Lavanda Glass — yorug‘, ishonchli, «AI mahsulot» hissi. Neon Jamoa esa (6-uslub) — qorong‘i, dramatik, qahramonlarga urg‘u. Bir loyihada ikkalasi aralashtirilmaydi.
