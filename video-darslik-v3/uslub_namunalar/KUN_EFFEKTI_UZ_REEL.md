# «Kun effekti» — o‘zbekcha Claude effektlari reeli (tahlil)

**Manba:** foydalanuvchining 12-namunasi (@JASURSADULLAYEV_, **o‘zbek tilida**). 1080×1920, 30 fps, 37 s, ovozli. **Kadrlar:** `kun_effekti_uz_1.jpg`.
**Ahamiyati:** mahalliy bozorda aynan shu format allaqachon ishlatilmoqda. Barcha UI matnlari o‘zbekcha — bizga tayyor lug‘at va ohang namunasi.
**Tuzilma:** Claude ilovasi (Chat/Code) → `/effekt` buyrug‘i va qisqa o‘zbekcha tavsif → «Editing with …» → natija. Spiker: jigarrang kostyum yoki ko‘k pidjak, iliq studiya, kreslo. Yakun: «**Kun effekti** — effektlar · Claude bilan qilingan» to‘ri → «Izohga “**OLOV**” yozing — har bir effekt promptini yuboraman».

## Effektlar (o‘zbekcha matnlar bilan)
| Buyruq | Ko‘rinishi |
|---|---|
| `/match-cut` | Butun ekran **gazeta/yozuv mashinkasi matni** (o‘zbekcha: «…natijaga butun hafta…», «har kuni yangi effekt…»), ichida qizil shtamp «Claude» — keyin keyingi kadrga mos kesim |
| `/apple-ui-toggles` | Spiker oldida iOS sozlamalar ro‘yxati, tugmalar ketma-ket yoqiladi: «Bitta prompt» ✓, «Claude’ga joylash» ✓, «Effektni tanlash», «Tayyor reels» |
| `/cinematic-type` | Qora ekran → kursiv serif so‘z yoziladi, **sariq fon** `#FFE600` ustida «*timelines*» |
| `/reel-feed` | Telefon lentasi xiralashib o‘tadi (feed scroll), ustida UI |
| `/nle-timeline` | Pastda montaj timeline: sariq audio to‘lqin, so‘z-chiplar «bitta · prompt · bilan · reels · tayyor», taymkod `00:00:28:26`, «● Eksportga tayyor» |
| `/pull-back-reveal` | Kamera orqaga chekinadi — klip **Claude Code oynasi** ichida ekan; o‘zbekcha checklist: «1 ta klip transkripsiya qilindi ✓ · Eng yaxshi dubl tanlandi ✓ · Pauzalar kesildi ✓ · Subtitr qo‘shildi ✓ · 1080p’da render qilindi ✓» |
| `/phone-mockup` | Suzuvchi iPhone, ichida bildirishnoma «Montaj yordamchisi: Boshidagi 2 soniyani kes, hook’ni 0:00 ga qo‘y» + tugmalar «Tasdiqlash / Keyinroq» |
| `/liquid-glass-graph` | Sarlavha «bitta prompt bilan», ostida suyuq shisha karta «PRASMOTR **1mln**» va yashil o‘sish grafigi |
| `/jiggle-delete` | iOS ilova ikonkalari titraydi, boshqalari o‘chiriladi, faqat Claude qoladi — «TANLOV QILINDI» |
| `/creator-list` | Qorong‘i panel «Kuzatish kerak bo‘lganlar»: avatar + ism + tugma (Obunasiz / Kuzatish) ro‘yxati |
| `/ui-world` | Spiker ustida Claude oynasi suzadi: 4 ta klip kichik rasmi va prompt «Bulardan reels yasab ber» |

## Bizga foydali xulosalar
1. **O‘zbekcha UI lug‘ati tayyor:** «Tasdiqlash», «Eksportga tayyor», «Pauzalar kesildi», «Kuzatish kerak bo‘lganlar», «Izohga “…” yozing». Overlay komponentlarimiz matnlari shu ohangda bo‘lsin.
2. **pull-back-reveal + o‘zbekcha checklist** — «bularning hammasini AI qildi» isboti. Bizning klon + animatsiya ishimizni ko‘rsatish uchun ideal.
3. **apple-ui-toggles** va **phone-mockup bildirishnomasi** — jarayon yoki maslahatni oddiy UI bilan ko‘rsatish (darslarda ham ishlaydi: «Oklad ✓ · Bonus fondi ✓ · KPI ✓ · Eshik ✓»).
4. Raqobat: bu format o‘zbek auditoriyasida allaqachon bor. Bizniki farqlanishi kerak — mavzu chuqurligi (HR, sotuv, maosh tizimi) va klon ovozli to‘liq darslar.
