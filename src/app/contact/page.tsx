"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { brand } from "@/config/brand";
import Image from "next/image";
import Link from "next/link";
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

export default function ContactPage() {
  const [riskProfileDone, setRiskProfileDone] = useState(false);

  return (
    <>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-44 pb-28 sm:pt-52 sm:pb-36 overflow-hidden flex items-center">
        <Image
          src="/assets/images/hero-banners/contact-us-hero-banner.png"
          alt="Contact Us"
          fill
          className="object-cover object-[75%_center] md:object-[80%_center]"
          priority
        />
        
        {/* Text Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl ml-4 lg:ml-12 xl:ml-16"
          >
            <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-light text-[#0B245B] mb-4 drop-shadow-md">
              Contact <span className="text-[#D4AF37]">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#0B245B]/80 max-w-lg hidden sm:block leading-relaxed">
              We're here to help you navigate your wealth journey. Reach out to us today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ RISK PROFILING FORM ═══ */}
      <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 border-b border-[#D4AF37]/10">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-24 xl:px-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-outfit)] text-2xl sm:text-3xl font-light text-[#0B245B] mb-6 text-center">
              Risk Profiling Assessment
            </h2>
            <div className="glass rounded-[2rem] border border-[#D4AF37]/20 p-8 sm:p-12 shadow-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-[var(--theme-text-muted)] mb-8 max-w-2xl leading-relaxed">
                To serve you better and provide personalized wealth management strategies, we request you to complete our Risk Profiling Assessment before scheduling a consultation.
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSemC0QaoVYJXZQ5C2we0cMAiSyE8K0Gc0YQU-bzkDjqNXKrbQ/viewform?usp=publish-editor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 mb-10 px-8 py-4 text-base"
              >
                Complete Risk Profiling Form
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <div className="bg-[var(--background)]/50 p-4 sm:p-5 rounded-xl border border-[var(--glass-border)] w-full max-w-md">
                <label className="flex items-start gap-3 cursor-pointer group text-left">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox"
                      checked={riskProfileDone}
                      onChange={(e) => setRiskProfileDone(e.target.checked)}
                      className="peer appearance-none w-5 h-5 border-2 border-[#D4AF37]/50 rounded hover:border-[#D4AF37] checked:bg-[#D4AF37] checked:border-[#D4AF37] transition-colors cursor-pointer shrink-0"
                    />
                    <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base text-[var(--foreground)] group-hover:text-[#D4AF37] transition-colors select-none">
                    I confirm that I have completed the Risk Profiling Assessment.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT INFO + FORM ═══ */}
      <section className="pt-4 pb-16 sm:pt-6 sm:pb-20">
        <div className="max-w-[100rem] mx-auto px-8 sm:px-12 lg:px-24 xl:px-32">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Contact Information */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <FadeInSection delay={0.1}>
                <div className="glass glass-hover rounded-2xl p-8">
                  <h2 className="font-[family-name:var(--font-outfit)] text-xl font-light text-[#0B245B] mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-5">
                    {/* Email */}
                    <a
                      href={`mailto:${brand.email}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">Email</p>
                        <p className="text-[#0B245B]/70 group-hover:text-[#D4AF37] transition-colors">
                          {brand.email}
                        </p>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${brand.phone.replace(/\s/g, "")}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                        <p className="text-[#0B245B]/70 group-hover:text-cyan-600 transition-colors">
                          {brand.phone}
                        </p>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 mb-0.5">Address</p>
                        <p className="text-[#0B245B]/70 leading-relaxed">
                          {brand.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              {/* Social Links */}
              <FadeInSection delay={0.2}>
                <div className="glass glass-hover rounded-2xl p-8">
                  <h2 className="font-[family-name:var(--font-outfit)] text-xl font-light text-[#0B245B] mb-6">
                    Connect With Us
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 glass glass-hover rounded-xl p-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-light text-[#0B245B] group-hover:text-pink-600 transition-colors">Instagram</p>
                        <p className="text-xs text-slate-500">Follow us</p>
                      </div>
                    </a>

                    <a
                      href={brand.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 glass glass-hover rounded-xl p-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-light text-[#0B245B] group-hover:text-green-600 transition-colors">WhatsApp</p>
                        <p className="text-xs text-slate-500">Chat now</p>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeInSection>

              {/* Angel One Account Opening */}
              <FadeInSection delay={0.3}>
                <div className="glass rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D9791A]/50 to-transparent" />
                  <div className="relative z-10">
                    <h2 className="font-[family-name:var(--font-outfit)] text-xl font-light text-[#0B245B] mb-3">
                      Open a Demat Account
                    </h2>
                    <p className="text-sm text-[#0B245B]/70 leading-relaxed mb-5">
                      Start your investment journey with Angel One. Open a free Demat and Trading account today.
                    </p>
                    <a
                      href={brand.angelOneAppLogin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm inline-flex items-center gap-2"
                    >
                      Open Account with Angel One
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Right: Contact Form */}
            <FadeInSection delay={0.15}>
              <div className="glass rounded-2xl p-8 md:p-10 h-fit bg-gradient-to-br from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent border border-[#D4AF37]/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
                <h2 className="font-[family-name:var(--font-outfit)] text-xl font-light text-[var(--foreground)] mb-2 relative z-10">
                  Send Us a Message
                </h2>
                <p className="text-sm text-[var(--theme-text-muted)] mb-8">
                  Fill in the details below and we will get back to you.
                </p>

                {!riskProfileDone && (
                  <div className="absolute inset-0 z-20 bg-[var(--background)]/70 backdrop-blur-[2px] flex items-center justify-center p-6 text-center rounded-2xl">
                    <div className="bg-white dark:bg-[#0B1530] p-6 rounded-xl border border-[#D4AF37]/30 shadow-lg max-w-sm">
                      <svg className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      <h3 className="font-semibold text-[var(--foreground)] mb-2">Form Locked</h3>
                      <p className="text-sm text-[var(--theme-text-muted)]">
                        Please complete the Risk Profiling Assessment and check the confirmation box above to unlock this form.
                      </p>
                    </div>
                  </div>
                )}

                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const phone = formData.get("phone");
                    const message = formData.get("message");
                    const text = `Hi Wealth Acumen,\n\nI am contacting you from the website.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n\n*Message:*\n${message}`;
                    window.open(`https://wa.me/9325227357?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-[var(--theme-text-muted)] mb-1.5 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#D4AF37]/30 text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={!riskProfileDone}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-[var(--theme-text-muted)] mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#D4AF37]/30 text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={!riskProfileDone}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-[var(--theme-text-muted)] mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#D4AF37]/30 text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={!riskProfileDone}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-[var(--theme-text-muted)] mb-1.5 font-medium">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-[#D4AF37]/30 text-[var(--foreground)] placeholder:text-[var(--foreground)]/40 text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      required
                      disabled={!riskProfileDone}
                    />
                  </div>

                  {/* Submit */}
                  <button 
                    type="submit" 
                    disabled={!riskProfileDone}
                    className="btn-primary w-full text-sm font-semibold !text-[#0B1736] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 text-green-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send Message
                  </button>
                </form>

                {/* WhatsApp CTA */}
                <div className="mt-6 pt-6 border-t border-[#D4AF37]/20 text-center">
                  <p className="text-xs text-slate-500 mb-3">Or reach us directly</p>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm inline-flex items-center gap-2 w-full justify-center"
                  >
                    <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}
