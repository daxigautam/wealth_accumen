"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhyChooseUsHome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="pt-4 pb-20 sm:pt-8 sm:pb-32 bg-[var(--background)] transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-6 lg:mb-8 text-left"
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-outfit)] text-[#0B245B] dark:text-white text-4xl sm:text-[2.75rem] font-bold leading-[1.3]">
              Doing the right investment at<br />the right time
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="lg:col-span-5 relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0">
            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-8 z-10 mix-blend-multiply" style={{ filter: 'contrast(1.02) brightness(1.02)' }}>
               <Image
                 src="/assets/images/businessman_illustration.png"
                 alt="Right Investment"
                 fill
                 className="object-contain hover:scale-105 transition-transform duration-700"
               />
            </div>
            
            {/* Decorative Circles */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] right-[20%] z-20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-12 opacity-80"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#circle1_grad)"/><defs><linearGradient id="circle1_grad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#D4AF37"/></linearGradient></defs></svg>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[20%] right-[-10%] z-20"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45 opacity-90"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#circle2_grad)"/><defs><linearGradient id="circle2_grad" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="#D4AF37"/></linearGradient></defs></svg>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col text-left lg:-mt-12">
            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-[#0B245B] dark:text-white mb-4">
                Why our consulting
              </h3>
              <p className="text-[var(--theme-text-muted)] text-base leading-relaxed">
                Choose Wealth Acumen for personalized strategies, trusted insights, ethical guidance, and steady, long-term wealth growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-2">
              {/* Pillar 1 */}
              <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
                <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none mb-1">01</span>
                <h3 className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold text-[#0B245B] dark:text-white">
                  Client First
                </h3>
                <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed">
                  Your goals are our priority. We put your interests first.
                </p>
              </div>
              
              {/* Pillar 2 */}
              <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
                <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none mb-1">02</span>
                <h3 className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold text-[#0B245B] dark:text-white">
                  Transparent Advice
                </h3>
                <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed">
                  Honest, unbiased and clear guidance you can always rely on.
                </p>
              </div>
              
              {/* Pillar 3 */}
              <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
                <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none mb-1">03</span>
                <h3 className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold text-[#0B245B] dark:text-white">
                  Goal Based Approach
                </h3>
                <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed">
                  Personalized strategies designed around your dreams and needs.
                </p>
              </div>
              
              {/* Pillar 4 */}
              <div className="flex flex-col space-y-2 p-6 rounded-2xl bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 group">
                <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none mb-1">04</span>
                <h3 className="font-[family-name:var(--font-outfit)] text-[16px] font-semibold text-[#0B245B] dark:text-white">
                  Long Term Growth
                </h3>
                <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed">
                  Focused on creating sustainable wealth and financial independence.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 gap-6 mt-6">
              {/* Vision Card */}
              <div className="bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 w-full">
                <h3 className="font-[family-name:var(--font-outfit)] text-[1.35rem] font-bold text-[#0B245B] dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                  To be a trusted partner in every investor&apos;s journey, enabling financial freedom through smart, sustainable, and informed wealth-building strategies.
                </p>
              </div>
            </div>
            
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
