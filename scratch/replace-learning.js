const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const newSection = `      {/* ═══════════════════════════════════════════ */}
      {/*        LEARNING & DOWNLOADS SECTION          */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#FCF9F4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D9791A]/40" />
              <p className="text-sm font-bold text-[#D9791A] tracking-[0.2em] uppercase">Empower Yourself</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D9791A]/40" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 leading-tight text-[#10141F]">
              Knowledge & <span className="italic text-[#D9791A]">Insights</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Learning Card */}
            <FadeIn delay={0.1}>
              <div className="group relative bg-white rounded-[2rem] p-8 sm:p-12 border border-[#E7E1D8] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#D9791A] mb-8 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#10141F] mb-4">Financial Library</h3>
                  <p className="text-[#5B5955] text-lg leading-relaxed mb-8">
                    Master the art of investing with our comprehensive E-books, guides, and educational materials tailored for Indian investors.
                  </p>
                </div>
                <Link href="/learning/e-book" className="inline-flex items-center gap-2 text-[#D9791A] font-bold group-hover:gap-4 transition-all duration-300">
                  Access Free E-Book
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </Link>
              </div>
            </FadeIn>

            {/* Downloads Card */}
            <FadeIn delay={0.2}>
              <div className="group relative bg-white rounded-[2rem] p-8 sm:p-12 border border-[#E7E1D8] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#10141F] mb-4">Essential Downloads</h3>
                  <p className="text-[#5B5955] text-lg leading-relaxed mb-8">
                    Quick access to important documents including KYC/FATCA forms, Mutual Fund factsheets, and taxation guidelines.
                  </p>
                </div>
                <Link href="/downloads" className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-4 transition-all duration-300">
                  View Downloads
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/*               BLOGS SECTION                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#D9791A]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D9791A]">Market Insights</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#10141F]">
                Latest from the <span className="italic text-[#D9791A]">Desk</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#10141F] font-bold hover:text-[#D9791A] transition-colors border-b-2 border-transparent hover:border-[#D9791A] pb-1">
                View all articles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Market Volatility in 2024",
                category: "Market Trends",
                date: "Jul 10, 2024",
                img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
              },
              {
                title: "The Power of Compounding in Wealth Creation",
                category: "Investing 101",
                date: "Jun 28, 2024",
                img: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
              },
              {
                title: "Tax Harvesting Strategies for Indian Investors",
                category: "Tax Planning",
                date: "Jun 15, 2024",
                img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
              }
            ].map((post, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                <Link href="/blog" className="group block">
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 shadow-md">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#10141F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-[#5B5955] uppercase tracking-widest mb-3">{post.date}</p>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#10141F] leading-snug group-hover:text-[#D9791A] transition-colors">
                    {post.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>`;

lines.splice(399, 302, newSection);
fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
