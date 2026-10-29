# «Claude motion-dizaynerlar o‘rniga» — ssenariydan 3D videogacha (tahlil)

**Manba:** 20-namuna (@ALEXANDRO_AI, rus tilida). 1080×1920, 30 fps, 58 s, ovozli. **Kadrlar:** `motion_dizayner_orniga_1.jpg`.
**Format:** bo‘lingan ekran (14-namuna): yuqori ⅓ qorong‘i UI, pastki ⅔ spiker, 1 so‘zli subtitr chegarada; punch-in kadrlarda so‘z qora plashkada.

## Quvur (video ichida ko‘rsatilgan) — bizning yo‘limizga juda yaqin
1. «✳ Claude» pill → After Effects timeline **qizil chiziq bilan o‘chiriladi** («motion-dizaynerlar kerak emas»).
2. **Ssenariy:** Claude Desktop «Hello, night owl» — prompt «Напиши сценарий ролика на тему: как работает ChatGPT» → krem qog‘oz kartada ssenariy matni chiqadi («Сценарий · 55 с»).
3. **Raskadrovka:** raqamlangan sahnalar ro‘yxati (1, 2, 3, 4… qizil doirachalarda), har biriga mini telefon kadrlari (storyboard).
4. **Ovoz:** **ElevenLabs** Text-to-Speech — matn qo‘yiladi, ovoz tanlanadi, «бесплатно», mp3 yuklab olinadi.
5. **Ovozni qaytarib Claude’ga** (`озвучка.mp3`) → Claude sahnalarni **ovozga moslab** yig‘adi (timeline, «кадр 1 541»).
6. **Animatsiya va 3D sahnalar:** telefon ichida «привет» yozuvi, 3D data-markaz, chiplar, yorug‘lik oqimlari, globus — vertikal video.
7. **Natija:** ~20 ming ko‘rish → profil, Telegram («схема» kanalda).

## Bizga foydali xulosalar
1. Bu **aynan bizning quvur**: ssenariy → raskadrovka → TTS ovoz → ovozga moslab sahnalar → render. Bizda ElevenLabs o‘rniga Gemini TTS (+ RVC klon), Claude esa bizning HTML dvigatel.
2. **Raskadrovka kartasi** (raqamlangan sahnalar + mini kadrlar) — mijozga render oldidan tasdiqlatish uchun yaxshi format.
3. «Eski usul qizil chiziq bilan o‘chiriladi» — kuchli ilgak kadri.
