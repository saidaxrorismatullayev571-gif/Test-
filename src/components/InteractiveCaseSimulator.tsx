import React, { useState } from 'react';
import { Activity, AlertCircle, CheckCircle2, ChevronRight, Stethoscope, HeartPulse, Sparkle } from 'lucide-react';

const CLINICAL_CASES = [
  {
    title: "1-Keys: To'satdan kuchli ko'krak qafasidagi og'riq",
    patient: "45 yoshli erkak, og'riq chap qo'l va bo'yinga tarqalmoqda. Sovuq ter bosgan, tana harorati me'yorda, qon bosimi 140/90 mm simob ustuni.",
    options: [
      {
        id: 'A',
        text: "Zudlik bilan kardiolog chaqiriladi va uning kelishi kutiladi.",
        ebm: false,
        feedback: "Kutish zararli! Akut koronar sindromda (AKS) har bir daqiqa miokard nekroziga olib keladi. Kardiolog kelguncha shifokor o'zi birinchi tibbiy chorani ko'rishi shart."
      },
      {
        id: 'B',
        text: "EKB olinadi, bemorga 300 mg Aspirin chaynashga beriladi, Nitroglicerin sublingval va ko'rsatmasiz kislorod beriladi.",
        ebm: true,
        feedback: "To'g'ri! Dalillarga asoslangan tibbiyot (EBM) ko'rsatmasi bo'yicha akut koronar sindrom shubhasida zudlik bilan antikoagulyant (Aspirin) terapiya boshlanishi bemor hayotini saqlab qoladi."
      },
      {
        id: 'C',
        text: "Tinchlantiruvchi dori (Valeriana) berilib, umumiy qon tahlillari natijasi kutiladi.",
        ebm: false,
        feedback: "Xavfli xato! Akut miokard infarktini tinchlantiruvchi vositalar bilan davolash vaqtni yo'qotishga va to'satdan yurak to'xtashiga (sudden cardiac death) sabab bo'ladi."
      }
    ]
  },
  {
    title: "2-Keys: Surunkali bosh og'rig'i va diqqat tarqoqligi",
    patient: "28 yoshli ayol, oxirgi 6 oy davomida doimiy bosh og'rig'i, diqqat tarqoqligi va doimiy charchoqdan shikoyat qilmoqda. Uyqusi ham buzilgan.",
    options: [
      {
        id: 'A',
        text: "Zudlik bilan bosh miya MRT qilinadi va qimmatbaho neyroprotektorlar buyuriladi.",
        ebm: false,
        feedback: "Noto'g'ri. Ko'rsatmasiz qimmatbaho MRT qilish va samarasiz nootrop dori vositalarini (neyroprotektorlar) yozish ortiqcha xarajatga olib keladi, EBM buni keskin rad etadi."
      },
      {
        id: 'B',
        text: "Qonning umumiy tahlili, ferritin darajasi tekshiriladi va depressiya skrining testi (PHQ-9) o'tkaziladi.",
        ebm: true,
        feedback: "Ajoyib tashxis! Yosh ayollarda charchoq va bosh og'rig'ining eng ko'p tarqalgan sabablari - Temir tanqisligi anemiyasi va yashirin depressiyadir. EBM qimmat MRT dan oldin ushbu skriningni tavsiya qiladi."
      },
      {
        id: 'C',
        text: "Og'riq qoldiruvchi dorilar (Analgin, Sitramon) uzoq muddatga va har kuni buyuriladi.",
        ebm: false,
        feedback: "Xavfli! Simptomatik davolash bosh og'rig'ining asl sababini yashiradi va dori vositalaridan kelib chiqadigan (abuzus) bosh og'rig'ini qo'zg'atadi."
      }
    ]
  },
  {
    title: "3-Keys: Boladagi o'tkir gastroenterit (ich ketish)",
    patient: "3 yoshli bola, kuniga 5-6 marta suvli ich ketishi va bir marta qusish holati kuzatildi. Bola chanqab suv so'ramoqda, ammo faol, tili nam.",
    options: [
      {
        id: 'A',
        text: "Zudlik bilan kuchli antibiotik (seftriakson) va ich ketishga qarshi loperamid buyuriladi.",
        ebm: false,
        feedback: "Juda xavfli! Bolalardagi o'tkir gastroenteritlarning ko'pchiligi virusli (rotavirus) bo'lib, antibiotik unga ta'sir qilmaydi va disbakteriozni kuchaytiradi. Loperamid esa bolalar uchun zaharli bo'lib, ichak pareziga olib keladi!"
      },
      {
        id: 'B',
        text: "Og'iz orqali rehidratatsiya tuzi (ORS) eritmasi va sink preparatlari buyuriladi, emizish davom ettiriladi.",
        ebm: true,
        feedback: "Mukammal! JSST va EBM standartlariga ko'ra, eng muhim chora degidratatsiyaning oldini olish (ORS) va ichak shilliq qavatini tiklash uchun sink (10-20 mg) berishdir."
      },
      {
        id: 'C',
        text: "Ichaklarni yuvish (klizma) qilinadi va qattiq parhez (faqat quruq non) buyuriladi.",
        ebm: false,
        feedback: "Xato yondashuv. Klizma qilish suvsizlanishni yanada og'irlashtiradi, uzoq muddatli qattiq parhez esa bolaning immun tizimini zaiflashtiradi va tiklanishni sekinlashtiradi."
      }
    ]
  }
];

