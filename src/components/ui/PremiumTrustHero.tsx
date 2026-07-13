"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Award, Clock, Users, IndianRupee } from "lucide-react";

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
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#FCF9F4]">
      {/* Subtle light background glowing accents */}
      <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-white blur-[100px] rounded-full pointer-events-none" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(4,15,45,1) 1px, transparent 1px), linear-gradient(90deg, rgba(4,15,45,1) 1px, transparent 1px)",
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
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37]">Built on Integrity</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </div>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl font-bold text-[#040F2D] leading-[1.1] mb-6">
              Your Trusted Partner in <span className="italic text-[#D4AF37]">Wealth</span>
            </h1>
            <p className="text-lg text-[#5B5955] max-w-2xl mx-auto">
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
              className="bg-white/80 backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_20px_40px_rgba(4,15,45,0.05)] rounded-3xl p-5 flex items-center gap-4 group hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#040F2D] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-bold text-[#040F2D] text-lg leading-tight">SEBI</h3>
                <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-widest">Registered</p>
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
              className="bg-white/80 backdrop-blur-xl border border-[#D4AF37]/30 shadow-[0_20px_40px_rgba(4,15,45,0.05)] rounded-3xl p-5 flex items-center gap-4 group hover:border-[#D4AF37] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-[#040F2D] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-bold text-[#040F2D] text-lg leading-tight">AMFI</h3>
                <p className="text-[10px] font-semibold text-[#D4AF37] uppercase tracking-widest">Registered</p>
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
              className="bg-white/90 backdrop-blur-xl border border-[#040F2D]/10 shadow-[0_20px_40px_rgba(4,15,45,0.08)] rounded-3xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-[#040F2D] mb-1">
                <Counter target={15} suffix="+" />
              </h3>
              <p className="text-sm font-medium text-[#5B5955]">Years of Excellence</p>
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
              className="bg-[#040F2D] backdrop-blur-xl border border-[#D4AF37]/40 shadow-[0_30px_60px_rgba(4,15,45,0.2)] rounded-3xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                <Users className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-5xl font-bold text-white mb-2">
                <Counter target={500} suffix="+" />
              </h3>
              <p className="text-sm font-semibold text-[#D4AF37] tracking-widest uppercase">Happy Families</p>
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
              className="bg-white/90 backdrop-blur-xl border border-[#040F2D]/10 shadow-[0_20px_40px_rgba(4,15,45,0.08)] rounded-3xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                <IndianRupee className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-[#040F2D] mb-1">
                <Counter target={250} prefix="₹" suffix="Cr+" />
              </h3>
              <p className="text-sm font-medium text-[#5B5955]">Assets Guided</p>
            </motion.div>
          </motion.div>

        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 md:hidden mt-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 border border-[#D4AF37]/30 shadow-md rounded-2xl p-4 flex flex-col items-center text-center">
                    <ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-2" />
                    <h3 className="font-bold text-[#040F2D]">SEBI</h3>
                    <p className="text-[10px] font-semibold text-[#D4AF37] uppercase">Registered</p>
                </div>
                <div className="bg-white/80 border border-[#D4AF37]/30 shadow-md rounded-2xl p-4 flex flex-col items-center text-center">
                    <Award className="w-8 h-8 text-[#D4AF37] mb-2" />
                    <h3 className="font-bold text-[#040F2D]">AMFI</h3>
                    <p className="text-[10px] font-semibold text-[#D4AF37] uppercase">Registered</p>
                </div>
            </div>
            
            <div className="bg-[#040F2D] border border-[#D4AF37]/40 shadow-xl rounded-3xl p-6 text-center mt-2">
              <Users className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-outfit)] text-4xl font-bold text-white mb-1">
                <Counter target={500} suffix="+" />
              </h3>
              <p className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase">Happy Families</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="bg-white/90 border border-[#040F2D]/10 shadow-md rounded-2xl p-4 text-center">
                  <Clock className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[#040F2D] mb-1">
                    <Counter target={15} suffix="+" />
                  </h3>
                  <p className="text-[10px] font-medium text-[#5B5955]">Years</p>
                </div>
                <div className="bg-white/90 border border-[#040F2D]/10 shadow-md rounded-2xl p-4 text-center">
                  <IndianRupee className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[#040F2D] mb-1">
                    <Counter target={250} prefix="₹" suffix="Cr+" />
                  </h3>
                  <p className="text-[10px] font-medium text-[#5B5955]">Assets</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
