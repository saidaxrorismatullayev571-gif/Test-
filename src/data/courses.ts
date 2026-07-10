import { Course, Expert, Testimonial, FAQItem } from '../types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: "Klinik Kardiologiya",
    category: 'Klinik',
    duration: "12 hafta",
    level: "O'rtacha",
    outcome: "EKB tahlili va eng ko'p uchraydigan kardiologik kasalliklarni davolash bayonnomalari bo'yicha to'liq amaliy ko'nikmalar.",
    rating: 4.9,
    studentsCount: 1450,
    price: "1 200 000 so'm",
    highlights: ["Morfologik EKB tahlili", "O'tkir koronar sindrom algoritmi", "Yevropa Kardiologlar Jamiyati (ESC) protokollari"],
    skills: ["EKB interpretatsiyasi", "Gipotezalar tahlili", "Yevropa Kardiologlar Jamiyati (ESC) protokollari"],
    syllabus: [
      { title: "1-Modul: EKB Asoslari", desc: "Tishchalar, segmentlar va normal EKB morfologiyasi." },
      { title: "2-Modul: Ritmlar va Blokadalar", desc: "Aritmiyalar va o'tkazuvchanlik buzilishlarini differensial tashxislash." },
      { title: "3-Modul: Akut Koronar Sindrom", desc: "Miokard infarktini birinchi soniyalardanoq aniqlash va zudlik bilan davolash." }
    ]
  },
  {
    id: '2',
    title: "Fundamental Anatomiya va Fiziologiya",
    category: 'Fundamental',
    duration: "16 hafta",
    level: "Boshlang'ich",
    outcome: "Inson tanasining 3D tuzilishi va organlar ishlash mexanizmlarini klinik holatlar bilan uyg'unlashtirilgan chuqur tahlili.",
    rating: 4.8,
    studentsCount: 2100,
    price: "990 000 so'm",
    highlights: ["3D Vizualizatsiyalar", "Gomeostaz tahlili", "Sistemalar fiziologiyasi"],
    skills: ["Klinik anatomiya", "A'zolar fiziologiyasi", "Patofiziologik tahlil"],
    syllabus: [
      { title: "1-Modul: Tayanch-Harakat Tizimi", desc: "Suyak, bo'g'im va mushaklarning klinik anatomiyasi." },
      { title: "2-Modul: Yurak-Qon Tomir Fiziologiyasi", desc: "Gemodinamika qonuniyatlari va bosim boshqaruvi." },
      { title: "3-Modul: Neyrofiziologiya", desc: "Markaziy va periferik asab tizimi ishlash mexanizmi." }
    ]
  },
  {
    id: '3',
    title: "Klinik Farmakologiya va Ratsional Terapiya",
    category: 'Klinik',
    duration: "10 hafta",
    level: "Mukammal",
    outcome: "Dori vositalarining o'zaro ta'siri, farmakokinetikasi va bemorlar uchun shaxsiy, dalillarga asoslangan terapiya sxemasini tuzish.",
    rating: 5.0,
    studentsCount: 920,
    price: "1 500 000 so'm",
    highlights: ["EBM dori tahlili", "Bo'lib to'lash tizimi", "Nojo'ya ta'sirlar nazorati"],
    skills: ["EBM dori tahlili", "Ratsional antibiotikoterapiya", "Nojo'ya ta'sirlarni boshqarish"],
    syllabus: [
      { title: "1-Modul: Farmakokinetika va Farmakodinamika", desc: "Dori vositalarining so'rilishi, tarqalishi va chiqarilishi." },
      { title: "2-Modul: Ratsional Antibiotikoterapiya", desc: "Chidamlilik paydo bo'lmasligi uchun to'g'ri dori tanlash algoritmlari." },
      { title: "3-Modul: Klinik Polipragmaziya", desc: "Bir nechta dori vositalarining xavfli o'zaro ta'sirlarini boshqarish." }
    ]
  },
  {
    id: '4',
    title: "Neyrologiya va Neyro-Vizualizatsiya",
    category: 'Klinik',
    duration: "8 hafta",
    level: "Mukammal",
    outcome: "Bosh miya va orqa miya patologiyalarini aniqlash, MRT va KT tahlili, insult hamda neyrodegenerativ kasalliklarni davolash.",
    rating: 4.9,
    studentsCount: 780,
    price: "1 350 000 so'm",
    highlights: ["MRT va KT o'qish", "Neyrologik status tekshiruvi", "Insult protokolli terapiya"],
    skills: ["MRT/KT diagnostika", "Reflekslar tahlili", "Klinik neyrologiya"],
    syllabus: [
      { title: "1-Modul: Neyro-anatomiya va Topika", desc: "Zararlanish o'chog'ini simptomlar orqali aniqlash." },
      { title: "2-Modul: MRT va KT Interpretatsiyasi", desc: "Bosh miya tasvirlarida o'smalar, insult va qon quyilishini farqlash." },
      { title: "3-Modul: Shoshilinch Neyrologiya", desc: "Status epilepticus va o'tkir insultda zudlik bilan ko'riladigan choralar." }
    ]
  },
  {
    id: '5',
    title: "Klinik UTT (Ultratovush Diagnostikasi)",
    category: 'Klinik',
    duration: "10 hafta",
    level: "O'rtacha",
    outcome: "Qorin bo'shlig'i a'zolari va qalqonsimon bez ultratovush tekshiruvini real bemorlar ustida mustaqil o'tkazish ko'nikmasi.",
    rating: 4.7,
    studentsCount: 1100,
    price: "1 600 000 so'm",
    highlights: ["Skanerlash amaliyoti", "Artefaktlar tahlili", "Differensial belgilar"],
    skills: ["UTT skanerlash", "Tasvir tahlili", "Differensial diagnostika"],
    syllabus: [
      { title: "1-Modul: Fizika va Skanerlash Texnikasi", desc: "Datchiklarni to'g'ri ushlash, sozlash va akustik oyna hosil qilish." },
      { title: "2-Modul: Jigar va Safro Tizimi", desc: "Gepatomogaliya, xolesistit va toshlarni aniqlash." },
      { title: "3-Modul: Buyrak va Qovuq", desc: "Siydik yo'li toshlari va kistoz o'zgarishlar diagnostikasi." }
    ]
  },
  {
    id: '6',
    title: "Fundamental Biokimyo",
    category: 'Fundamental',
    duration: "12 hafta",
    level: "Boshlang'ich",
    outcome: "Hujayra darajasidagi barcha metabolik jarayonlar, fermentlar va gormonlar ishlash zanjirini zamonaviy tibbiyot nuqtai nazaridan o'rganish.",
    rating: 4.8,
    studentsCount: 1250,
    price: "850 000 so'm",
    highlights: ["Metabolik xaritalar", "Fermentopatiyalar", "Laborator normativlar"],
    skills: ["Klinik biokimyo", "Metabolizm buzilishlari", "Laborator tahlillar tahlili"],
    syllabus: [
      { title: "1-Modul: Uglevod va Lipidlar Metabolizmi", desc: "Glikoliz, Krebss sikli va insulin qarshiligi." },
      { title: "2-Modul: Aminokislotalar va Oqsillar", desc: "Mochevina sikli va jigar yetishmovchiligida biokimyoviy tahlil." },
      { title: "3-Modul: Klinik Laboratoriya", desc: "Fermentlar faolligi va gormonlar muvozanati tahlillari." }
    ]
  }
];

