# Yangi 4 namuna: repo kartalari, 3D kodli sahna va video aksiya tahlili

## Dublikat tekshiruvi

| Yuborilgan fayl | MD5 | Natija |
|---|---|---|
| `1000058854.mp4` | `f3cdf45c2944f795325c2d577bb3cb10` | Avval tahlil qilingan Higgsfield 4 oylik aksiya roligi bilan bir xil. Qayta saqlanmadi. |
| `1000058856.mp4` | `db0ae3289739735f09b8a6342281a7a9` | Avval tahlil qilingan 475 ta kodli animatsiya reeli bilan bir xil. Qayta saqlanmadi. |

## 1. Retro kompyuter ichidagi 3D sahna

**Fayl:** `1000058833.mp4`  
**MD5:** `9e1f742a0897303731baa050817dbe38`  
**Davomiylik:** 30.05 soniya, 720×1280, 30 fps.

### Mazmun

Reel Claude yordamida koddan 3D animatsiya chiqishini ko'rsatadi: ekranda retro Macintosh ko'rinishi, unda generatsiya oynasi, tajriba darajasi, kamera va motion yozuvlari, yakunda skill olish CTAsi bor.

### Vizual formula

| Qism | Qaror |
|---|---|
| Asosiy obraz | Retro monitor, klaviatura, iliq stol lampasi, kechki xona |
| Rang | Amber `#D78B42`, jigarrang `#5A3424`, iliq krem `#F3D0A0`, fonning sovuq ko'ki `#123B7A` |
| Matn | Oqartirilgan qalin grotesk subtitr; `SKILL` yakunida xrom-oltin 3D yozuv |
| Harakat | Monitor ichidan kamera yaqinlashuvi, ichki ekranning alohida dunyo kabi ochilishi, yengil bloom va grain |
| Qiziq usul | Bir obyekt ichida boshqa interfeys/sahna bo'lishi — “ekran ichidagi mahsulot” prinsipi |

### Bizda ishlatilishi

- Kurs yoki botni oddiy skrinshot emas, stol ustidagi qurilmaga joylashtirib ochish.
- Dars bobida “kod → vizual → natija” zanjirini 3 ta ketma-ket kadrda ko'rsatish.
- Bu fotorealistik xonani AI video bilan emas, hamyonbop variantda rasm + 2.5D pan/zoom + kodli UI animation orqali yig'ish mumkin.

## 2. 9 repo kartali editorial reel

**Fayl:** `1000058858.mp4`  
**MD5:** `78304fb03d7df83bc2e096ba8b060801`  
**Davomiylik:** 56.66 soniya, 1080×1920, 30 fps.

### Mazmun

Avval 3×3 pullik servis ikonkalari chiqadi, so'ng har biriga ochiq repo muqobili bitta katta kartada beriladi: Open Generative AI, VoiceStudio, OpenSEO, AppFlowy, Cal.diy, Chatwoot va Cap. Yakunda to'qqiz nomli ro'yxat va izoh qoldirish CTAsi bor.

### Uslub tokenlari

| Element | Qaror |
|---|---|
| Fon | iliq qog'oz-krem `#F6F0E9` |
| Kontur | to'q ko'mir `#22201E`, 3 px qo'lda chizilganga yaqin chiziq |
| Aksent | coral `#E36E4E`; tasdiq stikeri yashil `#49A55B` |
| Kartalar | oq-krem, radius 12–16 px, qattiq past-o'ng soya, yuqorida “PAID” kesib tashlangan chip |
| Progress | yuqorida `1/9` va to'ladigan mayda kvadratchalar |
| Grafika | mayda piksel robot, ikonka, repo yulduzchasi, `OPEN SOURCE` chip |
| Harakat | eski servis nomi chizib o'chiriladi → repo kartasi pastdan pop bilan chiqadi → bo'limlar o'ngga suriladi |

### Bizda ishlatilishi

