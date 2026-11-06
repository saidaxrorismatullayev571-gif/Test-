# Open Generative AI va 9 ta ochiq repozitoriy xaritasi

## Qisqa qaror

Open Generative AI kuchli **bitta oynali studiya interfeysi**. Uning manba kodi MIT litsenziyali va desktop dasturini o'rnatish mumkin. Ammo u ulanadigan ko'p video modeli bulut API orqali ishlaydi. Shuning uchun “kod bepul” va “har bir video bepul” bir narsa emas.

Bizning asosiy ishlab chiqarish yo'limiz avvalgidek: kodli motion-video, FFmpeg, subtitr va audio miks. Open Generative AI esa bitta qisqa B-roll, rasm, lipsync yoki test generatsiyasi kerak bo'lganda qo'shimcha studio sifatida sinovdan o'tadi.

## 1. Open Generative AI

| Qism | Nima qila oladi | Bepul holati | Biz uchun qaror |
|---|---|---|---|
| Image Studio | Matndan rasm, rasmni tahrirlash, 14 tagacha reference rasm | **Mahalliy sd.cpp modelida bepul**; bulut modellari uchun API kaliti kerak | Portret, fon, ikonka va slayd assetlari uchun foydali |
| Video Studio | Matndan video, rasmdan video, 9:16/16:9 formatlar | **Bulut modeli cheklovli yoki pullik bo'lishi mumkin**; lokal video Wan2GP va kuchli GPU talab qiladi | Qisqa B-roll testlari uchun, asosiy pipeline emas |
| Lip Sync Studio | Portret + audio yoki video + audio orqali lab moslash | Modelga qarab API yoki lokal resurs talab qilinadi | Diktor-avatar testi uchun foydali |
| Audio Studio | Musiqa va audio generatsiyasi/tahriri | API/model shartiga bog'liq | Fon ovoz uchun faqat test |
| AI Clipping | Uzoq videodan qisqa parchalar olish | Ilova ochiq, hisoblash yo'li alohida tekshiriladi | Reel fragmentlari uchun foydali |
| Cinema/Marketing/Vibe Motion | Kamera parametri, reklama variantlari, stilizatsiyalangan motion | Ko'p qismi API modellariga tayangan | Premium B-roll bo'lsa sinovdan keyin |
| Workflow Studio | Tugunli ketma-ket generatsiya oqimi | Interfeys ochiq; ishlatilgan model narxi alohida | Kelajakda avtomatlashtirilgan pipeline uchun |

### Mahalliy ishlashdagi aniq chegara

- Rasm uchun `sd.cpp` orqali SD 1.5 kabi modellardan lokal foydalanish mumkin.
- Video uchun Wan2GP alohida o'rnatiladi. README yengil Wan 2.1 1.3B modeli uchun ham taxminan **8 GB VRAM** talabini ko'rsatadi.
- GTX 1650 odatda 4 GB VRAM bilan keladi. Shunday variantda lokal video generatsiyasi amaliy asosiy yo'l emas.
- Katta LTX, Wan 14B, Qwen va Flux modellari uchun bu kompyuter yetarli emas yoki juda sekin bo'ladi.
- Kodning MIT bo'lishi MuAPI, masofaviy model, server, kredit yoki eksport xizmatlari ham bepul degani emas.

## 2. "Bepul" atamasining bu manbadagi to'g'ri talqini

| Da'vo | To'g'ri talqin |
|---|---|
| Open source | Kodni ko'rish, o'zgartirish va o'zingizda ishga tushirish mumkin. |
| Self-hosted | Interfeys sizning kompyuteringiz/serveringizda turishi mumkin. Model hisoblash xarajati baribir qoladi. |
| Free account | Vaqtincha kredit yoki limit bo'lishi mumkin; rasmiy tarifdan tekshiriladi. |
| Unlimited | Reklama so'zi. Model, navbat, sifat, duration, watermark va tijorat huquqi alohida tekshiriladi. |
| Local model | API sarfisiz bo'lishi mumkin, ammo disk, VRAM, elektr va render vaqti kerak. |

## 3. 9 ta repozitoriy: loyihadagi o'rni

