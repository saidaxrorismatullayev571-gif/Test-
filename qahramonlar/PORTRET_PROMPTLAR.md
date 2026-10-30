# Neon Jamoa portretlari — tayyor promptlar

Bu promptlar istalgan rasm AI uchun mos: Google AI Studio (Nano Banana), ChatGPT, Midjourney, Higgsfield.
Barcha portretlar **bitta oila** bo‘lib ko‘rinishi uchun har biri bir xil uslub blokidan boshlanadi.
Odamlar to‘qima (fictional): haqiqiy shaxsga o‘xshatilmaydi.

## Qanday ishlatiladi
1. Har bir rol uchun **USLUB BLOKI + ROL QATORI** ni birga nusxalab, AI’ga qo‘ying.
2. Format: **4:5** (vertikal). Agar model so‘rasa — 1080×1350 yoki undan katta.
3. Har roldan 2–3 variant yasating va eng yaxshisini tanlang. Tanlash mezonlari:
   - yuz tabiiy;
   - qo‘llar to‘g‘ri — barmoqlar soniga qarang;
   - gologramma aniq;
   - fon to‘q ko‘k.
4. Fayl nomi: `bolim_rol.png` — masalan, `biznes_hr.png`, `imed_hamshira.png`. Fayllarni shu chatga yoki Drive’dagi `Qahramonlar` papkasiga yuboring.
5. Kerakli rol ro‘yxatda bo‘lmasa, xuddi shu shablonda o‘zingiz yozing: kim, kiyimi, gologrammada nima bor, qaysi rangda nur.

## USLUB BLOKI (har promptning boshiga)
```
Photorealistic cinematic studio portrait, waist-up, one person, facing the camera, confident friendly expression, natural skin texture, sharp focus on the eyes, 85mm lens look.
Dark navy blue background (#0A1230) with soft blue haze and subtle depth, a colored rim light from behind matching the role color, soft cyan fill light on the face.
The person gestures toward a floating translucent holographic UI panel (glowing, glassy, thin lines) related to their job.
Same lighting, framing and color grade as a matching corporate team series. Vertical 4:5. No text, no letters, no logos, no watermark, no extra people, correct hands with five fingers.
```

## A. Umumiy biznes rollari
| # | Rol (fayl nomi) | ROL QATORI (uslub blokidan keyin qo‘ying) |
|---|---|---|
| 1 | Direktor / CEO (`biznes_direktor`) | `Role: Central Asian man in his 40s, short neat beard, dark three-piece suit and tie. Hologram: business dashboard with growth charts and a donut chart. Rim light color: cyan.` |
| 2 | HR menejer (`biznes_hr`) | `Role: Central Asian woman in her 30s, hair in a neat bun, smart beige blazer. Hologram: candidate profile cards with avatars and green checkmarks. Rim light color: soft green.` |
| 3 | Sotuv menejeri (`biznes_sotuv`) | `Role: young Central Asian man, white shirt with navy tie, headset with microphone. Hologram: call interface with sound waveform and client list cards. Rim light color: violet.` |
| 4 | Marketolog / targetolog (`biznes_targetolog`) | `Role: Central Asian woman in her late 20s, teal blazer, hair tied up. Hologram: ad analytics with a target icon and rising bar chart. Rim light color: teal.` |
| 5 | Kontentchi / SMM (`biznes_kontentchi`) | `Role: young man with curly hair and glasses, black hoodie, holding a cinema camera. Hologram: video editing timeline with thumbnails. Rim light color: orange.` |
| 6 | Buxgalter (`biznes_buxgalter`) | `Role: Central Asian woman in her 40s, glasses, elegant dark blouse. Hologram: financial report with table rows, calculator and coins icon. Rim light color: gold.` |
| 7 | Loyiha menejeri (`biznes_loyiha`) | `Role: Central Asian man in his 30s, light blue shirt with rolled sleeves. Hologram: kanban board with task cards and a timeline. Rim light color: cyan-blue.` |
| 8 | Call-markaz operatori (`biznes_operator`) | `Role: young Central Asian woman, corporate polo shirt, headset. Hologram: incoming call queue and chat bubbles. Rim light color: pink.` |
| 9 | Dasturchi (`biznes_dasturchi`) | `Role: young man, beard, grey t-shirt and casual jacket. Hologram: glowing code editor window and server icons. Rim light color: green.` |
| 10 | Dizayner (`biznes_dizayner`) | `Role: young Central Asian woman, stylish oversized shirt, holding a stylus. Hologram: color palette swatches and layout wireframes. Rim light color: magenta.` |
| 11 | Logist / omborchi (`biznes_logist`) | `Role: Central Asian man in his 30s, work vest over polo shirt, holding a tablet. Hologram: delivery route map and package boxes with status. Rim light color: amber.` |
| 12 | Yurist (`biznes_yurist`) | `Role: Central Asian man in his 50s, grey suit, rimless glasses. Hologram: contract document with signature line and a shield icon. Rim light color: silver-blue.` |
| 13 | Ofis administratori (`biznes_admin`) | `Role: Central Asian woman in her 20s, neat white blouse, warm smile. Hologram: calendar with meeting slots and a checklist. Rim light color: violet.` |