export const EXPERTS: Expert[] = [
  {
    id: '1',
    name: "Dr. Saidaxror Ismatullayev",
    role: "Platforma Asoschisi, Shifokor Kardiolog",
    specialization: "Dalillarga asoslangan kardiologiya, funktsional diagnostika",
    experience: "8 yillik klinik tajriba",
    university: "Toshkent Tibbiyot Akademiyasi bitiruvchisi, Germaniya va Turkiya malaka oshirish dasturlari ishtirokchisi",
    description: "Saidaxror Ismatullayev - O'zbekistonda EBM (Evidence-Based Medicine) tizimini ommalashtirayotgan yetakchi shifokor kardiologlardan biri.",
    topicsTaught: ["Elektrokardiografiya", "ESC Kardio-protokollari", "Arterial gipertenziya"],
    quote: "Tibbiyot - bu shunchaki yodlash emas, u dalillarga asoslangan mantiqiy zanjirdir. Biz talabalarda ana shu klinik mantiqni shakllantiramiz.",
    imageSeed: "dr_saidaxror"
  },
  {
    id: '2',
    name: "Dr. Malika Karimova",
    role: "Etakchi Neyrolog, Tibbiyot Fanlari Nomzodi (PhD)",
    specialization: "Neyrodegenerativ patologiyalar va neyroradiologiya",
    experience: "12 yillik ilmiy va amaliy tajriba",
    university: "Moskva Davlat Tibbiyot Universiteti doktoranti, xalqaro ma'ruzachi",
    description: "Malika Karimova MRT va KT tahlillari bo'yicha yosh shifokorlarga klinik vizualizatsiya sirlarini mukammal o'rgatib kelmoqda.",
    topicsTaught: ["Neyrovizualizatsiya", "Insult boshqaruvi", "Neyrologik simptomatika"],
    quote: "Bemorning kasallik tarixini to'g'ri o'qish va MRT tasvirlarini tahlil qilish - shifokorning eng kuchli qurolidir.",
    imageSeed: "dr_malika"
  },
  {
    id: '3',
    name: "Dr. Sardor Rahimov",
    role: "Shoshilinch Tibbiy Yordam Shifokori",
    specialization: "Reanimatsiya, intensiv terapiya va polijarohatlar",
    experience: "10 yillik tez yordam tajribasi",
    university: "AQSh va Turkiyaning yetakchi shoshilinch yordam markazlari amaliyotchisi",
    description: "Sardor Rahimov shoshilinch va o'ta og'ir bemorlar bilan ishlash bo'yicha xalqaro tajribaga ega intensiv terapiya shifokoridir.",
    topicsTaught: ["Shoshilinch yordam", "O'pka-yurak reanimatsiyasi", "Klinik toksikologiya"],
    quote: "Shoshilinch holatlarda sekundlar hal qiluvchi rol o'ynaydi. EBM ko'rsatmalari stress holatida to'g'ri qaror qabul qilish kalitidir.",
    imageSeed: "dr_sardor"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Jasur Olimov",
    role: "Tibbiyot Akademiyasi 5-kurs talabasi",
    text: "iMed Team kurslarigacha kardiologiya men uchun faqat dori yodlashdan iborat edi. Hozir EKBni mustaqil tahlil qilaman va Yevropa kardiologlar jamiyati tavsiyalarini yaxshi bilaman. Natijada xalqaro sertifikat oldim va klinikada amaliyot boshladim!",
    rating: 5,
    before: "Klinik mantiqning yo'qligi, kardiogrammadan qo'rqish",
    after: "ESC bayonnomalari bo'yicha mustaqil tashxis va EKB tahlili",
    outcomeMetric: "+85% tibbiy imtihon ko'rsatkichi",
    avatarSeed: "JO"
  },
  {
    id: '2',
    name: "Dildora Nazarova",
    role: "Umumiy amaliyot shifokori",
    text: "Poliklinikada ish boshlaganimda ko'p dorilarning dalillangan asosi yo'qligini tushunib yetdim. iMed Team platformasining 'Klinik Farmakologiya' kursi ko'zimni ochdi. Hozir bemorlarimga faqat xalqaro miqyosda tasdiqlangan va samara beradigan davoni yozaman. Bemorlar ishonchi keskin oshdi!",
    rating: 5,
    before: "Samarasiz nootrop va immunostimulyatorlarni ko'p yozish",
    after: "Faqat dalillangan (EBM) ratsional terapiyani qo'llash",
    outcomeMetric: "95% bemorlar mamnuniyati",
    avatarSeed: "DN"
  },
  {
    id: '3',
    name: "Shaxzod Qodirov",
    role: "Rezident Shifokor",
    text: "Neyrologiya bo'yicha Germaniya rezidentura imtihoniga tayyorlanayotgan edim. iMed kurslari menga nemis hamkasblarim bilan bir tilda gaplashish, MRT va KT tahlillarini eng yuqori standartlarda o'rganish imkonini berdi. Imtihondan muvaffaqiyatli o'tdim!",
    rating: 5,
    before: "MRT tasvirlarini tushunishda qiynalish",
    after: "Bosh miya MRT patologiyalarini 1 daqiqada aniqlash",
    outcomeMetric: "Germaniya imtihoni - Muvaffaqiyatli",
    avatarSeed: "SQ"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "iMed Team darslari qanday formatda o'tiladi?",
    answer: "Bizning darslarimiz yuqori sifatli video darslar, batafsil yozma PDF konspektlar, interaktiv klinik keyslar va har bir modul oxiridagi nazorat testlaridan iborat. Barcha materiallar shaxsiy kabinetingizda va mobil ilovamizda umrbod saqlanib qoladi."
  },
  {
    question: "Kurslarni yakunlagandan keyin sertifikat beriladimi?",
    answer: "Ha, albatta. Kursning barcha modullarini muvaffaqiyatli o'zlashtirib, yakuniy imtihondan 70% dan yuqori natija ko'rsatgan talabalarga iMed Team tomonidan tasdiqlangan, shaxsiy QR-kodga ega rasmiy elektron va jismoniy sertifikat topshiriladi."
  },
  {
    question: "Dalillarga asoslangan tibbiyot (EBM) nima va u nega muhim?",
    answer: "Dalillarga asoslangan tibbiyot (Evidence-Based Medicine) — bu bemorlarni davolashda shaxsiy fikr yoki an'analarga emas, balki eng so'nggi va ishonchli klinik tadqiqotlar natijalariga tayanishdir. Bu bemorni ortiqcha xarajatlar va samarasiz (plasebo) dorilardan himoya qiladi, shifokorning xalqaro miqyosdagi obro'sini oshiradi."
  },
  {
    question: "To'lovni bo'lib to'lash imkoniyati bormi?",
    answer: "Ha! Biz talabalar uchun dars pulini 2 yoki 3 qismga bo'lib to'lash imkoniyatini yaratganmiz. Alohida hollarda, Click, Payme yoki bank hisob raqami orqali qulay to'lov tizimlari mavjud."
  },
  {
    question: "Mobil ilovadan internet bo'lmaganda ham foydalansa bo'ladimi?",
    answer: "Ha, bu bizning eng katta afzalliklarimizdan biri. Mobil ilova ichida dars videolari va PDF ma'ruzalarni telefon xotirasiga yuklab olish funksiyasi bor. Yuklab olingandan so'ng, istalgan vaqtda internetga ulanmasdan darslarni ko'rishingiz mumkin."
  }
];
