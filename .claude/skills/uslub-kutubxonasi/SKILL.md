---
name: uslub-kutubxonasi
description: Foydalanuvchi to‘plagan video/dizayn namunalari kutubxonasi (reel, motion, subtitr, qahramon formatlari). Har qanday video, reel, animatsiya, darslik, reklama, taqdimot yoki dizayn ishi boshlanganda — so‘ralmasa ham — shu kutubxonani ochib, mos namunalarni taklif qiling. "Namunalar", "uslublar", "o‘sha videodagidek", "yig‘ganlarimiz" deganda ham ishlating.
---

# Uslub kutubxonasi — foydalanuvchi to‘playotgan namunalar

Foydalanuvchi namuna videolarni **men uchun** yig‘moqda. Qoidalar:
1. **Namuna yuborilganda** — kadrma-kadr ko‘rib tahlil qiling (ffprobe, `fps=2,tile` kontakt varaq, muhim lahzalarni katta kadrda, matnni subtitrlardan o‘qing). Tahlilni `video-darslik-v3/uslub_namunalar/<NOM>.md` ga yozing, kadrlarni o‘sha papkaga qo‘ying. Pastdagi jadvalga va `video-darslik-v3/USLUBLAR.md` ga qo‘shing. **Namuna kadr yasamang** — faqat saqlang (foydalanuvchi so‘ramaguncha).
2. **Video/reel/animatsiya/dizayn ishi boshlanganda** — so‘ralmasa ham shu jadvalni ko‘rib chiqing. 1–3 mos namunani **nomi bilan taklif qiling**: nega mos, qaysi elementlari olinadi (qahramon formati, subtitr, ketma-ketlik, rang), qisqa g‘oya yoki ssenariy skeleti. Masalan: «Bu reel uchun Neon Jamoa qahramonlari + Kontent zavodi subtitrlari mos keladi, chunki …».
3. **«Shuni qil» deyilganda** — tegishli `.md` dagi tokenlar, vaqt jadvali va prompt andozalari asosida yarating (`video-darslik` va `reel-uslublari` skill’lari bilan).
4. Foydalanuvchining ustuvor istaklari: **odamlar — Neon Jamoa formatidagi fotorealistik qahramonlar**; reel subtitrlari — ikki darajali (Kontent zavodi); natija bitta tayyor video; javoblar o‘zbek tilida.

## Kutubxona
| # | Nomi | Turi | Asosiy elementlar | Qachon taklif qilinadi | Fayllar (`video-darslik-v3/`) |
|---|---|---|---|---|---|
| 0–5 | Tungi Fintech, Qog‘oz va Siyoh, Pop Stiker, Keynote Oq, Izometrik Ofis, Atlas Naqsh | 16:9 dars uslublari | rang/shrift tizimlari | videodarslik | `USLUBLAR.md`, `uslub_namunalar/0..5_*.png`; Atlas tayyor dvigatel: `atlas/` |
| 6 | **Neon Jamoa** | 9:16 reel / qahramonlar | fotorealistik «AI xodim» portretlari neon kartalarda, rol ranglari, 3D kirish, «AI» glitch, daraxt sxema + yuguruvchi nuqta, holat chiplari, Telegram tasdiqlash, CTA poster | rollar, jamoa, jarayon, «AI xodimlar», reklama; **har qanday videoda odam/qahramon kerak bo‘lsa** | `uslub_namunalar/NEON_JAMOA.md`, `neon_jamoa_*.jpg` |
| 7 | **Kontent zavodi reel** + **Lavanda Glass** | 9:16 talking-head reel + yorug‘ motion | ikki darajali kinetik subtitr (kichik oq + KATTA tor oq/sariq urg‘u), selfi spiker → ekran demo → isbot → izohga kalit so‘z CTA; Lavanda Glass: och gradient, oq kartalar, gradient so‘zlar, avatar+badge, izometrik AI zavod, platforma orbitasi, o‘sish sanagichi | spiker gapiradigan reel, subtitr, AI mahsulot demosi, vebinar/kurs reklamasi, klon ovoz isboti | `uslub_namunalar/KONTENT_ZAVOD_REEL.md`, `kontent_zavod_subtitr.jpg`, `lavanda_glass_ekran.jpg` |
| 8 | **8 ta Claude effekti** (overlay kutubxonasi) | 9:16 reel, spiker klipi + overlaylar | «buyruq → render → natija» halqasi (Claude ilovasida `/effects <nom>` → piksel-mozaika dissolve → to‘liq ekran); 8 overlay: piksel maskot, checklist (✓ + mono qiymatlar), frosted-glass stat vidjetlar, qidiruv qatori, iOS bildirishnomalar, piksel sarlavha + matritsa, montaj timeline, Instagram izoh-javob; Claude coral `#D97757` + ko‘mir UI; yakunda «Comment …» + 4×2 natija to‘ri | AI vosita/skill namoyishi, «bitta klip — ko‘p effekt», spiker reeliga jonli overlay qo‘shish, ijtimoiy isbot (ko‘rishlar, obunachilar, izohlar) | `uslub_namunalar/CLAUDE_EFFECTS_REEL.md`, `claude_effects_1.jpg`, `claude_effects_2.jpg` |

Yangi namuna qo‘shilganda jadvalga qator qo‘shing (nomi, turi, elementlar, qachon taklif qilinadi, fayllar).