Bu uslub “qimmat usul → amaliy muqobil”, “muammo → yechim”, “eski jarayon → yangi tizim” formatlari uchun juda mos.

Misol:

`Qo'lda davomat` → `Telegram bot`  
`Excel tartibsizligi` → `nazorat dashboardi`  
`Dars slaydi` → `jonli videodars`

## 3. Higgsfield/Seedance aksiya reeli

**Fayl:** `1000058878.mp4`  
**MD5:** `d4428824484fb37901e43d15d6de8bf4`  
**Davomiylik:** 37.31 soniya, 1080×1920, 30 fps.

### Mazmun va haqiqiy holat

Reel Higgsfield orqali “Seedance 2.5”, “3 image”, “unlimited for 7 days” hamda “zero credit cost all week” kabi da'volarni aytadi. Bu vaqtga bog'langan aksiya kontenti. Doimiy bepul yoki cheksiz imkoniyat sifatida qabul qilinmaydi.

### Dizayn

- Dastlab generativ B-roll, keyin talking-head.
- Qalin limon-sariq katta so'z: `HIGGSFIELD`, `KONTENT`.
- Pastda oq/ruscha subtitr, yengil qora gradient bilan o'qilishi saqlangan.
- CTA: bitta “kontent” so'zi bilan izoh yozdirish.

### Bizda ishlatilishi

Uslubdan olamiz: **bitta katta benefit**, spikerning yuz ifodasi, yuqorida dalil B-roll, pastda faqat muhim so'zli subtitr. Xizmatning “free” da'vosini esa rasmiy tarif tasdiqlamasdan ishlatmaymiz.

## 4. Seedance sozlama demonstratsiyasi

**Fayl:** `1000058880.mp4`  
**MD5:** `5b4d448c458d1e7794489a6e726181eb`  
**Davomiylik:** 32.54 soniya, 1080×1920, 30 fps.

### Ko'ringan jarayon

1. Seedance modeli tanlanadi.
2. Rezolyutsiya va davomiylik qatorlari ko'rsatiladi.
3. “Maximum video” uchun duration bo'limi ajratiladi.
4. Inglizcha prompt va negative prompt maydoni ko'rsatiladi.
5. Sayt havolasi va “complete guide” CTA bilan tugaydi.

### Vizual formula

| Element | Qaror |
|---|---|
| Fon | Real laptop ekran yozuvi, qorong'i muhit |
| Matn | katta oq matn, `FREE`, `Maximum`, `Prompt` so'zlari qizil kontur/soya bilan |
| Diqqat usuli | Barmoq, qizil strelka va crop yordamida faqat kerakli boshqaruv ajratiladi |
| Ritm | Har 2–3 soniyada bir sahifa maydoni; ortiqcha panel ko'rsatilmaydi |
| CTA | “Website link”, “complete guide” va DM maketi |

### Bizda ishlatilishi

Bu “qanday qilish” mini-darslari uchun tayyor formula:

`1 boshqaruv → 1 izoh → 1 natija`.

Kadrda faqat kerakli UI qismi crop qilinadi. Kursor/barmoq, aksent strelka va katta 1–3 so'zli sarlavha e'tiborni boshqaradi.

## Free bo'yicha yakuniy qaror

| Manba | Toifa | Qaror |
|---|---|---|
| Kodli 3D retro sahna | Ochiq/kodli usul bo'lishi mumkin | 2.5D hamda HTML/Three.js yechimida qayta yaratamiz |
| 9 repo reel | Uslub va bilim manbasi | Kartali comparison motioni mahalliy bepul qilinadi |
| Higgsfield aksiyasi | Vaqtincha promo/kredit | Sinov bo'lsa ishlatiladi; asosiy ishlab chiqarish rejasi emas |
| Seedance web demo | Bulut model interfeysi | Model narxi, limit, watermark va huquq rasmiy manbadan tekshiriladi |

Asl MP4 fayllar repozitoriyga saqlanmaydi. Dublikatlar qayta kiritilmaydi.
