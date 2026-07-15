"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiggyBank, TrendingUp, LineChart, Sunset, Heart } from "lucide-react";

const journeySteps = [
  { id: 1, label: "Save", icon: PiggyBank, desc: "Building the foundation of discipline." },
  { id: 2, label: "Invest", icon: TrendingUp, desc: "Deploying capital intelligently." },
  { id: 3, label: "Grow", icon: LineChart, desc: "Compounding wealth over time." },
  { id: 4, label: "Retire", icon: Sunset, desc: "Achieving true financial freedom." },
  { id: 5, label: "Legacy", icon: Heart, desc: "Protecting wealth for generations." },
];

const morphingPhrases = [
  "build your wealth.",
  "protect your wealth.",
  "grow your wealth.",
  "preserve your wealth.",
  "secure your legacy."
];

export function WealthJourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Timeline interval
    const timelineInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 3000); 

    // Morphing words interval
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % morphingPhrases.length);
    }, 2500);

    return () => {
      clearInterval(timelineInterval);
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto mt-20 sm:mt-32 z-30 mb-16 sm:mb-24">
      
      {/* Section Heading (Moved outside the card) */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <h2 className="text-sm font-light tracking-[0.2em] uppercase text-[#D4AF37]">Your Wealth Journey</h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
        <h3 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--foreground)] transition-colors duration-500 leading-[1.2] tracking-tight">
          A proven path to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] animate-gradient-x">
            generational prosperity
          </span>
        </h3>
      </div>

      <div className="bg-[var(--glass-bg)] backdrop-blur-2xl border border-[var(--glass-border)] rounded-[2.5rem] p-6 sm:p-8 lg:p-10 shadow-[0_30px_60px_rgba(4,15,45,0.1)] relative overflow-hidden group transition-colors duration-500">
        {/* Glow effect */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-[#D4AF37]/20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Side: Meaningful Animated Text */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col justify-start gap-8 self-start pt-10 sm:pt-14">
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] italic">
              <span className="text-[var(--foreground)] transition-colors duration-500">We help you</span>
              <div className="relative w-[320px] sm:w-[380px] text-center sm:text-left h-[50px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 text-[#C59B27] font-light whitespace-nowrap w-full sm:w-auto"
                  >
                    {morphingPhrases[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-[var(--theme-text-muted)] transition-colors duration-500 mx-auto lg:mx-0 leading-relaxed pr-0 lg:pr-8">
              Every financial journey requires discipline and strategy. Partner with us as we help you navigate the markets and secure your future.
            </p>

          </div>

          {/* Middle: Vertical Animated Timeline */}
          <div className="lg:col-span-3 relative flex justify-center lg:justify-start lg:pl-4">
            <div className="relative flex flex-col gap-6 lg:gap-8">
              
              {/* Vertical Background Line */}
              <div className="absolute top-4 bottom-4 left-[23px] sm:left-[27px] w-1 bg-[var(--foreground)] opacity-10 rounded-full" />
              
              {/* Vertical Glowing Animated Line */}
              <motion.div 
                className="absolute top-4 left-[23px] sm:left-[27px] w-1 bg-gradient-to-b from-white via-white/80 to-white bg-[length:200%_auto] animate-gradient-y shadow-[0_0_15px_rgba(255,255,255,0.7)] rounded-full z-0"
                initial={{ height: "0%" }}
                animate={{ height: `calc(${(activeStep / (journeySteps.length - 1)) * 100}% - 2rem)` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {journeySteps.map((step, index) => {
                const isActive = index <= activeStep;
                const isCurrent = index === activeStep;

                return (
                  <div 
                    key={step.id} 
                    className="relative z-10 flex items-center gap-4 sm:gap-6 cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Icon Circle */}
                    <motion.div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-700
                        ${isActive ? 'bg-white border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-[var(--background)] border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20'}
                        ${isCurrent ? 'scale-110' : 'scale-100'}
                      `}
                    >
                      <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-700 ${isActive ? 'text-[#D4AF37]' : 'text-[var(--foreground)] opacity-40'}`} />
                    </motion.div>

                    {/* Text Details */}
                    <div className="text-left flex-1 min-w-[120px]">
                      <h4 className={`text-lg sm:text-xl font-light transition-colors duration-700 ${isActive ? 'text-[var(--foreground)]' : 'text-[var(--foreground)] opacity-40'}`}>
                        {step.label}
                      </h4>
                      <p className={`text-xs sm:text-sm mt-0.5 transition-all duration-700 leading-relaxed ${isCurrent ? 'text-[var(--theme-text-muted)] opacity-100 h-auto' : 'text-transparent opacity-0 h-0 overflow-hidden'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Matched Image */}
          <div className="lg:col-span-4 h-full hidden lg:block">
            <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden relative border border-[#040F2D]/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <img 
                src="/assets/images/deal_handshake.png" 
                alt="Wealth Management Analytics"
                className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-light text-lg leading-tight">Data-Driven <br/><span className="text-[#D4AF37]">Precision</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes gradient-y {
          0% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        .animate-gradient-y {
          animation: gradient-y 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
