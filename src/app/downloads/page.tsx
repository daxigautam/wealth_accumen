"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { kycPortals } from "@/config/brand";

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

export default function DownloadsPage() {
  return (
    <>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-44 pb-28 sm:pt-52 sm:pb-36 overflow-hidden flex items-center">
        <Image
          src="/assets/images/hero-banners/download-kyc-banner.png"
          alt="Downloads and KYC"
          fill
          className="object-cover object-[60%_center] md:object-[65%_center]"
          priority
        />
        
        {/* Golden gradient overlay on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent z-[1]" />
        
        {/* Text Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl ml-4 lg:ml-12 xl:ml-16"
          >
            <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-light text-[#0B245B] mb-4 drop-shadow-md">
              Downloads <span className="text-[#D4AF37]">& KYC</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#0B245B]/80 max-w-lg hidden sm:block leading-relaxed">
              Access KYC portals, validate your status, and download essential forms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ KRA STATUS ═══ */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-24 xl:px-32">
          <FadeInSection>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-light text-[#0B245B]">
                  Check your KYC Status
                </h2>
              </div>
              <p className="text-[#0B245B] ml-[52px]">
                Verify your KYC registration status through any of the KRA portals below.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kycPortals.statusCheck.map((portal, i) => (
              <FadeInSection key={portal.name} delay={i * 0.06}>
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass glass-hover rounded-xl p-5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#0B245B] group-hover:text-[#D4AF37] transition-colors">
                          {portal.name}
                        </p>
                        <p className="text-xs text-[#0B245B]">Check status</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0B245B] group-hover:text-[#D4AF37] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALIDATE KYC ═══ */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-transparent via-[#D9791A]/[0.015] to-transparent">
        <div className="max-w-[100rem] mx-auto px-8 sm:px-12 lg:px-24 xl:px-32">
          <FadeInSection>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-light text-[#0B245B]">
                  Validate your KYC
                </h2>
              </div>
              <p className="text-[#0B245B] ml-[52px]">
                Validate and update your KYC details through these portals.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {kycPortals.validation.map((portal, i) => (
              <FadeInSection key={portal.name} delay={i * 0.06}>
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass glass-hover rounded-xl p-5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#0B245B] group-hover:text-[#D4AF37] transition-colors">
                          {portal.name}
                        </p>
                        <p className="text-xs text-[#0B245B]">Validate KYC</p>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#0B245B] group-hover:text-[#D4AF37] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DOWNLOAD FORMS ═══ */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-24">
        <div className="max-w-[100rem] mx-auto px-8 sm:px-12 lg:px-24 xl:px-32">
          <FadeInSection>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-light text-[#0B245B]">
                  Download Forms
                </h2>
              </div>
              <p className="text-[#0B245B] ml-[52px]">
                Download KYC and FATCA forms in PDF format.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {kycPortals.downloads.map((form, i) => (
              <FadeInSection key={form.name} delay={i * 0.06}>
                <a
                  href={form.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass glass-hover rounded-xl p-5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#0B245B] group-hover:text-[#D4AF37] transition-colors">
                          {form.name}
                        </p>
                        <p className="text-xs text-[#0B245B]">PDF Document</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-[#0B245B] group-hover:text-[#D4AF37] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
