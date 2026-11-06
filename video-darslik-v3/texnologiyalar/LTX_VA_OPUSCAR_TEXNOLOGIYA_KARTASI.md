# LTX-2.5 va Lemo-Opuscar — video yaratish texnologiyalari

## 1. LTX-2.5

### Vazifasi

Lightricks'ning lokal ishlaydigan text-to-video/audio-video modeli. LTX-2.5 yangi loyihalar uchun tavsiya qilinadigan model; distilled transformer kamroq qadamda generatsiya uchun mo'ljallangan.

### Ish oqimi

1. `Lightricks/LTX-2` repozitoriyasini yuklash.
2. `uv sync --extra natten` bilan kutubxonalarni o'rnatish.
3. Hugging Face'da LTX-2.5 shartlarini qabul qilish, Read token bilan `hf auth login`.
4. Kerakli model komponentlarini `models/ltx-2.5` ga yuklash.
5. Distilled pipeline'ga prompt, model yo'llari, kadr soni va output MP4 yo'lini berish.

### Muhim talab

Rasmiy LTX Desktop talabida Windows/Linux uchun NVIDIA CUDA videokartasi, **kamida 24 GB VRAM** va 32 GB RAM ko'rsatilgan; 32 GB VRAM tavsiya qilinadi. Diskda kamida 100 GB bo'sh joy rejalash tavsiya qilingan.

Shu sabab Saidaxrorning GTX 1650 videokartasida LTX-2.5'ni lokal ishga tushirish mumkin emas. Bu model uchun kuchliroq GPU yoki onlayn generatsiya muhiti kerak bo'ladi.

### Litsenziya

- Kod: Apache License 2.0.
- LTX-2.5 modeli: LTX-2.x Community License.
- Tijorat qo'llashdan oldin model litsenziyasini alohida o'qish shart.

### Manbalar

- https://github.com/Lightricks/LTX-2
- https://huggingface.co/Lightricks/LTX-2.5
- https://github.com/Lightricks/LTX-Desktop

## 2. Lemo-Opuscar

### Vazifasi

Claude Code ichida video model ishlatmasdan, kod orqali kadrma-kadr film yaratadigan uslub kutubxonasi. Hozir **66 ta tayyor uslub** va o'z uslubini yaratish oqimi bor.

### Ish oqimi

1. `claude plugin marketplace add lemomo-ai/lemo-opuscar`
2. `claude plugin install lemo-opuscar@lemolab`
3. Istalgan loyiha papkasida `/lemo-opuscar:lemo-opuscar` deb yozish.
4. Til, hikoya, materiallar, ovoz/musiqa va storyboard ehtiyojini aniqlash.
5. Uslubni tanlash yoki brend ranglari, logotip va referenslar asosida shaxsiy uslub yaratish.
6. Kadrlar, ovoz, musiqa va effektlarni kod bilan render qilish.

### Talab va natija

- Node 20+, FFmpeg, Python 3.11+ yoki uv kerak.
- Odatiy natija: 1920×1080, 24 fps; 9:16 so'rovda ko'rsatiladi.
- Bir film odatda 30–60 daqiqa va sezilarli token sarfini oladi.
- Uslublar Claude Opus 5.5 uchun optimallashtirilgan.

### Bizning loyiha uchun o'rni

Opuscar chizilgan darslar, akvarel, doska, 3D, hujjatli format, tarixiy uslub va boshqa badiiy animatsiyalar uchun mos. Bizning audio-timing, subtitr, real UI va dashboard darslarimiz uchun esa mavjud HTML/Canvas/FFmpeg quvuri tezroq va boshqariladigan yo'l bo'lib qoladi.

### Litsenziya

- Kod va hujjatlar: MIT.
- Kutubxona namuna filmlari/stillari: CC BY 4.0.
- Kutubxona bilan yaratilgan filmlar: foydalanuvchiga tegishli, kredit talab qilinmaydi.

### Manba

https://github.com/lemomo-ai/lemo-opuscar
