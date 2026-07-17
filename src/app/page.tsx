"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { brand } from "@/config/brand";
import {
  heroContent,
  missionVision,
  services,
  testimonials,
} from "@/config/content";
import { CompoundingCalculator } from "@/components/ui/CompoundingCalculator";
import { InteractiveCompassHero } from "@/components/ui/InteractiveCompassHero";
import { WealthJourneyTimeline } from "@/components/ui/WealthJourneyTimeline";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { WhyChooseUsHome } from "@/components/ui/WhyChooseUsHome";

/* ─── Helpers ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    let animationFrame: number;
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* ─── Icons ─── */
const svcIcons: Record<string, React.ReactNode> = {
  "bar-chart-2": <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>,
  "pie-chart": <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>,
  "shield-check": <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>,
  layers: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" /></svg>,
  lock: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>,
  landmark: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>,
};

const whyIcons: Record<string, React.ReactNode> = {
  target: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v3m0 12v3" /></svg>,
  "trending-up": <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>,
  "book-open": <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>,
  shield: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>,
  headphones: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>,
};

/* ══════════════════════════════════════════════ */
/*                  HOME PAGE                    */
/* ══════════════════════════════════════════════ */
export default function HomePage() {
  const stepImages = [
    "/assets/IMG_2489.png",
    "/assets/IMG_2490.png",
    "/assets/IMG_2491.png",
    "/assets/IMG_2492.png",
    "/assets/IMG_2493.png",
  ];
  const stepGradients = [
    "from-blue-500 to-cyan-400",
    "from-amber-500 to-orange-400",
    "from-emerald-500 to-green-400",
    "from-purple-500 to-pink-400",
    "from-rose-500 to-red-400"
  ];
  const [activeStep, setActiveStep] = useState(0);

  const [latestNews, setLatestNews] = useState([
    {
      title: "Understanding Market Volatility in 2024",
      category: "Market Trends",
      date: "Jul 10, 2024",
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      link: "/blog"
    },
    {
      title: "The Power of Compounding in Wealth Creation",
      category: "Investing 101",
      date: "Jun 28, 2024",
      img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
      link: "/blog"
    },
    {
      title: "Tax Harvesting Strategies for Indian Investors",
      category: "Tax Planning",
      date: "Jun 15, 2024",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
      link: "/blog"
    },
    {
      title: "Retirement Planning: Building a Secure Nest Egg",
      category: "Retirement",
      date: "May 30, 2024",
      img: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80",
      link: "/blog"
    }
  ]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setLatestNews(data);
        }
      })
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [activePhilosophy, setActivePhilosophy] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhilosophy((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [showScrollAlert, setShowScrollAlert] = useState(false);
  const [scrollAlertDismissed, setScrollAlertDismissed] = useState(false);


  useEffect(() => {
    const isDismissed = sessionStorage.getItem("wealth_acumen_scroll_alert_dismissed");
    if (isDismissed) {
      setTimeout(() => {
        setScrollAlertDismissed(true);
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (scrollAlertDismissed) return;

    const handleScrollAlert = () => {
      if (window.scrollY > 600) {
        setShowScrollAlert(true);
      } else {
        setShowScrollAlert(false);
      }
    };

    window.addEventListener("scroll", handleScrollAlert, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollAlert);
  }, [scrollAlertDismissed]);

  const dismissScrollAlert = () => {
    setShowScrollAlert(false);
    setScrollAlertDismissed(true);
    sessionStorage.setItem("wealth_acumen_scroll_alert_dismissed", "true");
  };

  return (
    <>
                  {/* ═══════════════════════════════════════════ */}
      {/*        INTERACTIVE COMPASS HERO                 */}
      {/* ═══════════════════════════════════════════ */}
      <InteractiveCompassHero />
      
      {/* ═══════════════════════════════════════════ */}
      {/*        INTERACTIVE WEALTH TIMELINE           */}
      {/* ═══════════════════════════════════════════ */}
      <WealthJourneyTimeline />

      {/* ═══════════════════════════════════════════ */}
      {/*           WHY CHOOSE US SECTION              */}
      {/* ═══════════════════════════════════════════ */}
      <WhyChooseUsHome />

      {/* ═══════════════════════════════════════════ */}
      {/*           TRUST METRICS SECTION              */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white relative border-y border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(4,15,45,0.05)] z-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20">
            
            {/* Metric 1 */}
            <FadeIn delay={0.1} className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <div className="text-[#D4AF37] font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-light mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-[var(--foreground)]/80 transition-colors duration-500 font-light tracking-[0.1em] uppercase text-sm">Years of Experience</p>
            </FadeIn>

            {/* Metric 2 */}
            <FadeIn delay={0.2} className="flex flex-col items-center justify-center pt-12 md:pt-0">
              <div className="text-[#D4AF37] font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-light mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center">
                <AnimatedCounter end={500} suffix="+" duration={3} />
              </div>
              <p className="text-[var(--foreground)]/80 transition-colors duration-500 font-light tracking-[0.1em] uppercase text-sm">Families Guided</p>
            </FadeIn>

            {/* Metric 3 */}
            <FadeIn delay={0.3} className="flex flex-col items-center justify-center pt-12 md:pt-0">
              <div className="text-[#D4AF37] font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl font-light mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center">
                <span className="mr-1">₹</span>
                <AnimatedCounter end={250} duration={3} />
                <span className="ml-2 text-3xl">Cr+</span>
              </div>
              <p className="text-[var(--foreground)]/80 transition-colors duration-500 font-light tracking-[0.1em] uppercase text-sm">Assets Managed</p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/*           LUXURY ABOUT SECTION               */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-16 pb-4 sm:pt-20 sm:pb-8 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.015] z-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* CEO Message Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Luxury Image */}
            <FadeIn>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-3xl rounded-full transform -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
                <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="/assets/images/founder.png" alt="Founder Atharva Wadekar" className="w-full h-full object-cover object-top transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white transition-colors duration-500 text-lg font-[family-name:var(--font-playfair)] italic">&quot;Wealth is not just about money. It&apos;s about freedom, security, and legacy.&quot;</p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="h-px flex-1 bg-[var(--background)] transition-colors duration-500/30" />
                      <p className="text-white/80 text-xs font-light tracking-widest uppercase">Wealth Acumen</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Editorial Typography & Timeline */}
            <div className="flex flex-col space-y-10">
              <FadeIn delay={0.2}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-[#D4AF37]" />
                  <span className="text-xs font-light tracking-[0.2em] uppercase text-[#D4AF37]">Our Philosophy</span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-light text-[var(--foreground)] transition-colors duration-500 leading-tight">
                  A vision built on <span className="text-[#D4AF37]">Trust</span>, driven by <span className="italic">Excellence.</span>
                </h2>
                <p className="mt-6 text-lg text-[var(--theme-text-muted)] transition-colors duration-500 leading-relaxed">
                  We empower Indian investors with personalized, goal-oriented strategies. Our holistic approach ensures sustainable growth, transparent advisory, and true financial freedom for you and your family.
                </p>
              </FadeIn>

              {/* Minimal Timeline */}
              <FadeIn delay={0.3}>
                <div className="space-y-6 pt-6 border-t border-[#D4AF37]/20 relative">
                  {/* Animated connecting line background */}
                  <div className="absolute left-[11px] top-[46px] bottom-6 w-px bg-[var(--foreground)] opacity-10" />
                  
                  {[
                    {
                      title: "Foundation of Trust",
                      desc: "Established with a vision to bring ethical, transparent financial advisory to the retail investor.",
                    },
                    {
                      title: "Partnering for Scale",
                      desc: "Became an AMFI Registered Distributor and Angel One Channel Partner, expanding our robust product offerings.",
                    },
                    {
                      title: "Shaping the Future",
                      desc: "Continuously innovating our wealth management solutions for HNI and emerging retail segments.",
                    }
                  ].map((step, idx) => {
                    const isActive = activePhilosophy === idx;
                    const isPassed = activePhilosophy > idx;
                    return (
                      <div key={idx} className="relative pl-8 z-10">
                        <div 
                          className={`absolute left-0 top-1.5 w-6 h-6 rounded-full transition-all duration-700 border-2 flex items-center justify-center
                            ${isActive ? 'bg-[var(--background)] border-[#D4AF37] scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 
                              isPassed ? 'bg-[var(--background)] border-[#D4AF37] opacity-80' : 
                              'bg-[var(--background)] border-[var(--foreground)] border-opacity-30'}`}
                        >
                          <div 
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-700 
                              ${isActive || isPassed ? 'bg-[#D4AF37]' : 'bg-[var(--foreground)] opacity-40'}
                              ${isActive && 'animate-pulse'}`} 
                          />
                        </div>
                        <h4 className={`text-lg font-light transition-colors duration-700 ${isActive ? 'text-[#D4AF37]' : 'text-[var(--foreground)]'}`}>
                          {step.title}
                        </h4>
                        <p className={`text-sm transition-colors duration-700 mt-1 ${isActive ? 'text-[var(--foreground)] opacity-90' : 'text-[var(--theme-text-muted)]'}`}>
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/*     PREMIUM BENTO SERVICES SECTION         */}
      {/* ═══════════════════════════════════════════ */}
      <section id="services" className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        {/* Deep luxury background with glowing orbs (Removed for clean white base) */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
              <p className="text-sm font-bold text-[#D4AF37] tracking-[0.2em] uppercase">Our Services</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-light text-center mb-8 sm:mb-16 text-[#0B245B] dark:text-white transition-colors duration-500">
              Explore Our <span className="text-[#D4AF37] italic">Premium</span> Solutions
            </h2>
          </FadeIn>
        </div>

        {/* Premium Full-Width Horizontal Carousel Pattern */}
        <div className="w-full relative z-10">
          <div className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-12 pt-4 px-4 sm:px-8 lg:px-12 xl:px-24 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* 1. Equity */}
            <FadeIn delay={0.1} className="w-[85vw] sm:w-[450px] lg:w-[500px] shrink-0 snap-center h-[420px] sm:h-[450px]">
              <Link href="/services/equity" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B58A18]/70 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Image Section */}
                <div className="relative w-full h-[45%] overflow-hidden border-b border-[#D4AF37]/10 z-0 bg-white/95 flex items-center justify-center">
                  <Image src="/assets/images/services/equity.jpeg" alt="Equity Advisory" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 h-[55%] flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center text-[#0B245B] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm absolute -top-8 bg-white/90 backdrop-blur-md dark:bg-[#0B1736]/90 dark:text-white">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
                  </div>
                  <div className="pt-10 sm:pt-12">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-light text-[#0B245B] dark:text-white transition-colors duration-500 mb-2 sm:mb-3">Equity Advisory</h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 text-sm sm:text-base line-clamp-3">Exclusive access to premium equity research, portfolio strategies, and direct market participation.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 2. Mutual Funds */}
            <FadeIn delay={0.2} className="w-[85vw] sm:w-[450px] lg:w-[500px] shrink-0 snap-center h-[420px] sm:h-[450px]">
              <Link href="/services/mutual-funds" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B58A18]/70 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Image Section */}
                <div className="relative w-full h-[45%] overflow-hidden border-b border-[#D4AF37]/10 z-0 bg-white/95 flex items-center justify-center">
                  <Image src="/assets/images/services/mutual-funds.jpeg" alt="Mutual Funds" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 h-[55%] flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center text-[#0B245B] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm absolute -top-8 bg-white/90 backdrop-blur-md dark:bg-[#0B1736]/90 dark:text-white">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
                  </div>
                  <div className="pt-10 sm:pt-12">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-light text-[#0B245B] dark:text-white transition-colors duration-500 mb-2 sm:mb-3">Mutual Funds</h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 text-sm sm:text-base line-clamp-3">Curated selection of top-tier funds perfectly aligned with your long-term life goals.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 3. ETFs */}
            <FadeIn delay={0.3} className="w-[85vw] sm:w-[450px] lg:w-[500px] shrink-0 snap-center h-[420px] sm:h-[450px]">
              <Link href="/services/etfs" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B58A18]/70 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Image Section */}
                <div className="relative w-full h-[45%] overflow-hidden border-b border-[#D4AF37]/10 z-0 bg-white/95 flex items-center justify-center">
                  <Image src="/assets/images/services/etf.jpeg" alt="ETFs" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 h-[55%] flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center text-[#0B245B] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm absolute -top-8 bg-white/90 backdrop-blur-md dark:bg-[#0B1736]/90 dark:text-white">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" /></svg>
                  </div>
                  <div className="pt-10 sm:pt-12">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-light text-[#0B245B] dark:text-white transition-colors duration-500 mb-2 sm:mb-3">ETFs</h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 text-sm sm:text-base line-clamp-3">Smart, low-cost diversification across global markets for maximum returns.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 4. Insurance */}
            <FadeIn delay={0.4} className="w-[85vw] sm:w-[450px] lg:w-[500px] shrink-0 snap-center h-[420px] sm:h-[450px]">
              <Link href="/services/insurance" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B58A18]/70 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Image Section */}
                <div className="relative w-full h-[45%] overflow-hidden border-b border-[#D4AF37]/10 z-0 bg-white/95 flex items-center justify-center">
                  <Image src="/assets/images/services/insurance-new.png" alt="Insurance" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 h-[55%] flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center text-[#0B245B] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm absolute -top-8 bg-white/90 backdrop-blur-md dark:bg-[#0B1736]/90 dark:text-white">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                  </div>
                  <div className="pt-10 sm:pt-12">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-light text-[#0B245B] dark:text-white transition-colors duration-500 mb-2 sm:mb-3">Insurance</h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 text-sm sm:text-base line-clamp-3">Comprehensive protection for your wealth, life, and future generations.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
            
            {/* 5. Bonds */}
            <FadeIn delay={0.5} className="w-[85vw] sm:w-[450px] lg:w-[500px] shrink-0 snap-center h-[420px] sm:h-[450px]">
              <Link href="/services/bonds" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B58A18]/70 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Image Section */}
                <div className="relative w-full h-[45%] overflow-hidden border-b border-[#D4AF37]/10 z-0 bg-white/95 flex items-center justify-center">
                  <Image src="/assets/images/services/bonds.png" alt="Bonds" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 h-[55%] flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center text-[#0B245B] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm absolute -top-8 bg-white/90 backdrop-blur-md dark:bg-[#0B1736]/90 dark:text-white">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                  </div>
                  <div className="pt-10 sm:pt-12">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-light text-[#0B245B] dark:text-white transition-colors duration-500 mb-2 sm:mb-3">Bonds</h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 text-sm sm:text-base line-clamp-3">Stable, predictable yields and absolute peace of mind for conservative allocation.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 6. Fixed Deposit */}
            <FadeIn delay={0.6} className="w-[85vw] sm:w-[450px] lg:w-[500px] shrink-0 snap-center h-[420px] sm:h-[450px]">
              <Link href="/services/fixed-deposit" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[var(--secondary-bg)] backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-lg hover:shadow-[0_10px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2 flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B58A18]/70 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Image Section */}
                <div className="relative w-full h-[45%] overflow-hidden border-b border-[#D4AF37]/10 z-0 bg-white/95 flex items-center justify-center">
                  <Image src="/assets/images/services/service_fixed_income_premium.png" alt="Fixed Deposit" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 h-[55%] flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-center text-[#0B245B] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm absolute -top-8 bg-white/90 backdrop-blur-md dark:bg-[#0B1736]/90 dark:text-white">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
                  </div>
                  <div className="pt-10 sm:pt-12">
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-light text-[#0B245B] dark:text-white transition-colors duration-500 mb-2 sm:mb-3">Fixed Deposit</h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500 text-sm sm:text-base line-clamp-3">Secure your savings with guaranteed returns and capital protection through top banking partners.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════════ */}
      {/*            WHY CHOOSE US                   */}
      {/* ═══════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════ */}
      {/*             TESTIMONIALS                   */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        {/* Subtle luxury mesh background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#D9791A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D9791A]/50" />
              <p className="text-sm font-light text-[#D4AF37] tracking-[0.2em] uppercase">Client Success</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D9791A]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-light text-center mb-16 text-[var(--foreground)] transition-colors duration-500">
              Trusted by <span className="italic text-[#D4AF37]">Generations</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-12">
            <TestimonialCarousel testimonials={testimonials} />
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/*              KNOWLEDGE CENTER                */}
      {/* ═══════════════════════════════════════════ */}
      <section id="knowledge" className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        {/* Subtle background golden glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
                <span className="text-xs font-light tracking-[0.2em] uppercase text-[#D4AF37]">Investor Education</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-light text-[var(--foreground)] transition-colors duration-500 mb-6">
                Knowledge <span className="italic text-[#D4AF37]">Center</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light">
                Empower your financial journey with curated insights, market guidance, and strategic wisdom.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Video */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col h-full group/card max-w-xl mx-auto w-full">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-light text-[var(--foreground)] mb-4 leading-tight transition-colors duration-300 group-hover/card:text-[#D4AF37]">
                  How does inflation affect your investments?
                </h3>
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-[#D4AF37]/10 dark:border-[#D4AF37]/5 bg-gray-100 dark:bg-gray-900 transition-all duration-500 group-hover/card:border-[#D4AF37]/40 group-hover/card:shadow-[#D4AF37]/5 group-hover/card:-translate-y-1">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/o1rU1tbWj9o"
                    title="How does inflation affect your investments?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </FadeIn>

            {/* Right Video */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col h-full group/card max-w-xl mx-auto w-full">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-light text-[var(--foreground)] mb-4 leading-tight transition-colors duration-300 group-hover/card:text-[#D4AF37]">
                  Hitman's Mantra: Stay Calm, Stay Invested.
                </h3>
                <div className="relative w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-[#D4AF37]/10 dark:border-[#D4AF37]/5 bg-gray-100 dark:bg-gray-900 transition-all duration-500 group-hover/card:border-[#D4AF37]/40 group-hover/card:shadow-[#D4AF37]/5 group-hover/card:-translate-y-1">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/HPBSwSP7Hw0"
                    title="Hitman's Mantra: Stay Calm, Stay Invested."
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/*               BLOGS SECTION                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
                <span className="text-xs font-light tracking-[0.2em] uppercase text-[#D4AF37]">Market News & Insights</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-light text-[var(--foreground)] transition-colors duration-500 mb-6">
                Latest from the <span className="italic text-[#D4AF37]">Desk</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#0B245B] font-medium hover:from-[#C59B27] hover:to-[#B58A18] hover:gap-3 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/30">
                View all articles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestNews.map((post, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                <Link 
                  href={post.link || "/blog"} 
                  className="group block"
                  {...(post.link?.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 shadow-md">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--foreground)]/90 text-[var(--background)] backdrop-blur-sm text-xs font-light px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-light text-[var(--theme-text-muted)] transition-colors duration-500 uppercase tracking-widest mb-3">{post.date}</p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-light text-[var(--foreground)] transition-colors duration-500 leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/*            REQUEST A CALL BACK             */}
      {/* ═══════════════════════════════════════════ */}
      <section className="pt-10 pb-20 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden border-t border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <FadeIn>
                <div className="inline-flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-[#D4AF37]" />
                  <p className="text-xs sm:text-sm font-bold text-[#D4AF37] tracking-[0.2em] uppercase">Request a Call Back</p>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-light text-[#0B245B] dark:text-white leading-tight mb-4">
                  We are always ahead <br />
                  <span className="text-[#D4AF37] italic">Professional Solutions</span> for Your Wealth
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light max-w-lg mb-8">
                  Fill out the form to request a call back from our financial experts. We will help you identify the best investment strategies customized for your specific financial goals.
                </p>
              </FadeIn>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <FadeIn delay={0.2}>
                <div className="relative rounded-[2rem] bg-[var(--secondary-bg)] border border-[#D4AF37]/20 p-8 sm:p-10 shadow-2xl overflow-hidden">
                  {/* Subtle corner light flare */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-[40px] pointer-events-none" />
                  
                  {/* Google Form Link */}
                  <div className="relative z-10 mb-8 bg-[#D4AF37]/10 p-4 rounded-xl border border-[#D4AF37]/30 text-center">
                    <p className="text-sm text-[var(--theme-text-muted)] mb-3">
                      Please complete our Risk Profiling Assessment before requesting a callback.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSemC0QaoVYJXZQ5C2we0cMAiSyE8K0Gc0YQU-bzkDjqNXKrbQ/viewform?usp=publish-editor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#D4AF37] hover:text-[#B59124] hover:underline flex items-center justify-center gap-2"
                    >
                      Complete Risk Profiling Form
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <form 
                    className="space-y-6 relative z-10"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const service = formData.get("service");
                      const name = formData.get("name");
                      const phone = formData.get("phone");
                      const email = formData.get("email");
                      const message = formData.get("message");
                      const text = `Hi Wealth Acumen,\n\nI would like to request a callback regarding *${service}*.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n\n*Message:*\n${message}`;
                      window.open(`https://wa.me/9325227357?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                  >
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-[#0B245B] dark:text-gray-300 mb-2">
                        I would like to discuss:
                      </label>
                      <select 
                        name="service"
                        className="w-full bg-white dark:bg-[#0B1530] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-gray-800 dark:text-white transition-all duration-300 shadow-sm"
                        defaultValue="Equity"
                      >
                        <option value="Equity">Equity</option>
                        <option value="Mutual Funds">Mutual Funds</option>
                        <option value="Insurance">Insurance</option>
                        <option value="ETFs">ETFs</option>
                        <option value="Bonds">Bonds</option>
                        <option value="Fixed Deposit">Fixed Deposit</option>
                      </select>
                    </div>

                    <div>
                      <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full bg-white dark:bg-[#0B1530] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-gray-800 dark:text-white transition-all duration-300 shadow-sm"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          className="w-full bg-white dark:bg-[#0B1530] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-gray-800 dark:text-white transition-all duration-300 shadow-sm"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="w-full bg-white dark:bg-[#0B1530] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-gray-800 dark:text-white transition-all duration-300 shadow-sm"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <textarea 
                        rows={4}
                        name="message"
                        placeholder="Description"
                        className="w-full bg-white dark:bg-[#0B1530] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37] text-gray-800 dark:text-white transition-all duration-300 shadow-sm resize-none"
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0B245B] hover:bg-[#0B245B]/90 text-[#D4AF37] border border-[#D4AF37]/35 hover:border-[#D4AF37] font-medium py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-lg text-sm sm:text-base tracking-wider uppercase cursor-pointer flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send to Us
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════ */}
      {/*          CINEMATIC CTA BANNER              */}
      {/* ═══════════════════════════════════════════ */}
      <section className="section-padding !py-12 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="relative rounded-[2.5rem] bg-[var(--background)] transition-colors duration-500 border border-[#D4AF37]/20 shadow-xl shadow-black/40 p-8 sm:p-12 lg:p-16 overflow-hidden">
              {/* Subtle Ambient Background Decorative Shapes */}
              <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-orange-50/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-cyan-50/20 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Content Column */}
                <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                  {/* Trust Pill Badge */}
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-50/60 border border-orange-100/50 shadow-sm self-start">
                    <svg className="w-4 h-4 text-[#D4AF37] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0012 21c-2.829 0-5.437-.893-7.563-2.4a9.338 9.338 0 0113.813-2.493M14 9.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <span className="text-xs font-light text-[#D4AF37]/90">Trusted by 500+ Indian Investors</span>
                    <div className="flex -space-x-2 overflow-hidden ml-1">
                      {[
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80"
                      ].map((url, idx) => (
                        <img
                          key={idx}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover shrink-0"
                          src={url}
                          alt=""
                        />
                      ))}
                      <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 ring-2 ring-white text-[10px] font-light text-[#D4AF37] shrink-0">
                        +
                      </div>
                    </div>
                  </div>

                  {/* Main Title Heading */}
                  <h2 className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-[var(--foreground)] transition-colors duration-500 leading-[1.1] tracking-tight">
                    Ready to start your <br />
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#C59B27] bg-clip-text text-transparent">wealth journey?</span>
                  </h2>

                  {/* Subtext Description */}
                  <p className="text-base sm:text-lg text-[var(--theme-text-muted)] transition-colors duration-500 max-w-xl leading-relaxed font-normal">
                    Get personalized guidance from our team. We are here to help you make informed investment decisions and build lasting wealth.
                  </p>

                  {/* Button Panel */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href={brand.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-[var(--foreground)] text-[var(--background)] hover:bg-[#D4AF37] hover:text-white font-light py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2.5 text-base cursor-pointer"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      Chat on WhatsApp
                    </a>
                    <a
                      href={brand.angelOneAppLogin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-transparent hover:bg-[var(--foreground)]/5 text-[var(--foreground)] font-light py-4 px-8 rounded-2xl border border-[var(--foreground)]/20 hover:border-[var(--foreground)] transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 text-base cursor-pointer"
                    >
                      Open Demat Account
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                    </a>
                  </div>

                  {/* Credentials Row */}
                  <div className="flex flex-wrap items-center gap-y-4 gap-x-6 sm:gap-x-8 pt-4 border-t border-[#D4AF37]/20">
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-[#D4AF37] shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      </span>
                      <span className="text-[11px] sm:text-xs font-light text-[#0B245B] leading-snug">
                        AMFI Registered<br /><span className="text-[#0B245B]">Distributor</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-emerald-500 shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>
                      <span className="text-[11px] sm:text-xs font-light text-[#0B245B] leading-snug">
                        Personalized<br /><span className="text-[#0B245B]">Strategy</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="shrink-0 w-9 h-9 rounded-xl bg-amber-50 border border-amber-100/50 flex items-center justify-center text-amber-500 shadow-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22" />
                        </svg>
                      </span>
                      <span className="text-[11px] sm:text-xs font-light text-[#0B245B] leading-snug">
                        Long-term<br /><span className="text-[#0B245B]">Wealth Focus</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Illustration and Stats Card Column */}
                <div className="lg:col-span-5 flex flex-col items-center gap-6">
                  {/* Professional Image */}
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center select-none">
                    <div className="relative w-full h-full max-w-[380px] rounded-[2rem] overflow-hidden shadow-2xl border border-[#D4AF37]/20">
                      <Image
                        src="/assets/images/deal_handshake.png"
                        alt="Wealth Management Professionals"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 35vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* Horizontal 4-Column Stats Card */}
                  <div className="w-full bg-[var(--background)] transition-colors duration-500 rounded-2xl p-5 border border-[#D4AF37]/20 shadow-lg shadow-black/20/80">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 sm:gap-y-0 divide-x-0 sm:divide-x divide-slate-100">
                      {/* Stat 1 */}
                      <div className="text-center px-1 sm:px-2">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#D4AF37] mb-2 mx-auto shadow-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0012 21c-2.829 0-5.437-.893-7.563-2.4a9.338 9.338 0 0113.813-2.493M14 9.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                          </svg>
                        </div>
                        <p className="text-lg font-[family-name:var(--font-outfit)] font-light text-[#0B245B] tracking-tight">500+</p>
                        <p className="text-[10px] font-light text-[#0B245B] mt-0.5 leading-none">Happy Investors</p>
                      </div>

                      {/* Stat 2 */}
                      <div className="text-center px-1 sm:px-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-2 mx-auto shadow-sm">
                          <span className="text-xs font-light font-sans">₹</span>
                        </div>
                        <p className="text-lg font-[family-name:var(--font-outfit)] font-light text-[#0B245B] tracking-tight">₹100Cr+</p>
                        <p className="text-[10px] font-light text-[#0B245B] mt-0.5 leading-none">Assets Guided</p>
                      </div>

                      {/* Stat 3 */}
                      <div className="text-center px-1 sm:px-2">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-2 mx-auto shadow-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <p className="text-lg font-[family-name:var(--font-outfit)] font-light text-[#0B245B] tracking-tight">4+</p>
                        <p className="text-[10px] font-light text-[#0B245B] mt-0.5 leading-none">Years Experience</p>
                      </div>

                      {/* Stat 4 */}
                      <div className="text-center px-1 sm:px-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 mb-2 mx-auto shadow-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                        <p className="text-lg font-[family-name:var(--font-outfit)] font-light text-[#0B245B] tracking-tight">98%</p>
                        <p className="text-[10px] font-light text-[#0B245B] mt-0.5 leading-none">Client Sat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Floating Scroll-Triggered Opportunity Cost Notification */}
      <AnimatePresence>
        {showScrollAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-6 z-40 max-w-sm w-[calc(100vw-3rem)] glass rounded-3xl p-5 border border-[#D4AF37]/20/80 shadow-2xl shadow-orange-950/[0.05] font-sans flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 shadow-sm">
              <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-[family-name:var(--font-outfit)] font-light text-white pr-4">
                Procrastination is expensive!
              </h4>
              <p className="text-xs text-[var(--theme-text-muted)] transition-colors duration-500 leading-relaxed mt-1">
                Delaying a ₹10,000 monthly SIP by just 1 year could cost you over <strong className="text-[#D4AF37] font-light">₹5,00,000</strong> in lost potential compound wealth.
              </p>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href="#calculator"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-light text-[#D4AF37] hover:text-orange-850 transition-colors"
                >
                  Calculate Loss
                </a>
                <span className="text-slate-300 text-[10px] select-none">&bull;</span>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-light text-emerald-600 hover:text-emerald-750 transition-colors flex items-center gap-1"
                >
                  Consult Advisor &rarr;
                </a>
              </div>
            </div>
            <button
              onClick={dismissScrollAlert}
              className="absolute top-4 right-4 p-1 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-3.5 h-3.5 text-[#8B9ECC] hover:text-[var(--theme-text-muted)] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
