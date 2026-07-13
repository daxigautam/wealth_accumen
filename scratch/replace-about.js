const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const newSection = `      {/* ═══════════════════════════════════════════ */}
      {/*           LUXURY ABOUT SECTION               */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.015] z-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Animated Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E7E1D8]/60 border border-[#E7E1D8]/60 rounded-3xl overflow-hidden mb-24 lg:mb-32 shadow-xl shadow-[#10141F]/[0.02]">
            {[
              { label: "Years of Excellence", value: 4, suffix: "+" },
              { label: "Happy Clients", value: 500, suffix: "+" },
              { label: "Investment Products", value: 6, suffix: "" },
              { label: "Transparent Advisory", value: 100, suffix: "%" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 text-center hover:bg-[#FAF8F5] transition-colors duration-500">
                <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-[#10141F] mb-3">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-semibold text-[#D9791A] tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CEO Message Split Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Luxury Image */}
            <FadeIn>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F5B335]/20 to-transparent blur-3xl rounded-full transform -translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000" />
                <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Financial Advisor" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white text-lg font-[family-name:var(--font-playfair)] italic">"Wealth is not just about money. It's about freedom, security, and legacy."</p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="h-px flex-1 bg-white/30" />
                      <p className="text-white/80 text-xs font-bold tracking-widest uppercase">Wealth Acumen</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right: Editorial Typography & Timeline */}
            <div className="flex flex-col space-y-10">
              <FadeIn delay={0.2}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-px w-10 bg-[#D9791A]" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D9791A]">Our Philosophy</span>
                </div>
                <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#10141F] leading-tight">
                  A vision built on <span className="text-[#D9791A]">Trust</span>, driven by <span className="italic">Excellence.</span>
                </h2>
                <p className="mt-6 text-lg text-[#5B5955] leading-relaxed">
                  We empower Indian investors with personalized, goal-oriented strategies. Our holistic approach ensures sustainable growth, transparent advisory, and true financial freedom for you and your family.
                </p>
              </FadeIn>

              {/* Minimal Timeline */}
              <FadeIn delay={0.3}>
                <div className="space-y-6 pt-6 border-t border-[#E7E1D8]">
                  <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-[#E7E1D8] last:before:hidden">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#D9791A] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D9791A]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#10141F]">Foundation of Trust</h4>
                    <p className="text-sm text-[#5B5955] mt-1">Established with a vision to bring ethical, transparent financial advisory to the retail investor.</p>
                  </div>
                  
                  <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-[#E7E1D8] last:before:hidden">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#10141F] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10141F]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#10141F]">Partnering for Scale</h4>
                    <p className="text-sm text-[#5B5955] mt-1">Became an AMFI Registered Distributor and Angel One Channel Partner, expanding our robust product offerings.</p>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#10141F] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                    <h4 className="text-lg font-bold text-[#10141F]">Shaping the Future</h4>
                    <p className="text-sm text-[#5B5955] mt-1">Continuously innovating our wealth management solutions for HNI and emerging retail segments.</p>
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>`;

lines.splice(195, 333, newSection);
fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
