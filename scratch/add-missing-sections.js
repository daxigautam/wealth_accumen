const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const whoWeHelp = `
      {/* ═══════════════════════════════════════════ */}
      {/*             WHO WE HELP                    */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D9791A]/50" />
              <p className="text-sm font-bold text-[#D9791A] tracking-[0.2em] uppercase">Who We Serve</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D9791A]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-center mb-16 text-[#10141F]">
              Tailored Expertise for <span className="italic text-[#D9791A]">Every Stage</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Salaried Professionals', desc: 'Optimize tax savings, automate SIPs, and build a strong foundation for financial independence.', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16.5 2.25h-9a2.25 2.25 0 00-2.25 2.25v15a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25z' },
              { title: 'Business Owners', desc: 'Manage liquidity, protect business assets, and diversify personal wealth outside your company.', icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z' },
              { title: 'Families', desc: 'Plan for children’s education, legacy planning, and holistic protection for your loved ones.', icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
              { title: 'First-Time Investors', desc: 'Demystify the markets with guided portfolio creation and foundational financial education.', icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5' },
              { title: 'Senior Citizens', desc: 'Secure reliable income streams, protect capital, and enjoy a stress-free retirement.', icon: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z' },
              { title: 'High-Net-Worth Individuals', desc: 'Bespoke wealth management, advanced tax harvesting, and exclusive alternative investments.', icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z' }
            ].map((audience, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div className="group bg-white p-8 rounded-3xl border border-[#E7E1D8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#D9791A] mb-6 group-hover:bg-[#D9791A] group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={audience.icon} /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#10141F] mb-3">{audience.title}</h3>
                  <p className="text-[#5B5955] text-sm leading-relaxed">{audience.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
`;

const clientJourney = `
      {/* ═══════════════════════════════════════════ */}
      {/*           CLIENT JOURNEY TIMELINE          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D9791A]/50" />
              <p className="text-sm font-bold text-[#D9791A] tracking-[0.2em] uppercase">Why Choose Wealth Acumen</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D9791A]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-center mb-16 text-[#10141F]">
              Your Journey to <span className="italic text-[#D9791A]">Financial Freedom</span>
            </h2>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E7E1D8] to-transparent sm:-translate-x-1/2" />

            {[
              { step: '01', title: 'Understand Your Goals', desc: 'We begin by listening. Your risk appetite, time horizon, and life aspirations form the bedrock of our strategy.' },
              { step: '02', title: 'Create Personalized Financial Plan', desc: 'We craft a bespoke, actionable roadmap addressing your specific financial needs and constraints.' },
              { step: '03', title: 'Build Investment Portfolio', desc: 'Curating the optimal mix of Mutual Funds, Equity, and Bonds to maximize risk-adjusted returns.' },
              { step: '04', title: 'Monitor & Optimize', desc: 'Continuous tracking of your portfolio, active rebalancing, and tax-loss harvesting to keep you on course.' },
              { step: '05', title: 'Grow Long-Term Wealth', desc: 'Enjoy peace of mind as your compounding engine accelerates, allowing you to focus on what matters most.' },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.1 * idx}>
                <div className={\`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12 \${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}\`}>
                  {/* Marker */}
                  <div className="absolute left-[20px] sm:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-white border-2 border-[#D9791A] flex items-center justify-center z-10 shadow-lg shadow-[#D9791A]/20">
                    <span className="text-xs font-bold text-[#D9791A]">{item.step}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={\`w-full sm:w-1/2 pl-20 sm:pl-0 \${idx % 2 === 0 ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 sm:text-left'}\`}>
                    <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-[#E7E1D8] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#10141F] mb-3">{item.title}</h3>
                      <p className="text-[#5B5955] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
`;

let newContent = content.replace(
  '{/* ═══════════════════════════════════════════ */}\n      {/*     PREMIUM BENTO SERVICES SECTION         */}',
  whoWeHelp + '\n      {/* ═══════════════════════════════════════════ */}\n      {/*     PREMIUM BENTO SERVICES SECTION         */}'
);

newContent = newContent.replace(
  '{/* ═══════════════════════════════════════════ */}\n      {/*        LEARNING & DOWNLOADS SECTION          */}',
  clientJourney + '\n      {/* ═══════════════════════════════════════════ */}\n      {/*        LEARNING & DOWNLOADS SECTION          */}'
);

fs.writeFileSync('src/app/page.tsx', newContent);
