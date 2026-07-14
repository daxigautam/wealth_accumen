"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/config/brand";
import { PieChart, Umbrella, ShieldCheck, Landmark, Briefcase, TrendingUp } from "lucide-react";

const orbitNodes = [
  { id: 1, label: "Equity", Icon: TrendingUp, angle: 0 },
  { id: 2, label: "Mutual Funds", Icon: PieChart, angle: 60 },
  { id: 3, label: "Insurance", Icon: ShieldCheck, angle: 120 },
  { id: 4, label: "ETFs", Icon: Landmark, angle: 180 },
  { id: 5, label: "Bonds", Icon: Briefcase, angle: 240 },
  { id: 6, label: "Fixed Deposit", Icon: Umbrella, angle: 300 },
];

export function WealthOrbitHero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)] transition-colors duration-500 pt-24 pb-20">
      {/* Premium Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      {/* Luxury Aurora Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#D4AF37]/20 blur-[130px] rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none z-0" 
      />
      
      {/* Financial/Services Texture Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Professional Blueprint / Planning Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)', backgroundSize: '120px 120px, 120px 120px, 24px 24px, 24px 24px', backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px' }} />
        
        {/* Abstract Animated Market Chart (Subtle) */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] flex items-end justify-between px-[5%] opacity-[0.03] overflow-hidden mask-image:linear-gradient(to_top,black,transparent)">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[var(--background)]/50 to-[var(--background)] z-10" />
          {[...Array(40)].map((_, i) => {
            // Predictable pseudo-random heights based on index to avoid hydration mismatch if needed, but framer-motion handles it client-side usually.
            const h1 = 20 + ((i * 17) % 60);
            const h2 = 30 + ((i * 23) % 70);
            const dur = 6 + ((i * 11) % 8);
            return (
              <motion.div 
                key={i}
                className="w-1 sm:w-2 lg:w-4 bg-gradient-to-t from-[#D4AF37] to-white rounded-t-sm mx-1 relative z-0"
                animate={{ height: [`${h1}%`, `${h2}%`, `${h1}%`] }}
                transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
              />
            );
          })}
        </div>
      </div>
      
      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => {
          const size = (i % 3) + 1.5;
          const left = (i * 17) % 100;
          const top = (i * 23) % 100;
          const duration = (i % 5) + 15;
          const delay = (i % 7) * 2;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
              style={{ width: size + "px", height: size + "px", left: left + "%", top: top + "%", opacity: 0 }}
              animate={{ y: [0, -120], x: [0, (i % 2 === 0 ? 40 : -40)], opacity: [0, 0.7, 0] }}
              transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
            />
          );
        })}
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 mt-12">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div variants={textVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="h-[1px] w-12 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-light tracking-[0.2em] text-sm uppercase">Find Your True North</span>
            </motion.div>
            
            <motion.h1 
              variants={textVariants}
              className="font-sans tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[4.5rem] font-light text-[var(--foreground)] leading-[1.1] mb-6"
            >
              Our Wealth <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] animate-gradient-x block mt-3 text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] leading-[1.2]">
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              variants={textVariants}
              className="text-lg text-[var(--theme-text-muted)] max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 font-light"
            >
              Explore our comprehensive range of bespoke financial solutions designed to help you achieve lasting wealth and freedom.
            </motion.p>
            
            <motion.div 
              variants={textVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
            >
              <Link 
                href={brand.whatsapp}
                target="_blank"
                className="group relative overflow-hidden bg-[#D4AF37] text-[#040F2D] font-light py-4 px-8 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center w-full sm:w-auto min-w-[200px]"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Start Your Journey</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Orbit Content */}
        <div className="flex-1 relative flex items-center justify-center w-full max-w-[500px] lg:max-w-[600px] aspect-square lg:mr-16 xl:mr-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-full h-full"
          >
            {/* Orbital Rings */}
            <div className="absolute inset-0 rounded-full border border-white/5 shadow-[0_0_40px_rgba(255,255,255,0.03)]" />
            <div className="absolute inset-10 rounded-full border border-[#D4AF37]/10 border-dashed" />
            <div className="absolute inset-20 rounded-full border border-white/10" />

            {/* Rotating Orbit Container */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {/* Badges/Planets */}
              {orbitNodes.map((node) => (
                <div 
                  key={node.id}
                  className="absolute inset-0 pointer-events-none"
                  style={{ transform: `rotate(${node.angle}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-auto">
                    {/* 1. Static counter-rotation for the arm angle */}
                    <div style={{ transform: `rotate(-${node.angle}deg)` }}>
                      {/* 2. Dynamic counter-rotation to keep badges upright against orbit */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      >
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + (node.id * 0.1), type: "spring" }}
                          className="flex items-center gap-2 lg:gap-3 bg-[var(--secondary-bg)] backdrop-blur-xl border border-[var(--glass-border)] hover:border-[#D4AF37] hover:bg-[var(--glass-hover-bg)] px-4 py-2.5 lg:px-5 lg:py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer group"
                        >
                          <node.Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                          <span className="text-[11px] lg:text-xs font-light tracking-wider uppercase text-[var(--foreground)] whitespace-nowrap">{node.label}</span>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Center Glass Sphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <motion.div 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden flex items-center justify-center bg-[#040F2D] shadow-[inset_0_0_40px_rgba(255,255,255,0.15),_0_20px_50px_rgba(0,0,0,0.5),_0_0_60px_rgba(212,175,55,0.2)] backdrop-blur-2xl border border-[#D4AF37]"
              >
                {/* 3D Sphere Inner Highlights */}
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_70%,rgba(212,175,55,0.15)_0%,transparent_60%)]" />
                
                {/* Logo inside Sphere */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex items-center justify-center">
                  <Image 
                    src="/assets/logo/logo-white.png" 
                    alt="Wealth Acumen Logo" 
                    fill 
                    className="object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
