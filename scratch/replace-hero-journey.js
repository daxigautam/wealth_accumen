const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add activeStep state and useEffect to HomePage
let newContent = content.replace(
  'export default function HomePage() {',
  `export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);`
);

// 2. Define the new Hero section
const newHero = `      {/* ═══════════════════════════════════════════ */}
      {/*        YOUR WEALTH JOURNEY HERO            */}
      {/* ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100dvh] pt-32 pb-16 flex items-center bg-[#0A0F1C] overflow-hidden">
        {/* Full-bleed cinematic background */}
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D9791A]/10 blur-[150px] rounded-full pointer-events-none" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
            
            {/* Left Column: Dynamic Text & Animated Sequence */}
            <motion.div 
              style={{ opacity: heroOpacity, y: heroY }}
              className="flex flex-col items-start text-left"
            >
              <FadeIn delay={0.1}>
                <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.15] tracking-tight mb-8">
                  Your <span className="italic text-[#D9791A]">Wealth.</span><br />
                  Our <span className="italic text-white/90">Expertise.</span><br />
                  Your <span className="italic text-[#D9791A]">Legacy.</span>
                </h1>
              </FadeIn>

              {/* Animated Steps Sequence */}
              <FadeIn delay={0.3} className="mb-12 pl-2">
                <div className="flex flex-col space-y-3 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-white/10">
                  {['Save', 'Invest', 'Grow', 'Retire', 'Legacy'].map((step, idx) => (
                    <div key={step} className="flex items-center gap-6 relative">
                      <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-700 \${activeStep === idx ? 'border-[#D9791A] bg-[#D9791A]/20 shadow-[0_0_15px_rgba(217,121,26,0.6)]' : 'border-white/20 bg-[#0A0F1C]'}\`}>
                        <div className={\`w-1.5 h-1.5 rounded-full transition-all duration-700 \${activeStep === idx ? 'bg-[#D9791A]' : 'bg-white/20'}\`} />
                      </div>
                      <span className={\`font-[family-name:var(--font-outfit)] text-xl md:text-2xl font-semibold tracking-wide transition-all duration-700 \${activeStep === idx ? 'text-white' : 'text-white/30'}\`}>
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
                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </FadeIn>
            </motion.div>

            {/* Right Column: Elegant Glass Roadmap */}
            <motion.div 
              style={{ opacity: heroOpacity, y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
              className="relative hidden lg:flex justify-end"
            >
              <FadeIn delay={0.6} className="w-full max-w-md">
                <div className="glass rounded-[2rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl bg-white/[0.02]">
                  {/* Glowing background inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D9791A]/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
                  
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-10 tracking-wide">The Roadmap</h3>

                  <div className="relative pl-6">
                    {/* Background subtle line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-white/10" />
                    
                    {/* Animated Gold Line */}
                    <motion.div 
                      initial={{ height: "0%" }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }}
                      className="absolute left-[7px] top-2 w-[2px] bg-gradient-to-b from-[#F5B335] via-[#D9791A] to-emerald-500 origin-top shadow-[0_0_10px_rgba(217,121,26,0.8)]"
                    />

                    <div className="flex flex-col space-y-10">
                      {[
                        { label: 'Income', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                        { label: 'Savings', icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' },
                        { label: 'Investment', icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z' },
                        { label: 'Portfolio', icon: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z' },
                        { label: 'Financial Freedom', icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z' }
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-5 relative group">
                          {/* Circle on the line */}
                          <div className="absolute -left-[27px] w-4 h-4 rounded-full bg-[#0A0F1C] border-2 border-white/20 group-hover:border-[#D9791A] group-hover:scale-125 transition-all duration-300 z-10" />
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#D9791A] group-hover:bg-[#D9791A]/10 transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
                          </div>
                          <span className="font-[family-name:var(--font-outfit)] text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300">{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </motion.div>

          </div>
        </div>
      </section>`;

// Replace from {/* ═══════════════════════════════════════════ */}
//              {/*              CINEMATIC HERO                */}
// down to the end of the section (right before LUXURY ABOUT SECTION)

const startMarker = '{/* ═══════════════════════════════════════════ */}\n      {/*              CINEMATIC HERO                */}';
const endMarker = '{/* ═══════════════════════════════════════════ */}\n      {/*           LUXURY ABOUT SECTION               */}';

const startIndex = newContent.indexOf(startMarker);
const endIndex = newContent.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const before = newContent.substring(0, startIndex);
  const after = newContent.substring(endIndex);
  newContent = before + newHero + '\n\n      ' + after;
} else {
  console.log("Could not find markers!");
  process.exit(1);
}

fs.writeFileSync('src/app/page.tsx', newContent);
console.log("Hero successfully replaced!");
