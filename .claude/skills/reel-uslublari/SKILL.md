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
### /kinetik-subtitr (ikki darajali — foydalanuvchi namunasi, `video-darslik-v3/uslub_namunalar/KONTENT_ZAVOD_REEL.md`)
- **Oddiy so‘zlar:** oq, qalin, kichik (1080 kenglikda ~30px, Inter Semibold), oddiy registr. Ibora so‘zma-so‘z to‘lib boradi («Threads» → «Threads Facebook»). Plashka yo‘q, faqat soya `0 2px 10px rgba(0,0,0,.6)`.
- **Urg‘u so‘zlar:** KATTA HARF, tor shrift (Bebas Neue / Oswald), ~3× katta (~66px), 1–3 qator. Rang oq yoki sariq `#F5C518` — eng emotsional yoki «siz» haqidagi gaplarda. Pop: scale 1.1→1, 120 ms. Ekranda 0,6–1,0 s turadi. Taxminan har 3–4 s da bittadan.
- **Joyi:** markaz, balandlikning ~68% ida. Ko‘p qatorli urg‘u yuqoriga o‘sadi.
- Urg‘u so‘zlarni foydalanuvchi bilan kelishing yoki o‘zingiz tanlang: raqamlar, fe’l-natijalar («AVTOMATLASHDI»), murojaatlar («SIZ QATNASHMASANGIZ HAM»).
- Yakuniy CTA: izohga kalit so‘z yozish → link (reel oxirida spikerning o‘zi aytadi).

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

## Overlay effektlar (8 ta, foydalanuvchi namunasi)
`/checklist`, `/glass-widgets`, `/search-bar`, `/notifications`, `/timeline`, `/comment-reply`, `/pixel-title`, `/mascot` — har biri spiker klipi ustiga qo‘yiladigan HTML komponent. Matnlar o‘zbekcha. Imzo o‘tish: piksel-mozaika dissolve. Har effektning ko‘rinishi, matni va harakati: `video-darslik-v3/uslub_namunalar/CLAUDE_EFFECTS_REEL.md` (2-bo‘lim jadvali).

Qo‘shimcha 6 ta (`kallaway-split`, `over-the-shoulder`, `backdrop-word`, `glass-widgets` v2, `spotlight`, `color-grade`): `video-darslik-v3/uslub_namunalar/CLAUDE_EFFECTS22_REEL.md`.

## Neon sariq glow subtitr va Before/After (foydalanuvchi namunasi)
Kalit so‘z `#FFE45C` neon glow (`text-shadow: 0 0 12px #FFD43B, 0 0 28px #FFB800`) yoki to‘q sariq plashka; oddiy so‘zlar oq, kichik, blur-in. Before/After kompozitsiyasi va flat-lay B-roll: `video-darslik-v3/uslub_namunalar/BEFORE_AFTER_REEL.md`.

Yana: `freeze-frame` (stiker kontur + ism tegi), `tier-list`, `glass-graph` — `CLAUDE_EFFECTS_RED_REEL.md`. O‘zbekcha 11 ta effekt va UI matnlari (`match-cut`, `apple-ui-toggles`, `pull-back-reveal`, `phone-mockup`, `nle-timeline`, `jiggle-delete`, `creator-list`, `ui-world` …) — `KUN_EFFEKTI_UZ_REEL.md`. O‘zbekcha overlay matnlarini shu lug‘atdan oling.

Brend zastavka/treyler (`/intro`, `/promo`, `/trailer`, `/phone`) — `BREND_PROMO_REEL.md`. Kino titr kartalari, foto bulut, ikki darajali sarlavha (`/cinematic`, `/cluster`, `/split`) — `SPLIT_CLUSTER_CINEMATIC_REEL.md`. Glass-explainer (qadam + VS solishtirish), depth-ui, cutout-grid, image-cluster — `EDITING_TEMPLATE_REEL.md`.

Yana: `pov-carousel`, `match-cut` (qotgan so‘z), `screen-push-digital`, `shoulder-zoom` — `EFFECT_STACK20_REEL.md`. AI video (Google Flow / Omni / Veo) uchun referensdan prompt — `AE_VS_OMNI_REEL.md`. Kuchli CTA (ulashish + izoh + bepul qo‘llanma + obuna tugmasi) — `RAW_HASIL_EDIT_REEL.md`. Jarayon sxemasi va «51 pauza kesildi» isboti — `CAPCUT_ORNIGA_REEL.md`.

Yana: `graph` (neon naychalar + 3D shisha sanagich), `notify` (iPhone qulf ekrani bildirishnomalari), `stack` (3D devor) — `GRAPH_NOTIFY_STACK_REEL.md`. Yorug‘ krem + coral bo‘lingan ekran, yelpig‘ich kartalar, taymer halqasi — `YOUTUBE_AGENT_REEL.md`. Ssenariy → raskadrovka → TTS → sahnalar quvuri — `MOTION_DIZAYNER_ORNIGA_REEL.md`.

## Montaj quvuri va qoidalar fayli (15-namuna, `MONTAJ_5_QADAM_REEL.md`)
Talking-head montaji tartibi:
1. ASR yoki `align.py` bilan so‘z vaqtlari.
2. Dubl va pauzalarni kesish (pauza nafas bilan birga kesiladi).
3. Bir so‘zli subtitr.
4. Emotsional so‘zlarda yuzga yaqinlashtirish (punch-in).
5. Motion overlay.

Foydalanuvchining har bir tuzatishini shu skill’ga **qoida** qilib yozing — bu bizning «TALKING_HEAD.md» imiz.

## Kompozitsiyalar (foydalanuvchi namunalari)
- **Yonma-yon «eskiz → natija»** (Neon Aurora): `ESKIZDAN_NEON_REEL.md`.
- **«raw / finished», bir so‘z = bir kadr:** `RAW_FINISHED_REEL.md`.
- **Bo‘lingan ekran** (UI tepada, spiker pastda, progress dok, toggle’lar): `SPLIT_TOOL_STACK_REEL.md`.

Uchala fayl ham `video-darslik-v3/uslub_namunalar/` papkasida.

## Lavanda Glass formati (foydalanuvchi namunasi)
AI mahsulot demosi uchun yorug‘ motion: dumaloq avatar + holat badgi, izometrik «AI zavod», platforma ikonkalari orbitasi, o‘sish sanagichi, gradient CTA kartasi. Tahlil: `video-darslik-v3/uslub_namunalar/KONTENT_ZAVOD_REEL.md`. Reel tuzilmasi: spiker (selfi) → ekrandagi demo → spiker isboti → izohga kalit so‘z CTA.

## Neon Jamoa formati (foydalanuvchi namunasi)
Rollar/jamoa/jarayon haqidagi reel uchun: fotorealistik qahramonlar neon kartalarda, 3D kirish, «AI» glitch, daraxt sxema va yuguruvchi nuqta, holat chiplari, tasdiqlash chati, CTA poster. To‘liq tahlil, vaqt jadvali va prompt andozasi: `video-darslik-v3/uslub_namunalar/NEON_JAMOA.md`.

## Uslub qoidalari
- Xavfsiz zona: yuqoridan 220 px, pastdan 380 px (Instagram/TikTok interfeysi yopadi).
- Bir kadrda bitta asosiy fokus; subtitr va sarlavha bir vaqtda chiqmasin.
- Real shaxs/brend nomidan foydalanilsa — faqat foydalanuvchining o‘zi yoki ruxsat bergan materiallar.
