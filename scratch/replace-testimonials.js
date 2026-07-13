const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\n');

const newTestimonials = `      {/* ═══════════════════════════════════════════ */}
      {/*             TESTIMONIALS                   */}
      {/* ═══════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-[#0F172A] relative overflow-hidden">
        {/* Subtle luxury mesh background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#D9791A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D9791A]/50" />
              <p className="text-sm font-bold text-[#D9791A] tracking-[0.2em] uppercase">Client Success</p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D9791A]/50" />
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16 text-white">
              Trusted by <span className="italic text-[#D9791A]">Generations</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div className="bg-white/5 border border-white/10 hover:border-[#D9791A]/30 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 h-full flex flex-col justify-between group hover:shadow-[0_0_40px_rgba(217,121,26,0.1)]">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-[#D9791A]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/80 font-medium leading-relaxed mb-8 text-base">&ldquo;{t.text}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D9791A]/20 flex items-center justify-center text-[#D9791A] font-bold text-lg border border-[#D9791A]/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-outfit)] font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/50">Verified Client</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>`;

lines.splice(525, 51, newTestimonials);
fs.writeFileSync('src/app/page.tsx', lines.join('\n'));
