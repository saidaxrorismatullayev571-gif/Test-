# Uzoq muddatli reja: HR yo‘nalishidagi Instagram profilni ko‘tarish

**Holat:** g‘oya bosqichida, hali boshlanmagan (foydalanuvchi qarori: «hozir bo‘lmasa ham, kelajakda ko‘taramiz»).
**Yozilgan sana:** 2026-10-29.
**Eslatish qoidasi:** foydalanuvchi bilan yangi video, reel, kontent, Instagram, HR yoki darslik haqida gap ochilganda — shu rejani qisqa eslating («HR profil rejasi turibdi, boshlaymizmi?»). Ish tugagan paytlarda ham bir marta eslatish mumkin. Majburlamang.

## Maqsad
Instagram’da HR yo‘nalishida yangi profil. **Har kuni bittadan reel.** Kontent manbai — foydalanuvchining NotebookLM’dagi darsliklari va materiallari.

## Manbalar (foydalanuvchida bor)
- **NotebookLM:** barcha darsliklar va ma’lumotlar joylangan. Claude NotebookLM’ga to‘g‘ridan-to‘g‘ri kira olmaydi. Foydalanuvchi kerakli darslik matnini, NotebookLM xulosasini yoki manba faylini chatga yuboradi.
- Ma’lum darslik mavzulari:
  - Maosh tizimini tanlash va hisoblash (sotuv menejeri, 4 variant, KPI, eshik qoidasi, 9 xato);
  - Ichki nizomlarni yuritish tartibi;
  - HR bo‘limi ma’lumotlarini tartibli saqlash;
  - Ish jarayonidagi stressni kamaytirish usullari;
  - Maqsad qo‘yish;
  - Imtihondan o‘tgan xodimning xodim papkasini shakllantirish;
  - SWOT tahlil.
- **Spiker/diktor:** A. Rejabboyev (rozilik bor). Klon ovoz — `video-darslik-v3/klon/` (RVC), dumaloq yuz videosi rejasi.
- **Uslublar kutubxonasi:** `.claude/skills/uslub-kutubxonasi/SKILL.md` (36+ namuna).

## Kontent ustunlari (har hafta aylanadi)
1. **Maosh va motivatsiya** — oklad, bonus, KPI, adolatli tizim, raqamli misollar.
2. **HR hujjatlari va tartib** — ichki nizomlar, xodim papkasi, ma’lumot saqlash, shartnoma.
3. **Ishga olish va adaptatsiya** — yangi xodim bosqichlari, imtihon, 90 kun.
4. **Rahbar uchun xatolar** — «9 ta xato», «buni qilmang».
5. **Xodim farovonligi** — stress, maqsad qo‘yish, SWOT.
6. **Savol-javob / mif va haqiqat** — izohlardagi savollarga reel bilan javob.

## Reel formatlari (kutubxonadan)
- **Bo‘lingan ekran:** tepada animatsiya, pastda spiker yoki klon diktor (14, 24, 34-namunalar). **Asosiy format.**
- **Ro‘yxat/reyting:** «5 ta xato», «Top 7 KPI» — progress chizig‘i bilan (33-namuna).
- **Before/After:** «noto‘g‘ri tizim → to‘g‘ri tizim» (11, 13-namunalar).
- **Neon Jamoa qahramonlari:** «AI direktor, HR, sotuvchi» (6-namuna) — rollar haqidagi mavzular.
- **Glass-explainer:** qadam + solishtirish («3,65 mln VS 5,0 mln») (20-namuna).
- **Kalit so‘zli CTA:** «Izohga “MAOSH” yozing — jadval/shablonni yuboraman» (bepul lead-magnit).
- **Subtitr:** ikki darajali (7-namuna). **Dumbify:** jargon sodda tilda, oxirida «Muammo · Yechim · Natija» (34-namuna).

## Ishlab chiqarish quvuri (bitta reel uchun)
1. **Mavzu:** NotebookLM’dagi darslik bo‘limi. Foydalanuvchi matnni yuboradi.
2. **Ssenariy:** 30–45 soniya. Hook (birinchi 2 soniya) → muammo → yechim yoki raqamli misol → CTA. Raqamlar so‘z bilan yoziladi.
3. **Ovoz:** Gemini TTS → (ixtiyoriy) RVC bilan Rejabboyev ovozi.
4. **Video:** bizning HTML dvigatel, 9:16 (1080×1920). Kutubxonadagi mos format. `align.py` bilan ovozga moslash.
5. **Tekshiruv:** kadrlar varag‘i + davomiylik → foydalanuvchiga yuboriladi.
6. **Joylash:** foydalanuvchi joylaydi; caption va heshteglarni Claude yozadi.

**Samaradorlik:** haftalik partiya — bir o‘tirishda 7 ta ssenariy, 7 ta ovoz, 7 ta render.

## Boshlash uchun birinchi qadamlar (eslatilganda taklif qilinadi)
1. **Profil pozitsiyasi:** nomi, bio, kim uchun (biznes egalari / HR mutaxassislari / rahbarlar), avatar.
2. **Birinchi 30 kunlik kontent rejasi:** 30 ta mavzu, ustunlar bo‘yicha taqsimlangan. NotebookLM materiallaridan olinadi.
3. **Reel shabloni:** 9:16 dvigatel versiyasi (atlas dvigateli asosida). 2–3 ta qayta ishlatiladigan sahna turi: hook kartasi, raqamli misol, ro‘yxat, CTA.
4. **Lead-magnitlar:** maosh hisoblash jadvali, tasdiq varaqasi, xodim papkasi cheklisti — izohdagi kalit so‘zga yuboriladi.
5. **O‘lchov:** har hafta ko‘rishlar, saqlashlar, izohlar, obunachilar — eng yaxshi 3 formatni ko‘paytirish.

## Ochiq savollar (boshlaganda so‘raladi)
- Profil nomi va kim nomidan: Rejabboyev yoki kompaniya?
- Yuz: haqiqiy spiker videosi, klon (dumaloq oyna), yoki faqat animatsiya + ovoz?
- Kunlik reelni kim joylaydi va qaysi vaqtda?
