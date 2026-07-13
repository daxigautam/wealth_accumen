"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export function AnimatedCounter({ 
  end, 
  suffix = "", 
  duration = 2.5 
}: { 
  end: number, 
  suffix?: string, 
  duration?: number 
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          // easeOutExpo for a nice slowdown effect at the end
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(end * easeOut));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
