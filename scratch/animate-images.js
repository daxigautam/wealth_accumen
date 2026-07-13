const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const stepImages = `
  const stepImages = [
    "/assets/IMG_2489.png",
    "/assets/IMG_2490.png",
    "/assets/IMG_2491.png",
    "/assets/IMG_2492.png",
    "/assets/IMG_2493.png",
  ];
  const stepGradients = [
    "from-blue-500 to-cyan-400",
    "from-amber-500 to-orange-400",
    "from-emerald-500 to-green-400",
    "from-purple-500 to-pink-400",
    "from-rose-500 to-red-400"
  ];
`;

if (!content.includes('const stepImages =')) {
  content = content.replace('export default function HomePage() {', 'export default function HomePage() {' + stepImages);
}

const startString = '{/* Right Column: Popping Bubbles Animation */}';
const endString = '            </motion.div>';

const startIndex = content.indexOf(startString);
// Find the closing motion.div of the right column. 
// It is the *second* closing motion.div after the startString because there's one inside it? No, wait!
// The bubbles had many motion.divs!
