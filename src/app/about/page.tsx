"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { brand } from "@/config/brand";
import { aboutContent, proprietor, whyChooseUs } from "@/config/content";

/* ─── Animation Helper ─── */
function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Icon Map (first 3) ─── */
const iconMap: Record<string, React.ReactNode> = {
  target: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3" />
    </svg>
  ),
  "trending-up": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  "book-open": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
};

/* ─── ABOUT PAGE ─── */
export default function AboutPage() {
  const top3 = whyChooseUs.slice(0, 3);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors duration-500">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24 bg-transparent">
        {/* Background effects */}
        <div className="absolute inset-0 select-none pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-50/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[var(--foreground)]/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        {/* Desktop-only: Immersive Independent Visual Background - fades and overlaps behind grid */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%] z-0 pointer-events-none select-none overflow-hidden opacity-90">
          <Image
            src="/assets/images/about-hero-visual.jpg"
            alt=""
            fill
            className="object-cover object-[30%_center]"
            priority
          />
          {/* 360-degree soft gradient disappearing masks to blend visual perfectly into background */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[var(--background)] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/40 to-transparent" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.01] z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217, 121, 26, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 121, 26, 0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-[92vw] mx-auto px-4 sm:px-6 lg:px-8 xl:px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column (55% width) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:max-w-[560px]">
              <span className="text-xs font-light text-[var(--foreground)] tracking-[0.2em] uppercase leading-none">
                Who We Are
              </span>
              
              <h1 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl lg:text-[3.75rem] font-light text-[var(--foreground)] leading-[1.1] tracking-tight">
                <span className="text-[var(--foreground)]">Wealth Acumen</span>
              </h1>

              <div className="space-y-4 text-base text-[var(--theme-text-muted)] leading-relaxed font-normal">
                <p className="text-xl sm:text-2xl font-light text-[var(--foreground)] leading-snug">
                  Guiding your financial journey with trust, clarity and purpose.
                </p>
                <p className="text-base sm:text-[1.1rem] leading-relaxed text-[var(--theme-text-muted)]">
                  At Wealth Acumen, we believe that smart investing begins with the right guidance. As a trusted partner in your financial journey, we help you make informed decisions, achieve your goals and build long-term wealth for a secure future.
                </p>
              </div>

              {/* Trust Pillars - Minimal & Luxurious Typographic Layout */}
              <div className="grid grid-cols-2 gap-5 sm:gap-6 w-full pt-8 border-t border-[#D4AF37]/20 mt-8">
                {/* Pillar 1 */}
                <div className="flex flex-col space-y-2 p-5 rounded-2xl glass glass-hover">
                  <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none">01</span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-[var(--foreground)]">
                    Client First
                  </h3>
                  <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
                    Your goals are our priority. We put your interests first.
                  </p>
                </div>
                
                {/* Pillar 2 */}
                <div className="flex flex-col space-y-2 p-5 rounded-2xl glass glass-hover">
                  <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none">02</span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-[var(--foreground)]">
                    Transparent Advice
                  </h3>
                  <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
                    Honest, unbiased and clear guidance you can always rely on.
                  </p>
                </div>
                
                {/* Pillar 3 */}
                <div className="flex flex-col space-y-2 p-5 rounded-2xl glass glass-hover">
                  <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none">03</span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-[var(--foreground)]">
                    Goal Based Approach
                  </h3>
                  <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
                    Personalized strategies designed around your dreams and needs.
                  </p>
                </div>
                
                {/* Pillar 4 */}
                <div className="flex flex-col space-y-2 p-5 rounded-2xl glass glass-hover">
                  <span className="font-[family-name:var(--font-serif)] text-2xl font-light text-[#D4AF37] leading-none">04</span>
                  <h3 className="font-[family-name:var(--font-outfit)] text-[15px] font-semibold text-[var(--foreground)]">
                    Long Term Growth
                  </h3>
                  <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed">
                    Focused on creating sustainable wealth and financial independence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (45% width) - holds the visual on mobile/tablet */}
            <div className="lg:col-span-5 relative w-full lg:min-h-[460px] flex items-center justify-center">
              {/* Mobile-only beautiful cropped card */}
              <div className="lg:hidden relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border border-orange-100/20 mt-8">
                <Image
                  src="/assets/images/about-hero-visual.jpg"
                  alt="Wealth Acumen visual"
                  fill
                  className="object-cover object-[15%_center]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR MISSION ═══ */}
      <section className="pt-20 pb-10 sm:pt-24 sm:pb-12 bg-gradient-to-b from-transparent via-[#D9791A]/[0.015] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="glass rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--glass-border)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image Card */}
                <div className="relative w-full h-[280px] sm:h-[360px] lg:h-auto min-h-[320px] overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                      alt="Our Mission"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent hidden lg:block opacity-70" />
                  </motion.div>
                </div>

                {/* Right: Heading + Text */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-6">
                  <FadeInSection delay={0.15}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
                      <p className="text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase">Our Purpose</p>
                    </div>
                    <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--foreground)] leading-tight tracking-tight mb-4">
                      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] italic font-medium pr-2 pb-1">Mission</span>
                    </h2>
                    <div className="flex items-start gap-4">
                      <p className="text-[var(--theme-text-muted)] leading-relaxed text-base sm:text-lg">
                        {aboutContent.missionFull}
                      </p>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
 
      {/* ═══ ANGEL ONE CHANNEL PARTNER ═══ */}
      <section className="pt-10 pb-10 sm:pt-12 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="glass rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--glass-border)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image Column */}
                <div className="relative w-full h-[400px] sm:h-[480px] lg:h-auto min-h-[420px] overflow-hidden bg-[var(--foreground)]/[0.02] flex flex-col items-center justify-center p-6 sm:p-10 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-md border border-[var(--glass-border)] bg-[var(--background)]/50"
                  >
                    <Image
                      src="/assets/Screenshot-2025-05-23-123227.png"
                      alt="Angel One Partnership Trading Platform"
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative w-full flex-1 rounded-2xl overflow-hidden shadow-md border border-[var(--glass-border)] bg-[var(--background)]/50"
                  >
                    <Image
                      src="/assets/images/angelone_png2.jpg"
                      alt="Angel One Partnership Features"
                      fill
                      className="object-contain p-2"
                    />
                  </motion.div>
                </div>

                {/* Right: Heading + Text */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-6">
                  <FadeInSection delay={0.15}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
                      <p className="text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase">Partnership</p>
                    </div>
                    <h2 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--foreground)] leading-tight tracking-tight mb-4">
                      Angel One <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] italic font-medium inline-block pr-3">Channel Partner</span>
                    </h2>
                    <p className="text-[var(--theme-text-muted)] leading-relaxed text-base sm:text-lg mb-6">
                      {aboutContent.angelOnePartnership}
                    </p>
                    <h3 className="font-[family-name:var(--font-outfit)] text-base font-semibold text-[var(--foreground)] mb-4">
                      Through this partnership, I aim to provide my clients with:
                    </h3>
                    <ul className="space-y-3">
                      {aboutContent.angelOneBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27] flex-shrink-0" />
                          <span className="text-[var(--theme-text-muted)] leading-relaxed text-sm sm:text-base">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </FadeInSection>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
 
      {/* ═══ PROPRIETOR ═══ */}
      <section
        id="proprietor"
        className="pt-10 pb-20 sm:pt-12 sm:pb-24 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
                <p className="text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase">
                  Meet the Founder
                </p>
                <div className="w-8 h-[2px] bg-[#D4AF37]"></div>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-[var(--foreground)] leading-tight tracking-tight">
                The Mind Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] italic">Wealth Acumen</span>
              </h2>
            </div>
          </FadeInSection>
 
          <FadeInSection delay={0.15}>
            <div className="relative max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Premium Image Presentation */}
                <div className="w-full lg:w-5/12 relative flex justify-center lg:justify-end">
                  {/* Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-[2rem] blur-xl opacity-50"></div>
                  <div className="absolute top-10 -left-10 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-10 right-0 w-40 h-40 bg-[#D4AF37]/15 rounded-full blur-2xl"></div>
                  
                  <div className="relative w-[300px] sm:w-[380px] lg:w-[420px] h-[380px] sm:h-[480px] lg:h-[540px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[var(--glass-border)] group bg-gradient-to-b from-transparent to-[#D4AF37]/5">
                    <Image 
                      src="/assets/images/founder.png"
                      alt="Atharva Wadekar"
                      fill
                      className="object-cover object-top sm:object-[center_10%] transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-30 pointer-events-none"></div>
                  </div>
                </div>

                {/* Elegant Text Content */}
                <div className="w-full lg:w-7/12 text-center lg:text-left flex flex-col items-center lg:items-start pt-4 lg:pt-0">
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="hidden lg:block w-12 h-[1px] bg-[#D4AF37]"></div>
                    <p className="text-sm font-semibold text-[#D4AF37] uppercase tracking-[0.3em] font-[family-name:var(--font-outfit)]">
                      Visionary Leadership
                    </p>
                  </div>
                  
                  <h3 className="font-[family-name:var(--font-serif)] text-5xl sm:text-6xl lg:text-7xl font-light text-[var(--foreground)] mb-5 tracking-tight leading-none">
                    Atharva <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#C59B27] italic">Wadekar</span>
                  </h3>
   
                  <div className="mb-8">
                    <p className="text-sm sm:text-base text-[var(--theme-text-muted)] font-semibold uppercase tracking-[0.2em]">
                      Proprietor • {brand.name}
                    </p>
                  </div>
   
                  <div className="relative">
                    <svg className="absolute -top-6 -left-10 w-20 h-20 text-[#D4AF37]/10 transform -scale-x-100 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-[var(--theme-text-muted)] leading-relaxed text-lg sm:text-xl font-light max-w-2xl relative z-10">
                      {proprietor.bio}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
 

    </div>
  );
}
