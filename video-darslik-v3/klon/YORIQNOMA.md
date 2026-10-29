# Diktor klon — yo‘riqnoma

## 1. Google Drive’ga fayllarni joylash
`MyDrive` ichida `Klon` papkasini oching:
```
Klon/
  dataset/      ← uning dars audiolari yoki videolari (jami 15–30 daqiqa)
  diktor.mp3    ← Google AI Studio’da yasalgan diktor audiosi (videodagi ovoz)
  portret.png   ← kiyimi va foni o‘zgartirilgan rasmi (2-bo‘lim)
```
Audiolar uchun: musiqasiz, boshqa odam ovozisiz, aks-sadosiz bo‘laklarni tanlang. Kam bo‘lsa ham toza bo‘lgani yaxshi.

## 2. Portret: Google AI Studio’da kiyim va fonni almashtirish
AI Studio → rasm modelini tanlang (Gemini Image / «Nano Banana») → uning rasmini yuklang → quyidagi buyruqni yozing:

```
Keep this man's face, facial features, hairstyle and beard exactly the same — do not change his identity.
Change his outfit to a simple, neat casual shirt (soft muted color, no suit, no jacket).
Place him in a calm, modern training classroom: blurred background with a whiteboard and bookshelf, warm soft window light from the left.
Head-and-shoulders portrait, facing the camera directly, relaxed friendly expression with mouth closed, eyes looking into the lens.
Photorealistic, natural skin, sharp focus on the face, square 1:1 framing with a little space above the head.
```
Natija yoqmasa: «yuzini o‘zgartirmang» degan qismini qoldirib, kiyim rangini yoki xonani o‘zgartiring. Bir nechta variant yasab, eng tabiiyini tanlang. Yuz to‘g‘ri qaragan, og‘zi yopiq rasm SadTalker’da eng yaxshi ishlaydi.

## 3. Colab
1. https://colab.research.google.com → File → Upload notebook → `Diktor_klon.ipynb`
2. Runtime → Change runtime type → **T4 GPU**
3. Kataklarni tartib bilan ishga tushiring: 0 → A1 → A2 → A3 → A4 → A5 (avval SINOV) → B1 → B2 → B3.
4. Sessiya uzilsa: 0 va A1 (yoki B1) ni qayta ishga tushiring, keyin to‘xtagan katakdan davom eting. Ish Drive’da saqlanib boradi.

## 4. Menga yuboriladigan fayllar
`Klon/natija/diktor_klon.wav` va `Klon/natija/yuz_video.mp4`.
