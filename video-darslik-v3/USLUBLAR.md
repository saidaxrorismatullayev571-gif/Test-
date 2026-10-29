# Animatsiya uslublari katalogi

Har bir uslubning nomi bor. Yangi video uchun shunchaki **«… uslubida qil»** deb ayting, masalan: «Qog‘oz va siyoh uslubida qil».

**Qanday ishlaydi:** barcha uslublar bir xil **ma’no-ranglar** tizimiga ega (oklad, bonus, ulush, tushum, xato, sifat). Shuning uchun `ANIMATSIYA_REJASI.md` dagi storyboard istalgan uslubga mos keladi. Uslub almashtirilganda faqat shu jadvaldagi tokenlar, shriftlar, shakllar va harakat xarakteri almashadi. Ssenariy, sahnalar va metaforalar (Maosh minorasi, Eshik, Zinapoya, Sifat krani) o‘zgarmaydi, faqat ularning ko‘rinishi uslubga moslashadi.

| # | Nomi | Kayfiyat | Kimga mos |
|---|---|---|---|
| 0 | **Tungi Fintech** *(mavjud, 05.2 videolari)* | to‘q, premium, texnologik | rahbarlar, zamonaviy kompaniya |
| 1 | **Qog‘oz va Siyoh** | jurnal, qo‘lda chizilgan, iliq | ta’lim, xotirjam tushuntirish |
| 2 | **Pop Stiker** | yorqin, dadil, o‘yinqaroq | yosh sotuvchilar, motivatsiya |
| 3 | **Keynote Oq** | minimal, nafis, yirik tipografiya | rahbariyat taqdimoti, investorlar |
| 4 | **Izometrik Ofis** | pastel 3D dunyo, hikoyaviy | onboarding, jarayonlarni ko‘rsatish |
| 5 | **Atlas Naqsh** | milliy, hashamatli, oltin va indigo | o‘zbek auditoriyasi, brend obro‘si |

Barchasi: 16:9, 1920×1080, 30 fps (Pop Stiker va Izometrik Ofis 60 fps’da ham chiroyli), xavfsiz maydon 120 px chet / 130 px yuqori.

---

## 0. Tungi Fintech *(mavjud uslub)*

> «Stripe va Linear saytlaridagi kabi to‘q ko‘k fon, yorqin aksentlar, shisha kartochkalar.»

- **Ma’no-ranglar:** fon `#070D1C` → `#0C1630` · kartochka `rgba(30,46,86,.78)` · matn `#F1F5FF` · ikkinchi matn `#9FB0D0` · oklad `#2EE6C5` · bonus `#5AA8FF` · ulush `#FFC24B` · tushum/ijobiy `#3DDC97` · xato `#FF6B6B` · sifat `#B08CFF`
- **Shrift:** Inter (sarlavha 850–900, matn 500–650), raqamlar tabular.
- **Shakllar:** 26–28 px radiusli shisha kartochkalar, 1 px oq chegara 10%, chuqur yumshoq soya.
- **Fon:** sekin suzuvchi ko‘k, yashil, binafsha rangli dog‘lar, mayda zarrachalar, vignette.
- **Personajlar:** flat, yumaloq yuz, kiyim rangi = xodim rangi, ko‘z yumish va nafas olish.
- **Harakat:** `cubic-bezier(.05,.7,.1,1)`, sarlavhalar so‘zma-so‘z blur → aniq, kartochkalar pastdan 46 px, kamera sekin push-in.
- **O‘tishlar:** push, zoom-through, circle-wipe, up.
- **Ovoz:** yumshoq raqamli effektlar (whoosh, pop, ding).
- **Fayllar:** `video-darslik-v2/style.css`, `engine.js`.

---

## 1. Qog‘oz va Siyoh

> «Iliq qog‘oz ustiga siyoh bilan chizilgandek. Rassomning daftari va The Economist infografikasi o‘rtasidagi narsa.»

**Ilhom:** The Economist va NYT infografikalari, TED-Ed, RSA Animate (whiteboard), Notion illyustratsiyalari.

