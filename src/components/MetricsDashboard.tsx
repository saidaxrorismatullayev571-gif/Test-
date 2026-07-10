import React, { useState, useEffect } from 'react';
import { Award, Brain, Check, TrendingUp, Users } from 'lucide-react';

export default function MetricsDashboard() {
  const [activeMetric, setActiveMetric] = useState<'karyera' | 'mantiq' | 'diagnostika'>('mantiq');
  const [radialProgress, setRadialProgress] = useState(0);

  useEffect(() => {
    // Elegant incremental loading simulation for circular dial
    const target = activeMetric === 'mantiq' ? 94 : activeMetric === 'karyera' ? 78 : 88;
    setRadialProgress(0);
    const interval = setInterval(() => {
      setRadialProgress(prev => {
        if (prev < target) return prev + 2;
        clearInterval(interval);
        return target;
      });
    }, 12);
    return () => clearInterval(interval);
  }, [activeMetric]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Visual Graphical Charts column (7 cols) */}
      <div className="lg:col-span-7 bg-[#0b0b0b]/90 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        
        {/* Glow behind graph */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">REAL-TIME RESULTS STATS</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveMetric('mantiq')}
              className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                activeMetric === 'mantiq' ? 'bg-brand-blue/20 text-brand-blue border border-brand-blue/30' : 'bg-white/5 text-neutral-400 border border-transparent'
              }`}
            >
              Klinik Mantiq
            </button>
            <button
              onClick={() => setActiveMetric('karyera')}
              className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                activeMetric === 'karyera' ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/30' : 'bg-white/5 text-neutral-400 border border-transparent'
              }`}
            >
              Rezidentura
            </button>
            <button
              onClick={() => setActiveMetric('diagnostika')}
              className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                activeMetric === 'diagnostika' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-neutral-400 border border-transparent'
              }`}
            >
              EKB tahlil
            </button>
          </div>
        </div>

        {/* Visual Graph Panels */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-4 items-center">
          
          {/* Circular SVG Dial Dashboard (col span 5) */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              
              {/* Outer SVG circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="62"
                  className="stroke-white/5 fill-transparent"
                  strokeWidth="8"
                />
                <circle
                  cx="72"
                  cy="72"
                  r="62"
                  className="fill-transparent transition-all duration-300"
                  stroke={activeMetric === 'mantiq' ? '#4F8CFF' : activeMetric === 'karyera' ? '#7C3AED' : '#10B981'}
                  strokeWidth="8"
                  strokeDasharray="390"
                  strokeDashoffset={390 - (390 * radialProgress) / 100}
                  strokeLinecap="round"
                />
              </svg>

              {/* Central text indicator */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold font-display text-white font-mono">{radialProgress}%</span>
                <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-mono mt-0.5">Samaradorlik</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">Ko'rsatkich turi</span>
              <p className="text-xs text-white font-bold font-display mt-0.5">
                {activeMetric === 'mantiq' ? "Mustaqil diagnoz qo'yish" : activeMetric === 'karyera' ? "Rezidenturaga muvaffaqiyat" : "EKBni professional o'qish"}
              </p>
            </div>
          </div>

          {/* Detailed Bar Compare stats (col span 7) */}
          <div className="md:col-span-7 space-y-5">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>An'anaviy ta'lim (Yodlash tizimi)</span>
                <span className="text-neutral-500">
                  {activeMetric === 'mantiq' ? "32%" : activeMetric === 'karyera' ? "15%" : "20%"}
                </span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <div 
                  style={{ width: activeMetric === 'mantiq' ? '32%' : activeMetric === 'karyera' ? '15%' : '20%' }}
                  className="h-full bg-neutral-600 rounded-full transition-all duration-500"
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-white font-bold">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  iMed Team (EBM Tizimi)
                </span>
                <span className="text-brand-blue font-mono font-bold">
                  {activeMetric === 'mantiq' ? "94%" : activeMetric === 'karyera' ? "78%" : "88%"}
                </span>
              </div>
              <div className="w-full h-4 bg-white/5 rounded-full p-[2px]">
                <div 
                  style={{ width: `${radialProgress}%` }}
                  className={`h-full rounded-full transition-all duration-300 shadow-lg ${
                    activeMetric === 'mantiq' 
                      ? 'bg-gradient-to-r from-brand-blue to-cyan-400 shadow-brand-blue/30' 
                      : activeMetric === 'karyera' 
                        ? 'bg-gradient-to-r from-brand-purple to-pink-500 shadow-brand-purple/30' 
                        : 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-emerald-500/30'
                  }`}
                ></div>
              </div>
            </div>

            <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl text-left">
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">Muvaffaqiyat omili</span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {activeMetric === 'mantiq' && "Quruq ma'lumotlar o'rniga, har bir kasallik kelib chiqish zanjirini patofiziologik jihatdan o'rganish orqali 3 barobar yaxshi natija."}
                {activeMetric === 'karyera' && "Xalqaro klinikalardagi stajyorlik imtihonlari va Germaniya, Turkiya rezidentura savollari asosida tuzilgan o'quv dasturi."}
                {activeMetric === 'diagnostika' && "500 dan ortiq real kardiogrammalarni tahlil qilish orqali har qanday kardiologik kasallikni normal/patologik farqlash darajasi."}
              </p>
            </div>

          </div>

        </div>

        {/* Graph Footer */}
        <div className="border-t border-white/5 pt-4 mt-4 flex items-center justify-between text-[11px] text-neutral-500">
          <span>* Ma'lumotlar iMed Team 2021-2026 bitiruvchilari so'rovnomasi asosida tuzilgan</span>
          <span className="text-brand-blue font-mono font-bold">UPDATED: TODAY</span>
        </div>

      </div>

      {/* Trust Text content column (5 cols) */}
      <div className="lg:col-span-5 space-y-6 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider self-start">
          Natijadorlik
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Natijalarimiz <br />
          <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 bg-clip-text text-transparent">Faqat Raqamlarda</span> <br />
          Emas, Klinikada!
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
          Bizning bitiruvchilarimiz nafaqat O'zbekistondagi klinikalarda, balki xalqaro tibbiyot darajasidagi imtihonlarda ham o'zlarining yuqori tayyorgarliklarini isbotlab kelmoqdalar.
        </p>

        <div className="grid grid-cols-1 gap-3.5 pt-4">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-xl bg-brand-blue/15 flex items-center justify-center text-brand-blue shrink-0">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Yuksak Klinik Intuitivlik</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Bemorga asossiz dori yozmaslik va har bir simptom tubini tushunish qobiliyati.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-xl bg-brand-purple/15 flex items-center justify-center text-brand-purple shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Rezidentura va Karyera</h4>
              <p className="text-xs text-neutral-400 mt-0.5">AQSh, Germaniya va Turkiya kabi davlatlarning klinikalarida faoliyat boshlash imkoniyati.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Keng Tibbiyot Hamjamiyati</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Platformadagi 10,000 dan ortiq faol talabalar va tajribali shifokorlar bilan hamkorlik.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
