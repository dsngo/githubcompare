const fs = require('fs');

const a = JSON.stringify(fs.readFileSync('.eslintrc.json', 'utf8'));

fs.writeFileSync('a.txt', a);
