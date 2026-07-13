"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, TrendingUp, Home, GraduationCap, Palmtree, Crown } from "lucide-react";
import Link from "next/link";
import { brand } from "@/config/brand";

const milestones = [
  { id: "emergency", title: "Emergency Fund", icon: ShieldAlert, desc: "Safety net", color: "text-blue-500", bg: "bg-blue-50" },
  { id: "mutual", title: "Mutual Funds", icon: TrendingUp, desc: "Wealth growth", color: "text-emerald-500", bg: "bg-emerald-50" },
  { id: "home", title: "Dream Home", icon: Home, desc: "Asset building", color: "text-amber-500", bg: "bg-amber-50" },
  { id: "edu", title: "Child Education", icon: GraduationCap, desc: "Secure future", color: "text-purple-500", bg: "bg-purple-50" },
  { id: "retire", title: "Retirement", icon: Palmtree, desc: "Independence", color: "text-rose-500", bg: "bg-rose-50" },
  { id: "legacy", title: "Legacy", icon: Crown, desc: "Generations", color: "text-[#D4AF37]", bg: "bg-[#D4AF37]/10" },
];

export function FutureTimelineHero() {
  return (
    <section className="relative min-h-[100dvh] pt-28 pb-32 flex flex-col justify-center bg-[#F8FAFC] overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle grid base */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        
        {/* Animated Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[#D4AF37]/10 blur-[100px] sm:blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-500/[0.07] blur-[100px] sm:blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] rounded-full bg-emerald-500/[0.05] blur-[100px] sm:blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 mt-0"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D4AF37]">Your Financial Roadmap</span>
            <div className="h-px w-10 bg-[#D4AF37]" />
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Securing <span className="text-[#D4AF37]">Today.</span><br />
            <span className="italic text-slate-500">Empowering</span> Tomorrow.
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#A3B5D9]">
            A strategic approach to your life's milestones. From emergency funds to generational wealth, our solutions are mapped directly to your goals.
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative w-full max-w-5xl mx-auto h-[350px] sm:h-[300px]">
          
          {/* TODAY Label */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-8 z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#040F2D] border-2 border-slate-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 font-bold tracking-widest text-[10px] sm:text-xs shadow-lg whitespace-nowrap"
            >
              TODAY
            </motion.div>
          </div>
          
          {/* TOMORROW Label */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-8 z-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
              className="bg-[#D4AF37] text-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 font-bold tracking-widest text-[10px] sm:text-xs shadow-lg shadow-[#D9791A]/30 whitespace-nowrap"
            >
              TOMORROW
            </motion.div>
          </div>

          {/* The Animated Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 sm:h-1.5 bg-slate-200 -translate-y-1/2 rounded-full overflow-hidden z-0">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.4 }}
              className="h-full bg-gradient-to-r from-slate-400 via-[#D9791A] to-[#D9791A]"
            />
          </div>

          {/* Milestones Dots & Cards */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between items-center z-10 px-12 sm:px-16 lg:px-20">
            {milestones.map((ms, i) => {
              const Icon = ms.icon;
              const isTop = i % 2 === 0;
              return (
                <motion.div 
                  key={ms.id}
                  initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (i * 0.35), type: "spring" }}
                  className="relative group cursor-pointer"
                >
                  {/* Dot */}
                  <div className={`w-3 h-3 sm:w-5 sm:h-5 rounded-full border-2 sm:border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-150 ${i === milestones.length - 1 ? 'bg-[#D4AF37]' : 'bg-slate-800'}`} />
                  
                  {/* Card Component */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[90px] sm:w-[130px] ${isTop ? 'bottom-full mb-4 sm:mb-6' : 'top-full mt-4 sm:mt-6'}`}>
                    <div className={`flex flex-col items-center text-center p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[#040F2D] border border-[#D4AF37]/20 shadow-xl shadow-black/40 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${ms.bg} flex items-center justify-center mb-2 sm:mb-3`}>
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${ms.color}`} />
                      </div>
                      <h3 className="font-bold text-white text-[10px] sm:text-sm leading-tight mb-0.5 sm:mb-1">{ms.title}</h3>
                      <p className="hidden sm:block text-[10px] sm:text-xs text-slate-500 font-medium">{ms.desc}</p>
                    </div>
                    {/* Connecting dashed line */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-px border-l-2 border-dashed border-[#D4AF37]/20 h-4 sm:h-6 ${isTop ? 'top-full' : 'bottom-full'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          className="mt-16 sm:mt-24 flex flex-col sm:flex-row items-center gap-4 z-20 relative"
        >
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-[#D9791A] to-[#C59B27] text-white font-semibold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(217,121,26,0.2)] hover:shadow-[0_0_40px_rgba(217,121,26,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Start Your Journey
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-[#040F2D] hover:bg-[#0B1736] text-white font-medium py-4 px-8 rounded-full border border-[#D4AF37]/20 shadow-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            View Our Solutions
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
