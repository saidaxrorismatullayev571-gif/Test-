import React, { useState } from 'react';
import { BookOpen, Brain, Check, ChevronRight, Play, Sparkles, Terminal, Tv } from 'lucide-react';

const LAB_TABS = [
  {
    id: 'ai',
    title: "AI Co-Pilot Yordamchi",
    desc: "Siz o'qish davomida murakkab savollaringizga zudlik bilan javob beruvchi, xorijiy qo'llanmalar asosida ishlaydigan shaxsiy AI assistentingiz bilan hamkorlik qilasiz.",
    metric: "24/7 Tezkor AI javoblari",
    color: "text-brand-blue"
  },
  {
    id: 'video',
    title: "Interaktiv 3D Ma'ruzalar",
    desc: "Oddiy, zerikarli ma'ruzalar o'rniga vizual grafikalar, interaktiv 3D a'zolar modellarining video tahlillari va professional animatsiyalar orqali o'rganing.",
    metric: "99.4% o'zlashtirish koeffitsienti",
    color: "text-brand-purple"
  },
  {
    id: 'map',
    title: "Klinik Bilimlar Xaritasi",
    desc: "Anatomiya, fiziologiya va farmakologiyani yodlamasdan, ularni bitta yagona o'zaro bog'liq zanjir - Klinik Mantiq xaritasi orqali tizimlashtiring.",
    metric: "100% o'zaro bog'liq bilimlar",
    color: "text-emerald-400"
  }
];

