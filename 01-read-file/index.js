const path = require('path');
const fs = require('fs');

const readableStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => console.log(data));
readableStream.on('error', error => console.log('Error', error.message));

// Без использования потока ввода
// fs.readFile(
//     path.join(__dirname, 'text.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );