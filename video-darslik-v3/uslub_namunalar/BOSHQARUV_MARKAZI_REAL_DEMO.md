# Boshqaruv markazi — real dashboard demonstratsiyasi

## Pasport

| Ko'rsatkich | Qiymat |
|---|---|
| Format | 9:16, real ekran suratga olingan reel |
| Davomiylik | 60,1 soniya |
| Kadr tezligi | 30 fps |
| Tasvir | 720 × 1280 |
| Asosiy obyekt | "Boshqaruv markazi" nomli monitoring dashboardi |
| CTA | Doimiy pastki pill: "MASTERKLASSDA QATNASHISH" |

Kadrlar: `uslub_namunalar/boshqaruv_markazi/`.

## Mazmun va va'da

Video bir biznes uchun alohida-alohida jadval va oynalar o'rniga bitta boshqaruv markazini ko'rsatadi. Ko'rinadigan modullar tushum, kunlik to'lovlar, lidlar, xarajat, kontent rejasi, mahsulotlar, voronka, jamoa/to'lovlar, agentlar, tasdiqlar, marketing va vebinarlar atrofida qurilgan.

Asosiy fikr: rahbar bir ekranda umumiy natijani ham, loyiha yoki bo'lim kesimidagi holatni ham ko'radi; keyin kerakli modul ichiga kiradi. Video mahsulotni funksiyalar ro'yxati sifatida emas, nazorat hissi sifatida sotadi.

## Vaqt bo'yicha oqim

| Vaqt | Nima ko'rinadi | UX vazifasi |
|---|---|---|
| 0–8 s | Umumiy dashboard, qo'l bilan ekran ko'rsatiladi | Bir qarashda "hammasi bitta joyda" fikrini berish |
| 8–20 s | KPI kartalar, trend grafigi, loyiha kartalari | Boshqaruv uchun muhim ko'rsatkichlarni tez skan qilish |
| 20–34 s | Voronka, top mahsulotlar, kontent, to'lovlar, agentlar va tasdiqlar | Operatsion ishlarning bitta oqimga bog'langanini isbotlash |
| 34–47 s | Boshqa modulga o'tish, marketing ko'rsatkichlari | Dashboard faqat umumiy jadval emasligini ko'rsatish |
| 47–60 s | Marketing va vebinar ekranlari | Bo'limlar kesimiga chuqur kirish imkonini berish |

## UI arxitekturasi

### 1. Axborot iyerarxiyasi

- Yuqori qatlam: bugungi va oylik tushum, to'lov, lid, xarajat, kontent holati.
- Chap ustun: loyiha yoki mahsulot kartalari; har birida rang, kichik trend va tezkor metrikalar bor.
- Markaz: o'ttiz kunlik tushum chizig'i — eng katta vizual fokus.
- Pastki qatlam: voronka, top mahsulotlar, kontent jadvali, agentlar va tasdiqlar.
- O'ng ustun: joriy to'lovlar, agent vazifalari, xabar/qarorlar oqimi.

Bu tartib rahbarning tabiiy savollariga mos: "qancha pul?", "qayerdan keldi?", "qaysi joyda to'siq bor?", "kim nima qilmoqda?".

### 2. Rang va holat tizimi

- Fon: deyarli qora navy, taxminan `#0B1020`–`#121B36`.
- Kartalar: ko'kimtir slate, ingichka sovuq chegara va yengil ichki nur.
- Neytral matn: oq va kulrang-ko'k.
- Ijobiy yoki faol holat: yashil/teal.
- Ogohlantirish va past natija: qizil.
- Alohida loyiha ranglari: qizil, ko'k va yashil; ular loyiha kartasi, mini-grafik va holat chipida qaytariladi.
- Asosiy graf: qizil maydon, yashil kontur/nuqta va nozik sariq aksent. Ranglar ma'lumotni farqlaydi, bezak uchun ishlatilmagan.

### 3. Tipografiya va komponentlar

