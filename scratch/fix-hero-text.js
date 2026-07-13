const fs = require('fs');

const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const heroRegex = /{\/\* Left Column: Dynamic Text & Animated Sequence \*\/}([\s\S]*?){\/\* CTAs \*\/}/;
const leftMatch = content.match(heroRegex);

const bubblesRegex = /{\/\* Floating Bubbles \*\/}([\s\S]*?)<\/motion\.div>\s+<\/div>\s+<\/motion\.div>/;
const rightMatch = content.match(bubblesRegex);

if (!leftMatch || !rightMatch) {
  console.log("Could not find hero or bubbles sections.");
  process.exit(1);
}

// 1. Rewrite the Left Column 
const newLeft = `{/* Left Column: Dynamic Text */}
            <motion.div 
              style={{ opacity: heroOpacity, y: heroY }}
              className="flex flex-col items-start text-left"
            >
              <FadeIn delay={0.1}>
                <h1 className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#10141F] leading-[1] tracking-tight mb-2">
                  Wealth Acumen
                </h1>
                <p className="font-[family-name:var(--font-outfit)] text-xs sm:text-sm md:text-base text-slate-500 tracking-[0.25em] font-bold uppercase mb-10 pl-1">
                  Invest Right. Prosper Bright.
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-semibold text-[#10141F] leading-snug mb-12 pl-1">
                  Your <span className="italic text-[#D9791A]">Wealth.</span>{' '}
                  Our <span className="italic text-slate-500">Expertise.</span>{' '}
                  Your <span className="italic text-[#D9791A]">Legacy.</span>
                </h2>
              </FadeIn>

              {/* CTAs */}`;

// 2. Rewrite the Right Column
// We will place the animated steps inside the bubbles container, z-10
const animatedSteps = `
                {/* Animated Steps Sequence centered over bubbles */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl">
                    <div className="flex flex-col space-y-6 relative before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-slate-200">
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
                  </div>
                </div>`;

const newRight = rightMatch[0].replace(
  '</div>\n            </motion.div>',
  animatedSteps + '\n              </div>\n            </motion.div>'
);

let newContent = content.replace(leftMatch[0], newLeft);
newContent = newContent.replace(rightMatch[0], newRight);

fs.writeFileSync('src/app/page.tsx', newContent);
console.log("Hero layout updated!");