| Token | HEX | Izoh |
|---|---|---|
| fon | `#F4EEE3` | iliq krem qog‘oz + nozik qog‘oz teksturasi (noise 4%) |
| yuza (kartochka) | `#FBF7F0` | qog‘oz varaq, 1,5 px siyoh chegara |
| matn | `#1F1B16` | siyoh qora |
| ikkinchi matn | `#6B6257` | qalam kulrang |
| oklad | `#2A6F97` | siyoh ko‘k |
| bonus | `#2A9D8F` | dengiz yashil |
| ulush | `#E9A23B` | xantal |
| tushum / ijobiy | `#5B8E3E` | o‘t yashil |
| xato | `#D1495B` | qizil qalam |
| sifat | `#7D5BA6` | siyohrang |

- **Shrift:** sarlavha — **Fraunces** (serif, 700, optik o‘lcham katta); matn — **Inter** 500; qo‘lyozma izohlar — **Caveat** (ehtiyotkorlik bilan, faqat strelka izohlarida).
- **Shakllar:** to‘g‘ri burchakli (radius 6 px) qog‘oz varaqlar, ostida qog‘oz soyasi (`0 2px 0 #E2D8C6`, `0 12px 24px rgba(60,40,10,.10)`), burchaklari biroz qiyshiq (±0,6°). Diagrammalar shtrixlangan (hatching) to‘ldiriladi.
- **Chiziqlar:** hammasi «qo‘lda chizilgan»: 2,5–3 px, chetlari biroz notekis (SVG `feTurbulence` + `feDisplacementMap` yoki rough.js uslubi).
- **Personajlar:** konturli (siyoh chiziq) + akvarel dog‘i bilan bo‘yalgan, yuz minimal. Harakat «ikkiliklar» (on twos, 12 fps) — qo‘lda chizilgan animatsiya hissi.
- **Fon detali:** daftar katakchalari juda xira, chetlarda qalam, qisqich, kofe dog‘i kabi kichik detallar (sahnaga xalaqit bermasin).
- **Harakat imzosi:**
  - Matn va chiziqlar **chizilib** paydo bo‘ladi (stroke-dashoffset), keyin rang «akvarel» bo‘lib to‘ladi (clip-path + 0,4 s).
  - Muhim so‘z ostiga qo‘lda **marker chiziq** tortiladi.
  - Raqamlar yozuv mashinkasi kabi harfma-harf.
  - Easing: `cubic-bezier(.45,0,.2,1)` — xotirjam, sakrashsiz; overshoot ishlatilmaydi.
- **O‘tishlar:** varaq ag‘darilishi (page-curl yoki 3D rotateY 12°), yangi varaq ustiga tushishi (paper drop + yengil chang), qalam chizig‘i bilan «wipe».
- **Metaforalar:** Maosh minorasi — ustma-ust qo‘yilgan rangli qog‘oz bloklar; Eshik — chizilgan yog‘och darvoza; Zinapoya — qalamda chizilgan zina; Sifat krani — eskiz uslubidagi suv krani.
- **Ovoz:** qalam shitirlashi, qog‘oz varaqlanishi, shtamp bosilishi, yengil akustik gitara yoki pianino fon.
- **Xavf:** juda ko‘p «qo‘lda chizilgan» effekt sekin o‘qiladi. Asosiy raqamlar doim toza va yirik bo‘lsin.

---

## 2. Pop Stiker (neo-brutalizm)

> «Qalin qora kontur, qattiq soyalar, yorqin ranglar. Duolingo + Gumroad + komiks.»

**Ilhom:** Gumroad va Figma Config brendi, Duolingo animatsiyalari, Headspace’ning dadil ranglari, komiks panellari.

| Token | HEX | Izoh |
|---|---|---|
| fon | `#FFE66D` | quyosh sarig‘i (bob sayin almashadi: `#A0E7E5`, `#FFAEBC`) |
| yuza | `#FFFFFF` | oq kartochka, **4 px qora chegara**, qattiq soya `8px 8px 0 #111` |
| matn | `#111111` | |
| ikkinchi matn | `#3B3B3B` | |
| oklad | `#3A86FF` | |
| bonus | `#8338EC` | |
| ulush | `#FF8500` | |
| tushum / ijobiy | `#06D6A0` | |
| xato | `#FF006E` | |
| sifat | `#00BBF9` | |