- Geometrik sans-serif, katta raqamlar, qisqa sarlavha va kichik yordamchi matn kombinatsiyasi.
- KPI kartalari: sarlavha, yirik qiymat, kichik izoh yoki oldingi davrga nisbatan o'zgarish.
- Holat chiplari: "jonli", "reja", "faol" kabi qisqa belgi; rang + matn bilan berilgan.
- Chiziqli grafik, progress bar, jadval qatori va activity feed bir xil radius hamda spacing tizimidan foydalangan.
- CTA oq pillda, zanjir belgisi bilan. Qorong'i videoda doim ko'rinadi.

## UX kuchli tomonlari

1. **Bitta ekran — turli daraja.** Umumiy KPI va pastdagi amaliy ro'yxatlar birga, lekin qatlamlarga ajratilgan.
2. **Skan qilish tez.** Katta sonlar yuqorida, tafsilotlar pastda; foydalanuvchi avval vaziyatni, keyin sababni ko'radi.
3. **Holatning rangli kodi.** Yashil, qizil va loyiha ranglari tez qaror qabul qilishga xizmat qiladi.
4. **Modulga kirish mantiqi.** Umumiy dashboarddan marketing va vebinar kabi bo'lim ekranlariga o'tish mahsulot kengligini isbotlaydi.
5. **Real muhit isboti.** Qo'l, monitor, ish stoli va interfeysning birga ko'rinishi montajlangan maket emas, ishlayotgan mahsulot hissini beradi.

## UX yaxshilash imkonlari

- Qo'lda suratga olishda aks, fokus siljishi va ekrandagi mayda matn ayrim payt o'qilmaydi. Ekran yozuvi yoki ekran ichiga kesib olingan toza UI kadrlar ishonchni oshiradi.
- Bir daqiqada juda ko'p modul ko'rsatilgan. Har bo'limga bitta muammo-va-natija yorlig'i qo'shilsa, foyda tezroq anglashiladi.
- CTA butun video davomida bir xil qoladi. So'nggi 5–7 soniyada aniq natija va harakat qo'shilsa, konversiya uchun kuchliroq bo'ladi.
- Katta dashboardning ayrim bloklari mobil ekranda mayda. Reel uchun 1–2 soniyalik crop/zoom bilan bitta metrikaga fokus berish kerak.

## Montaj va harakat tili

- Asosiy usul: real monitor kadrida sekin qo'l ishorasi bilan diqqatni kerakli blokka olib borish.
- Kamera harakati: yengil oldinga yaqinlashish va chap/o'ng pan; hard-cut deyarli yo'q.
- Subtitr: past markazda, bitta yoki bir necha so'zli oq qalin so'zlar, qora kontur/soya bilan.
- CTA: safe zone ichidagi oq pill, ekranning pastki qismida doimiy.
- Ritm: tez montaj emas; mahsulotni sinchiklab ko'rsatadigan demo ritmi.

## Qayta ishlatish retsepti

Bu namuna quyidagi kontentga mos:

- CRM, ERP, dashboard, analitika va avtomatlashtirish xizmatining demo reeli.
- iMed yoki boshqa jamoa uchun "rahbar bir ekranda nimani ko'radi?" mavzusi.
- Vebinar oldidan mahsulot imkoniyatlarini isbotlaydigan reel.

Bizning variantda real ekranni saqlab, ustiga **Kontent zavodi reel**ning ikki darajali subtitrini va **Claude effektlari**ning yengil graph/checklist overlaylarini qo'shish kerak. Har 3–4 soniyada bitta modul: muammo → ko'rsatkich → yechim → natija. Dark dashboard uslubi esa **Tungi Fintech** bilan bevosita mos.

## Saqlangan kadrlardan foydalanish

| Fayl | Mazmun |
|---|---|
| `01_bosh_ekran.jpg` | umumiy dashboard va KPI iyerarxiyasi |
| `02_hisobot_va_voronka.jpg` | tushum grafigi, voronka va mahsulotlar |
| `03_agentlar_va_tasdiq.jpg` | to'lovlar, agentlar va tasdiq oqimi |
| `04_modul_ekrani.jpg` | bo'limga kirish namoyishi |
| `05_webinar_moduli.jpg` | marketing/vebinar bo'limi |
| `kontakt_varaq.jpg` | butun videoning vaqt bo'yicha kontakt varag'i |