export default function InteractiveCaseSimulator() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [caseChoice, setCaseChoice] = useState<string | null>(null);
  const [showCaseFeedback, setShowCaseFeedback] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      
      {/* Selection Column */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider self-start">
          <Activity className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
          Klinik Diagnostika
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          O'z Klinik <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 bg-clip-text text-transparent">Mantiqingizni</span> <br />
          Sinab Ko'ring!
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
          Dalillarga asoslangan tibbiyot (EBM) hayotingizda qanday amaliy farq yaratishini ko'ring. Quyidagi klinik vaziyatlardan birini tanlang va o'zingiz eng to'g'ri deb bilgan davolash uslubini belgilang.
        </p>

        <div className="space-y-3 pt-4">
          {CLINICAL_CASES.map((item, idx) => (
            <button
              key={idx}
              id={`case-btn-${idx}`}
              onClick={() => {
                setSelectedCase(idx);
                setCaseChoice(null);
                setShowCaseFeedback(false);
              }}
              className={`w-full p-4 rounded-2xl text-left border flex items-center justify-between transition-all duration-300 ${
                selectedCase === idx 
                  ? 'bg-brand-blue/10 border-brand-blue/40 text-white shadow-[0_0_15px_rgba(79,140,255,0.1)]' 
                  : 'bg-[#111]/40 border-white/5 text-neutral-400 hover:border-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                  selectedCase === idx ? 'bg-brand-blue text-white' : 'bg-white/5 text-neutral-400'
                }`}>
                  0{idx + 1}
                </div>
                <span className="font-semibold text-xs sm:text-sm">{item.title.split(":")[1]}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${selectedCase === idx ? 'rotate-90 text-brand-blue' : 'text-neutral-500'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Workspace Interactive Simulator Screen */}
      <div className="lg:col-span-7 bg-[#0b0b0b]/80 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        
        {/* Glow behind screen */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-mono text-brand-blue font-bold uppercase tracking-wider">iMed Diagnostic Lab</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-purple/20 text-[9px] font-mono text-brand-purple uppercase font-bold">
              <Sparkle className="w-2.5 h-2.5 animate-spin-slow" />
              SIMULATOR FAOL
            </div>
          </div>

          {/* Patient Profile */}
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">Keys mavzusi:</span>
              <h4 className="font-bold text-sm sm:text-base text-white">{CLINICAL_CASES[selectedCase].title}</h4>
            </div>
            <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10">
              <span className="text-[10px] font-mono text-brand-blue uppercase tracking-wider block mb-1">Bemor holati va anamnezi:</span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{CLINICAL_CASES[selectedCase].patient}</p>
            </div>
          </div>

          {/* Options */}
          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-3">Eng optimal EBM chorasini tanlang:</span>
          
          <div className="space-y-3">
            {CLINICAL_CASES[selectedCase].options.map((option) => (
              <button
                key={option.id}
                id={`option-btn-${option.id}`}
                onClick={() => {
                  setCaseChoice(option.id);
                  setShowCaseFeedback(true);
                }}
                className={`w-full p-4 rounded-xl text-left border text-xs sm:text-sm leading-relaxed transition-all duration-300 flex items-start gap-3.5 ${
                  caseChoice === option.id
                    ? option.ebm
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                      : 'bg-red-500/10 border-red-500/40 text-red-100 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                    : 'bg-[#121212]/50 border-white/5 text-neutral-300 hover:border-white/10 hover:bg-[#161616]/70'
                }`}
              >
                <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold font-mono text-xs shrink-0 transition-colors ${
                  caseChoice === option.id
                    ? option.ebm
                      ? 'bg-emerald-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-white/5 text-neutral-400 border border-white/10'
                }`}>
                  {option.id}
                </span>
                <span className="font-light">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        {showCaseFeedback && (
          <div className={`mt-6 p-4 rounded-xl border animate-fade-in ${
            CLINICAL_CASES[selectedCase].options.find(o => o.id === caseChoice)?.ebm
              ? 'bg-emerald-950/30 border-emerald-500/20 text-emerald-300'
              : 'bg-red-950/30 border-red-500/20 text-red-300'
          }`}>
            <div className="flex items-center gap-2 mb-1.5">
              {CLINICAL_CASES[selectedCase].options.find(o => o.id === caseChoice)?.ebm ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              )}
              <span className="font-bold text-xs sm:text-sm">
                {CLINICAL_CASES[selectedCase].options.find(o => o.id === caseChoice)?.ebm 
                  ? "To'g'ri javob! (EBM standarti)" 
                  : "Xavfli / samarasiz yondashuv!"}
              </span>
            </div>
            <p className="text-xs leading-relaxed opacity-90 font-light">
              {CLINICAL_CASES[selectedCase].options.find(o => o.id === caseChoice)?.feedback}
            </p>
          </div>
        )}

      </div>

    </div>
  );
}
