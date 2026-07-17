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
    <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden bg-[var(--background)] transition-colors duration-500 border-b border-[#D4AF37]/10">
      {/* Golden Wave Lines (Apple Style) */}
      <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none flex items-center justify-center overflow-hidden">
        <svg
          className="absolute w-[200%] md:w-[150%] min-w-[1200px] h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gold-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gold-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#F3E5AB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Wave 1 */}
          <motion.path
            d="M 0 200 C 300 100, 300 300, 600 200 C 900 100, 900 300, 1200 200"
            fill="none"
            stroke="url(#gold-wave-1)"
            strokeWidth="1.5"
            animate={{ x: [-600, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          {/* Wave 2 */}
          <motion.path
            d="M 0 200 C 300 300, 300 100, 600 200 C 900 300, 900 100, 1200 200"
            fill="none"
            stroke="url(#gold-wave-2)"
            strokeWidth="1"
            animate={{ x: [0, -600] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {/* Wave 3 (Offset) */}
          <motion.path
            d="M 0 220 C 300 120, 300 320, 600 220 C 900 120, 900 320, 1200 220"
            fill="none"
            stroke="url(#gold-wave-1)"
            strokeWidth="1"
            animate={{ x: [-600, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Soft Gold / Beige Gradient Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[var(--foreground)]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-8 pb-12">
        
        {/* Main Centered Content */}
        <div className="w-full z-10">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col items-center">
            
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]"></span>
              <span className="text-[#D4AF37] font-light tracking-[0.25em] text-sm sm:text-base uppercase">Wealth Acumen</span>
              <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]"></span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-[family-name:var(--font-playfair)] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[var(--foreground)] leading-[1.1] mb-6">
              <span className="italic">
                <span className="text-[var(--foreground)]">Our</span>{" "}
                <span className="text-[#D4AF37]">Blogs.</span>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg lg:text-xl text-[var(--theme-text-muted)] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              Helping families and businesses build lasting financial confidence.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link 
                href={brand.whatsapp}
                target="_blank"
                className="group relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#8B6914] text-[#0B245B] font-light py-4 px-10 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] flex items-center justify-center w-full sm:w-auto text-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
              <Link 
                href="/services"
                className="group py-4 px-10 rounded-full font-light text-[var(--foreground)] border border-[var(--glass-border)] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center justify-center w-full sm:w-auto bg-[var(--secondary-bg)] backdrop-blur-sm shadow-sm text-lg"
              >
                Explore Solutions
              </Link>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
