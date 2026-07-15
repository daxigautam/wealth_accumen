"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { brand } from "@/config/brand";
import { 
  TrendingUp, 
  Target, 
  Sunset, 
  Calculator, 
  ShieldCheck, 
  Heart, 
  Landmark,
  Briefcase
} from "lucide-react";

const compassNodes = [
  { id: 1, label: "Financial Freedom", Icon: Target, angle: 0 },
  { id: 2, label: "Investment", Icon: TrendingUp, angle: 45 },
  { id: 3, label: "Planning", Icon: Calculator, angle: 90 },
  { id: 4, label: "Retirement", Icon: Sunset, angle: 135 },
  { id: 5, label: "Legacy", Icon: Heart, angle: 180 },
  { id: 6, label: "Protection", Icon: ShieldCheck, angle: 225 },
  { id: 7, label: "Tax", Icon: Landmark, angle: 270 },
  { id: 8, label: "Advisory", Icon: Briefcase, angle: 315 },
];

export function InteractiveCompassHero() {
  const [activeAngle, setActiveAngle] = useState(-2160);
  const [isSpinning, setIsSpinning] = useState(true);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const t1 = setTimeout(() => { setActiveAngle(0); }, 800);
    const t2 = setTimeout(() => { setIsSpinning(false); }, 800 + 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleNodeHover = (angle: number) => {
    if (!isSpinning) setActiveAngle(angle);
  };
  const handleNodeLeave = () => {
    if (!isSpinning) setActiveAngle(0);
  };

  const titleLine1 = "Wealth Acumen".split(" ");
  const titleLine2 = "Invest right. Prosper bright.".split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };



  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)] pt-24 pb-20 transition-colors duration-500"
    >


      {/* Dust Particles */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        {[...Array(12)].map((_, i) => {
          const size = (i % 3) + 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]"
              style={{
                width: size + "px", height: size + "px",
                left: ((i * 17) % 100) + "%",
                top: ((i * 23) % 100) + "%",
                opacity: 0,
              }}
              animate={{
                y: [0, -100], x: [0, (i % 2 === 0 ? 30 : -30)], opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: (i % 5) + 12, repeat: Infinity, ease: "linear", delay: (i % 7) * 1.5,
              }}
            />
          );
        })}
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 mt-12"
      >
        
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left xl:-ml-6 lg:-mt-12 xl:-mt-24 relative">
          
          {/* Layered Premium Hero Background Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[1200px] h-[700px] z-[-1] pointer-events-none overflow-hidden" style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)" }}>
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full opacity-[0.05] blur-[100px]"
              animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Apple-Style Golden Wave Lines */}
          <div className="absolute inset-[-50%] z-[-1] pointer-events-none overflow-hidden opacity-[0.08] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
            <motion.svg
              viewBox="0 0 2000 400"
              preserveAspectRatio="none"
              className="absolute top-1/2 -translate-y-1/2 w-[200%] h-[150%] min-h-[600px]"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <linearGradient id="gold-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="25%" stopColor="#C59B27" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="75%" stopColor="#C59B27" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              <path d="M0,200 Q250,50 500,200 T1000,200 Q1250,50 1500,200 T2000,200" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="1.5" />
              <path d="M0,220 Q250,370 500,220 T1000,220 Q1250,370 1500,220 T2000,220" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="1" />
              <path d="M0,180 Q250,80 500,180 T1000,180 Q1250,80 1500,180 T2000,180" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="0.5" />
              <path d="M0,240 Q250,420 500,240 T1000,240 Q1250,420 1500,240 T2000,240" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="2" />
              <path d="M0,160 Q250,-10 500,160 T1000,160 Q1250,-10 1500,160 T2000,160" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="1" />
              <path d="M0,260 Q250,450 500,260 T1000,260 Q1250,450 1500,260 T2000,260" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="0.5" />
              <path d="M0,140 Q250,-50 500,140 T1000,140 Q1250,-50 1500,140 T2000,140" fill="none" stroke="url(#gold-wave-grad)" strokeWidth="1.5" />
            </motion.svg>
          </div>

          <motion.div
            initial="hidden" animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            <motion.div variants={wordVariants} className="inline-flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="h-px w-12 bg-[#8B6914]" />
              <span className="text-sm font-light tracking-[0.25em] uppercase text-[#8B6914]">Find Your True North</span>
              <div className="h-px w-12 bg-[#8B6914] lg:hidden" />
            </motion.div>
            
            <h1 className="font-heading tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[4.5rem] font-light text-[var(--foreground)] leading-[1.1] mb-6 transition-colors duration-500">
              {titleLine1.map((word, i) => (
                <motion.span key={`line1-${i}`} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
              ))}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C7A2E] via-[#D4AF37] to-[#9C7A2E] bg-[length:200%_auto] animate-gradient-x block mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] leading-[1.2]">
                {titleLine2.map((word, i) => (
                  <motion.span key={`line2-${i}`} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
                ))}
              </span>
            </h1>
            
            <motion.p variants={wordVariants} className="text-lg text-[var(--theme-text-muted)] max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 font-medium transition-colors duration-500">
              No matter where you are in life, our comprehensive approach acts as a compass—guiding you through every financial decision until you reach ultimate freedom.
            </motion.p>
            
            <motion.div variants={wordVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <Link href={brand.whatsapp} target="_blank" className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#8B6914] text-[#040F2D] font-light py-4 px-8 rounded-full shadow-[0_8px_20px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto min-w-[200px]">
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Start Your Journey</span>
              </Link>
              <Link href="/services" className="group relative overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-sm border border-[var(--secondary-border)] text-[var(--foreground)] font-light py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[var(--secondary-hover-bg)] flex items-center justify-center w-full sm:w-auto min-w-[200px]">
                <div className="absolute inset-0 w-full h-full bg-[var(--secondary-bg)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Compass UI */}
        <motion.div 
          className="flex-1 w-full max-w-[420px] lg:max-w-[500px] xl:max-w-[540px] aspect-square relative flex items-center justify-center mx-auto lg:ml-auto lg:mr-16 xl:mr-24 perspective-[1000px]"
        >
          {/* Orbital Outer Rings */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-[-15px] sm:inset-[-50px] rounded-full border border-dashed border-[#8B6914]/30 pointer-events-none" />
          
          {/* Radar Sweep Effect inside compass */}
          <div className="absolute inset-8 sm:inset-0 rounded-full overflow-hidden z-0 mask-image-radial pointer-events-none">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-1/2 w-1/2 h-1/2 bg-gradient-to-br from-[#C5A059]/20 to-transparent origin-bottom-right" />
          </div>

          {/* Core Compass Ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-8 sm:inset-0 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,0.05)] z-10 transform-style-3d transition-colors duration-500"
          >
            <div className="absolute inset-3 rounded-full border border-dashed border-[#8B6914]/20" />
            <div className="absolute inset-10 rounded-full border border-[#8B6914]/10" />
            
            {/* Nodes with Card Tilt */}
            {compassNodes.map((node) => {
              const isHighlighted = (activeAngle % 360 + 360) % 360 === node.angle;
              return (
              <div key={node.id} className="absolute inset-0 pointer-events-none" style={{ transform: `rotate(${node.angle}deg)` }}>
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-auto perspective-[500px]"
                  style={{ transform: `rotate(-${node.angle}deg)` }}
                  onMouseEnter={() => handleNodeHover(node.angle)}
                  onMouseLeave={handleNodeLeave}
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ rotateX: 25, rotateY: 25, scale: 1.2 }}
                    transition={{ delay: 1.2 + (node.id * 0.1), type: "spring" }}
                    className={`
                      w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center group
                      backdrop-blur-md shadow-xl transition-colors duration-500
                      ${isHighlighted 
                        ? 'bg-[#040F2D] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] z-20 scale-110' 
                        : 'bg-[var(--background)] border border-[var(--glass-border)] z-10 hover:border-[#D4AF37] hover:bg-[#040F2D] cursor-pointer'}
                    `}
                  >
                    <node.Icon 
                      className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-colors duration-500
                        ${isHighlighted ? 'text-[#D4AF37]' : 'text-[var(--foreground)] group-hover:text-[#D4AF37]'}
                      `} 
                    />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 1.8 + (node.id * 0.1) }}
                    className={`absolute px-2 py-1 text-[9px] sm:text-xs font-light tracking-widest uppercase transition-all duration-300 leading-tight
                      ${node.angle === 0 
                        ? 'bottom-full mb-2 left-1/2 -translate-x-1/2 text-center w-24 whitespace-normal lg:bottom-auto lg:mb-0 lg:left-1/2 lg:-translate-x-1/2 lg:-top-12 lg:whitespace-nowrap' 
                        : node.angle === 180 
                          ? 'top-full mt-2 left-1/2 -translate-x-1/2 text-center w-24 whitespace-normal lg:top-auto lg:mt-0 lg:left-1/2 lg:-translate-x-1/2 lg:-bottom-12 lg:whitespace-nowrap' 
                          : node.angle > 0 && node.angle < 180 
                            ? 'top-full mt-2 left-1/2 -translate-x-1/2 text-center w-24 whitespace-normal lg:top-auto lg:mt-0 lg:left-auto lg:translate-x-0 lg:-right-28 lg:text-left lg:whitespace-nowrap' 
                            : 'top-full mt-2 left-1/2 -translate-x-1/2 text-center w-24 whitespace-normal lg:top-auto lg:mt-0 lg:left-auto lg:translate-x-0 lg:-left-28 lg:text-right lg:whitespace-nowrap'
                      }
                      ${isHighlighted ? 'text-[#D4AF37] scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'text-[var(--theme-text-muted)]'}
                    `}
                  >
                    {node.label}
                  </motion.span>
                </div>
              </div>
            )})}
          </motion.div>

          {/* Compass Needle */}
          <motion.div
            animate={{ rotate: activeAngle }} 
            transition={{ duration: isSpinning ? 5.5 : 0.6, ease: isSpinning ? [0.15, 0.95, 0.4, 1] : "backOut" }}
            className="absolute z-20 w-20 h-[70%] sm:h-[75%] pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
          >
            <svg viewBox="0 0 100 400" className="w-full h-full">
              <polygon points="50,15 85,200 50,200" fill="url(#gold-grad)" />
              <polygon points="50,15 50,200 15,200" fill="url(#gold-grad-light)" />
              <polygon points="50,385 85,200 50,200" fill="url(#silver-grad)" />
              <polygon points="50,385 50,200 15,200" fill="url(#silver-grad-light)" />
              <defs>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#D4AF37" /><stop offset="100%" stopColor="#8B6914" /></linearGradient>
                <linearGradient id="gold-grad-light" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#F3E5AB" /><stop offset="100%" stopColor="#D4AF37" /></linearGradient>
                <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#A3B5D9" /><stop offset="100%" stopColor="#4A5568" /></linearGradient>
                <linearGradient id="silver-grad-light" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFFFFF" /><stop offset="100%" stopColor="#A3B5D9" /></linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Center Compass Pivot */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#040F2D] backdrop-blur-sm border-2 border-[#D4AF37] z-30 shadow-[0_0_30px_rgba(212,175,55,0.2)] flex items-center justify-center pointer-events-none p-4 lg:p-5 transition-colors duration-500"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src="/assets/logo/logo-white.png" 
                alt="Wealth Acumen Logo" 
                fill 
                className="object-contain object-center drop-shadow-sm transition-opacity duration-300" 
                priority 
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .mask-image-radial { -webkit-mask-image: radial-gradient(circle, transparent 20%, black 70%); mask-image: radial-gradient(circle, transparent 20%, black 70%); }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
}