- **Shrift:** **Space Grotesk** 700 yoki **Archivo Black** sarlavhalar uchun (KATTA harf emas, oddiy), matn — Inter 600. Raqamlar juda yirik (140–220 px).
- **Shakllar:** stikerlar, yorliqlar, nishonlar; radius 18 px, hammasida qora kontur va qattiq soya. Elementlar biroz qiyshiq (−3°…+3°).
- **Personajlar:** qalin qora konturli flat, katta ko‘zlar, emotsiyalar bo‘rttirilgan (sakraydi, qo‘l silkitadi). Kayfiyat emoji-pufakchalari bilan.
- **Fon detali:** yirik nuqtalar (halftone), «⚡», «!», yulduzcha stikerlari burchaklarda.
- **Harakat imzosi:**
  - Hamma narsa **pop** bilan: `back` overshoot 2,2, squash & stretch (paydo bo‘lishda 1,15/0,85 → 1/1).
  - Muhim raqamlar «muhr» bo‘lib urib tushadi + kamera 4 px silkinadi.
  - Kartochkalar «stiker yopishtirilgandek»: yuqoridan aylanib tushadi va biroz tebranadi.
  - Durations qisqa: 200–450 ms. Ritm tez.
- **O‘tishlar:** rangli diagonal panellar bilan wipe (komiks paneli), «zoom-punch» (tez kattalashish + flash), slide + sakrash.
- **Metaforalar:** Maosh minorasi — LEGO kabi bloklar; Eshik — shlagbaum; Zinapoya — o‘yin pog‘onalari (level 1, 2, 3, «LEVEL UP!»); Sifat krani — o‘yin «quvvat chizig‘i» (health bar).
- **Ovoz:** o‘yin ovozlari (coin, level up, boing), tez ritmli pop fon musiqa (past).
- **Xavf:** rahbarlar uchun haddan tashqari o‘yinqaroq tuyulishi mumkin. Jiddiy mavzularda (islom moliyasi eslatmasi, yuridik eslatma) effektlarni kamaytiring.

---

## 3. Keynote Oq

> «Apple taqdimotidagidek: oq fon, ulkan raqamlar, ko‘p bo‘sh joy, sekin va nafis harakat.»

**Ilhom:** Apple keynote va apple.com sahifalari, Stripe Sessions, Linear changelog.

| Token | HEX | Izoh |
|---|---|---|
| fon | `#F5F5F7` | och kulrang-oq; muhim sahnalarda `#FFFFFF` |
| yuza | `#FFFFFF` | radius 28 px, soya `0 20px 60px rgba(0,0,0,.08)` |
| matn | `#1D1D1F` | |
| ikkinchi matn | `#6E6E73` | |
| oklad | `#0071E3` | Apple ko‘k |
| bonus | `#5E5CE6` | indigo |
| ulush | `#FF9F0A` | to‘q sariq |
| tushum / ijobiy | `#30D158` | |
| xato | `#FF3B30` | |
| sifat | `#BF5AF2` | |

- **Shrift:** **Inter Display** (SF Pro o‘rnida) — sarlavha 700, 120–180 px; matn 400–500. Harflar oralig‘i sarlavhada −0,03 em. Gradientli raqamlar (ko‘k → binafsha).
- **Shakllar:** juda kam element. Bir ekranda bitta asosiy raqam yoki bitta grafik. Chegarasiz kartochkalar, faqat yumshoq soya.
- **Personajlar:** yo‘q yoki minimal: monoxrom siluet-ikonalar. Diqqat raqam va tipografiyada.
- **Fon detali:** yo‘q. Ba’zan katta, xira gradient «nur» (orb) raqam ortida.
- **Harakat imzosi:**
  - Matn **niqob ostidan** chiqadi (mask reveal, pastdan yuqoriga), 700–900 ms.
  - Raqamlar katta va sekin sanaladi, oxirida gradient yaltiraydi.
  - Kamera: juda sekin parallaks (qatlamlar turli tezlikda).
  - Easing: `cubic-bezier(.25,.1,.25,1)` va `cubic-bezier(.16,1,.3,1)` (expo-out). Overshoot yo‘q.
