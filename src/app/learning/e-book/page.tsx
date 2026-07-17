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
      <section className="relative pt-32 pb-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[128px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-500/8 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px]" />
        </div>



        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

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
            className="font-[family-name:var(--font-outfit)] text-4xl sm:text-5xl md:text-6xl font-light text-[#0B245B] mb-4"
          >
            Download our <span className="gradient-text">E-Book</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-[#0B245B]/80 max-w-2xl mx-auto"
          >
            Get started on your financial learning journey with our comprehensive e-book.
          </motion.p>
        </div>
      </section>

      {/* ═══ FORM SECTION ═══ */}
      <section className="pb-16 pt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeInSection>
            {/* The form container with a subtle dark blue/cyan tint to match the brand while reflecting the original screenshot's style */}
            <div className="bg-[#0B245B]/10 rounded-2xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm border border-[#D4AF37]/20 shadow-xl">
              <div className="relative z-10">
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0B245B] mb-8">
                  Submit form to download <span className="text-[#D4AF37]">E-Book</span>
                </h2>

                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const phone = formData.get("phone");
                    const topic = formData.get("topic");
                    const text = `Hi Wealth Acumen,\n\nI would like to request the free E-Book on *${topic}*.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n\nPlease share the download link. Thank you!`;
                    window.open(`https://wa.me/9325227357?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                >
                  {/* Name */}
                  <div className="col-span-1">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full px-6 py-4 rounded-full bg-white border border-transparent text-[#0B245B] placeholder:text-[#0B245B]/60 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50 shadow-sm transition-all"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="col-span-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-6 py-4 rounded-full bg-white border border-transparent text-[#0B245B] placeholder:text-[#0B245B]/60 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50 shadow-sm transition-all"
                      required
                    />
                  </div>

                  {/* Mobile */}
                  <div className="col-span-1">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      className="w-full px-6 py-4 rounded-full bg-white border border-transparent text-[#0B245B] placeholder:text-[#0B245B]/60 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50 shadow-sm transition-all"
                      required
                    />
                  </div>

                  {/* Select E-book */}
                  <div className="col-span-1">
                    <div className="relative h-full">
                      <select
                        name="topic"
                        className="w-full px-6 py-4 rounded-full bg-white border border-transparent text-[#0B245B] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50 shadow-sm transition-all appearance-none cursor-pointer h-full"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled className="text-[#0B245B]/60">Select E-book</option>
                        <option value="Technical Analysis For Beginners" className="text-[#0B245B]">Technical Analysis For Beginners</option>
                        <option value="Fundamental Analysis For Beginners" className="text-[#0B245B]">Fundamental Analysis For Beginners</option>
                        <option value="Mutual Fund" className="text-[#0B245B]">Mutual Fund</option>
                        <option value="Insurance E-Book" className="text-[#0B245B]">Insurance E-Book</option>
                        <option value="Fixed Income E-Book" className="text-[#0B245B]">Fixed Income E-Book</option>
                        <option value="Stock Market BTS E-book" className="text-[#0B245B]">Stock Market BTS E-book</option>
                      </select>
                      {/* Custom select arrow */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#0B245B]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-span-1 md:col-span-2 pt-2 text-center">
                    <button
                      type="submit"
                      className="bg-[#D4AF37] hover:bg-amber-400 text-[#0B245B] font-semibold py-4 px-12 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-sm tracking-wider uppercase inline-flex items-center justify-center gap-3 w-full sm:w-auto"
                    >
                      <svg className="w-5 h-5 text-[#0B245B]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Request WhatsApp E-Book Link
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
