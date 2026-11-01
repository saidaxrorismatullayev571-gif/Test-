# NotebookLM: holatni aniqlash uchun promptlar (HR blog)

> **Maqsad:** NotebookLM’ga yuklangan HR audiolarining holatini to‘liq bilib olish: nechta manba borligi, formati, tartibi, qaysi mavzular yoritilgani va ulardan qancha kontent chiqishi. Javoblarni menga olib kelasiz, shu asosda **to‘liq blog rejasini** tuzamiz (`rejalar/INSTAGRAM_HR_PROFIL.md`).

## Boshlashdan oldin (2 daqiqa)

1. **Chap paneldagi «Sources» ro‘yxatining skrinshotini oling.** Barcha manba nomlari ko‘rinsin, kerak bo‘lsa pastga aylantirib 2–3 ta skrinshot qiling. Shundan nechta fayl yuklanganini va nomlanishini darhol ko‘raman.
2. **Barcha manbalar belgilangan (✓) bo‘lsin.** Aks holda NotebookLM faqat belgilanganlariga javob beradi.
3. **Chat sozlamasi:** chat oynasidagi ⚙️ (Configure chat / Suhbatni sozlash) ni oching. Uslubni **«Custom»** qiling va yozing: `Har doim o‘zbek tilida (lotin) javob ber. Batafsil va jadval ko‘rinishida yoz. O‘ylab topma — faqat manbalardagi ma’lumotdan foydalan.` Javob uzunligini **«Longer»** qiling.
4. **Javob kesilib qolsa,** `Davom et, to‘xtagan joyingdan` deb yozing.
5. **Har javobni** Google Docs’ga yoki bitta matn fayliga ketma-ket nusxalang. Oxirida o‘sha faylni menga yuborasiz.

Promptlarni **tartib bilan, bittadan** yuboring.

---

## 1-PROMPT. Manbalar ro‘yxati (inventarizatsiya)

```
Ushbu bloknotdagi BARCHA manbalarni birma-bir sanab chiq, birortasini ham tashlab ketma. Jadval ko‘rinishida ber:

| № | Manba nomi (aynan qanday ko‘rinsa) | Turi (audio / PDF / matn / video / boshqa) | Taxminiy hajmi (daqiqa yoki so‘z soni, agar bilsang) | Til | Asosiy mavzusi (1 gap) | Ichida qanday qismlar bor (3–6 ta kalit nuqta) |

Jadvaldan keyin yoz:
1) Jami nechta manba.
2) Qaysi manbalar bir-biriga juda o‘xshash yoki takroriy (dublikat) ko‘rinadi.
3) Qaysi manbalarning matni (transkripsiyasi) sifatsiz, tushunarsiz yoki uzilgan ko‘rinadi.
4) Qaysi manbalar HR mavzusiga umuman aloqasiz.
```

## 2-PROMPT. Tartib va ketma-ketlik

```
Manbalar qaysi tartibda tinglanishi yoki o‘qilishi kerak? Quyidagilarni aniqla:

1) Manba nomlarida yoki ichida raqamlash bormi (1-dars, 2-qism, modul va h.k.)? Bo‘lsa, shu raqamlar bo‘yicha tartibni yoz.
2) Raqamlash bo‘lmasa, mazmuniga qarab mantiqiy o‘quv tartibini tuz (oddiydan murakkabga). Har biri uchun nega shu joyda turishini 1 gapda izohla.
3) Manbalar kurs yoki seriya sifatida bir-biriga ulanadimi? Bir dars boshqasiga havola qiladimi ("o‘tgan darsda aytganimdek...")? Misollar keltir.
4) Tushib qolgan qismlar bormi? Masalan: "3-dars" bor, "2-dars" yo‘q; yoki darsda "keyingi darsda ko‘ramiz" deyilgan, lekin u dars yo‘q.

Natijani jadval qilib ber: | Tartib № | Manba nomi | Modul/bo‘lim | Oldingi dars bilan bog‘liqligi |
```

## 3-PROMPT. Mavzular xaritasi (HR bo‘limlari bo‘yicha)

```
Barcha manbalarni HR yo‘nalishlari bo‘yicha guruhla. Har bir guruh uchun: qaysi manbalar kiradi, qamrov chuqurligi (yuzaki / o‘rtacha / chuqur), eng muhim 5 ta g‘oya.

Guruhlar (manbalarda bo‘lmaganini "yo‘q" deb belgila, qo‘shimcha guruh topsang qo‘sh):
- Ishga olish (rekruting, intervyu, vakansiya)
- Adaptatsiya va onboarding
- Maosh, bonus, KPI, motivatsiya
- Baholash va attestatsiya
- O‘qitish va rivojlantirish
- HR hujjatlari, ichki nizomlar, xodim papkasi
- Mehnat qonunchiligi (O‘zbekiston Mehnat kodeksi)
- Korporativ madaniyat va jamoa
- Nizolar, intizom, ishdan bo‘shatish
- Rahbarlik va boshqaruv
- Xodim farovonligi (stress, maqsad qo‘yish, vaqt boshqaruvi)
- Strategik vositalar (SWOT va boshqalar)

Oxirida: qaysi guruh eng boy (eng ko‘p kontent chiqadi), qaysilari bo‘sh yoki zaif.
```

