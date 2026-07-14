"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[450px] sm:h-[400px] flex items-center justify-center">
      
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-0 sm:-left-4 md:-left-12 z-40 w-12 h-12 rounded-full bg-[#0B1736]/80 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#040F2D] transition-colors shadow-[0_0_15px_rgba(4,15,45,0.5)]"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-0 sm:-right-4 md:-right-12 z-40 w-12 h-12 rounded-full bg-[#0B1736]/80 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#040F2D] transition-colors shadow-[0_0_15px_rgba(4,15,45,0.5)]"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
        <AnimatePresence initial={false}>
          {testimonials.map((t, index) => {
            // Calculate relative position
            let relativeIndex = index - activeIndex;
            if (relativeIndex > Math.floor(testimonials.length / 2)) {
              relativeIndex -= testimonials.length;
            } else if (relativeIndex < -Math.floor(testimonials.length / 2)) {
              relativeIndex += testimonials.length;
            }

            // Only render cards that are close to the center
            if (Math.abs(relativeIndex) > 2) return null;

            const isCenter = relativeIndex === 0;
            // Increased horizontal spacing to spread cards further out
            const xOffset = relativeIndex * 350; 
            const zOffset = Math.abs(relativeIndex) * -120; // push back
            const scale = isCenter ? 1 : 0.85;
            const opacity = isCenter ? 1 : Math.abs(relativeIndex) === 1 ? 0.6 : 0;
            const zIndex = 20 - Math.abs(relativeIndex);

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  opacity: opacity,
                  rotateY: relativeIndex * -12, // slight tilt towards center
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ zIndex }}
                className={`absolute w-[300px] sm:w-[420px] lg:w-[520px] cursor-pointer transform-style-3d`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`bg-[#040F2D] backdrop-blur-xl border ${isCenter ? 'border-[#D4AF37]' : 'border-[#D4AF37]/20'} rounded-3xl p-8 shadow-[0_20px_50px_rgba(4,15,45,0.4)] h-full min-h-[320px] flex flex-col justify-between transition-colors duration-500`}>
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className={`w-4 h-4 ${isCenter ? 'text-[#D4AF37]' : 'text-[#D4AF37]/30'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className={`${isCenter ? 'text-white' : 'text-[#A3B5D9]'} font-medium leading-relaxed mb-8 text-sm sm:text-base line-clamp-6 transition-colors duration-500`}>
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full ${isCenter ? 'bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30' : 'bg-white/5 text-[#A3B5D9]'} flex items-center justify-center font-light text-lg transition-colors`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className={`font-[family-name:var(--font-outfit)] font-light ${isCenter ? 'text-white' : 'text-[#A3B5D9]'} transition-colors duration-500`}>{t.name}</p>
                      <p className="text-xs text-[#A3B5D9]/70 transition-colors duration-500">Verified Client</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
