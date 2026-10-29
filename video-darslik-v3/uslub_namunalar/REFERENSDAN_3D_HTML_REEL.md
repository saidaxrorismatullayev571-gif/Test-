# «I recreated this 3D reel with Claude — HTML + CSS 3D + Playwright + FFmpeg» (tahlil)

**Manba:** 25-namuna (@VIBE.CLAUDER, ingliz tilida). 1080×1920, 30 fps, 49 s, ovozli. **Kadrlar:** `referensdan_3d_html_1.jpg`.
**Muhim:** bu reel **aynan bizning texnologiyamiz** bilan yasalgan — HTML/CSS 3D sahnalar → Playwright kadrma-kadr → FFmpeg MP4.

## Vizual tizim
- **Fon:** to‘q olxo‘ri/bordo gradient (`#2A0F1A` → `#120A0E`), yuqorida ingichka coral **progress chizig‘i** (qadamlar bo‘ylab to‘ladi).
- **Sarlavha:** chapga tekislangan, oq qalin grotesk + ikkinchi qismi **oltin-amber** `#F2B24C` («Mapped every beat to **my brand.**»). Ustida mono pill «STEP 01».
- **Kartalar:** «Reference» (binafsha 3D render) va «Mine» (qorong‘i 3D) — yorliqli kichik teglar bilan.

## Qadamlar (hikoya = jarayon)
| Qadam | Kadr |
|---|---|
| Ilgak | «I recreated this **3D reel with Claude.**» · «No Blender. No After Effects.» — tepada referens, pastda meniki |
| STEP 01 «Sent Claude the **reference.**» | Krem chat pufakchasi: `reference-reel.mp4 · 26s` «We need a video like this. Same motion, same music, but my website.» → Claude javobi yoziladi: «Breaking it down: 26.4 s, 24 fps, scene cuts at 3.2 s, 9.2 s, 11.3 s, 15.5 s… I’ll rebuild every beat with your site.» + kadrlar lentasi va kesim belgilari |
| STEP 02 «Mapped every beat to **my brand.**» | Jadval: chapda referens kadri → o‘ngda mening kadrim + izoh («Pings about my clients’ real problems», «My “Let’s connect” button», «My homepage, live», «ranked. for SEO», «named. for GEO», «My wordmark») |
| STEP 03 «Used my **real site** and brand kit.» | Sayt skrinshotlari telefonlarda; rang namunalari `#F2B24C #F7A8C8 #8EA2FF #F7EBD9`; shriftlar «Sora · IBM Plex Mono» |
| STEP 04 «Built every scene in **HTML + CSS 3D.**» | Kod yoziladi (`translate3d(...)`, `scale(...)`), ostida 3D «Let’s connect ↗» tugma sahnasi |
| STEP 05 «Rendered it **frame by frame.**» | Katta sanagich **61 → 1,156 → 1,269** «frames · 48 fps, blended to 24 fps for real motion blur»; kadrlar to‘ri to‘lib boradi; «PLAYWRIGHT · FFMPEG · MP4» |
| STEP 06 «Same beats. **My website.**» | Referens va meniki yonma-yon, sinxron |
| Yakun | «Made with **Claude.**» · «CLAUDE · HTML/CSS · PLAYWRIGHT · FFMPEG» · «Want one for your brand?» + **«Let’s connect ↗»** tugma · ism «Nabeel Al Nassir.» (oltin) |

## Bizga foydali xulosalar
1. **Texnik maslahat (dvigatelimiz uchun):** **48 fps’da render qilib, juft kadrlarni aralashtirib 24 fps’ga tushirish** — haqiqiy motion blur beradi (ffmpeg `tblend=all_mode=average,framestep=2` yoki `minterpolate`siz oddiy blend). Bizda 30 fps → 60 fps render + blend 30 fps qilish mumkin.
2. **Referens → beat xaritasi** (kesim vaqtlari: 3.2 s, 9.2 s…) — biz yig‘ayotgan namunalarni aynan shunday «beat» jadvaliga aylantirib, o‘zbekcha brend bilan qayta qurish mumkin.
3. **Jarayon reeli** (STEP 01–06, progress chiziq) — o‘z xizmatimizni sotish uchun: «Darsingizni shunday yasaymiz».
4. Yakuniy **texnologiya qatori** va «Want one for your brand?» CTA.
