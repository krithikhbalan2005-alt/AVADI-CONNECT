import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Krithikh Balan\\.gemini\\antigravity-ide\\brain\\229916e3-5352-4772-8ee9-5143abf8995e';
const files = [
  'media__1784563740532.png',
  'media__1784563701062.jpg',
  'media__1784563670541.png'
];

files.forEach(f => {
  const fullPath = path.join(brainDir, f);
  if (!fs.existsSync(fullPath)) {
    console.log(`${f} does not exist`);
    return;
  }
  const stats = fs.statSync(fullPath);
  const fd = fs.openSync(fullPath, 'r');
  const buffer = Buffer.alloc(8);
  fs.readSync(fd, buffer, 0, 8, 0);
  fs.closeSync(fd);

  const hex = buffer.toString('hex');
  let mime = 'unknown';
  if (hex.startsWith('89504e47')) mime = 'image/png';
  else if (hex.startsWith('ffd8ff')) mime = 'image/jpeg';
  else if (hex.startsWith('1a45dfa3')) mime = 'video/webm / EBML';

  console.log(`${f}: size=${stats.size}, mime=${mime}, signature=${hex}`);
});
