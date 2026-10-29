# Neon Jamoa — namuna reel tahlili

**Manba:** foydalanuvchi yuborgan reel. 720×1280, 25 fps, 25,3 s, ovoz/musiqa bor (≈ −17,5 dB).
**Kadrlar:** `neon_jamoa_ketma_ketlik.jpg` (0,5 s qadam bilan), `neon_jamoa_kadrlar.jpg` (asosiy lahzalar).
**Foydalanuvchi talabi:** «Animatsiyadagi odamlarni qara — mana shunaqa formatda qilsang». Ya’ni asosiy e’tibor — **qahramonlar ko‘rinishi** va karta formati.

## 1. Vizual tizim
| Element | Qiymat |
|---|---|
| Kanvas | 9:16. Biz 1080×1920 da yasaymiz. 16:9 dars uchun ham moslanadi: kartalar gorizontal qatorga tiziladi |
| Fon | `#070B1F` → markazda `#13235A` radial nur. Katak to‘r: 1px cyan, 6% shaffof, qadam ~48px (1080 kenglikda) |
| Asosiy aksent | cyan `#2ED3EA`: pill, sarlavhaning 2-qatori, CTA tugma |
| Rol ranglari | AI direktor — cyan `#2ED3EA`; Targetolog — teal-yashil `#22C08A`; Kontentchi — amber `#F5A524`; Sotuvchi/Sotuv menejeri — binafsha `#9B7BFF` |
| Shrift | Qalin geometrik sans (Gilroy ExtraBold / Montserrat 800), harflar zich (−1…−2%). Sarlavha 1080 kenglikda ~96px: 1-qator oq, 2-qator cyan. Pill: «• MENING JAMOAM» — cyan fon, to‘q matn, 26px, 800, katta harf |
| Karta | Burchak radiusi ~20px; 3px neon ramka rol rangida + tashqi nur (`box-shadow: 0 0 24px rang/50%`). Yuqorida portret (≈80%). Pastda to‘q (`#0B1230`) yorliq: ism oq 800, ostida vazifa rol rangida 600 («Ishni taqsimlaydi», «Reklama», «Reels, post», «Mijozlar») |
| «AI» belgisi | Kartaning yuqori-o‘ng burchagida kichik yumaloq to‘rtburchak, rol rangida, to‘q «AI» yozuvi |
| Holat chipi | Oq pill, yumshoq soya, matn ichida emoji + qalin matn + yashil ✓: «🎬 2 ta reels tayyor ✓», «📈 Reklama ishga tushdi ✓», «📞 Mijozlar ro‘yxati ✓» |
| Chat kartasi | Telegram uslubi: to‘q kulrang panel, sarlavhada ✈ «AI jamoa», kichik avatar, ko‘k xabar pufakchasi (yuqorida «AI direktor» kichik cyan yozuv). Ostida ko‘k tugma «✅ Tasdiqlash»; bosilganda yashil «✓ Tasdiqlandi» |

## 2. Qahramonlar (eng muhim qism)
- **Uslub:** fotorealistik, kinematografik studiya portreti. Ehtimol AI bilan yaratilgan. Belidan yuqori, kameraga qaragan, xotirjam tabassum.
- **Fon:** to‘q ko‘k, kartaga qo‘shilib ketadi. Orqadan rol rangidagi kontur nur.
- **Har birining qo‘lida rolini ko‘rsatadigan gologramma UI:**
  - AI direktor — klassik kostyum va galstuk, qulog‘ida simsiz quloqchin, ikki qo‘li orasida grafik/diagramma paneli.
  - Targetolog — ayol, teal kostyum, sochi yig‘ilgan, barmog‘i bilan nishon va o‘sish grafigiga ishora qiladi.
  - Kontentchi — yigit, ko‘zoynak, qora hudi, qo‘lida kinokamera, yonida video montaj timeline paneli.
  - Sotuvchi — oq ko‘ylak, galstuk, garnitura, qo‘ng‘iroq UI va mijozlar ro‘yxati kartochkalari.
- **Bir xillik:** hammasida yorug‘lik, kadr, fon va rang bahosi bir xil — bitta «oila» bo‘lib ko‘rinadi.
- **Yakuniy kadr — real spiker:** kesib olingan foto, chapda. O‘ngda AI agentlar tarmog‘i: robot boshli doira tugunlar, markazda odam tuguni, neon chiziqlar, atrofda kichik ikonkalar (hujjat, xat, kalendar, grafik).

### Qahramon yaratish uchun prompt andozasi (Gemini Image / Higgsfield)
```
Photorealistic cinematic studio portrait, waist-up, of a {ROLE_PERSON}, facing camera, confident friendly smile,
{OUTFIT}, holding/gesturing toward a floating translucent holographic UI panel showing {ROLE_UI},
dark navy blue background (#0A1230) with soft blue haze, {ROLE_COLOR} rim light from behind, subtle cyan fill light,
sharp focus, 85mm lens look, high detail skin, same lighting and color grade as a matching team series, no text, 4:5 crop.
```
Rollar: direktor → `charts and donut graph dashboard`; targetolog → `target icon and growth bar chart`; kontentchi → `video editing timeline`, qo‘lida `cinema camera`; sotuvchi → `call interface with waveform and client list cards`.
Haqiqiy shaxs (spiker, diktor) ishlatilsa — faqat uning roziligi va o‘z fotosi bilan.