- **O‘tishlar:** oq crossfade + 1,04 → 1 masshtab, «kattalashib ichiga kirish» (zoom-into-element), qora ekran pauzalari bob boshida.
- **Metaforalar:** Maosh minorasi — shisha ustunlar (glassmorphism, yorug‘ aks); Eshik — ingichka vertikal chiziq va «50%» yorlig‘i; Zinapoya — nafis 3 pog‘onali grafik; Sifat krani — aylana regulyator (dial).
- **Ovoz:** juda kam effekt (yumshoq «tik», havo shovqini), minimal pianino yoki ambient fon.
- **Xavf:** juda «sovuq» bo‘lishi mumkin. Diktor iliq bo‘lsa, muvozanat saqlanadi.

---

## 4. Izometrik Ofis

> «Butun video — bitta izometrik kompaniya binosi. Har bob — binoning boshqa xonasi, kamera xonadan xonaga suzadi.»

**Ilhom:** Monument Valley, Slack va Dropbox izometrik illyustratsiyalari, SimCity, Kurzgesagt’ning 3D sahnalari.

| Token | HEX | Izoh |
|---|---|---|
| fon | `#E9EEFF` → `#F7F4FF` | yumshoq lavanda gradienti |
| yuza (pol, devor) | `#FFFFFF`, `#DDE3F8`, `#C9D1F0` | izometrik yuzalarning 3 xil yorug‘ligi |
| matn | `#1E2140` | |
| ikkinchi matn | `#6A6F99` | |
| oklad | `#5B8DEF` | |
| bonus | `#7C6CF2` | |
| ulush | `#FFB648` | |
| tushum / ijobiy | `#3CCF91` | |
| xato | `#FF6F7D` | |
| sifat | `#3FC1E0` | |

- **Shrift:** **Nunito** 800 sarlavha, 600 matn (yumaloq, do‘stona). Matnlar izometrik «taxtachalarda» ham ko‘rinishi mumkin.
- **Shakllar:** hamma narsa 30° izometrik proyeksiyada: kublar, platformalar, stollar, kompyuterlar. Har yuzaning 3 yorug‘lik darajasi (yuqori, chap, o‘ng).
- **Personajlar:** kichik izometrik odamchalar (chibi), xonada yuradi, stolda o‘tiradi, qo‘ng‘iroq qiladi.
- **Dunyo xaritasi (har bob = xona):** Qabulxona (kirish) · Kutubxona (lug‘at) · Muhandislik xonasi (4 shart) · Ko‘rgazma zali (4 variant) · Chorraha (6 savol) · Laboratoriya (KPI) · Arxiv (raqamlar) · Arena (4 xodim misoli) · Buxgalteriya (oylik hisob) · Akademiya (yangi xodim) · Xatolar muzeyi · Rahbar kabineti (tasdiq varaqasi).
- **Harakat imzosi:**
  - Kamera xonadan xonaga **uzluksiz suzadi** (bitta katta sahna; 1,5–2 s).
  - Ustunlar va bloklar **yerdan o‘sib** chiqadi (izometrik kub balandligi animatsiyasi) va yengil sakrab to‘xtaydi.
  - Raqamlar xona devoridagi ekranlarda yonadi.
  - Easing: `cubic-bezier(.34,1.56,.64,1)` (yumshoq overshoot) bloklar uchun, kamera uchun `in-out`.
