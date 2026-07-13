const fs = require('fs');

let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

// 1. Identify the Login block
const loginStartMarker = '{/* Login Button */}';
const desktopNavMarker = '{/* Desktop Nav */}';

let loginIdx = content.indexOf(loginStartMarker);
let navIdx = content.indexOf(desktopNavMarker);

if (loginIdx !== -1 && navIdx !== -1) {
  // Find where the login block ends. It's right before the desktop nav block starts.
  let loginBlock = content.substring(loginIdx, navIdx);
  
  // Find where the Desktop Nav block ends. It ends at the closing `</div>` right before the mobile menu overlay or closing `</nav>`.
  // Actually, we can just find the closing `</div>` of the Desktop Nav container.
  
  // The structure is:
  // <div className="hidden lg:flex ...">
  //    [loginBlock]
  //    [navBlock]
  // </div>
  // 
  // Let's use a smarter way: just replace the login button classes, and move it using flex-row-reverse.
  // Wait, if we just add `flex-row-reverse` to the container `hidden lg:flex items-center gap-4 h-full ml-auto`
  // the order visually flips!
}

// 2. Instead of moving blocks manually in string which is error prone, let's just reverse the flex order or use string replacement.

content = content.replace(
  '<div className="hidden lg:flex items-center gap-4 h-full ml-auto">',
  '<div className="hidden lg:flex items-center gap-4 h-full ml-auto flex-row-reverse">'
);

// We must ensure the login dropdown is aligned correctly if we do flex-row-reverse? 
// Actually, in DOM it will still be left-aligned. Flex-row-reverse just changes visual order.
// Even better, let's just swap the strings! It's safer.
