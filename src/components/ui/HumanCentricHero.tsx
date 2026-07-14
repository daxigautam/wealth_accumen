"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { brand } from "@/config/brand";

export function HumanCentricHero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Editorial Photograph */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2560&q=80" 
          alt="Financial Advisor Handshake" 
          className="w-full h-full object-cover opacity-[0.65]"
        />
        {/* Apple-style minimal gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center mt-20 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="font-sans text-white/60 font-light tracking-widest uppercase mb-6 text-sm">
            Wealth Acumen Advisory
          </p>
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-light text-white leading-[1.05] tracking-[-0.03em] mb-6">
            Wealth that <br className="hidden sm:block" /> spans generations.
          </h1>
          <p className="font-sans text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-normal leading-snug tracking-tight mb-10">
            Expert guidance, deep trust, and a personal touch. Aligning your financial goals with the life you want to build for your family.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={brand.whatsapp}
              target="_blank"
              className="bg-white text-black font-sans font-medium py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#F5F5F7] flex items-center justify-center text-base"
            >
              Talk to an Advisor
            </Link>
            <Link 
              href="/services"
              className="bg-transparent border border-white/30 text-white font-sans font-medium py-3.5 px-8 rounded-full transition-all duration-300 hover:bg-white/10 flex items-center justify-center text-base"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
