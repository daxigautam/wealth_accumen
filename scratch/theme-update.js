const fs = require('fs');
const path = require('path');

const replacements = [
  // Backgrounds & Surface
  { regex: /bg-white\/5/g, replacement: "bg-[#0B1736]/40" },
  { regex: /bg-white\/10/g, replacement: "bg-[#0B1736]/60" },
  { regex: /bg-white\/80/g, replacement: "bg-[#0B1736]/80" },
  { regex: /bg-white\/90/g, replacement: "bg-[#0B1736]/90" },
  { regex: /bg-white/g, replacement: "bg-[#040F2D]" },
  { regex: /bg-\[#FCF9F4\]/g, replacement: "bg-[#040F2D]" },
  { regex: /bg-\[#0F172A\]/g, replacement: "bg-[#040F2D]" },
  { regex: /bg-slate-50\/50/g, replacement: "bg-[#0B1736]/50" },
  { regex: /bg-slate-50/g, replacement: "bg-[#0B1736]" },
  { regex: /bg-black/g, replacement: "bg-[#040F2D]" },
  { regex: /bg-\[#10141F\]/g, replacement: "bg-white" },
  
  // Borders
  { regex: /border-\[#E7E1D8\]/g, replacement: "border-[#D4AF37]/20" },
  { regex: /border-slate-100/g, replacement: "border-[#D4AF37]/20" },
  { regex: /border-slate-200/g, replacement: "border-[#D4AF37]/20" },
  { regex: /border-\[#10141F\]/g, replacement: "border-white" },
  
  // Text Colors
  { regex: /text-\[#10141F\]/g, replacement: "text-white" },
  { regex: /text-\[#5B5955\]/g, replacement: "text-[#A3B5D9]" },
  { regex: /text-slate-600/g, replacement: "text-[#A3B5D9]" },
  { regex: /text-slate-700/g, replacement: "text-[#C7D4ED]" },
  { regex: /text-slate-900/g, replacement: "text-white" },
  { regex: /text-slate-400/g, replacement: "text-[#8B9ECC]" },
  { regex: /text-black/g, replacement: "text-white" },
  
  // Primary / Golden accents
  { regex: /text-\[#D9791A\]/g, replacement: "text-[#D4AF37]" },
  { regex: /bg-\[#D9791A\]/g, replacement: "bg-[#D4AF37]" },
  { regex: /border-\[#D9791A\]/g, replacement: "border-[#D4AF37]" },
  { regex: /text-\[#F5B335\]/g, replacement: "text-[#F3E5AB]" },
  { regex: /bg-\[#F5B335\]/g, replacement: "bg-[#D4AF37]" },
  { regex: /from-\[#F5B335\]/g, replacement: "from-[#D4AF37]" },
  { regex: /to-\[#F5B335\]/g, replacement: "to-[#D4AF37]" },
  { regex: /from-\[#E8A33D\]/g, replacement: "from-[#D4AF37]" },
  { regex: /to-\[#C9670A\]/g, replacement: "to-[#C59B27]" },
  { regex: /bg-\[#C75A00\]/g, replacement: "bg-[#C59B27]" },
  { regex: /text-\[#C75A00\]/g, replacement: "text-[#D4AF37]" },
  
  // Shadows
  { regex: /shadow-slate-200\/50/g, replacement: "shadow-black/40" },
  { regex: /shadow-slate-100/g, replacement: "shadow-black/20" }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      // Exclude Navbar and Footer since we already updated them manually
      if (!fullPath.includes('Navbar.tsx') && !fullPath.includes('Footer.tsx')) {
        processFile(fullPath);
      }
    }
  }
}

walkDir(path.join(__dirname, '../src'));
console.log('Theme update complete!');
