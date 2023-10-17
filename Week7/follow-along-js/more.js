const fs = require('fs');
const content = 'Hello, Node.js!';
fs.writeFile('input.txt', content, 'utf-8', (err) => {
    if(err) {
        console.error('Error writing to the file:', err);
        return;
    }
});
console.log('File wrtten successfully!');