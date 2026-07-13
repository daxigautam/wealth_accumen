const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const newSection = `      {/* ═══════════════════════════════════════════ */}
      {/*     PREMIUM BENTO SERVICES SECTION         */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#0F172A] relative overflow-hidden">
        {/* Deep luxury background with glowing orbs */}
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-[#D9791A]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#F5B335]/50" />
              <p className="text-sm font-bold text-[#F5B335] tracking-[0.2em] uppercase">Exquisite Services</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#F5B335]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-white">
              Bespoke Wealth <span className="italic text-[#F5B335]">Solutions</span>
            </h2>
          </FadeIn>

          {/* Premium Glass Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            
            {/* 1. Equity - Large Span */}
            <FadeIn delay={0.1} className="md:col-span-2">
              <Link href="/services/equity" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F5B335]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,179,53,0.15)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5B335]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 sm:p-10 h-full flex flex-col justify-between relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#F5B335] group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-3">Equity Advisory</h3>
                    <p className="text-white/70 max-w-md line-clamp-2">Exclusive access to premium equity research, portfolio strategies, and direct market participation.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 2. Mutual Funds */}
            <FadeIn delay={0.2}>
              <Link href="/services/mutual-funds" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F5B335]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,179,53,0.15)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">Mutual Funds</h3>
                    <p className="text-white/70 text-sm line-clamp-2">Curated selection of top-tier funds aligned with your life goals.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 3. ETFs */}
            <FadeIn delay={0.3}>
              <Link href="/services/etfs" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F5B335]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,179,53,0.15)] backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" /></svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">ETFs</h3>
                    <p className="text-white/70 text-sm line-clamp-2">Smart, low-cost diversification across global markets.</p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* 4. Insurance & Bonds - Spans 2 */}
            <FadeIn delay={0.4} className="md:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                <Link href="/services/insurance" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F5B335]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,179,53,0.15)] backdrop-blur-xl">
                  <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">Insurance</h3>
                      <p className="text-white/70 text-sm">Comprehensive protection for your wealth and family's future.</p>
                    </div>
                  </div>
                </Link>
                
                <Link href="/services/bonds" className="group block relative w-full h-full rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#F5B335]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,179,53,0.15)] backdrop-blur-xl">
                  <div className="p-8 h-full flex flex-col justify-between relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">Bonds</h3>
                      <p className="text-white/70 text-sm">Stable, predictable yields for conservative allocation.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>`;

lines.splice(294, 207, newSection);
fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