| Repo | Nima uchun | Litsenziya/narx holati | Video-kontent loyihasidagi o'rni |
|---|---|---|---|
| [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) | Rasm, video, audio, lipsync va workflow studiyasi | MIT kod; cloud model xarajati alohida | B-roll va asset laboratoriyasi |
| [VoiceStudio](https://github.com/debpalash/VoiceStudio) | Lokal ovoz klonlash, dubbing, diktovka, transkripsiya va narrator | Ochiq loyiha; model va qurilma talabini testda aniqlaymiz | Ovoz, transkript va dub laboratoriyasi |
| [OpenSEO](https://github.com/every-app/open-seo) | SEO tahlili va agent bilan ishlash | Ochiq kod; hosted versiyada pullik tarif bor | Video sahifasi va sayt kontenti SEOsi, video render emas |
| [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy) | Notion muqobili bo'lgan ish maydoni | AGPL ochiq kod | Ssenariy, storyboard, kontent kalendari va asset reyestri |
| [OpenWhispr](https://github.com/OpenWhispr/openwhispr) | Nutqni matnga aylantirish | Ochiq desktop loyiha | Diktor audiosini transkripsiya va subtitrga tayyorlash |
| [OpenProject](https://github.com/opf/openproject) | Vazifa, loyiha, road map va jamoa boshqaruvi | Ochiq kod; joriy etish resurs talab qiladi | Katta kontent jamoasi bo'lsa ishlab chiqarish boshqaruvi |
| [Cal.com](https://github.com/calcom/cal.com) | Uchrashuv va bron qilish | Ochiq kod; hosting/integratsiya alohida | Mijoz briefi va tasdiqlash uchrashuvlari |
| [Chatwoot](https://github.com/chatwoot/chatwoot) | Mijozlar murojaati uchun omnikanal support | Ochiq kod; hosting/integratsiya alohida | Buyurtma, feedback va revision murojaatlari |
| [Cap](https://github.com/CapSoftware/Cap) | Ekran yozuvi va ulashish | Ochiq kod | Dars demonstratsiyasi va revision videolari |

## 4. Amaliy tanlov

### Hozir ishga qo'shish mumkin

1. **Cap** — ekran darsi va dastur demonstratsiyasini yozish.
2. **OpenWhispr** — audio → matn → subtitr bosqichi.
3. **AppFlowy** — ssenariy, kadr rejasi va tasdiqlashlarni bir joyda yuritish.
4. **Open Generative AI / lokal rasm modeli** — dars uchun fon, ikonka, portret va illyustratsiya testlari.

### Avval kichik test kerak

1. **VoiceStudio** — o'zbek tili, ovoz sifati, GPU yuklamasi va ruxsatli voice clone testi.
2. **Open Generative AI Video/Lip Sync** — watermark, kredit, 9:16 eksport, yuz barqarorligi va tijorat sharti.
3. **Chatwoot, Cal.com, OpenProject** — kontent jamoasi va mijoz oqimi kattalashganda.

### Hozir asosiy yo'l qilinmaydi

1. Bulutdagi “unlimited” video servislar.
2. GTX 1650da katta lokal video model.
3. Hali litsenziyasi va modeli tekshirilmagan Instagram takliflari.

## 5. 7 AI Skills va Instagram manbalari

| Manba | Holat | Qayd |
|---|---|---|
| `linktwin.co/mxfwmr` — 7 AI Skills | Havola qabul qilindi | Ichidagi har skill nomi, litsenziyasi va o'rnatish fayli olinmaguncha aniq baho berilmaydi. |
| Instagram `De9leuzlXJK` | Havola qabul qilindi | Alohida uslub/manba sifatida navbatda. |
| Instagram `DfMXIG5jUP7` | Havola qabul qilindi | Alohida uslub/manba sifatida navbatda. |
| Instagram `DesEXFtRh6f` | Havola qabul qilindi | Alohida uslub/manba sifatida navbatda. |
| Instagram `DdRnP0TTEJM` | Havola qabul qilindi | Alohida uslub/manba sifatida navbatda. |
| Opuscar | Oldingi texnologiyalar kartasiga kiritilgan | Kodli 66 uslub: video model emas; Claude Code hisoblash/obuna xarajati alohida. |
| Instagram `DfJ52pVzp67` | Havola qabul qilindi | Alohida uslub/manba sifatida navbatda. |
| Instagram `DfWy0LqMaYI` | Havola qabul qilindi | Alohida uslub/manba sifatida navbatda. |

## 6. Manba va dalillar

- Open Generative AI README: MIT litsenziya, desktop installer, MuAPI API kaliti, lokal `sd.cpp` va Wan2GP yo'li, video/lipsync/workflow modullari qayd etilgan.
- Ushbu tahlil foydalanuvchi yuborgan 9 ta screenshot hamda repo README asosida yozildi.
- Asl screenshotlar va videolar repozitoriyga yuklanmaydi; loyiha qoidasiga ko'ra ularning mazmuni va texnik xulosasi saqlanadi.
