import React, { useState, useEffect } from 'react';
import { 
  Award, CheckCircle2, BookOpen, HeartPulse, Users, Smartphone, 
  ChevronDown, ArrowRight, MessageSquare, Sparkles, Brain, Stethoscope, 
  Layers, Shield, Activity, Clock, Target, GraduationCap, Star, Check, 
  Phone, Mail, Send, Award as AwardIcon, Sparkle, UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Data Imports
import { COURSES, EXPERTS, TESTIMONIALS, FAQS } from './data/courses';

// Modular Component Imports
import FuturisticMedicalHub from './components/FuturisticMedicalHub';
import InteractiveCaseSimulator from './components/InteractiveCaseSimulator';
import VirtualLabMonitor from './components/VirtualLabMonitor';
import MetricsDashboard from './components/MetricsDashboard';
import InteractiveMobilePhone from './components/InteractiveMobilePhone';
import AIChatAdvisor from './components/AIChatAdvisor';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Fundamental' | 'Klinik'>('All');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [studentCounter, setStudentCounter] = useState(8500);

  // Stats Counters state simulation for dynamic hero loading
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCounter(prev => (prev < 10452 ? prev + 17 : 10452));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-brand-blue selection:text-white overflow-x-hidden">
      
      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 glass border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">iMed Team</span>
              <div className="text-[9px] font-mono text-brand-blue tracking-widest uppercase">EBM Platform</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#why-us" className="hover:text-white transition-colors">Afzalliklarimiz</a>
            <a href="#simulator" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-brand-purple animate-pulse" /> Keys Simulator
            </a>
            <a href="#courses" className="hover:text-white transition-colors">Kurslar</a>
            <a href="#experts" className="hover:text-white transition-colors">Ekspertlar</a>
            <a href="#experience" className="hover:text-white transition-colors">O'quv Tajribasi</a>
            <a href="#advisor" className="hover:text-white transition-colors">AI Maslahatchi</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Natijalar</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a 
              href="#courses" 
              className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white px-4 py-2 transition-colors"
            >
              Kurslarni ko'rish
            </a>
            <a 
              href="#advisor" 
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
              id="header-cta"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl animate-pulse group-hover:scale-105 transition-transform"></span>
              <span className="relative flex items-center gap-2 px-4 py-2.5 bg-[#0e0e0e] hover:bg-[#121212] transition-colors rounded-xl text-xs font-bold text-white uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                AI Bepul Maslahat
              </span>
            </a>
          </div>

        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient background blur circles */}
        <div className="absolute top-1/4 left-1/10 w-[42vw] h-[42vw] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/10 w-[42vw] h-[42vw] bg-brand-purple/5 rounded-full blur-[160px] pointer-events-none"></div>
        
        {/* Spatial tech grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            
            {/* Promo badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-blue uppercase tracking-wider backdrop-blur-md">
              <Sparkle className="w-3.5 h-3.5 text-brand-purple fill-brand-purple animate-spin-slow" />
              O'zbekistondagi Ilk EBM Ta'lim Platformasi
            </div>

            {/* Giant Display Typography */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white tracking-tight">
              Bemorlar <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 bg-clip-text text-transparent">Ishonadigan</span> <br />
              Shifokorga Aylaning
            </h1>

            {/* Subtext explaining EBM */}
            <p className="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
              O'zbekiston sharoitiga moslashtirilgan, amaliyotchi shifokorlar tomonidan o'rgatiladigan xalqaro standartlardagi klinik va fundamental tibbiyot kurslari. Nazariyadan amaliyotga o'ting.
            </p>

            {/* Glowing CTA trigger buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a 
                href="#courses" 
                className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                id="hero-primary-cta"
              >
                Kurslarni ko'rish
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#advisor" 
                className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4 text-brand-purple" />
                AI Konsultatsiya
              </a>
            </div>

            {/* Dynamic Interactive Stats Counter */}
            <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-white/5 w-full max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">{studentCounter.toLocaleString()}+</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-500 mt-1">Bitiruvchilar</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">20+</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-500 mt-1">EBM Kurslar</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">98%</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-500 mt-1">Klinik O'sish</div>
              </div>
            </div>

          </div>

          {/* Majestic Hero Interactive Canvas Space */}
          <div className="lg:col-span-5 w-full h-[450px] sm:h-[500px] relative rounded-[32px] overflow-hidden glass border border-white/10 shadow-2xl flex items-center justify-center">
            
            {/* HUD Status label overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/40 border border-white/5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-neutral-300">CLINICAL HUB: ACTIVE</span>
              </div>
              <div className="text-[10px] font-mono text-neutral-400">WebGL & Canvas simulation</div>
            </div>

            {/* Floating visual center dashboard element */}
            <div className="absolute bottom-4 left-4 right-4 glass-light p-3.5 rounded-2xl z-20 pointer-events-none border border-white/5 backdrop-blur-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">iMed 3D Model</div>
                  <div className="text-[10px] text-neutral-400">Sichqonchani harakatlantiring</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-brand-blue font-bold">100% INTERAKTIV</div>
                <div className="text-[9px] text-neutral-500">Kamerani boshqarish</div>
              </div>
            </div>

            {/* 3D Simulation WebGL-like Interactive Canvas */}
            <FuturisticMedicalHub />

          </div>

        </div>

      </section>

      {/* TRUSTED BY STUDENTS PARTNERS BAR */}
      <section className="py-12 border-y border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-8">
            O'zbekistonning Yetakchi Tibbiyot Universitetlari Talabalari Bizga Ishonishadi
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-60 hover:opacity-90 transition-opacity">
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold font-display text-neutral-200 tracking-wide">Toshkent Tibbiyot Akademiyasi</div>
              <div className="text-[9px] font-mono text-brand-blue uppercase mt-1">TTA</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold font-display text-neutral-200 tracking-wide">Toshkent Pediatriya Instituti</div>
              <div className="text-[9px] font-mono text-brand-purple uppercase mt-1">SAMPI</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold font-display text-neutral-200 tracking-wide">Samarqand Tibbiyot Universiteti</div>
              <div className="text-[9px] font-mono text-brand-blue uppercase mt-1">SAMDTU</div>
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base font-bold font-display text-neutral-200 tracking-wide">Andijon Tibbiyot Instituti</div>
              <div className="text-[9px] font-mono text-brand-purple uppercase mt-1">ADTI</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IMED TEAM FLOATING CARDS */}
      <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple uppercase tracking-wider">
            Nima uchun iMed Team?
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Eski Usuldagi Yodlashdan <br />
            Klinik Mantiqiy Fikrlashga O'ting
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Biz darsliklarni shunchaki o'qib bermaymiz. Biz har bir mavzuni eng so'nggi ilmiy dalillar, real bemorlar keyslari va zamonaviy dori tahlillari bilan bog'laymiz.
          </p>
        </div>

        {/* Floating Glassmorphic cards with subtle hover glows */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1 */}
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 group text-left cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Dalillarga Asoslangan Tibbiyot (EBM)</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Bizning barcha ma'ruzalarimiz eng nufuzli xalqaro ilmiy jurnallar (UpToDate, PubMed, Cochrane) asosida tuzilgan.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-purple/30 hover:shadow-2xl hover:shadow-brand-purple/10 transition-all duration-300 group text-left cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Amaliyotchi Shifokorlar</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Sizga dars beradigan ma'ruzachilarimiz xalqaro shifoxonalarda faoliyat yuritadigan, har kuni real bemorlarni qabul qiladigan ekspertlardir.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 group text-left cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Klinik Holatlar Tahlili</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Darslarda faqat quruq nazariya emas, balki real bemorlarning keyslari va murakkab differensial tashxislar muhokama qilinadi.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-purple/30 hover:shadow-2xl hover:shadow-brand-purple/10 transition-all duration-300 group text-left cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Mobil Ilovada Offline</h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Internet yo'q joyda ham darslarni telefoningizga yuklab oling va istalgan vaqtda erkin o'qish imkoniyatidan foydalaning.
            </p>
          </div>

        </div>
      </section>

      {/* INTERACTIVE CLINICAL SIMULATOR */}
      <section id="simulator" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/60 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <InteractiveCaseSimulator />
        </div>
      </section>

      {/* COURSES CATALOG */}
      <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider">
              Bizning Kurslarimiz
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Professional Tibbiy Kurslar Katalogi
            </h2>
            <p className="text-neutral-400 max-w-xl text-sm sm:text-base font-light">
              Fundamental bilimlardan tortib, eng murakkab amaliy sohalargacha bo'lgan, siz kutgan mukammallikdagi o'quv dasturlari.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex items-center gap-2 self-start md:self-end bg-[#111] border border-white/5 p-1 rounded-xl backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'All' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Barchasi
            </button>
            <button
              onClick={() => setActiveCategory('Fundamental')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'Fundamental' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Fundamental
            </button>
            <button
              onClick={() => setActiveCategory('Klinik')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === 'Klinik' 
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/15' 
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Klinik
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="glass rounded-[24px] overflow-hidden border border-white/5 hover:border-brand-purple/30 hover:scale-[1.01] hover:shadow-[0_15px_30px_rgba(124,58,237,0.05)] transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Course top flags */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-bold text-brand-blue uppercase tracking-wider">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-brand-purple" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white leading-snug hover:text-brand-blue transition-colors cursor-pointer">{course.title}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-neutral-200">{course.rating}</span>
                    <span className="text-neutral-600 text-xs">•</span>
                    <span className="text-xs text-neutral-400">{course.studentsCount} ta talaba</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed min-h-[50px] font-light">{course.outcome}</p>

                {/* Skills learned badges */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider font-semibold">O'zlashtiriladigan ko'nikmalar:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.skills.map((skill, index) => (
                      <span key={index} className="px-2.5 py-1 rounded-lg bg-white/5 text-[10px] text-neutral-300 font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Course Card Footer price & button */}
              <div className="p-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">Kurs Narxi</span>
                  <span className="text-sm font-bold text-white font-mono">{course.price}</span>
                </div>
                <a 
                  href="#advisor"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-brand-purple hover:text-white transition-all text-xs font-bold text-brand-blue uppercase tracking-wider"
                >
                  Batafsil
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* EXPERTS JAMOAMIZ */}
      <section id="experts" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/40 border-t border-white/5 relative">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple uppercase tracking-wider">
            Akademik Jamoamiz
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Xalqaro Tajribaga Ega Shifokorlar
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Sizga dars o'tadigan spikerlarimiz Germaniya, Turkiya va AQSh klinikalari amaliyotini o'tagan yetakchi mutaxassislaridir.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERTS.map((expert) => (
            <div 
              key={expert.id}
              className="glass rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 relative group flex flex-col justify-between text-left"
            >
              <div className="space-y-6">
                
                {/* Doctor Visual Frame placeholder with clinical status */}
                <div className="relative w-full h-44 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#121212] border border-white/5 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Glowing stethoscope / medical icon in frame */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-blue/20 text-[9px] font-mono text-brand-blue font-bold">
                    <UserCheck className="w-3 h-3" />
                    <span>TASTIQYANGAN EKSPERT</span>
                  </div>

                  <div className="z-10 text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center mx-auto mb-3">
                      <Stethoscope className="w-6 h-6 text-brand-blue animate-pulse" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white font-display">{expert.name}</h4>
                    <span className="text-xs text-neutral-400">{expert.role}</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Ixtisoslashuv</span>
                    <span className="text-xs font-semibold text-neutral-200">{expert.specialization}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Tibbiyot Universiteti</span>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{expert.university}</p>
                  </div>

                  {/* Doctor quote */}
                  <div className="p-3.5 rounded-xl bg-white/[0.01] border border-white/5 relative">
                    <span className="absolute top-1 left-2 text-xl text-brand-purple font-serif leading-none">“</span>
                    <p className="text-xs italic text-neutral-400 leading-relaxed pl-3 font-light">{expert.quote}</p>
                  </div>
                </div>

              </div>

              {/* Expert Card Footer */}
              <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">Ish Staji</span>
                  <span className="text-xs font-bold text-brand-purple">{expert.experience}</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-brand-purple/10 text-[9px] font-mono font-bold text-brand-purple uppercase">
                  {expert.topicsTaught[0]}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* VIRTUAL LAB O'QISH JARAYONI */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <VirtualLabMonitor />
        </div>
      </section>

      {/* STUDENT RESULTS & CHART VISUALS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/60 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <MetricsDashboard />
        </div>
      </section>

      {/* TESTIMONIALS FIKRLAR */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 blur-[160px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider">
            Talabalar fikrlari
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            iMed Bitiruvchilarining Haqiqiy Muvaffaqiyatlari
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Platformamizda dars olib, o'z kasbiy faoliyatida sezilarli o'zgarishlarga erishgan shifokorlar va shogirdlarimizning sharhlari.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id} 
              className="glass p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-brand-purple/20 transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div className="space-y-6">
                
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic font-light">
                  "{test.text}"
                </p>

                {/* Before vs After blocks */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <div className="p-2.5 rounded bg-red-500/5 border border-red-500/10">
                    <span className="text-[9px] font-mono text-red-400 uppercase block font-bold mb-0.5">Avval:</span>
                    <span className="text-[11px] text-neutral-400 block leading-tight font-light">{test.before}</span>
                  </div>
                  <div className="p-2.5 rounded bg-emerald-500/5 border border-emerald-500/10">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase block font-bold mb-0.5">Keyin:</span>
                    <span className="text-[11px] text-neutral-300 block leading-tight font-light">{test.after}</span>
                  </div>
                </div>

              </div>

              {/* User profile block */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center font-bold text-xs text-white">
                    {test.avatarSeed}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{test.name}</h4>
                    <span className="text-[11px] text-neutral-500 block">{test.role}</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded bg-brand-blue/10 text-[10px] font-bold text-brand-blue font-mono">
                  {test.outcomeMetric}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* MOBILE APP PRESENTATION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090909]/10 to-[#050505] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <InteractiveMobilePhone />
        </div>
      </section>

      {/* AI CAREER ADVISOR CHAT CONSOLE */}
      <section id="advisor" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AIChatAdvisor />
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/40 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-purple/5 blur-[160px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple uppercase tracking-wider">
            Savollar va Javoblar
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Ko'p So'raladigan Savollar
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            iMed Team o'quv tizimi va onlayn platformamiz bo'yicha eng ko'p so'raladigan ma'lumotlar bilan tanishing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-200 text-left"
            >
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between font-semibold text-sm sm:text-base text-white hover:text-brand-blue transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${activeFAQ === index ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>
              {activeFAQ === index && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/5 animate-fade-in font-light">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION (CTA) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/5 bg-gradient-to-t from-brand-blue/5 to-transparent">
        
        <div className="max-w-4xl mx-auto text-center space-y-8 glass p-10 sm:p-16 rounded-[36px] border border-white/10 relative overflow-hidden">
          
          {/* Glowing gradient backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider">
            Yaxshiroq shifokor bo'ling
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Professional Rivojlanish <br />
            Hozirdan Boshlanadi!
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Minglab tibbiyot talabalari va amaliyotchi shifokorlar bilan birgalikda dalillarga asoslangan tibbiyotni bugundan boshlab o'rganing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <a 
              href="#courses" 
              className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/25 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto text-center"
            >
              Hozir boshlash
            </a>
            <a 
              href="#advisor" 
              className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-sm tracking-wide uppercase hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto text-center backdrop-blur-sm"
            >
              Konsultatsiya olish
            </a>
          </div>

          {/* Secure promise flag */}
          <div className="flex items-center justify-center gap-2 pt-6 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            <Shield className="w-4 h-4 text-brand-blue" />
            <span>Muvaffaqiyatli dars kafolati va qayta muloqot tizimi</span>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 py-16 px-4 sm:px-6 lg:px-8 text-neutral-400 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-12">
          
          {/* Logo & description */}
          <div className="md:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="font-display font-extrabold text-lg text-white">iMed Team</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">
              O'zbekistonda dalillarga asoslangan tibbiyot (EBM) tamoyillarini o'rgatuvchi va eng malakali klinik kadrlarni tayyorlovchi yetakchi ta'lim platformasi. 2021-yilda asos solingan.
            </p>
          </div>

          {/* Quick links directions */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">Yo'nalishlar</h4>
            <ul className="space-y-2.5 text-xs text-neutral-500">
              <li><a href="#courses" className="hover:text-white transition-colors">Fundamental Kurslar</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Klinik Kurslar</a></li>
              <li><a href="#experts" className="hover:text-white transition-colors">Bizning Ekspertlar</a></li>
              <li><a href="#simulator" className="hover:text-white transition-colors">Klinik Keys Simulyatori</a></li>
            </ul>
          </div>

          {/* Support and portal links */}
          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider">Platforma</h4>
            <ul className="space-y-2.5 text-xs text-neutral-500">
              <li><a href="#experience" className="hover:text-white transition-colors">Mobil Ilova</a></li>
              <li><a href="#advisor" className="hover:text-white transition-colors">AI Maslahatchi</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Natijalar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sertifikat tekshirish</a></li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-bold text-xs text-white uppercase tracking-wider font-display">Kontaktlar</h4>
            <ul className="space-y-3 text-xs text-neutral-500">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue" />
                <a href="tel:+998901234567" className="hover:text-white font-mono">+998 90 123 45 67</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-purple" />
                <a href="mailto:info@imedteam.uz" className="hover:text-white">info@imedteam.uz</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-brand-blue" />
                <a href="https://t.me/imed_team" className="hover:text-white" target="_blank" rel="noreferrer">Telegram: @imed_team</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright block */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} iMed Team Uzbekistan. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400">Foydalanish shartlari</a>
            <a href="#" className="hover:text-neutral-400">Maxfiylik kelishuvi</a>
          </div>
        </div>

      </footer>

    </div>
  );
}
