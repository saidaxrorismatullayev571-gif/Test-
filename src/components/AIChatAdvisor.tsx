import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, MessageSquare } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

const QUICK_QUESTIONS = [
  "Kardiologiya kursida nimalar o'rgatiladi?",
  "EBM darslari qaysi standartlar asosida o'tiladi?",
  "Rezidenturaga tayyorgarlik ko'rish kursi haqida ma'lumot bering.",
  "Darslarni bo'lib to'lash tizimi qanday ishlaydi?"
];

export default function AIChatAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Assalomu alaykum! iMed Team sun'iy intellekt maslahat markaziga xush kelibsiz. Men sizga kardiologiya, anatomiya, farmakologiya va boshqa kurslarimiz haqida batafsil ma'lumot bera olaman. Tibbiyotda karyera qurish bo'yicha qanday savolingiz bor?",
      time: new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userText = textToSend;
    const userMsgTime = new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { sender: 'user', text: userText, time: userMsgTime }]);
    setUserInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/gemini/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText })
      });
      const data = await response.json();
      const botMsgTime = new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
      if (response.ok) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.text, time: botMsgTime }]);
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: data.error || 'Ulanishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.', time: botMsgTime }]);
      }
    } catch (err) {
      const botMsgTime = new Date().toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
      setMessages(prev => [...prev, { sender: 'bot', text: 'Kechirasiz, sun\'iy intellekt xizmati bilan aloqa o\'rnatilmadi. Iltimos, keyinroq qayta urinib ko\'ring.', time: botMsgTime }]);
    } finally {
      setIsSending(false);
    }
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isSending) return;
    handleSendMessage(userInput);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Pitch block (5 cols) */}
      <div className="lg:col-span-5 space-y-6 text-left flex flex-col justify-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-xs font-semibold text-brand-blue uppercase tracking-wider self-start">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
          Sun'iy Intellekt Maslahat
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
          Klinik Karyerangizni <br />
          <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-pink-500 bg-clip-text text-transparent">AI Maslahatchi</span> Bilan <br />
          Rejalashtiring!
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
          Qaysi tibbiy yo'nalishni tanlashda ikkilanyapsiz? Yoki kurslarimiz haqida batafsilroq bilmoqchimisiz? Bizning <strong className="text-brand-blue">iMed AI Maslahatchi</strong> platformamiz orqali hozir bepul maslahat oling! U sizning savollaringizga tibbiyot standartlari va platformamiz o'quv dasturi asosida zudlik bilan professional javob beradi.
        </p>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5">
          <div className="flex items-center gap-2.5 text-xs font-semibold text-neutral-200">
            <MessageSquare className="w-4 h-4 text-brand-purple" />
            <span>Xizmat haqiqiy Gemini 3.5 API ga ulangan</span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed font-light">
            Siz darslar bo'yicha savol berishingiz, tibbiy yo'nalish tanlashda yoki malaka oshirish masalalarida maslahat so'rashingiz mumkin.
          </p>
        </div>
      </div>

      {/* Right Chat Terminal column (7 cols) */}
      <div className="lg:col-span-7 bg-[#0b0b0b]/90 border border-white/5 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-[520px]">
        
        {/* Chatbot Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white shadow-lg shadow-brand-blue/10">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block font-display">iMed AI Maslahat</span>
              <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                <span>TIZIM ONLINE VA SAVOLLARINGIZGA TAYYOR</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider hidden sm:inline">Gemini Powered</span>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-grow my-4 overflow-y-auto space-y-4 pr-1 hide-scrollbar">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2 animate-fade-in`}
            >
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                </div>
              )}
              <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-brand-blue text-white rounded-br-none shadow-md shadow-brand-blue/10' 
                  : 'bg-white/5 border border-white/5 text-neutral-200 rounded-bl-none'
              }`}>
                <p className="whitespace-pre-line font-light">{msg.text}</p>
                <span className="text-[9px] text-neutral-500 block text-right mt-1.5 font-mono">{msg.time}</span>
              </div>
            </div>
          ))}
          
          {isSending && (
            <div className="flex justify-start items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              </div>
              <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-2.5 text-xs text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping"></span>
                <span className="font-light">AI maslahatchi tahlil qilmoqda...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Question Chips */}
        {messages.length === 1 && !isSending && (
          <div className="mb-3.5">
            <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-2 text-left">Tezkor savollar:</span>
            <div className="flex flex-wrap gap-2 text-left">
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  id={`quick-question-${i}`}
                  onClick={() => handleSendMessage(q)}
                  className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-brand-blue/10 border border-white/5 hover:border-brand-blue/20 text-[11px] text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Input form */}
        <form onSubmit={onSubmitForm} className="relative mt-auto pt-3 border-t border-white/5">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isSending}
            placeholder="Savolingizni yoki sohangizni shu yerga yozing..."
            className="w-full bg-white/5 border border-white/5 hover:border-white/10 focus:border-brand-blue/40 text-xs sm:text-sm rounded-xl py-3.5 pl-4 pr-12 text-white outline-none placeholder:text-neutral-500 disabled:opacity-50 font-light"
          />
          <button
            type="submit"
            disabled={isSending || !userInput.trim()}
            className="absolute right-2 top-[18px] w-10 h-10 rounded-lg bg-brand-blue hover:bg-brand-blue/90 disabled:bg-white/5 disabled:text-neutral-500 transition-colors flex items-center justify-center text-white"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
}
