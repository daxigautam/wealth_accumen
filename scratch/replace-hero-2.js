const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const newHero = `      {/* ═══════════════════════════════════════════ */}
      {/*              CINEMATIC HERO                */}
      {/* ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100dvh] pt-32 pb-16 flex items-center bg-[#0A0F1C] overflow-hidden">
        {/* Full-bleed golden hour cinematic background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Wealth Acumen"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F1C] via-[#0A0F1C]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-90" />
          {/* Golden glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#D9791A]/10 blur-[120px] rounded-full pointer-events-none" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Text & CTA */}
            <motion.div 
              style={{ opacity: heroOpacity, y: heroY }}
              className="flex flex-col items-start text-left space-y-8 lg:pr-8"
            >
              {/* Logo / Brand Intro */}
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#D9791A] animate-pulse" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Wealth Acumen Advisory</span>
                </div>
              </FadeIn>

              {/* Headline */}
              <FadeIn delay={0.2}>
                <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                  Invest <span className="italic text-[#D9791A]">Right.</span><br />
                  Prosper <span className="italic text-white/90">Bright.</span>
                </h1>
              </FadeIn>

              {/* Subheadline */}
              <FadeIn delay={0.3}>
                <p className="text-lg sm:text-xl text-white/60 font-light max-w-xl leading-relaxed">
                  Helping individuals, families and businesses build long-term wealth through trusted financial guidance, disciplined investing, and personalized wealth management.
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gradient-to-r from-[#D9791A] to-[#C9670A] text-white font-semibold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(217,121,26,0.2)] hover:shadow-[0_0_40px_rgba(217,121,26,0.4)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Book Free Consultation
                  </a>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </FadeIn>
            </motion.div>

            {/* Right Column: Premium Visuals */}
            <motion.div 
              style={{ opacity: heroOpacity, y: useTransform(scrollY, [0, 800], [0, -100]) }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square">
                {/* Abstract graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-3xl animate-[spin_60s_linear_infinite] flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-[#D9791A]/20 border-dashed animate-[spin_40s_linear_infinite_reverse] flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#D9791A]/10 backdrop-blur-xl shadow-[0_0_50px_rgba(217,121,26,0.3)] flex items-center justify-center">
                        <span className="font-[family-name:var(--font-playfair)] text-4xl text-[#D9791A] font-bold italic">WA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 1 */}
                <FadeIn delay={0.5} className="absolute top-12 -left-8">
                  <div className="glass bento-glow rounded-2xl p-5 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 flex items-center justify-center text-emerald-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-1">Total AUM</p>
                      <p className="text-white font-[family-name:var(--font-outfit)] font-bold text-xl">₹100 Cr+</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Floating Card 2 */}
                <FadeIn delay={0.7} className="absolute bottom-24 -right-8">
                  <div className="glass bento-glow rounded-2xl p-5 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D9791A]/20 to-[#C9670A]/20 flex items-center justify-center text-[#D9791A]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-1">Trust Rate</p>
                      <p className="text-white font-[family-name:var(--font-outfit)] font-bold text-xl">99.8%</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </motion.div>

          </div>
        </div>
      </section>`;

// Replace lines 115 to 191 (which correspond to line 116 to 192, 0-indexed)
// 192 - 116 + 1 = 77 lines to remove
lines.splice(115, 77, newHero);
fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
