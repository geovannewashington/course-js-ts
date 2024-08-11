const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.md');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('END!');