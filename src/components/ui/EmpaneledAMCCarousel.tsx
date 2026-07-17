"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function EmpaneledAMCCarousel() {
  const amcLogos = [
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/ICICIjpg-1512106112423.jpeg", alt: "ICICI Prudential" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/SBI_Mutual_Fund_Logo.svg.png", alt: "SBI Mutual Fund" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/AngelOne-RGB-Logo-1.png", alt: "AngelOne" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/canararobecopng-1538742737113.png", alt: "Canara Robeco" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/dspmf_logo.png", alt: "DSP Mutual Fund" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/mirae-asset-mutual-fund-logo.jpg", alt: "Mirae Asset" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/fund-news-nippon__w1200__-e1750686565357.webp", alt: "Nippon India" },
    { src: "https://wealthacumen.in/wp-content/uploads/2025/06/UTI-e1750686204617.jpg", alt: "UTI Mutual Fund" }
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...amcLogos, ...amcLogos];

  return (
    <section className="py-16 sm:py-20 bg-[var(--background)] transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-[100vw] mx-auto">
        <div className="text-center mb-12 px-4">
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-[3.5rem] font-light tracking-tight">
            <span className="text-[#0B245B] dark:text-white">Empaneled With </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] italic pr-2">Following AMC</span>
          </h2>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          {/* Auto-scrolling Marquee */}
          <div className="flex">
            <motion.div
              className="flex items-center gap-12 sm:gap-20 px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 sm:w-44 h-16 sm:h-20 relative transition-transform duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
