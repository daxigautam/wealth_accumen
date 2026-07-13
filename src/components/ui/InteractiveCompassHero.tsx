"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  
  // Removed Parallax Setup

  useEffect(() => {
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

  // Split text words
  const titleLine1 = "Wealth Acumen".split(" ");
  const titleLine2 = "Invest right. Prosper bright.".split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#040F2D] pt-24 pb-20"
    >


      {/* Subtle Blueprint Grid Pattern (Faint Grid Texture) */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
      }} />

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
          
          {/* Layered Premium Hero Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] max-w-[1200px] h-[700px] z-[-1] pointer-events-none overflow-hidden" style={{ maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)" }}>
            
            {/* 1. Large Blurred Gold Blob */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full opacity-[0.08] blur-[100px]"
              animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.09, 0.06] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />


            {/* 2. Thin Flowing Golden Wave Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.05]"
              viewBox="0 0 1000 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="layeredGoldGradient" x1="0" y1="200" x2="1000" y2="200" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="20%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="80%" stopColor="#D4AF37" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.g
                animate={{ x: [0, -600] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                stroke="url(#layeredGoldGradient)"
                fill="none"
              >
                <path d="M 0 200 Q 150 50, 300 200 T 600 200 T 900 200 T 1200 200 T 1500 200 T 1800 200 T 2100 200 T 2400 200" strokeWidth="1" opacity="0.8" />
                <path d="M -150 200 Q 0 120, 150 200 T 450 200 T 750 200 T 1050 200 T 1350 200 T 1650 200 T 1950 200 T 2250 200" strokeWidth="1.5" opacity="0.5" />
                <path d="M -300 200 Q -150 10, 0 200 T 300 200 T 600 200 T 900 200 T 1200 200 T 1500 200 T 1800 200 T 2100 200 T 2400 200" strokeWidth="0.5" opacity="1" />
              </motion.g>
            </svg>

            {/* 3. Faint Finance Keywords */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div className="absolute top-[20%] left-[15%] text-[#D4AF37] opacity-[0.03] text-2xl font-bold tracking-widest uppercase" animate={{ y: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity }}>INVESTMENT</motion.div>
              <motion.div className="absolute bottom-[25%] right-[20%] text-[#D4AF37] opacity-[0.03] text-3xl font-bold tracking-widest uppercase" animate={{ y: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity }}>GROWTH</motion.div>
              <motion.div className="absolute top-[35%] right-[10%] text-[#D4AF37] opacity-[0.02] text-xl font-bold tracking-widest uppercase" animate={{ x: [0, -15, 0] }} transition={{ duration: 14, repeat: Infinity }}>LEGACY</motion.div>
              <motion.div className="absolute bottom-[15%] left-[25%] text-[#D4AF37] opacity-[0.02] text-lg font-bold tracking-widest uppercase" animate={{ x: [0, 10, 0] }} transition={{ duration: 9, repeat: Infinity }}>RETIREMENT</motion.div>
              <motion.div className="absolute top-[60%] left-[10%] text-[#D4AF37] opacity-[0.03] text-2xl font-bold tracking-widest uppercase" animate={{ y: [0, -20, 0] }} transition={{ duration: 16, repeat: Infinity }}>PROTECTION</motion.div>
            </div>

            {/* 4. Tiny Glowing Gold Particles */}
            {[...Array(25)].map((_, i) => {
              const size = (i % 3) + 1;
              const left = ((i * 37) % 100);
              const top = ((i * 41) % 100);
              const blur = (i % 2) + 1;
              const yMovement = ((i % 5) - 2) * 40; 
              const xMovement = ((i % 7) - 3) * 30; 
              const maxOpacity = (i % 5) * 0.1 + 0.3; 
              const duration = (i % 10) + 15; 
              const delay = (i % 8) * 2; 

              return (
                <motion.div
                  key={`combo-dust-${i}`}
                  className="absolute rounded-full bg-[#D4AF37]"
                  style={{
                    width: size,
                    height: size,
                    left: `${left}%`,
                    top: `${top}%`,
                    filter: `blur(${blur}px)`,
                    boxShadow: "0 0 5px rgba(212,175,55,0.8)",
                  }}
                  animate={{
                    y: [0, yMovement, 0],
                    x: [0, xMovement, 0],
                    opacity: [0, maxOpacity, 0],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                  }}
                />
              );
            })}
          </div>

          <motion.div
            initial="hidden" animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          >
            <motion.div variants={wordVariants} className="inline-flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="h-px w-12 bg-[#8B6914]" />
              <span className="text-sm font-bold tracking-[0.25em] uppercase text-[#8B6914]">Find Your True North</span>
              <div className="h-px w-12 bg-[#8B6914] lg:hidden" />
            </motion.div>
            
            <h1 className="font-serif tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[4.5rem] font-bold text-white leading-[1.1] mb-6">
              {titleLine1.map((word, i) => (
                <motion.span key={`line1-${i}`} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
              ))}
              <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C7A2E] via-[#C5A059] to-[#9C7A2E] bg-[length:200%_auto] animate-gradient-x block mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] leading-[1.2]">
                {titleLine2.map((word, i) => (
                  <motion.span key={`line2-${i}`} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
                ))}
              </span>
            </h1>
            
            <motion.p variants={wordVariants} className="text-lg text-[#A3B5D9] max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
              No matter where you are in life, our comprehensive approach acts as a compass—guiding you through every financial decision until you reach ultimate freedom.
            </motion.p>
            
            <motion.div variants={wordVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <Link href={brand.whatsapp} target="_blank" className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#8B6914] text-[#040F2D] font-bold py-4 px-8 rounded-full shadow-[0_8px_20px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto min-w-[200px]">
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Start Your Journey</span>
              </Link>
              <Link href="/services" className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/10 flex items-center justify-center w-full sm:w-auto min-w-[200px]">
                <div className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
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
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-[-30px] sm:inset-[-50px] rounded-full border border-dashed border-[#8B6914]/30 pointer-events-none" />
          
          {/* Radar Sweep Effect inside compass */}
          <div className="absolute inset-0 rounded-full overflow-hidden z-0 mask-image-radial pointer-events-none">
             <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-0 right-1/2 w-1/2 h-1/2 bg-gradient-to-br from-[#C5A059]/30 to-transparent origin-bottom-right" />
          </div>

          {/* Core Compass Ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-[#C5A059]/30 bg-[#0B1736]/30 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,0.1)] z-10 transform-style-3d"
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
                        ? 'bg-[#D4AF37] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] z-20 scale-110' 
                        : 'bg-[#040F2D] border border-white/10 z-10 hover:border-[#D4AF37] hover:bg-[#D4AF37] cursor-pointer'}
                    `}
                  >
                    <node.Icon className={`transition-colors duration-300 ${isHighlighted ? 'w-6 h-6 lg:w-7 lg:h-7 text-[#040F2D]' : 'w-5 h-5 lg:w-6 lg:h-6 text-[#8B9ECC] group-hover:text-[#040F2D]'}`} />
                  </motion.div>
                  <motion.span 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 + (node.id * 0.1) }}
                    className={`absolute ${node.angle === 0 ? '-top-12' : node.angle === 180 ? '-bottom-12' : node.angle > 0 && node.angle < 180 ? '-right-28' : '-left-28'} 
                      px-2 py-1 text-[10px] sm:text-xs font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300
                      ${isHighlighted ? 'text-[#D4AF37] scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'text-[#8B9ECC]'}
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
            className="absolute z-20 w-20 h-[75%] pointer-events-none drop-shadow-[0_10px_20px_rgba(4,15,45,0.2)]"
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
            className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#040F2D] backdrop-blur-sm border-2 border-[#D4AF37] z-30 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center pointer-events-none p-4 lg:p-5"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image src="/assets/logo/logo-white.png" alt="Wealth Acumen Logo" fill className="object-contain object-center drop-shadow-md" priority />
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
