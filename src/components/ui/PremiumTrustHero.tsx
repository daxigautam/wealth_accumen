"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Award, Clock, Users, IndianRupee } from "lucide-react";
import { useTheme } from "next-themes";

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    let animationFrame: number;
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

export function PremiumTrustHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const gridColor = isDark ? "rgba(255,255,255,1)" : "rgba(4,15,45,1)";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[var(--background)] transition-colors duration-500">
      {/* Subtle light background glowing accents */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-[var(--foreground)] opacity-5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none transition-colors duration-500" style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <span className="text-xs font-light tracking-[0.2em] uppercase text-[#D4AF37]">Built on Integrity</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl font-light text-[var(--foreground)] leading-[1.1] mb-6 transition-colors duration-500">
              Your Trusted Partner in <span className="italic text-[#D4AF37]">Wealth</span>
            </h1>
            <p className="text-lg text-[var(--theme-text-muted)] max-w-2xl mx-auto transition-colors duration-500">
              Guiding Indian families through generations with transparent, goal-oriented, and personalized financial strategies.
            </p>
          </motion.div>
        </div>

        {/* Floating Glass Cards Grid/Constellation */}
        <div className="relative w-full h-[450px] md:h-[550px] hidden md:block mt-8">
          
          {/* SEBI Card - Top Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-[0%] left-[10%] w-[260px]"
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_20px_40px_rgba(4,15,45,0.05)] rounded-3xl p-5 flex items-center gap-4 group hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--foreground)] flex items-center justify-center shrink-0 transition-colors duration-500">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-light text-[var(--foreground)] text-lg leading-tight transition-colors duration-500">SEBI</h3>
                <p className="text-[10px] font-light text-[#D4AF37] uppercase tracking-widest">Registered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* AMFI Card - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-[5%] right-[10%] w-[260px]"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_20px_40px_rgba(4,15,45,0.05)] rounded-3xl p-5 flex items-center gap-4 group hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--foreground)] flex items-center justify-center shrink-0 transition-colors duration-500">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-light text-[var(--foreground)] text-lg leading-tight transition-colors duration-500">AMFI</h3>
                <p className="text-[10px] font-light text-[#D4AF37] uppercase tracking-widest">Registered</p>
              </div>
            </motion.div>
          </motion.div>

          {/* 15+ Years Card - Middle Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-[40%] left-[2%] w-[240px]"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[0_20px_40px_rgba(4,15,45,0.08)] rounded-3xl p-6 text-center transition-colors duration-500"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-4xl font-light text-[var(--foreground)] mb-1 transition-colors duration-500">
                <Counter target={15} suffix="+" />
              </h3>
              <p className="text-sm font-medium text-[var(--theme-text-muted)] transition-colors duration-500">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* 500+ Families Card - Center/Bottom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[320px] z-30"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="bg-[var(--foreground)] backdrop-blur-xl border border-[#D4AF37]/40 shadow-[0_30px_60px_rgba(4,15,45,0.2)] rounded-3xl p-8 text-center transition-colors duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--background)] opacity-20 flex items-center justify-center mb-4 border border-white/10 transition-colors duration-500">
                <Users className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-5xl font-light text-[var(--background)] mb-2 transition-colors duration-500">
                <Counter target={500} suffix="+" />
              </h3>
              <p className="text-sm font-light text-[#D4AF37] tracking-widest uppercase">Happy Families</p>
            </motion.div>
          </motion.div>

          {/* ₹250Cr+ Assets Card - Middle Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[45%] right-[2%] w-[260px]"
          >
            <motion.div 
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] shadow-[0_20px_40px_rgba(4,15,45,0.08)] rounded-3xl p-6 text-center transition-colors duration-500"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                <IndianRupee className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-4xl font-light text-[var(--foreground)] mb-1 transition-colors duration-500">
                <Counter target={250} prefix="₹" suffix="Cr+" />
              </h3>
              <p className="text-sm font-medium text-[var(--theme-text-muted)] transition-colors duration-500">Assets Guided</p>
            </motion.div>
          </motion.div>

        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 md:hidden mt-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--glass-bg)] border border-[#D4AF37]/30 shadow-md rounded-2xl p-4 flex flex-col items-center text-center transition-colors duration-500">
                    <ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-2" />
                    <h3 className="font-light text-[var(--foreground)] transition-colors duration-500">SEBI</h3>
                    <p className="text-[10px] font-light text-[#D4AF37] uppercase">Registered</p>
                </div>
                <div className="bg-[var(--glass-bg)] border border-[#D4AF37]/30 shadow-md rounded-2xl p-4 flex flex-col items-center text-center transition-colors duration-500">
                    <Award className="w-8 h-8 text-[#D4AF37] mb-2" />
                    <h3 className="font-light text-[var(--foreground)] transition-colors duration-500">AMFI</h3>
                    <p className="text-[10px] font-light text-[#D4AF37] uppercase">Registered</p>
                </div>
            </div>
            
            <div className="bg-[var(--foreground)] border border-[#D4AF37]/40 shadow-xl rounded-3xl p-6 text-center mt-2 transition-colors duration-500">
              <Users className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-outfit)] text-4xl font-light text-[var(--background)] mb-1 transition-colors duration-500">
                <Counter target={500} suffix="+" />
              </h3>
              <p className="text-xs font-light text-[#D4AF37] tracking-widest uppercase">Happy Families</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-md rounded-2xl p-4 text-center transition-colors duration-500">
                  <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-light text-[var(--foreground)] mb-1 transition-colors duration-500">
                    <Counter target={15} suffix="+" />
                  </h3>
                  <p className="text-[10px] font-medium text-[var(--theme-text-muted)] transition-colors duration-500">Years</p>
                </div>
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-md rounded-2xl p-4 text-center transition-colors duration-500">
                  <IndianRupee className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-light text-[var(--foreground)] mb-1 transition-colors duration-500">
                    <Counter target={250} prefix="₹" suffix="Cr+" />
                  </h3>
                  <p className="text-[10px] font-medium text-[var(--theme-text-muted)] transition-colors duration-500">Assets</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
