const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '..', 'src', 'screens', 'Module2.tsx');
let fileContent = fs.readFileSync(targetFilePath, 'utf8');

const sosRegex = /export\s+const\s+EmergencySOSScreenAlt:[\s\S]*?(?=export\s+const\s+LocalServicesScreen)/;
const exploreRegex = /export\s+const\s+LocalServicesScreen:[\s\S]*?(?=export\s+const\s+RentalsPageScreen)/;
const jobDetailRegex = /export\s+const\s+JobsDetailScreen:[\s\S]*?(?=export\s+const\s+DrawerScreen)/;
const endOfFileStr = `// ==========================================
// 31. SETTINGS SCREEN`;

console.log('sosRegex:', sosRegex.test(fileContent));
console.log('exploreRegex:', exploreRegex.test(fileContent));
console.log('jobDetailRegex:', jobDetailRegex.test(fileContent));
console.log('endOfFileStr:', fileContent.includes(endOfFileStr));