export default function VirtualLabMonitor() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedNode, setSelectedNode] = useState<string>('gomeostaz');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
      
      {/* Left Selector Column */}
      <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple uppercase tracking-wider self-start">
          Kelajak Laboratoriyasi
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Sizni Kelajak <br />
          <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 bg-clip-text text-transparent">Tibbiyot Laboratoriyasi</span> <br />
          Kutmoqda
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
          iMed Team platformasining o'quv tajribasi zerikarli kitob yodlashdan butkul farq qiladi. Biz ta'limga interaktiv, innovatsion va amaliy texnologik yondashuvni olib kirdik.
        </p>

        <div className="space-y-3.5 pt-4">
          {LAB_TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`w-full p-4 rounded-2xl text-left border flex items-start gap-4 transition-all duration-300 ${
                activeTab === idx 
                  ? 'bg-[#111] border-brand-purple/40 text-white shadow-[0_0_15px_rgba(124,58,237,0.08)]' 
                  : 'bg-white/2 border-white/5 text-neutral-400 hover:border-white/10 hover:text-white'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                activeTab === idx ? 'bg-brand-purple text-white' : 'bg-white/5 text-neutral-400'
              }`}>
                <span className="font-bold text-sm font-mono">0{idx + 1}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{tab.title}</h4>
                {activeTab === idx && (
                  <p className="text-xs text-neutral-400 leading-relaxed mt-2 animate-fade-in font-light">
                    {tab.desc}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Graphical View Column (The Simulated Laboratory Monitor) */}
      <div className="lg:col-span-7 bg-[#090909]/95 border border-white/5 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden min-h-[460px] flex flex-col justify-between">
        
        {/* Decorative corner code indicators */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Lab Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">IMED CORE LAB v2.4 // PREVIEW</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>SIMULATION MODULE ACTIVE</span>
          </div>
        </div>

        {/* Live Active Panel */}
        <div className="flex-grow flex flex-col justify-center my-4">
          
          {/* AI INTERFACE PREVIEW */}
          {activeTab === 0 && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-blue font-bold uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Co-Pilot Maslahatchi</span>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-[9px] text-brand-blue font-bold">U</div>
                    <div className="bg-white/5 p-2.5 rounded-xl rounded-tl-none text-xs text-neutral-300 font-light">
                      Miokard infarktida EKBda qanday o'zgarishlar bo'ladi?
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-purple/20 flex items-center justify-center text-[9px] text-brand-purple font-bold">AI</div>
                    <div className="bg-brand-purple/10 border border-brand-purple/10 p-3 rounded-xl rounded-tl-none text-xs text-neutral-200 font-light space-y-1.5">
                      <p>O'tkir miokard infarktining klassik belgisi:</p>
                      <ul className="list-disc pl-4 space-y-1 text-neutral-300">
                        <li>ST segmentining izoliniyadan ko'tarilishi (Elevation)</li>
                        <li>Q tishchasining patologik chuqurlashishi</li>
                        <li>T tishchasining o'tkirlashishi yoki manfiylashishi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-brand-blue/5 border border-brand-blue/15 rounded-xl flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400">STATUS: READY FOR CUSTOM QUERIES</span>
                <span className="text-[10px] font-mono text-brand-blue font-bold">ACTIVE CHAT</span>
              </div>
            </div>
          )}

          {/* INTERACTIVE VIDEO PREVIEW */}
          {activeTab === 1 && (
            <div className="space-y-4 animate-fade-in">
              {/* Virtual Video Screen */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 flex flex-col justify-between p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                
                {/* Visual grid in screen */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>

                <div className="flex justify-between items-center z-20">
                  <span className="px-2 py-0.5 rounded bg-brand-purple/20 text-[9px] font-mono text-brand-purple uppercase">LEC 02.4 // INTERAKTIV</span>
                  <span className="text-[10px] font-mono text-neutral-400">Qaldirg'och EKB</span>
                </div>

                <div className="flex justify-center my-auto z-20">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/80 hover:bg-brand-purple flex items-center justify-center cursor-pointer shadow-lg shadow-brand-purple/40 hover:scale-105 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>
                </div>

                <div className="flex items-center justify-between z-20">
                  <div className="w-full mr-4 bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="w-[45%] h-full bg-brand-purple rounded-full"></div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 shrink-0">12:45 / 28:10</span>
                </div>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl flex items-center gap-3">
                <Tv className="w-4 h-4 text-brand-purple shrink-0" />
                <span className="text-[11px] text-neutral-300 font-light">
                  Har bir videoda o'quvchi uchun onlayn dars vaqtida eslatma yozish funksiyasi mavjud.
                </span>
              </div>
            </div>
          )}

          {/* KNOWLEDGE MAP PREVIEW */}
          {activeTab === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-white/5">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-3">Integratsiyalashgan Klinik Zanjir (Bosing):</span>
                
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => setSelectedNode('gomeostaz')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-mono transition-all ${
                      selectedNode === 'gomeostaz' ? 'bg-brand-blue/10 border-brand-blue/40 text-white' : 'bg-white/2 border-white/5 text-neutral-500'
                    }`}
                  >
                    1. Fiziologiya
                    <span className="block text-[8px] text-neutral-400 mt-1">Gomeostaz</span>
                  </button>
                  <button 
                    onClick={() => setSelectedNode('patologiya')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-mono transition-all ${
                      selectedNode === 'patologiya' ? 'bg-brand-purple/10 border-brand-purple/40 text-white' : 'bg-white/2 border-white/5 text-neutral-500'
                    }`}
                  >
                    2. Patofiziologiya
                    <span className="block text-[8px] text-neutral-400 mt-1">Ishemiya</span>
                  </button>
                  <button 
                    onClick={() => setSelectedNode('terapiya')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-mono transition-all ${
                      selectedNode === 'terapiya' ? 'bg-emerald-500/10 border-emerald-500/40 text-white' : 'bg-white/2 border-white/5 text-neutral-500'
                    }`}
                  >
                    3. Farmakologiya
                    <span className="block text-[8px] text-neutral-400 mt-1">Beta-Blokatorlar</span>
                  </button>
                </div>

                {/* Node Explanation */}
                <div className="mt-4 p-3 bg-white/[0.01] border-t border-white/5 text-xs text-neutral-300 font-light leading-relaxed">
                  {selectedNode === 'gomeostaz' && "Fiziologiyada yurak mushaklarining normal kislorodga bo'lgan talabi va gomeostazi tushuntiriladi. Bu asosiy g'ishtdir."}
                  {selectedNode === 'patologiya' && "Patofiziologiyada esa gomeostazning buzilishi - arteriya torayganda kislorod yetishmasligi (Ishemiya) tahlil qilinadi."}
                  {selectedNode === 'terapiya' && "Farmakologiya bosqichida esa ushbu ishemiyani davolovchi, yurak kislorod talabini kamaytiruvchi dori vositasi (Beta-blokatorlar) ratsional buyuriladi."}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Lab Footer */}
        <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-neutral-400" />
            <span className="text-xs text-neutral-400 font-light">iMed LMS Platformasi</span>
          </div>
          <span className="text-xs font-bold text-brand-purple font-mono uppercase">
            {LAB_TABS[activeTab].metric}
          </span>
        </div>

      </div>

    </div>
  );
}
