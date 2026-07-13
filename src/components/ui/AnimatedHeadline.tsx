"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const phrases = [
  "Build Wealth.",
  "Protect Wealth.",
  "Grow Wealth.",
  "Create Legacy."
];

export function AnimatedHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      const phraseElements = gsap.utils.toArray<HTMLElement>(".phrase");
      
      phraseElements.forEach((phraseEl, index) => {
        // Prepare text
        const text = phraseEl.innerText;
        const chars = Array.from(text).map(char => {
          if (char === " ") {
            return `<span class="char inline-block w-3 sm:w-5">&nbsp;</span>`;
          }
          return `<span class="char inline-block">${char}</span>`;
        });
        phraseEl.innerHTML = chars.join("");
        const charElements = phraseEl.querySelectorAll('.char');
        
        // Initial state
        gsap.set(phraseEl, { opacity: 1, zIndex: 10 });
        gsap.set(charElements, { yPercent: 100, opacity: 0, scale: 0.9, rotateX: -30, transformOrigin: "50% 100%" });

        // Animate IN (Apple style: smooth spring-like reveal)
        tl.to(charElements, {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.04,
          ease: "expo.out",
        });

        // Hold
        tl.to({}, { duration: 1.8 });

        // Animate OUT (Smooth slide up and fade)
        tl.to(charElements, {
          yPercent: -100,
          opacity: 0,
          scale: 0.95,
          rotateX: 30,
          duration: 0.6,
          stagger: 0.02,
          ease: "power3.inOut",
        });
        
        // Reset z-index
        tl.set(phraseEl, { zIndex: 1 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      // Adjusted height to be very tight so there's no blank space
      className="relative h-[50px] sm:h-[65px] md:h-[80px] lg:h-[95px] w-full perspective-[1200px] flex items-center mb-6 sm:mb-8 mt-2"
    >
      {phrases.map((phrase, i) => (
        <h1 
          key={i} 
          className="phrase absolute left-0 font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] tracking-tighter whitespace-nowrap"
          style={{ opacity: 0, paddingBottom: '0.1em' }} 
        >
          {phrase}
        </h1>
      ))}
    </div>
  );
}
