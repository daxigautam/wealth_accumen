"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

const NUM_BARS = 40;

function InteractiveBar({ index, total, mouseXProgress }: { index: number, total: number, mouseXProgress: MotionValue<number> }) {
  const barPosition = index / (total - 1);
  
  const heightPercent = useTransform(mouseXProgress, (val: number) => {
    const distance = Math.abs(val - barPosition);
    const maxDist = 0.25; // How wide the wave is
    
    // Upward trend with slight professional variation
    const jitter = Math.sin(index * 45) * 4;
    const baseHeight = 15 + Math.pow(barPosition, 1.5) * 30 + jitter; // Baseline trend
    const peakHeight = 45 + Math.pow(barPosition, 1.2) * 55 + jitter; // Peak trend
    
    if (distance > maxDist) return baseHeight;
    
    const wave = Math.cos((distance / maxDist) * (Math.PI / 2));
    return baseHeight + (peakHeight - baseHeight) * Math.pow(wave, 1.5); // Pow makes the peak slightly sharper
  });

  // Color intensity based on height/wave
  const opacity = useTransform(mouseXProgress, (val: number) => {
    const distance = Math.abs(val - barPosition);
    if (distance > 0.25) return 0.25; // Dimmer when not near mouse
    const wave = Math.cos((distance / 0.25) * (Math.PI / 2));
    return 0.25 + (0.75 * wave); // Brightens to 1.0 at peak
  });

  return (
    <motion.div 
      className="flex-1 mx-[2px] sm:mx-[4px] md:mx-1.5 bg-gradient-to-t from-[#D4AF37]/20 via-[#D4AF37]/70 to-[#F3E5AB] rounded-t-sm origin-bottom"
      style={{ 
        height: useTransform(heightPercent, v => `${v}%`),
        opacity: opacity,
        boxShadow: useTransform(opacity, o => `0 0 ${o * 20}px rgba(212,175,55,${o * 0.5})`)
      }}
    />
  );
}

export function MouseGrowthHero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(1); // Default to right side (max growth)
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const glowOpacity = useTransform(smoothMouseX, [0, 1], [0.2, 0.5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const progress = Math.max(0, Math.min(1, x / width));
      mouseX.set(progress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX]);

  return (
    <section 
      ref={containerRef} 
      className="relative pt-24 pb-32 lg:pt-28 lg:pb-48 overflow-hidden bg-[#040F2D] cursor-crosshair group border-b border-[#D4AF37]/10"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none"
          style={{ opacity: glowOpacity }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* Interactive Bar Graph */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] sm:h-[60%] lg:h-[70%] px-2 sm:px-8 lg:px-16 flex items-end justify-between pointer-events-none z-0 pb-0">
        {[...Array(NUM_BARS)].map((_, i) => (
          <InteractiveBar key={i} index={i} total={NUM_BARS} mouseXProgress={smoothMouseX} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center -mt-8 mb-16 lg:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-bold text-[#D4AF37] tracking-[0.2em] uppercase mb-4"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans tracking-tight text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 pointer-events-none select-none"
        >
          Chart Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-[length:200%_auto] animate-gradient-x">Growth</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-[#A3B5D9] max-w-2xl mx-auto font-light pointer-events-none select-none"
        >
          Move your cursor across the screen to preview the potential. Contact us today to turn these financial projections into your reality.
        </motion.p>
      </div>
    </section>
  );
}
