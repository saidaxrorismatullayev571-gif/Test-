# «Claude Code bilan talking-head montaji — 5 qadam» (tahlil)

**Manba:** foydalanuvchining 10-namunasi (@ALEXANDRO_AI, rus tilida). 720×1280, 30 fps, 58 s, ovozli. **Kadrlar:** `montaj_5_qadam_1.jpg`.
**Format:** 14-namuna bilan bir xil bo‘lingan ekran — yuqori ⅓ qorong‘i UI, pastki ⅔ spiker, chegarada bir so‘zli subtitr; punch-in kadrlarda so‘z qora plashkada.

## Mazmun — montajni avtomatlashtirish quvuri (biz uchun ham retsept!)
UI oynasi «Claude Code». O‘ng yuqorida **5 ta qadam nuqtasi**: joriy qadam coral, tugaganlari yashil ✓. Har qadamda tepada chat-buyruq pill, pastda prompt maydoni yoziladi.
1. **«Установи ffmpeg и Whisper»** — ffmpeg video lentani kadrlarga «kesadi» (film strip, qizil belgi yuradi); Whisper — audio to‘lqin → matn («речь → текст»), yozuv paydo bo‘ladi.
2. **«Найди неудачные дубли и вырежи тишину»** — timeline: ko‘k (gap) va qizil (pauza/dubl) bo‘laklar. Ro‘yxatda xato dubllar qizil ✕ bilan chiziladi, yaxshisi yashil ✓. Davomiylik **1:43 → 0:58** sanaladi, statistika «дубли: 6 · паузы: 0:36».
3. **«Поставь субтитры»** — audio to‘lqin ustida so‘z-chiplar; joriy so‘z coral fonda yonadi (karaoke). «До / После» belgisi.
4. **«Установи плагин Remotion»** — Remotion logotipi, «ставлю…» → «✓ плагин установлен», «0 ₽». Remotion namunalari (dashboard, kartalar, 3D) lavhalari.
5. **«Все правки записывай в MD-файл с правилами»** — `TALKING_HEAD.md` fayli, «47 → 48 правил из правок». Qoidalar ✓ bilan: «Паузы резать вместе с выдохом», «Субтитры по одному слову», «Лицо крупно на словах эмоции», «Цветокоррекцию не делать». Chiplar: «следующий ролик → в вашем стиле».
- **Natija kartasi:** «готовый ролик · 0:58 · 1080×1920 · ✓ готово» + CapCut ikonkasi.
- **Yakun:** Instagram profil kartasi → Telegram havolasi bosiladi.

## Bizga foydali xulosalar
1. **Quvur aynan bizniki:** ffmpeg + Whisper (ASR) → dubl va pauzalarni kesish → bir so‘zli subtitr → motion grafika → qoidalar fayli. Bizda Whisper o‘rniga `align.py` matn bilan ishlaydi; ASR modeli Colab yoki foydalanuvchi kompyuterida bo‘ladi.
2. **«Qoidalar fayli» g‘oyasi** — har montajdan keyingi tuzatishlarni `.md` qoidaga aylantirish. Bizda bu skill fayllari (`reel-uslublari`, `video-darslik`). Foydalanuvchi har tuzatish berganda qoidani skill’ga yozib borish kerak.
3. **Qadam nuqtalari (1–5, coral → yashil)** — darslarda «qayerdamiz» indikatori. Progress dok (14-namuna) bilan birga ishlatsa bo‘ladi.
