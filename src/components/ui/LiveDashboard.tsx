"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, TrendingUp } from "lucide-react";

export function LiveDashboard() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4 lg:p-8 perspective-[2000px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] bg-[#0B1736]/80 backdrop-blur-xl border border-white shadow-[0_30px_60px_-15px_rgba(16,20,31,0.15)] p-8 overflow-hidden cursor-crosshair"
      >
        {/* Subtle Graph Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ transform: "translateZ(-20px)" }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-[#D4AF37]">
            <path d="M0 100 C 20 80, 40 85, 60 50 S 80 30, 100 15" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 100 C 20 80, 40 85, 60 50 S 80 30, 100 15 L 100 100 L 0 100 Z" fill="currentColor" opacity="0.1" />
          </svg>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
          {/* Top Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-light tracking-[0.2em] uppercase text-slate-500">Live Portfolio</span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex items-center gap-1.5 text-sm font-light text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full shadow-sm"
              >
                <TrendingUp className="w-4 h-4" /> +18.6%
              </motion.span>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl font-[family-name:var(--font-outfit)] font-light text-white tracking-tight drop-shadow-sm"
            >
              ₹ 12.4 <span className="text-3xl text-[#8B9ECC]">Cr</span>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8">
            <span className="text-xs font-light tracking-[0.2em] uppercase text-slate-500 mb-4 block">Active Goals</span>
            <div className="space-y-3">
              {['Retirement', 'Education', 'Wealth Creation'].map((goal, i) => (
                <motion.div 
                  key={goal}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 + 0.6 }}
                  className="flex items-center gap-4 bg-[#0B245B]/60 backdrop-blur-sm p-4 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-100/80 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <span className="font-[family-name:var(--font-playfair)] text-lg font-light text-white">
                    {goal}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dynamic Highlight Glow */}
        <motion.div 
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 rounded-[2.5rem]"
          style={{
            background: useTransform(
              [x, y],
              ([latestX, latestY]) => `radial-gradient(circle at ${(latestX as number) * 100 + 50}% ${(latestY as number) * 100 + 50}%, rgba(255,255,255,1) 0%, transparent 60%)`
            ),
            transform: "translateZ(60px)"
          }}
        />
      </motion.div>
    </div>
  );
}
