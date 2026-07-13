"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { brand } from "@/config/brand";

const words = ["Build", "Protect", "Grow"];

export function AnimatedSentenceHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 flex flex-col justify-center items-center bg-[#FAFAFA] overflow-hidden">
      
      {/* Ultra Minimal Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[#D4AF37]/[0.02] blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-slate-300/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Animated Sentence */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[1.3] sm:leading-[1.3] font-bold text-white tracking-tight">
              Helping You <br className="hidden sm:block" />
              <div className="inline-flex flex-col justify-center h-[1.3em] sm:h-[1.2em] overflow-hidden align-bottom text-[#D4AF37] relative my-2 sm:my-6 px-2 sm:px-4 mx-[-8px] sm:mx-[-16px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block leading-none pb-2 sm:pb-4"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <br className="hidden sm:block" /> Your Wealth.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 font-medium tracking-wide"
          >
            A strategic, elegant approach to securing your financial future. Expert guidance mapped directly to your life's greatest milestones.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20 w-full sm:w-auto"
        >
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C9670A] text-white font-medium text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-[#D9791A]/20"
          >
            Start Your Journey
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-[#040F2D] hover:bg-[#FFF9F0] text-[#D4AF37] border border-[#D4AF37] font-medium text-lg py-4 px-10 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-sm shadow-[#D9791A]/5"
          >
            Explore Services &rarr;
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
