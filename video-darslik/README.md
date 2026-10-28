# Video darslik: Maosh tizimini tanlash va hisoblash (05.2)

Animatsiyali video darslik, 16:9 (1920×1080, 30 fps), taxminan 16,6 daqiqa, 34 sahna.
Manba: «05.2 Maosh tizimini tanlash va hisoblash qo‘llanmasi».

## Fayllar

| Fayl | Nima |
|---|---|
| `maosh_tizimi_darslik.mp4` | Tayyor video (ekrandagi izohlar bilan; diktor ovozi yo‘q) |
| `maosh_tizimi_darslik.srt` | Izohlar matni vaqt belgilari bilan. Diktor ovozini yozish uchun ssenariy sifatida ham ishlatiladi |
| `darslik.html` | Animatsiya manbasi. Brauzerda ochsangiz, darslik jonli o‘ynaydi |
| `render.mjs` | HTML’ni MP4 ga aylantiruvchi skript |

## Qayta render qilish

Matn yoki raqamlarni `darslik.html` ichida o‘zgartiring (har sahna `add(bo‘lim, [izohlar], html)` ko‘rinishida), keyin:

```bash
node render.mjs maosh_tizimi_darslik.mp4 30 4   # chiqish fayli, fps, parallel jarayonlar soni
node render.mjs --stills stills                 # tekshirish uchun har sahnadan bitta kadr
```

Kerakli dasturlar: Node.js, Playwright (Chromium) va ffmpeg.
Har bir izoh ekranda turadigan vaqt uning uzunligiga qarab avtomatik hisoblanadi.
