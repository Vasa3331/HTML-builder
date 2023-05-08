const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(path.join(__dirname, '/styles'), {withFileTypes: true});
let data = [];
for(let file of files) {
  if(file.isFile() && file.name.split('.')[1] === 'css') {
    const readableStream = fs.createReadStream(path.join(__dirname, '/styles', file.name), 'utf-8');
    const output = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
    readableStream.on('data', chunk => data.push(chunk));
    readableStream.on('end', () => {
      output.write(data.join(""));
    });
  }
}
