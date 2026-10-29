---
name: reel-uslublari
description: Vertikal (9:16) qisqa reel videolarni montaj qilish uslublari — kinetik subtitr, kino-sarlavha, logo ko‘rsatish, odam ortida matn, CTA yakun. Foydalanuvchi o‘z videosini (telefonda yozilgan, gapiradigan odam) yuborib "reel qil", "subtitr qo‘sh", "Instagram uchun montaj", "/kinetik-subtitr" kabi so‘rasa ishlating.
---

# Reel uslublari (9:16, 1080×1920)

Foydalanuvchi bilan **o‘zbek tilida** gaplashing. Kirish — foydalanuvchining videosi (yuklangan fayl: alohida bo‘sh papkaga ko‘chiring). Chiqish — bitta MP4, SendUserFile bilan yuboriladi.

## Umumiy quvur (video-darslik skill dvigateli asosida)
1. **Kirishni o‘rganish:** `ffprobe` (o‘lcham, fps, davomiylik), `fps=N,tile` bilan kontakt varaq — kadrlarni ko‘rib chiqing.
2. **Matn:** reel matnini foydalanuvchidan oling (yoki u aytib bersin). ASR modeli tarmoq cheklovi tufayli bu muhitda yo‘q bo‘lishi mumkin.
3. **Moslash:** `video-darslik-v3/atlas/tools/align.py matn.txt video.mp4 vaqt.json` — gap vaqtlari. So‘z darajasi uchun gap ichida bo‘g‘in ulushiga ko‘ra taqsimlang (align.py dagi syllable warp).
4. **Overlay sahifa:** shaffof fonli HTML (1080×1920), `render(t)` deterministik. Har kadr Playwright `screenshot({omitBackground:true})` → PNG ketma-ketlik yoki qatlamli WebM (`-c:v libvpx-vp9 -pix_fmt yuva420p`).
5. **Birlashtirish:** `ffmpeg -i video.mp4 -i overlay.webm -filter_complex "[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[b];[b][1:v]overlay" -c:a copy`. Audio asl videodan.
6. **Tekshirish:** 4–6 kadr kontakt varaq, davomiylik, audio bor-yo‘qligi.

Render tezligi qoidalari video-darslik skill’dagidek: katta blur/backdrop-filter yo‘q, shriftlar lokal (`video-darslik-v3/atlas/fonts`).

## Uslublar
### /kinetik-subtitr
- Ekranning pastki-o‘rta uchdan birida, bir vaqtda 1–3 so‘z. Joriy so‘z katta (90–120 px, qalin, Manrope 800), urg‘uli so‘zlar (raqam, fe’l, "o‘chirdim" kabi) rangli (#F28C28 yoki brend rangi) va 1.15× `pop`.
- Har so‘z: 80 ms ichida pastdan +20 px va opacity 0→1; gap tugaganda 120 ms fade.
- Soya: `text-shadow: 0 4px 18px rgba(0,0,0,.55)` — har qanday fonda o‘qilsin.

### /kino-sarlavha
- Gapdagi 1–2 muhim ibora ekran markazida serif kursiv (Cormorant Garamond Italic 140 px), harflar `split` bilan ketma-ket (25 ms oraliq), so‘ng 1.5 s turadi va blur-out.
- Fon videosiga shu payt `brightness(.75)` va sekin 1.04× zoom (ffmpeg `zoompan` yoki overlay ostida qora 25% qatlam).

### /logo-korsatish
- Matnda brend/ilova nomi aytilganda yuqori uchdan birida logotip kartasi (yumaloq 28 px burchak, oq fon, soya) `pop` bilan chiqadi, 1.2 s turadi.
- Logotiplar: foydalanuvchi bersin yoki SVG ni o‘zingiz chizing (brend logotipini o‘xshatib soxtalashtirmang — rasmiy logotip foydalanuvchidan).

### /odam-ortida-matn (chuqurlik)
- Katta sarlavha odamning **orqasida**: odam maskasi kerak. Bu muhitda segmentatsiya modeli yuklanmasligi mumkin → Colab’da `rembg` yoki MediaPipe Selfie Segmentation bilan har kadr uchun alfa-maska (PNG ketma-ketlik) yasatib, qaytarib oling.
- Qatlamlar tartibi: fon video → matn → maskalangan odam (`[0:v][mask]alphamerge` keyin overlay).

### /cta-yakun
- Oxirgi 3–4 s: video xiralashadi (`gblur=20`, `brightness`), markazda katta CTA ("Izohga «SO‘Z» deb yozing"), ostida rangli plashka bilan taklif, pastda profil nomi/ikonka. Elementlar 150 ms oraliq bilan `up`.

## Neon Jamoa formati (foydalanuvchi namunasi)
Rollar/jamoa/jarayon haqidagi reel uchun: fotorealistik qahramonlar neon kartalarda, 3D kirish, «AI» glitch, daraxt sxema va yuguruvchi nuqta, holat chiplari, tasdiqlash chati, CTA poster. To‘liq tahlil, vaqt jadvali va prompt andozasi: `video-darslik-v3/uslub_namunalar/NEON_JAMOA.md`.

## Uslub qoidalari
- Xavfsiz zona: yuqoridan 220 px, pastdan 380 px (Instagram/TikTok interfeysi yopadi).
- Bir kadrda bitta asosiy fokus; subtitr va sarlavha bir vaqtda chiqmasin.
- Real shaxs/brend nomidan foydalanilsa — faqat foydalanuvchining o‘zi yoki ruxsat bergan materiallar.
