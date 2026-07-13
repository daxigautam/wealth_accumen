const { Jimp } = require('jimp');

async function convertLogo() {
  try {
    const image = await Jimp.read('public/assets/logo/logo.png');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      // If the pixel is dark (part of the black text) and not fully transparent
      if (r < 80 && g < 80 && b < 80 && a > 10) {
        // Change to white
        this.bitmap.data[idx + 0] = 255; // R
        this.bitmap.data[idx + 1] = 255; // G
        this.bitmap.data[idx + 2] = 255; // B
        // leave alpha as is
      }
    });
    image.write('public/assets/logo/logo-white.png');
    console.log('Successfully created logo-white.png');
  } catch (err) {
    console.error(err);
  }
}

convertLogo();
