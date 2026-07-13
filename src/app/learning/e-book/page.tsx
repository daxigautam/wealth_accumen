"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

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

export default function EBookPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-500/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6 lg:mb-8"
          >
            <Link
              href="/#empower"
              className="inline-flex items-center gap-2 text-sm text-[#A3B5D9] hover:text-[#D4AF37] transition-colors border border-[#A3B5D9]/20 hover:border-[#D4AF37]/45 rounded-full px-4 py-1.5 bg-[#040F2D]/40 backdrop-blur-sm shadow-sm"
            >
              <svg
                className="w-4 h-4 transform rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-medium text-[#D4AF37] tracking-wider uppercase mb-3"
          >
            Learning Resources
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Download our <span className="gradient-text">E-Book</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[#A3B5D9] max-w-2xl mx-auto"
          >
            Get started on your financial learning journey with our comprehensive e-book.
          </motion.p>
        </div>
      </section>

      {/* ═══ FORM SECTION ═══ */}
      <section className="section-padding pt-8">
        <div className="max-w-lg mx-auto">
          <FadeInSection>
            <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9791A]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>

                <h2 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white text-center mb-2">
                  Submit form to download E-Book
                </h2>
                <p className="text-sm text-slate-500 text-center mb-8">
                  Fill in your details below and get instant access.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-[#A3B5D9] mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1736] border border-[#D4AF37]/20 text-white placeholder:text-[#8B9ECC] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D9791A] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-[#A3B5D9] mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1736] border border-[#D4AF37]/20 text-white placeholder:text-[#8B9ECC] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D9791A] transition-all"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm text-[#A3B5D9] mb-1.5">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1736] border border-[#D4AF37]/20 text-white placeholder:text-[#8B9ECC] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D9791A] transition-all"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full text-sm inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Submit & Download E-Book
                  </button>
                </form>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
