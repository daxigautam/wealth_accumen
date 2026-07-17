"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Users, HeartHandshake, Lock, TrendingUp, PieChart, Building2, Crown } from "lucide-react";
import { brand } from "@/config/brand";

const words = ["Build", "Protect", "Grow"];

const trustBadges = [
  { icon: ShieldCheck, title: "SEBI", subtitle: "Compliant" },
  { icon: Award, title: "AMFI", subtitle: "Registered" },
  { icon: Users, title: "Trusted", subtitle: "Advisors" },
  { icon: HeartHandshake, title: "Client First", subtitle: "Approach" },
];

const floatingMilestones = [
  { icon: Crown, title: "Legacy", delay: 0 },
  { icon: Lock, title: "Financial Freedom", delay: 0.15 },
  { icon: TrendingUp, title: "Wealth Growth", delay: 0.3 },
  { icon: PieChart, title: "Smart Investment", delay: 0.45 },
  { icon: Building2, title: "Strong Foundation", delay: 0.6 },
];

const stats = [
  { target: 15, suffix: "+", prefix: "", label: "Years of Experience" },
  { target: 500, suffix: "+", prefix: "", label: "Families Guided" },
  { target: 250, suffix: " Cr+", prefix: "₹", label: "Assets Guided" },
  { target: 98, suffix: "%", prefix: "", label: "Client Satisfaction" },
];

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
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export function VisualJourneyHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[var(--background)] transition-colors duration-500 overflow-hidden pt-20">
      
      {/* Background Image Area (Right Side) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full opacity-30 lg:opacity-100">
          <Image 
            src="/images/visual-journey-v4.png" 
            alt="Financial Journey" 
            fill 
            className="object-cover object-left"
            priority
          />

          {/* Gradient Masks to blend image into the white background on the left and bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-[40%]" />
          <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-none mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex-1 flex flex-col lg:flex-row items-center pt-12 pb-24">
        
        {/* Left Content (Text & CTAs) */}
        <div className="relative w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left py-10 min-h-[600px] justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative inline-block text-left">
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-[65px] leading-[1.2] sm:leading-[1.1] font-light text-[var(--foreground)] tracking-tight mb-6">
                Helping You <br />
                <div className="inline-flex flex-col justify-center h-[1.3em] sm:h-[1.1em] overflow-hidden align-bottom text-[#D4AF37] relative my-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="block leading-none pb-1 sm:pb-2"
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <br /> Your Wealth.
              </h1>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base sm:text-lg text-[var(--theme-text-muted)] font-medium tracking-wide"
          >
            A strategic, elegant approach to securing your financial future. Expert guidance mapped directly to your life's greatest milestones.
          </motion.p>

          {/* Inline Milestones Stack */}
          <div className="flex flex-wrap xl:flex-nowrap items-center gap-2 mt-8 w-full">
            {floatingMilestones.map((milestone, i) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + milestone.delay, ease: "backOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-white/95 to-[#D4AF37]/15 backdrop-blur-md px-3 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/20 shadow-sm cursor-pointer"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5 shrink-0">
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-light text-[#0B245B] whitespace-nowrap">{milestone.title}</span>
                </motion.div>
              );
            })}
          </div>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-10 w-full sm:w-auto"
          >
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C9670A] text-white font-light text-sm sm:text-base py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D9791A]/20"
            >
              Book Free Consultation &rarr;
            </a>
            <Link
              href="/services"
              className="w-full sm:w-auto bg-[var(--secondary-bg)] hover:bg-[var(--glass-hover-bg)] text-[var(--foreground)] border border-[var(--glass-border)] font-light text-sm sm:text-base py-3 px-6 rounded-full transition-all duration-300 shadow-sm"
            >
              Explore Solutions &rarr;
            </Link>
          </motion.div>



        </div>

        {/* Right Content (Empty space for 3D graphic) */}
        <div className="hidden lg:block w-[45%] h-full relative min-h-[600px]">
        </div>

      </div>

      {/* Bottom Stats Bar & Trust Badges */}
      <div className="relative z-20 w-full bg-[var(--background)] transition-colors duration-500 border-t border-[var(--glass-border)] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] mt-auto py-8">
        <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex flex-wrap justify-between items-center text-center gap-y-8">
          {stats.map((stat, i) => (
            <div key={i} className="w-1/2 sm:w-1/4 sm:border-r last:border-0 border-[#D4AF37]/20">
              <div className="text-3xl sm:text-4xl font-[family-name:var(--font-playfair)] font-light text-[#D4AF37] mb-1">
                <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--theme-text-muted)] font-light tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges as Colored Cards */}
        <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mt-8 pt-8 border-t border-[#D4AF37]/20 pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full"
          >
            {trustBadges.map((badge, i) => {
              const colors = [
                "from-blue-50/80 to-blue-100/50 border-blue-200 hover:border-blue-300 text-blue-600 hover:shadow-blue-900/5",
                "from-emerald-50/80 to-emerald-100/50 border-emerald-200 hover:border-emerald-300 text-emerald-600 hover:shadow-emerald-900/5",
                "from-[#D9791A]/5 to-[#D4AF37]/10 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 text-[#D4AF37] hover:shadow-[#D9791A]/5",
                "from-purple-50/80 to-purple-100/50 border-purple-200 hover:border-purple-300 text-purple-600 hover:shadow-purple-900/5",
              ][i % 4];

              return (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className={`flex items-center gap-4 bg-gradient-to-br ${colors.split(' ').filter(c => c.startsWith('from') || c.startsWith('to') || c.startsWith('border') || c.startsWith('hover:border') || c.startsWith('hover:shadow')).join(' ')} border rounded-2xl p-4 shadow-sm transition-all cursor-default`}
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--background)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--glass-border)]">
                    <badge.icon className={`w-5 h-5 ${colors.split(' ').find(c => c.startsWith('text-') && !c.startsWith('text-sm') && !c.startsWith('text-xs'))}`} />
                  </div>
                  <div className="text-left">
                    <div className="text-[14px] font-light text-[var(--foreground)] leading-tight mb-0.5">{badge.title}</div>
                    <div className="text-xs text-[var(--theme-text-muted)] font-medium">{badge.subtitle}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