## 4-PROMPT. Har bir manbaning batafsil konspekti

Manbalar ko‘p bo‘lsa, **5 tadan** so‘rang (1–5, keyin 6–10 …).

```
1-PROMPTdagi jadvaldagi [1–5] raqamli manbalar uchun alohida-alohida batafsil konspekt yoz. Har manba uchun:

- Nomi
- Asosiy g‘oya (2 gap)
- Tuzilmasi: bo‘limlar ketma-ketligi (sarlavhalar bilan)
- Barcha raqamlar, foizlar, formulalar, misollar (aynan manbadagidek)
- Amaliy maslahatlar / qoidalar ro‘yxati
- Keltirilgan hayotiy misollar, keyslar, hikoyalar
- Spikerning yodda qoladigan iboralari (aynan iqtibos, 3–5 ta)
- Tinglovchi uchun topshiriq yoki shablon bormi (jadval, cheklist, hujjat namunasi)

O‘ylab topma; manbada yo‘q narsani yozma.
```

## 5-PROMPT. Blog uchun kontent konlari

```
Bu manbalar asosida Instagram HR-blog uchun xom kontent ro‘yxatini tuz. Har punktda manba nomini ko‘rsat.

A) 40 ta reel mavzusi — har biri: sarlavha (≤ 8 so‘z), 1 gaplik ilgak (hook), qaysi manbadan, format (ro‘yxat / xato / mif-haqiqat / raqamli misol / keys / oldin-keyin / savol-javob).
B) 15 ta "mif va haqiqat" juftligi.
C) 15 ta "rahbarlar qiladigan xato" va to‘g‘risi.
D) Manbalardagi barcha raqamli misollar (maosh hisoblari, foizlar, muddatlar) — reelda vizual ko‘rsatsa bo‘ladiganlari.
E) Bepul yuklab olinadigan material (lead-magnit) bo‘la oladigan narsalar: shablon, cheklist, jadval, hujjat namunasi — 10 ta.
F) Ko‘p qismli seriya bo‘la oladigan 5 ta katta mavzu (masalan, "Maosh tizimi: 7 kunlik seriya").
```

## 6-PROMPT. Spiker, uslub va auditoriya

```
Manbalardagi spiker(lar) haqida:
1) Nechta turli spiker bor? Ismlari tilga olinganmi?
2) Gapirish uslubi: rasmiy yoki samimiy, tez yoki sekin, ko‘p ishlatadigan iboralari, hazil bormi.
3) Bu darslar kimga mo‘ljallangan ko‘rinadi: biznes egalari, HR mutaxassislari, boshlovchi HRlar, rahbarlar, xodimlar?
4) Qaysi atamalar ko‘p ishlatiladi (rus yoki ingliz atamalar ham)? Ularning sodda o‘zbekcha muqobili bilan ro‘yxat ber (20 ta).
5) Darslarda qaysi soha misollari ko‘p (savdo, ishlab chiqarish, klinika, IT…)?
```

## 7-PROMPT. Bo‘shliqlar va xavflar

```
1) HR-blog uchun muhim, lekin bu manbalarda YO‘Q yoki juda kam yoritilgan 10 ta mavzu.
2) Manbalarda eskirgan bo‘lishi mumkin bo‘lgan ma’lumotlar (qonun moddalari, stavkalar, sanalar) — ro‘yxat, tekshirish kerak deb belgila.
3) Ijtimoiy tarmoqda bahsli yoki noto‘g‘ri tushunilishi mumkin bo‘lgan fikrlar.
4) Manbalar orasida bir-biriga zid fikrlar bormi?
```

---

## Menga nima olib kelasiz

| № | Nima |
|---|---|
| 1 | «Sources» panelining skrinshotlari |
| 2 | 1–7-promptlar javoblari (bitta hujjatda, tartib bilan) |
| 3 | (ixtiyoriy) NotebookLM’ning **Audio Overview** yoki **Mind Map** (Aqliy xarita) skrinshoti. Mind Map mavzular tuzilishini darhol ko‘rsatadi |

Shundan keyin men tuzib beraman:
1. Manbalarning yakuniy **tartiblangan katalogi**.
2. **Profil pozitsiyasi:** kim uchun, nom va bio variantlari.
3. **Kontent ustunlari** va haftalik aylanish.
4. **Birinchi 30 kunlik reja:** har kun uchun mavzu, ilgak, format va manba.
5. **Lead-magnitlar** va seriyalar rejasi.
6. **Ishlab chiqarish quvuri:** haftalik partiya tartibi.
