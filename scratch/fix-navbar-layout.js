const fs = require('fs');

let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

// 1. Fix the text colors for Login button
content = content.replace(
  /\${[\s\S]*?scrolled[\s\S]*?\? "text-\[#10141F\] hover:text-\[#D9791A\] bg-\[#EFEEEB\]\/90 hover:bg-\[#E2E1DE\] border-slate-200\/50"[\s\S]*?: "text-white bg-white\/10 hover:bg-white\/20 border-white\/20"[\s\S]*?}/,
  'text-[#10141F] hover:text-[#D9791A] bg-[#EFEEEB]/90 hover:bg-[#E2E1DE] border-slate-200/50'
);

// 2. Fix the text colors for the Nav container
content = content.replace(
  /\${[\s\S]*?scrolled \? "bg-\[#FAF8F5\]\/90 border-\[#E7E1D8\]\/60" : "bg-white\/10 border-white\/20"[\s\S]*?}/,
  'bg-[#FAF8F5]/90 border-[#E7E1D8]/60'
);

// 3. Fix the text colors for the Nav Links
content = content.replace(
  /\${[\s\S]*?isActive[\s\S]*?\? "text-\[#F5B335\]"[\s\S]*?: scrolled \? "text-\[#10141F\] hover:text-\[#D9791A\]" : "text-white\/90 hover:text-white"[\s\S]*?}/,
  `\${isActive ? "text-[#F5B335]" : "text-[#10141F] hover:text-[#D9791A]"}`
);

// 4. Also fix the mobile menu button (hamburger lines)
content = content.replace(
  /\${scrolled \? 'bg-slate-900' : 'bg-white'}/g,
  'bg-slate-900'
);

// 5. Increase logo size and shift it
// Original Logo block:
const logoRegex = /{\/\* Right Side: Logo \*\/}[\s\S]*?<Link href="\/" className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">[\s\S]*?<div className="relative w-\[45px\] h-\[35px\] overflow-hidden shrink-0">[\s\S]*?<div className="absolute top-\[-1px\] left-0 w-full h-\[130%\]">[\s\S]*?<Image[\s\S]*?src="\/assets\/logo\/logo\.png"[\s\S]*?alt="Wealth Acumen"[\s\S]*?fill[\s\S]*?className="object-contain object-top"[\s\S]*?priority[\s\S]*?\/>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/Link>/;

const navLoginRegex = /{\/\* Left Side: Desktop Nav and Login \*\/}[\s\S]*?<div className="hidden lg:flex items-center gap-4 h-full lg:-ml-8 xl:-ml-12">([\s\S]*?){\/\* Right Side: Logo \*\/}/;

// We'll use a more robust way to swap: just parse by markers.
const block1Start = '{/* Left Side: Desktop Nav and Login */}';
const block1End = '{/* Right Side: Logo */}';
const block2Start = '{/* Right Side: Logo */}';
const block2End = '</nav>'; // right before the closing nav

let idx1 = content.indexOf(block1Start);
let idx2 = content.indexOf(block1End);

if (idx1 !== -1 && idx2 !== -1) {
  let navBlock = content.substring(idx1, idx2);
  
  let newLogoBlock = `
            {/* Left Side: Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 mr-auto">
              <div className="relative w-[75px] h-[55px] overflow-hidden shrink-0">
                <div className="absolute top-[-1px] left-0 w-full h-[130%]">
                  <Image
                    src="/assets/logo/logo.png"
                    alt="Wealth Acumen"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </Link>
            
            {/* Right Side: Desktop Nav and Login */}
            <div className="hidden lg:flex items-center gap-4 h-full">
`;
  
  // replace navBlock's header with the new wrapper
  navBlock = navBlock.replace(block1Start, '');
  navBlock = navBlock.replace('<div className="hidden lg:flex items-center gap-4 h-full lg:-ml-8 xl:-ml-12">', '');
  // Since we removed the opening div, we need to find its closing div which is right before block2Start.
  
  // Actually, easiest way is to just do a smart string replacement.
}

// Let's just do a simpler manual rewrite of the relevant JSX section.
const parts = content.split('<div className="flex items-center justify-between h-16 md:h-20">');
const bottomParts = parts[1].split('</nav>');

let innerHTML = bottomParts[0];

// Remove the old logo
innerHTML = innerHTML.replace(logoRegex, '');

// Increase logo size and place at the top of the flex container (after mobile button)
const newLogo = `
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 mr-auto lg:mr-8 ml-4 lg:ml-0">
              <div className="relative w-[85px] h-[65px] overflow-hidden shrink-0">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src="/assets/logo/logo.png"
                    alt="Wealth Acumen"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
              </div>
            </Link>
`;

innerHTML = innerHTML.replace(
  '{/* Left Side: Desktop Nav and Login */}',
  newLogo + '\n            {/* Right Side: Desktop Nav and Login */}'
);

// Remove the weird negative margins from the nav container to push it to the right
innerHTML = innerHTML.replace('className="hidden lg:flex items-center gap-4 h-full lg:-ml-8 xl:-ml-12"', 'className="hidden lg:flex items-center gap-4 h-full ml-auto"');

content = parts[0] + '<div className="flex items-center h-16 md:h-20">' + innerHTML + '</nav>' + bottomParts[1];

fs.writeFileSync('src/components/layout/Navbar.tsx', content);
console.log('Navbar updated successfully!');
