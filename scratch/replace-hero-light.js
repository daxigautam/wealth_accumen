const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const newHero = `      {/* ═══════════════════════════════════════════ */}
      {/*        LIGHT BUBBLE HERO                   */}
      {/* ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100dvh] pt-32 pb-16 flex items-center bg-[#F8FAFC] overflow-hidden">
        {/* Subtle grid background for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Dynamic Text & Animated Sequence */}
            <motion.div 
              style={{ opacity: heroOpacity, y: heroY }}
              className="flex flex-col items-start text-left"
            >
              <FadeIn delay={0.1}>
                <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl font-bold text-[#10141F] leading-[1.15] tracking-tight mb-8">
                  Your <span className="italic text-[#D9791A]">Wealth.</span><br />
                  Our <span className="italic text-slate-500">Expertise.</span><br />
                  Your <span className="italic text-[#D9791A]">Legacy.</span>
                </h1>
              </FadeIn>

              {/* Animated Steps Sequence */}
              <FadeIn delay={0.3} className="mb-12 pl-2">
                <div className="flex flex-col space-y-3 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-slate-200">
                  {['Save', 'Invest', 'Grow', 'Retire', 'Legacy'].map((step, idx) => (
                    <div key={step} className="flex items-center gap-6 relative">
                      <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-700 \${activeStep === idx ? 'border-[#D9791A] bg-[#D9791A]/10 shadow-[0_0_15px_rgba(217,121,26,0.3)]' : 'border-slate-300 bg-white'}\`}>
                        <div className={\`w-1.5 h-1.5 rounded-full transition-all duration-700 \${activeStep === idx ? 'bg-[#D9791A]' : 'bg-slate-300'}\`} />
                      </div>
                      <span className={\`font-[family-name:var(--font-outfit)] text-xl md:text-2xl font-semibold tracking-wide transition-all duration-700 \${activeStep === idx ? 'text-[#10141F]' : 'text-slate-400'}\`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.5}>
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
                    className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#10141F] font-medium py-4 px-8 rounded-full border border-slate-200 shadow-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </FadeIn>
            </motion.div>

            {/* Right Column: Popping Bubbles Animation */}
            <motion.div 
              style={{ opacity: heroOpacity, y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
              className="relative hidden lg:flex justify-center items-center h-[600px] w-full"
            >
              <div className="relative w-full h-full max-w-md">
                {/* Central Gold Orb */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#F5B335] to-[#D9791A] rounded-full blur-3xl opacity-20"
                />

                {/* Floating Bubbles */}
                {[
                  { size: 'w-24 h-24', delay: 0, duration: 6, x: [0, 20, -10, 0], y: [0, -30, 20, 0] },
                  { size: 'w-16 h-16', delay: 1, duration: 8, x: [0, -30, 10, 0], y: [0, 40, -20, 0] },
                  { size: 'w-32 h-32', delay: 2, duration: 7, x: [0, 15, -25, 0], y: [0, -20, 30, 0] },
                  { size: 'w-20 h-20', delay: 0.5, duration: 5, x: [0, -20, 20, 0], y: [0, 30, -30, 0] },
                  { size: 'w-12 h-12', delay: 1.5, duration: 6, x: [0, 30, -10, 0], y: [0, -40, 10, 0] },
                  { size: 'w-28 h-28', delay: 2.5, duration: 9, x: [0, -15, 25, 0], y: [0, 20, -20, 0] },
                ].map((bubble, i) => (
                  <motion.div
                    key={i}
                    className={\`absolute rounded-full border border-white/40 shadow-[0_8px_32px_rgba(217,121,26,0.1)] bg-white/40 backdrop-blur-md flex items-center justify-center \${bubble.size}\`}
                    style={{
                      left: \`\${10 + (i * 12)}%\`,
                      top: \`\${15 + (i * 12)}%\`,
                    }}
                    animate={{
                      y: bubble.y,
                      x: bubble.x,
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: bubble.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: bubble.delay
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white/60 to-transparent p-1">
                       <div className="w-full h-full rounded-full border border-white/20" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>`;

const startMarker = '{/* ═══════════════════════════════════════════ */}\n      {/*        YOUR WEALTH JOURNEY HERO            */}';
const endMarker = '{/* ═══════════════════════════════════════════ */}\n      {/*           LUXURY ABOUT SECTION               */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  const newContent = before + newHero + '\n\n      ' + after;
  fs.writeFileSync('src/app/page.tsx', newContent);
  console.log("Hero successfully replaced!");
} else {
  console.log("Could not find markers!");
  process.exit(1);
}