- **O‘tishlar:** kamera ko‘chishi (cut emas), devor ochilib ichkariga kirish, liftda boshqa qavatga chiqish.
- **Metaforalar:** Maosh minorasi — izometrik kublar minorasi; Eshik — haqiqiy darvoza turniketi; Zinapoya — binoning 3 qavatli zinasi (xodim chiqib boradi); Sifat krani — quvur va kran (ulush oqimi tanga bo‘lib oqadi).
- **Ovoz:** ofis muhiti (klaviatura, eshik), yumshoq marimba / lo-fi fon.
- **Xavf:** ishlab chiqarish eng qimmati. 3D vositalar (Blender, Spline) yoki SVG izometrik kutubxona kerak. Matnli jadvallarni izometriyada o‘qish qiyin, shuning uchun jadvallar oddiy 2D panel bo‘lib «HUD» qatlamida ko‘rsatiladi.

---

## 5. Atlas Naqsh

> «O‘zbek atlas va ikat naqshlari, oltin hoshiyalar, indigo fon. Hashamatli va milliy, lekin zamonaviy.»

**Ilhom:** atlas va adras matolari, Registon koshinlari, Rishton kulolchiligi, zamonaviy «heritage» brendlari (Aesop, Hermès motion).

| Token | HEX | Izoh |
|---|---|---|
| fon | `#14143A` → `#1E1B4B` | chuqur indigo |
| yuza | `#F6EEDC` (qog‘oz) yoki `rgba(255,255,255,.06)` | ikki xil kartochka: och fil suyagi yoki shaffof |
| matn | `#FFF7E6` (to‘q fonda) / `#1E1B4B` (och kartochkada) | |
| ikkinchi matn | `#C9BFA6` | |
| oklad | `#1FA3A3` | firuza (koshin) |
| bonus | `#3E7CC4` | lojuvard |
| ulush | `#D4A437` | oltin |
| tushum / ijobiy | `#5FAF6B` | |
| xato | `#C8463D` | anor qizil |
| sifat | `#B565A7` | atlas pushti-binafsha |

- **Shrift:** sarlavha — **Cormorant Garamond** 700 yoki **Playfair Display**; matn — **Manrope** 600. Raqamlar Manrope’da (o‘qilishi uchun).
- **Shakllar:** kartochkalar ingichka **oltin hoshiya** (1,5 px `#D4A437`) va burchaklarda kichik islimiy (o‘simliksimon) bezak. Bo‘lim ajratgichlari — girix naqshli chiziq.
- **Personajlar:** flat, nafis, milliy kiyim elementlari (do‘ppi, atlas ko‘ylak, nimcha) zamonaviy ofis kiyimi bilan aralash.
- **Fon detali:** juda xira (opacity 5–8%) ikat «buluti» naqshi, sekin gorizontal suzadi; bob boshlarida koshin rozetkasi.
- **Harakat imzosi:**
  - Naqshlar **markazdan ochiladi** (radial reveal, girix chiziqlari chizilib boradi).
  - Muhim raqam paydo bo‘lganda atrofida oltin chiziqli rozetka aylanib yonadi.
  - Matn yumshoq fade + 20 px ko‘tarilish, oltin «yaltirash» (shimmer) sarlavhalarda.
  - Easing: `cubic-bezier(.22,1,.36,1)`, harakatlar o‘rtacha tezlikda, hashamatli.
- **O‘tishlar:** atlas mato pardasi bilan wipe (to‘lqinli chegara), girix naqsh orqali «kaleydoskop» o‘tish, ravoq (arka) shaklidagi niqob orqali kirish.
- **Metaforalar:** Maosh minorasi — minora (minor) shaklidagi koshinli ustun; Eshik — ravoqli darvoza; Zinapoya — madrasa zinasi; Sifat krani — mis ko‘za va jo‘mrak.
- **Ovoz:** yengil dutor yoki rubob motivi, qo‘ng‘iroqcha, mato shitirlashi.
- **Xavf:** naqshlar ko‘payib ketsa, ma’lumot ko‘rinmay qoladi. Naqsh faqat fon va hoshiyada, ma’lumot doim toza kartochkada.

---

## 6. Neon Jamoa (AI xodimlar, 9:16 reel)
*Manba: foydalanuvchi yuborgan namuna reel (720×1280, 25 fps, 25 s, ovozli). Kadrlar: `uslub_namunalar/neon_jamoa_*.jpg`. To‘liq tahlil: `uslub_namunalar/NEON_JAMOA.md`.*

