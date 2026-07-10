import React, { useEffect, useRef, useState } from 'react';
import { Activity, Brain, Heart, Layers, Sparkles } from 'lucide-react';

export default function FuturisticMedicalHub() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angle = 0;
    let pulseScale = 1;
    let pulseDirection = 1;

    const resize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth || 600;
        canvas.height = canvas.parentElement.clientHeight || 500;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Center relative mouse positions
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) * 0.4,
        y: (e.clientY - rect.top - rect.height / 2) * 0.4,
      });
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Parallax offset based on mouse
      const px = mousePos.x * 0.5;
      const py = mousePos.y * 0.5;

      angle += 0.01;
      pulseScale += 0.005 * pulseDirection;
      if (pulseScale > 1.15 || pulseScale < 0.95) {
        pulseDirection *= -1;
      }

      // --- 1. DEEP GRID AND NEBULOUS GLOW ---
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = px % step; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = py % step; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Radial background glow behind hub
      const bgGlow = ctx.createRadialGradient(cx + px, cy + py, 10, cx + px, cy + py, 220);
      bgGlow.addColorStop(0, 'rgba(124, 58, 237, 0.08)');
      bgGlow.addColorStop(0.5, 'rgba(79, 140, 255, 0.04)');
      bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(cx + px, cy + py, 250, 0, Math.PI * 2);
      ctx.fill();

      // --- 2. CENTRAL ADVANCED MEDICAL HUB (SPHERE WITH ORBITS) ---
      const hubX = cx + px;
      const hubY = cy + py;
      const hubRadius = 65 * pulseScale;

      // Draw orbit rings
      ctx.lineWidth = 1.5;
      // Orbit 1: Blue
      ctx.strokeStyle = 'rgba(79, 140, 255, 0.2)';
      ctx.beginPath();
      ctx.ellipse(hubX, hubY, 150, 60, angle, 0, Math.PI * 2);
      ctx.stroke();

      // Orbit 2: Purple
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.2)';
      ctx.beginPath();
      ctx.ellipse(hubX, hubY, 120, 80, -angle * 1.5, 0, Math.PI * 2);
      ctx.stroke();

      // Hub outer glowing shield
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius + 15, 0, Math.PI * 2);
      ctx.stroke();

      // Hub neon ring segments
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#4F8CFF';
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius + 15, angle, angle + Math.PI * 0.4);
      ctx.stroke();

      ctx.strokeStyle = '#7C3AED';
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius + 15, angle + Math.PI, angle + Math.PI * 1.4);
      ctx.stroke();

      // Hub core gradient circle
      const hubGrad = ctx.createRadialGradient(hubX, hubY, 5, hubX, hubY, hubRadius);
      hubGrad.addColorStop(0, '#ffffff');
      hubGrad.addColorStop(0.3, '#4F8CFF');
      hubGrad.addColorStop(0.7, '#7C3AED');
      hubGrad.addColorStop(1, 'rgba(12, 12, 12, 0.9)');
      ctx.fillStyle = hubGrad;
      ctx.beginPath();
      ctx.arc(hubX, hubY, hubRadius, 0, Math.PI * 2);
      ctx.fill();

      // Hub Holographic Core Lines & Data Node
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(hubX, hubY, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw particle emissions from hub
      for (let i = 0; i < 6; i++) {
        const pAngle = angle + (i * Math.PI) / 3;
        const dist = hubRadius + 30 + Math.sin(angle * 3 + i) * 15;
        const px_i = hubX + Math.cos(pAngle) * dist;
        const py_i = hubY + Math.sin(pAngle) * dist;

        ctx.fillStyle = i % 2 === 0 ? '#4F8CFF' : '#7C3AED';
        ctx.beginPath();
        ctx.arc(px_i, py_i, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Connecting filament to hub
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(hubX, hubY);
        ctx.lineTo(px_i, py_i);
        ctx.stroke();
      }

      // --- 3. FLOATING COMPONENT: 3D DNA HELIX (LEFT SIDE) ---
      const dnaX = cx - 180 + px * 0.7;
      const dnaY = cy - 80 + py * 0.7;
      const dnaW = 120;
      const dnaH = 140;

      // DNA backbone and rungs
      const rungs = 12;
      for (let i = 0; i < rungs; i++) {
        const t = (i / rungs) * Math.PI * 2.5 + angle * 1.5;
        const yOffset = (i - rungs / 2) * 12;

        const x1 = dnaX + Math.sin(t) * 25;
        const y1 = dnaY + yOffset;
        const x2 = dnaX + Math.sin(t + Math.PI) * 25;
        const y2 = dnaY + yOffset;

        // Draw connection rung
        ctx.strokeStyle = 'rgba(79, 140, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Node 1 (Blue)
        ctx.fillStyle = '#4F8CFF';
        ctx.shadowColor = '#4F8CFF';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x1, y1, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Node 2 (Purple)
        ctx.fillStyle = '#7C3AED';
        ctx.shadowColor = '#7C3AED';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x2, y2, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // --- 4. FLOATING COMPONENT: NEURAL BRAIN MESH (RIGHT SIDE) ---
      const brainX = cx + 180 + px * 0.8;
      const brainY = cy - 90 + py * 0.8;
      const nodes = [
        { x: -40, y: -30, size: 4 },
        { x: -10, y: -45, size: 5 },
        { x: 25, y: -35, size: 4 },
        { x: 45, y: -5, size: 5 },
        { x: 20, y: 25, size: 6 },
        { x: -15, y: 35, size: 4 },
        { x: -45, y: 15, size: 5 },
        { x: 0, y: 0, size: 7 }, // Central node
        { x: -25, y: -10, size: 3 },
        { x: 20, y: -10, size: 3.5 },
      ];

      // Draw synapses
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.18)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 65) {
            ctx.beginPath();
            ctx.moveTo(brainX + nodes[i].x, brainY + nodes[i].y);
            ctx.lineTo(brainX + nodes[j].x, brainY + nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw firing synaptical signals
      nodes.forEach((n, idx) => {
        const nx = brainX + n.x;
        const ny = brainY + n.y;
        const glowFactor = Math.sin(angle * 2.5 + idx) * 3 + 4;

        ctx.fillStyle = idx % 3 === 0 ? '#ffffff' : '#7C3AED';
        ctx.shadowColor = '#7C3AED';
        ctx.shadowBlur = glowFactor;
        ctx.beginPath();
        ctx.arc(nx, ny, n.size * 0.9, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // --- 5. FLOATING COMPONENT: CARDIOGRAM PULSE HEART (BOTTOM CENTER-RIGHT) ---
      const cardioX = cx + 160 + px * 0.6;
      const cardioY = cy + 100 + py * 0.6;

      // Draw EKG green/blue line
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cardioX - 60, cardioY);
      ctx.lineTo(cardioX - 35, cardioY);
      ctx.lineTo(cardioX - 25, cardioY - 15);
      ctx.lineTo(cardioX - 15, cardioY + 20);
      ctx.lineTo(cardioX - 5, cardioY - 40);
      ctx.lineTo(cardioX + 5, cardioY + 45);
      ctx.lineTo(cardioX + 12, cardioY - 10);
      ctx.lineTo(cardioX + 18, cardioY);
      ctx.lineTo(cardioX + 45, cardioY);
      ctx.stroke();

      // Pulsing indicator dot on EKG
      const pulseIndex = (angle * 12) % 100;
      const dotX = cardioX - 60 + pulseIndex;
      let dotY = cardioY;
      if (pulseIndex > 25 && pulseIndex <= 35) dotY = cardioY - 15 + (pulseIndex - 25) * 3.5;
      if (pulseIndex > 35 && pulseIndex <= 45) dotY = cardioY + 20 - (pulseIndex - 35) * 6;
      if (pulseIndex > 45 && pulseIndex <= 55) dotY = cardioY - 40 + (pulseIndex - 45) * 8.5;
      
      ctx.fillStyle = '#22c55e';
      ctx.shadowColor = '#22c55e';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // --- 6. FLOATING STAT PANELS & HOLOGRAMS OVERLAYED (RENDERED IN HTML BELOW) ---
      // Draw hologram connections to hub
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(hubX, hubY);
      ctx.lineTo(dnaX, dnaY);
      ctx.moveTo(hubX, hubY);
      ctx.lineTo(brainX, brainY);
      ctx.moveTo(hubX, hubY);
      ctx.lineTo(cardioX, cardioY);
      ctx.stroke();
      ctx.setLineDash([]); // Reset line dash

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mousePos]);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[500px] flex items-center justify-center select-none overflow-hidden">
      
      {/* Absolute Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 block pointer-events-auto" />

      {/* FLOATING GLASS PANELS & METRICS (HTML layers on top of Canvas) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        
        {/* Hologram Card 1: EBM Standards (Top Left) */}
        <div 
          style={{
            transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="absolute top-12 left-6 xs:left-12 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setIsHovered('ebm')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={`p-4 rounded-2xl glass transition-all duration-300 ${
            isHovered === 'ebm' ? 'border-brand-blue/60 -translate-y-1.5 shadow-[0_0_20px_rgba(79,140,255,0.15)] bg-neutral-900/80' : 'border-white/5 bg-[#111111]/45'
          } backdrop-blur-md`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-blue/15 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                <Layers className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">STANDART</span>
                <span className="text-xs font-bold text-white font-display">100% EBM Dalillar</span>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-2 text-[10px] text-neutral-400">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span>UpToDate & PubMed integratsiyasi</span>
            </div>
          </div>
        </div>

        {/* Hologram Card 2: Neural Diagnostics (Top Right) */}
        <div 
          style={{
            transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="absolute top-16 right-4 xs:right-10 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setIsHovered('neural')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={`p-4 rounded-2xl glass transition-all duration-300 ${
            isHovered === 'neural' ? 'border-brand-purple/60 -translate-y-1.5 shadow-[0_0_20px_rgba(124,58,237,0.15)] bg-neutral-900/80' : 'border-white/5 bg-[#111111]/45'
          } backdrop-blur-md`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-purple/15 flex items-center justify-center text-brand-purple border border-brand-purple/20">
                <Brain className="w-4 h-4 animate-spin-slow" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">INTELLIGENCE</span>
                <span className="text-xs font-bold text-white font-display">AI Klinik Diagnostika</span>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-neutral-400 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-brand-purple animate-pulse" />
              <span>Real-time keys modeleri</span>
            </div>
          </div>
        </div>

        {/* Hologram Card 3: Live EKG Status (Bottom Left) */}
        <div 
          style={{
            transform: `translate(${mousePos.x * 0.12}px, ${mousePos.y * 0.12}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="absolute bottom-12 left-4 xs:left-8 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setIsHovered('cardio')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={`p-4 rounded-2xl glass transition-all duration-300 ${
            isHovered === 'cardio' ? 'border-emerald-500/60 -translate-y-1.5 shadow-[0_0_20px_rgba(16,185,129,0.15)] bg-neutral-900/80' : 'border-white/5 bg-[#111111]/45'
          } backdrop-blur-md`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">VITAL SIGNS</span>
                <span className="text-xs font-bold text-white font-display">EKB & Kardio Monitor</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
              <span className="text-emerald-400">PULSE: 72 BPM</span>
              <span className="text-neutral-500 ml-3">ST-ELEVATION: NONE</span>
            </div>
          </div>
        </div>

        {/* Hologram Card 4: Interactive Dashboard (Bottom Right) */}
        <div 
          style={{
            transform: `translate(${mousePos.x * 0.22}px, ${mousePos.y * 0.22}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          className="absolute bottom-16 right-6 xs:right-12 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setIsHovered('platform')}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={`p-4 rounded-2xl glass transition-all duration-300 ${
            isHovered === 'platform' ? 'border-brand-purple/60 -translate-y-1.5 shadow-[0_0_20px_rgba(124,58,237,0.15)] bg-neutral-900/80' : 'border-white/5 bg-[#111111]/45'
          } backdrop-blur-md`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-brand-purple/15 flex items-center justify-center text-brand-purple border border-brand-purple/20">
                <Heart className="w-4 h-4 fill-brand-purple animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">DIAGNOSTICS</span>
                <span className="text-xs font-bold text-white font-display">Tibbiy Mantiqiy Qobiliyat</span>
              </div>
            </div>
            <div className="mt-2 text-[10px] text-neutral-500 font-mono text-right">
              SYSTEM HEALTH: <span className="text-emerald-400">100% OK</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