## B. iMed Team — tibbiyot rollari
| # | Rol (fayl nomi) | ROL QATORI |
|---|---|---|
| 1 | Bosh shifokor (`imed_bosh_shifokor`) | `Role: Central Asian male doctor in his 40s, neat beard, white medical coat over a shirt and tie, stethoscope around neck. Hologram: patient heart-rate monitor with ECG line and vital signs. Rim light color: cyan.` |
| 2 | Shifokor-terapevt (`imed_terapevt`) | `Role: Central Asian female doctor in her 30s, white coat, stethoscope, hair tied back. Hologram: patient medical record with body outline and checkmarks. Rim light color: cyan-blue.` |
| 3 | Kardiolog (`imed_kardiolog`) | `Role: Central Asian male doctor in his 50s, glasses, white coat. Hologram: 3D glowing anatomical heart with ECG waves. Rim light color: red-pink.` |
| 4 | Hamshira (`imed_hamshira`) | `Role: young Central Asian female nurse, light blue scrubs, hair in a bun. Hologram: patient care checklist and medication schedule with green checkmarks. Rim light color: green.` |
| 5 | Laborant (`imed_laborant`) | `Role: Central Asian woman in her 30s, lab coat, protective glasses on head, gloves. Hologram: test tubes, DNA helix and blood test results chart. Rim light color: amber.` |
| 6 | Diagnost / UZI shifokori (`imed_diagnost`) | `Role: Central Asian male doctor in his 30s, navy scrubs. Hologram: ultrasound scan screen and organ scan images. Rim light color: teal.` |
| 7 | Pediatr (`imed_pediatr`) | `Role: Central Asian female doctor in her 30s, white coat with a small colorful pin, kind smile. Hologram: child growth chart and vaccination calendar. Rim light color: soft yellow.` |
| 8 | Stomatolog (`imed_stomatolog`) | `Role: Central Asian male dentist in his 30s, white dental tunic, mask pulled down under the chin. Hologram: 3D tooth model and dental X-ray. Rim light color: ice blue.` |
| 9 | Farmatsevt (`imed_farmatsevt`) | `Role: young Central Asian woman, white pharmacy coat. Hologram: medicine boxes and prescription list with dosage icons. Rim light color: green-teal.` |
| 10 | Registratura / administrator (`imed_registratura`) | `Role: young Central Asian woman, corporate blouse, headset. Hologram: appointment calendar, patient queue list and a phone icon. Rim light color: violet.` |
| 11 | Klinika menejeri (`imed_menejer`) | `Role: Central Asian man in his 40s, smart navy blazer over open-collar shirt. Hologram: clinic performance dashboard with patient count chart and ratings stars. Rim light color: cyan.` |
| 12 | Tez yordam / feldsher (`imed_feldsher`) | `Role: Central Asian man in his 30s, dark green paramedic uniform with reflective stripes. Hologram: ambulance route map and pulse monitor. Rim light color: orange.` |

## Tuzatish iboralari (natija yoqmasa, shu chatda yozing)
- `Keep the same person and pose. Make the background darker navy and the rim light stronger.`
- `Same image, fix the hands: natural five fingers.`
- `Same person, make the hologram clearer and closer to the hand, no text on it.`
- `Same series style: match the lighting and color grade of the previous portrait.`