- **G‘oya:** fotorealistik «AI xodim» qahramonlar neon ramkali kartalarda — jamoa, tashkiliy sxema, vazifa holati, tasdiqlash, CTA.
- **Fon:** deyarli qora to‘q ko‘k `#070B1F`, ingichka katak to‘r (cyan, ~6%), markazda ko‘k radial nur.
- **Rang:** asosiy cyan `#2ED3EA`; har rolning o‘z neon rangi — direktor cyan, targetolog yashil-teal `#22C08A`, kontentchi to‘q sariq `#F5A524`, sotuvchi binafsha `#9B7BFF`.
- **Shrift:** qalin, yumaloq geometrik sans (Gilroy/Montserrat ExtraBold). Sarlavha ikki qator: 1-qator oq, 2-qator cyan.
- **Qahramonlar:** belidan yuqori, studiyaviy portret, to‘q ko‘k fon, rol rangida kontur nur. Har biri o‘z ishiga oid gologramma UI ushlaydi.
- **Imzo harakatlar:** kartaning 3D aylanib kirishi, «AI» glitch, chiziq bo‘ylab yuguruvchi nuqta, holat chiplari, tegib tasdiqlash.

## 7. Lavanda Glass (yorug‘ AI/SaaS motion)
*Manba: foydalanuvchining 2-namuna reeli (monitordagi motion-video). To‘liq tahlil: `uslub_namunalar/KONTENT_ZAVOD_REEL.md`, kadrlar: `uslub_namunalar/lavanda_glass_ekran.jpg`.*

- **Fon:** och lavanda→havorang→oq gradient, yumshoq bloblar.
- **Kartalar:** oq, katta radius (24–28px), juda yumshoq soya — yengil glassmorphism.
- **Matn:** to‘q siyoh-ko‘k. Kalit so‘zlar binafsha→ko‘k gradientda; ogohlantirish to‘q sariq, o‘sish yashil.
- **Imzo elementlar:** holat badgili dumaloq avatar, izometrik 3D «AI zavod» illyustratsiyasi, platforma ikonkalari orbitasi, o‘sish sanagichi (+1 → +2 486) va chizig‘i, gradient tugmali CTA kartasi.
- **Kayfiyat:** ishonchli, zamonaviy mahsulot. Kunduzgi, «Apple/SaaS» hissi.

## 8. Claude effektlari (overlay kutubxonasi)
*Manba: foydalanuvchining 3-namuna reeli. To‘liq tahlil: `uslub_namunalar/CLAUDE_EFFECTS_REEL.md`.*

Bu to‘liq uslub emas — spiker klipi ustiga qo‘yiladigan **8 ta overlay effekt** to‘plami:
- piksel maskot;
- checklist;
- frosted-glass statistika vidjetlari;
- qidiruv qatori;
- iOS bildirishnomalar;
- piksel sarlavha;
- montaj timeline;
- izoh-javob paneli.

Rang: Claude coral `#D97757` + ko‘mir-qora UI. Imzo o‘tish: piksel-mozaika dissolve.

## Uslubni tanlash bo‘yicha qisqa maslahat

| Vazifa | Tavsiya |
|---|---|
| Rahbarlar va HR uchun jiddiy o‘quv videosi | Tungi Fintech yoki Keynote Oq |
| Yangi sotuvchilarni ilhomlantirish | Pop Stiker |
| Murakkab mavzuni xotirjam tushuntirish | Qog‘oz va Siyoh |
| Jarayon va bosqichlarni ko‘rsatish (onboarding) | Izometrik Ofis |
| Kompaniya brendi, milliy ruh, taqdimot | Atlas Naqsh |
| Reel, reklama, «AI jamoa» / rollar va jarayon | Neon Jamoa |
| AI mahsulot/xizmat demosi, yorug‘ va ishonchli taqdimot | Lavanda Glass |
| Spiker reeliga jonli overlay, AI vosita namoyishi | Claude effektlari |

Har bir uslubning namunaviy kadri `uslub_namunalar/` papkasida (bir xil sahna — «2-variant: Azizning KPI balli» — 6 xil uslubda).
