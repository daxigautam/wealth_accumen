"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, PieChart, Umbrella, Target, ArrowRight } from "lucide-react";
import { brand } from "@/config/brand";

export function LightPremiumBlogHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
    }
  };

  const floatAnimationDelayed = {
    animate: {
      y: [0, 15, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#040F2D] border-b border-[#D4AF37]/10 text-white">
      {/* Soft Gold / Beige Gradient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#0B1736]/65 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="h-[2px] w-8 bg-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm uppercase">Wealth Acumen</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-sans tracking-tight text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Your Wealth.<br />
              <span className="text-[#D4AF37]">Our Expertise.</span><br />
              Your Legacy.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-[#A3B5D9] max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
              Helping families and businesses build lasting financial confidence.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href={brand.whatsapp}
                target="_blank"
                className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#8B6914] text-[#040F2D] font-bold py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] flex items-center justify-center w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
              <Link 
                href="/services"
                className="group py-4 px-8 rounded-full font-bold text-white border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center w-full sm:w-auto bg-white/5 backdrop-blur-sm"
              >
                Explore Solutions
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Dashboard Visual */}
        <div className="flex-1 relative w-full max-w-[500px] lg:max-w-none h-[450px] sm:h-[500px] perspective-1000 mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center lg:justify-end"
          >
            {/* Main Floating Glass Card */}
            <motion.div 
              variants={floatAnimation}
              animate="animate"
              className="relative w-full max-w-md bg-[#0B1736]/60 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 rounded-3xl shadow-[0_30px_60px_-15px_rgba(4,15,45,0.4)] z-10"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#8B9ECC] uppercase tracking-wider mb-1">Total Portfolio</p>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">$1,245,000</h3>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1.5 rounded-full font-bold text-sm shadow-sm">
                  <TrendingUp className="w-4 h-4" />
                  +18%
                </div>
              </div>

              {/* Chart Mockup */}
              <div className="h-28 sm:h-32 w-full mb-8 flex items-end justify-between gap-2 border-b border-white/10 pb-2">
                {[30, 45, 25, 60, 50, 80, 75, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.5, ease: "easeOut" }}
                    className="w-full bg-gradient-to-t from-[#D4AF37]/20 to-[#D4AF37] rounded-t-sm"
                  />
                ))}
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Dashboard Items */}
                <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-[#040F2D]/60 border border-white/10 hover:bg-[#040F2D]/80 hover:border-white/20 transition-all cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <PieChart className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-sm sm:text-base">Mutual Funds</h4>
                    <p className="text-xs text-[#A3B5D9]">Diversified Growth</p>
                  </div>
                  <span className="font-bold text-[#D4AF37]">+12.4%</span>
                </div>

                <div className="flex items-center gap-4 p-3 sm:p-4 rounded-2xl bg-[#040F2D]/60 border border-white/10 hover:bg-[#040F2D]/80 hover:border-white/20 transition-all cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                    <Umbrella className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-sm sm:text-base">Retirement</h4>
                    <p className="text-xs text-[#A3B5D9]">Secure Future</p>
                  </div>
                  <span className="font-bold text-[#D4AF37]">+8.2%</span>
                </div>
              </div>
            </motion.div>

            {/* Small Floating Goal Badge */}
            <motion.div 
              variants={floatAnimationDelayed}
              animate="animate"
              className="absolute -right-2 sm:-right-6 top-16 sm:top-20 bg-[#0B1736]/90 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-[#8B9ECC] uppercase tracking-wider">Goal Planning</p>
                <p className="font-extrabold text-white text-sm sm:text-base">On Track</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
