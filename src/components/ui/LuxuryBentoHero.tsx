"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, UserCheck, PieChart, TrendingUp } from "lucide-react";
import Link from "next/link";
import { brand } from "@/config/brand";

export function LuxuryBentoHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[var(--background)] transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] bg-[var(--foreground)]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-light tracking-[0.2em] uppercase text-[#D4AF37]">Premium Wealth Management</span>
            </div>
            
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--foreground)] leading-[1.1]">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Financial Legacy</span>
            </h1>
            
            <p className="text-lg text-[var(--theme-text-muted)] max-w-lg leading-relaxed">
              Experience a sophisticated approach to wealth creation. We provide personalized strategies, expert advisory, and a comprehensive ecosystem to secure your family&apos;s future.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href={brand.whatsapp}
                target="_blank"
                className="bg-[#D4AF37] hover:bg-[#C59B27] text-[#040F2D] font-light py-4 px-8 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/services"
                className="bg-transparent border border-[#D4AF37]/30 text-[var(--foreground)] hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 font-light py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Bento Grid (Right Side) */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Dashboard Card - Top Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[5%] left-[5%] w-[55%] h-[40%]"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-6 flex flex-col justify-between shadow-2xl"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-[var(--background)] flex items-center justify-center border border-[#D4AF37]/10">
                    <BarChart3 className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs font-light px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +14.2%
                  </span>
                </div>
                <div>
                  <p className="text-[var(--theme-text-muted)] text-sm mb-1">Live Dashboard</p>
                  <h3 className="text-[var(--foreground)] text-xl font-light font-[family-name:var(--font-outfit)]">Real-time Insights</h3>
                </div>
              </motion.div>
            </motion.div>

            {/* Family Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[15%] right-0 w-[40%] h-[35%]"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-[#0B1736]/60 backdrop-blur-md border border-[#D4AF37]/30 rounded-3xl p-6 flex flex-col justify-between shadow-2xl"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center self-end">
                  <Users className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-[var(--theme-text-muted)] text-sm mb-1">Family</p>
                  <h3 className="text-[var(--foreground)] text-lg font-light font-[family-name:var(--font-outfit)]">Legacy Planning</h3>
                </div>
              </motion.div>
            </motion.div>

            {/* Advisor Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-[10%] left-0 w-[45%] h-[35%]"
            >
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="w-full h-full bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-6 flex flex-col justify-between shadow-2xl overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Advisor" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0B1736]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--foreground)] font-light text-sm">Dedicated</h4>
                    <p className="text-[#D4AF37] text-xs font-light">Wealth Advisor</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[var(--theme-text-muted)] text-sm">24/7 Support</span>
                  <UserCheck className="w-5 h-5 text-[var(--theme-text-muted)]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Portfolio Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-[5%] right-[5%] w-[50%] h-[40%]"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-full h-full bg-[var(--background)]/90 backdrop-blur-xl border border-[#D4AF37]/20 rounded-3xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[var(--theme-text-muted)] text-sm mb-1">Portfolio</p>
                    <h3 className="text-[var(--foreground)] text-xl font-light font-[family-name:var(--font-outfit)]">Asset Allocation</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0B1736] flex items-center justify-center border border-[#D4AF37]/10">
                    <PieChart className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
                
                {/* Dummy Progress bars */}
                <div className="space-y-3 mt-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[var(--theme-text-muted)]">Equity</span>
                      <span className="text-[var(--foreground)] font-medium">65%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#0B1736] rounded-full overflow-hidden">
                      <div className="h-full bg-[#D4AF37] rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[var(--theme-text-muted)]">Debt & Bonds</span>
                      <span className="text-[var(--foreground)] font-medium">35%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#0B1736] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3B5D9] rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
          
          {/* Mobile Fallback layout */}
          <div className="flex flex-col gap-4 md:hidden">
             {/* Simple list of cards for mobile since absolute positioned floaters won't work well on small screens */}
             <div className="w-full bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-6 shadow-xl">
                 <div className="flex justify-between items-center mb-4">
                   <div className="w-10 h-10 rounded-xl bg-[var(--background)] flex items-center justify-center border border-[#D4AF37]/10">
                      <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
                   </div>
                   <h3 className="text-[var(--foreground)] text-lg font-light">Dashboard</h3>
                 </div>
                 <p className="text-[var(--theme-text-muted)] text-sm">Real-time performance tracking and insights.</p>
             </div>
             
             <div className="w-full bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-6 shadow-xl">
                 <div className="flex justify-between items-center mb-4">
                   <div className="w-10 h-10 rounded-xl bg-[var(--background)] flex items-center justify-center border border-[#D4AF37]/10">
                      <PieChart className="w-5 h-5 text-[#D4AF37]" />
                   </div>
                   <h3 className="text-[var(--foreground)] text-lg font-light">Portfolio</h3>
                 </div>
                 <p className="text-[var(--theme-text-muted)] text-sm">Optimized asset allocation and wealth management.</p>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-[var(--secondary-bg)] border border-[#D4AF37]/20 rounded-3xl p-4 shadow-xl flex flex-col items-center text-center">
                    <Users className="w-6 h-6 text-[#D4AF37] mb-2" />
                    <h3 className="text-[var(--foreground)] font-light text-sm">Family</h3>
                </div>
                <div className="bg-[var(--secondary-bg)] border border-[#D4AF37]/20 rounded-3xl p-4 shadow-xl flex flex-col items-center text-center">
                    <UserCheck className="w-6 h-6 text-[#D4AF37] mb-2" />
                    <h3 className="text-[var(--foreground)] font-light text-sm">Advisor</h3>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