## 3. Ketma-ketlik va harakat (25 s)
| Vaqt | Sahna | Harakat |
|---|---|---|
| 0,0–0,6 | Pill «• MENING JAMOAM» | Fade + kichik scale 0.9→1 |
| 0,5–2,0 | Sarlavha «4 ta xodim. / Har biri o‘z ishida» | So‘zlar ketma-ket pastdan chiqadi, 2-qator cyan |
| 2,0–5,0 | 2×2 kartalar | Har karta **3D aylanib kiradi** (perspective 1000px, rotateY −35°→0, rotateX 8°→0, opacity 0→1, scale 0.92→1, ~0,45 s, ease-out). Oraliq ~0,6 s, tartib: direktor → targetolog → kontentchi → sotuvchi |
| 5,5–8,0 | Sarlavha «Hech biri» → «odam emas» | **Glitch:** karta portreti ~0,3 s rangi o‘zgaradi (magenta/yashil/qizil), gorizontal siljigan polosalar va skanlayn nur o‘tadi. Keyin «AI» belgisi pop bo‘ladi. Kartalar ketma-ket, ~0,4 s oraliq |
| 8,5–9,5 | O‘tish | Sarlavha blur-crossfade bilan «Direktor / ishni taqsimlaydi» ga almashadi. Direktor kartasi markaz-tepaga ko‘chadi, qolganlari yo‘qoladi |
| 9,5–11 | Daraxt sxema | Direktordan pastga chiziqlar **chiziladi** (stroke-dashoffset) — uchta tarmoq: amber, teal, binafsha. Bola kartalar kichrayib pastda paydo bo‘ladi |
| 11–15,5 | Vazifa oqimi | Chiziq bo‘ylab **oq yorug‘ nuqta** direktordan bolaga yuguradi. Faol karta 1.06× ko‘tariladi va nuri kuchayadi, qolganlari xira tortadi. Ostida **holat chipi** pop bo‘ladi va ~1,5 s turadi. Navbat bilan: kontentchi → targetolog → sotuvchi |
| 15,5–18 | «Men esa faqat / tasdiqlayman» | Chat kartasi pastdan chiqadi. Xabar ko‘rinadi, **tegish kursori** (kulrang doira) tugmaga keladi va bosadi (scale 0.9). Tugma ko‘kdan yashilga o‘tib «✓ Tasdiqlandi» bo‘ladi |
| 18–25 | CTA poster | Pill «• OFLAYN PRAKTIKUM». Spiker va agentlar tarmog‘i, tugunlar yonib-o‘chadi. Sarlavha «AI agentlar qanday / ishlashini **ichidan** / ko‘rsataman». Chiplar: sana va joy. Ism va lavozim, narx. Katta cyan tugma «Ro‘yxatdan o‘ting →» nur bilan pulsatsiya qiladi |

**Ritm:** tez, «snappy». Har 0,5–1 s yangi element paydo bo‘ladi, harakatlar 0,3–0,5 s ease-out. Sahnalar sarlavha almashinuvi bilan bo‘linadi. Sekin «suzish» yo‘q.

## 4. Bizning dvigatelda amalga oshirish
- `video-darslik-v3/atlas` andozasidan nusxa oling. Kanvasni 1080×1920 qiling (`body`/`#stage` o‘lchami, `render.mjs` dagi viewport). Yangi `style.css`: yuqoridagi tokenlar.
- **Portretlar:** oldindan yaratiladi (AI rasm yoki real foto, PNG/JPG, 4:5) va `img/` ga lokal joylanadi — render tarmoqsiz.
- **3D kirish:** `.card{transform:perspective(1000px) rotateY(var(--ry)) …}` + engine’ga `flip` animatsiya turi (rotateY −35→0).
- **Glitch:** blur ishlatmang. Portret ustiga 3 ta nusxa `clip-path: inset(...)` polosa bilan qo‘yiladi va `translateX` ±12px siljitiladi. `filter: hue-rotate()` — kichik element bo‘lgani uchun arzon. Deterministik psevdo-tasodif `t` dan hisoblanadi.
- **Yuguruvchi nuqta:** SVG `path` + `getPointAtLength(len*k)` `render(t)` ichida. Chiziq chizilishi — mavjud `draw` animatsiyasi.
- **Tegish kursori:** 44px kulrang doira, yo‘l bo‘ylab `translate`, bosishda `scale(.85)` va to‘lqin halqa.
- **Ovoz:** diktor (Gemini → kerak bo‘lsa RVC) + `mix.py` SFX: kartaga `swish`, AI belgisiga `pop`, glitchga qisqa shovqin-burst, chipga `ding`, tasdiqlashga `success`.
