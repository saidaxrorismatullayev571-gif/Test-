import React, { useState, useEffect } from 'react';
import { BookOpen, HeartPulse, Play, Smartphone, Sparkles, MessageSquare, Star, Check } from 'lucide-react';

const SLIDES = [
  {
    id: 'lesson',
    title: "Video Ma'ruzalar",
    subtitle: "2.1-Dars: EKB Norma tahlili",
    duration: "28:10",
    content: (
      <div className="space-y-3.5 my-auto">
        <div className="relative w-full h-32 rounded-xl overflow-hidden bg-neutral-900 border border-white/5 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent z-10"></div>
          <Play className="w-9 h-9 text-white fill-brand-blue animate-pulse z-10" />
          <div className="absolute bottom-2 left-2 text-[10px] text-white font-semibold z-10">
            2.1-Dars: EKB Norma tahlili
          </div>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
          <div className="flex justify-between text-[9px] text-neutral-400 font-mono">
            <span>O'zlashtirish progressi</span>
            <span className="text-brand-blue font-bold">72%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="w-[72%] h-full bg-brand-blue rounded-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'diagnostics',
    title: "Klinik Farmakologiya",
    subtitle: "Dori vositalari o'zaro ta'siri",
    duration: "15:40",
    content: (
      <div className="space-y-3 my-auto">
        <div className="p-3 rounded-xl bg-brand-purple/5 border border-brand-purple/10 space-y-2.5 text-left">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-mono text-brand-purple font-bold">EBM STANDART</span>
            <span className="text-[9px] font-mono text-emerald-400">98% XAVFSIZ</span>
          </div>
          <h5 className="text-xs font-bold text-white leading-tight">Beta-Blokatorlar + Kaltsiy Antagonistlari</h5>
          <p className="text-[10px] text-neutral-400 leading-normal">
            Verapamil va Beta-blokatorlarni birga qo'llash og'ir kardiogen blokadalarga olib kelishi mumkin.
          </p>
        </div>
        
        {/* Visual signal alert */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping shrink-0"></span>
          <span className="text-[9px] font-bold uppercase tracking-wider font-mono">XAVFLI KOMBINATSIYA</span>
        </div>
      </div>
    )
  },
  {
    id: 'ai-chat',
    title: "AI Maslahat Chat",
    subtitle: "iMed AI Maslahatchi v2",
    duration: "Live",
    content: (
      <div className="space-y-3 my-auto text-left">
        <div className="space-y-2 max-h-[145px] overflow-y-auto pr-1 hide-scrollbar">
          <div className="bg-white/5 p-2 rounded-lg rounded-tl-none text-[10px] text-neutral-300 font-light">
            EKB tahlilini qaysi darsdan boshlasam bo'ladi?
          </div>
          <div className="bg-brand-blue/10 border border-brand-blue/10 p-2.5 rounded-lg rounded-tr-none text-[10px] text-neutral-200 font-light leading-relaxed">
            <span className="font-bold text-brand-blue block mb-0.5">iMed AI:</span>
            Kardiologiya kursining 1-moduli: EKB Asoslaridan boshlashingizni tavsiya qilaman!
          </div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-xl py-1 px-2 flex items-center justify-between">
          <span className="text-[9px] text-neutral-500">Savol yozing...</span>
          <MessageSquare className="w-3 h-3 text-brand-blue" />
        </div>
      </div>
    )
  }
];

export default function InteractiveMobilePhone() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Auto slide change interval
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: x * 20, y: -y * 20 }); // Limit rotation angles
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Phone Screen Simulated UI Mockup (5 cols) */}
      <div className="lg:col-span-5 flex justify-center items-center">
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateY(${rotate.x}deg) rotateX(${rotate.y}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="relative w-full max-w-[310px] h-[580px] rounded-[48px] bg-black border-[8px] border-[#222222] shadow-[0_25px_60px_-15px_rgba(124,58,237,0.2)] overflow-hidden flex flex-col justify-between cursor-pointer group"
        >
          
          {/* Reflective light sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-40"></div>

          {/* Top camera notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#222222] rounded-b-xl z-50 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-black border border-white/10"></span>
          </div>

          {/* Inner Phone Screen */}
          <div className="flex-grow p-4 pt-8 flex flex-col justify-between bg-[#070707] z-10">
            
            {/* Phone App Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
              <div className="flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-[11px] font-bold text-white tracking-wide">iMed Mobile LMS</span>
              </div>
              <span className="text-[8px] text-brand-purple font-mono bg-brand-purple/10 px-1.5 py-0.5 rounded">v2.4.1</span>
            </div>

            {/* Simulated Live View screen slide switcher */}
            <div className="flex-grow flex flex-col justify-center my-4 min-h-[300px]">
              <div className="text-center mb-2">
                <span className="text-[9px] font-mono text-neutral-500 uppercase block tracking-wider">MOBI ILM FAOL REJIM</span>
                <h4 className="text-xs font-bold text-white mt-0.5">{SLIDES[activeSlide].title}</h4>
              </div>
              
              <div className="transition-all duration-500">
                {SLIDES[activeSlide].content}
              </div>
            </div>

            {/* Slide Navigation dot Indicators */}
            <div className="flex justify-center gap-1.5 mb-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-4 bg-brand-blue' : 'bg-white/10'}`}
                ></button>
              ))}
            </div>

            {/* Phone Footer Nav bar */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-2.5 justify-items-center text-neutral-500">
              <div className={`text-center ${activeSlide === 0 ? 'text-brand-blue' : 'text-neutral-500 hover:text-neutral-300'}`}>
                <BookOpen className="w-3.5 h-3.5 mx-auto" />
                <span className="text-[8px] block mt-0.5 font-medium">Video dars</span>
              </div>
              <div className={`text-center ${activeSlide === 1 ? 'text-brand-purple' : 'text-neutral-500 hover:text-neutral-300'}`}>
                <Smartphone className="w-3.5 h-3.5 mx-auto animate-pulse" />
                <span className="text-[8px] block mt-0.5 font-medium font-display">Tashxis</span>
              </div>
              <div className={`text-center ${activeSlide === 2 ? 'text-brand-blue' : 'text-neutral-500 hover:text-neutral-300'}`}>
                <MessageSquare className="w-3.5 h-3.5 mx-auto" />
                <span className="text-[8px] block mt-0.5 font-medium">AI Chat</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Presentational Content Column (7 cols) */}
      <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple uppercase tracking-wider self-start">
          Mobil Ilova
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Bilimlar Cho'ntagingizda! <br />
          <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 bg-clip-text text-transparent">iOS va Android</span> Ilovasi
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
          Yo'lda bo'lganingizda, navbat kutayotganingizda yoki klinika sharoitida internet bilan bog'liq muammolar yuzaga kelganda, iMed Team mobil ilovasi eng ishonchli yordamchingizga aylanadi. Ma'ruzalarni oldindan yuklab oling va mutlaqo oflayn formatda o'rganing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Sinxron Progress Monitoring</h4>
              <p className="text-xs text-neutral-400 mt-1">Kompyuter yoki telefonda boshlagan darsingizni istalgan qurilmada uzluksiz davom ettiring.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Smart Push-Xabarnomalar</h4>
              <p className="text-xs text-neutral-400 mt-1">Muhim imtihon muddatlari, yangi ma'ruzalar yoki yangi klinik keys tahlillari haqida zudlik bilan xabar oling.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Integrallashgan PDF kutubxona</h4>
              <p className="text-xs text-neutral-400 mt-1">Darslar konspektlari, xalqaro bayonnomalar (ESC, ADA) va dori ro'yxatlari doimo qo'lingizda.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Yopiq Hamjamiyat Chat</h4>
              <p className="text-xs text-neutral-400 mt-1">Ilova orqali birgina tugma bilan barcha talabalar bilan muhokama guruhiga bog'laning.</p>
            </div>
          </div>
        </div>

        {/* Presentational simulated badges */}
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="px-5 py-3 rounded-xl bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-white/10 transition-all flex items-center gap-3 cursor-pointer">
            <Smartphone className="w-5 h-5 text-neutral-300" />
            <div className="text-left">
              <span className="text-[9px] text-neutral-500 uppercase block leading-none">Download on the</span>
              <span className="text-xs font-bold text-white block font-display mt-0.5">App Store</span>
            </div>
          </div>
          <div className="px-5 py-3 rounded-xl bg-[#111] hover:bg-[#161616] border border-white/5 hover:border-white/10 transition-all flex items-center gap-3 cursor-pointer">
            <Play className="w-5 h-5 text-neutral-300 fill-neutral-300" />
            <div className="text-left">
              <span className="text-[9px] text-neutral-500 uppercase block leading-none">Get it on</span>
              <span className="text-xs font-bold text-white block font-display mt-0.5">Google Play</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
