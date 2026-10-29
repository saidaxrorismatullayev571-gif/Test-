# «Drawing → Opus 5.5» — eskizdan neon UI animatsiya (tahlil)

**Manba:** foydalanuvchining 7-namunasi (@THEMILESHOLDEN). 1080×1920, 30 fps, 19 s, ovozli. **Kadrlar:** `eskizdan_neon_1.jpg`.

## Kompozitsiya (butun video davomida)
- Qora fon. Tepada markazda «✳ Opus 5.5» (coral yulduzcha + oq matn).
- **Chapda** kichik oq karta «Drawing» — qo‘lda chizilgan qora eskiz (wireframe: qidiruv maydoni, narx kartasi, ko‘z, grafik, tugma, chipta).
- **O‘ngda** katta qora telefon kartasi — shu eskizdan AI yasagan **jonli neon UI animatsiya**. Har 2–3 s da navbatdagi eskiz va uning animatsiyasi.
- Pastda: «Comment "**OPUS**" for guide» (OPUS coral).

## «Neon Aurora» UI uslubi (o‘ng karta)
- **Ranglar:** qora fon. Gradient nurlar: elektr ko‘k `#3D6BFF`, pushti-magenta `#FF4FB8`, to‘q sariq `#FFA24C`, binafsha `#8B5CF6`. Elementlar ichida yumshoq glow, chegaralar gradient neon.
- **Sahnalar:**
  1. Kursor chiziq → **qidiruv kapsulasi** «Tokyo» yoziladi, kapsula chegarasi gradient bo‘lib yonadi.
  2. **Narx kartasi «$1,240»** — neon ramka, ortida ko‘k/pushti/sariq nur sharlari aylanadi.
  3. **Ko‘z** shakli ochiladi, qorachig‘ida «Watching / Every day» aylanadi.
  4. **Narx grafigi** — pushti→ko‘k yonuvchi chiziq, nuqta bo‘ylab yuradi, narx yorlig‘i $1,437 → $1,359 → $1,332, burchakda oy.
  5. **«$389 Book now»** — butun ekran osmon gradienti (ko‘k→pushti→sariq), kapsula morflanib tugmaga aylanadi.
  6. Plyus kursor → shar → **✓ Booked** doirasi.
  7. **Chipta «NYC → TYO»** — neon kartaga aylanadi, uchqun yulduz portlaydi.
- **Harakat:** suyuq morf (bir shakl boshqasiga oqib o‘tadi), nur sharlarining parallaks aylanishi, yozuv typewriter, sanagichlar. Qattiq kesish yo‘q — hammasi morf.

## Bizga foydali xulosalar
1. **«Eskiz → natija» yonma-yon formati** — AI/dizayn imkoniyatini ko‘rsatishning eng tushunarli usuli. Dars uchun ham ishlaydi: chapda qo‘lda yozilgan formula yoki chizma, o‘ngda jonli animatsiyasi.
2. **Neon Aurora** — premium, «kelajak» kayfiyatidagi qorong‘i uslub. Neon Jamoadan farqi: qahramonlar yo‘q, UI elementlar va gradient nurlar.
3. Morf o‘tishlar uchun `clip-path`/`border-radius` interpolyatsiya va SVG path morph yetarli. Glow uchun blur emas, radial-gradient sharlar ishlatiladi (render tezligi).
