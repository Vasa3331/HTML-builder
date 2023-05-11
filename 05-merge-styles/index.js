// const path = require('path');
// const fs = require('fs');

// const files = fs.readdirSync(path.join(__dirname, '/styles'), {withFileTypes: true});
// let data = [];
// for(let file of files) {
//   if(file.isFile() && file.name.split('.')[1] === 'css') {
//     const readableStream = fs.createReadStream(path.join(__dirname, '/styles', file.name), 'utf-8');
//     const output = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
//     readableStream.on('data', chunk => data.push(chunk));
//     readableStream.on('end', () => {
//       output.write(data.join(""));
//     });
//   }
// }

const fs = require('fs');
const path = require('path');

const stylesFolder = path.join(__dirname, 'styles');
const distFolder = path.join(__dirname, 'project-dist');

function buildBundleFile() {
  const bundlePath = path.join(distFolder, 'bundle.css');
  const bundleStream = fs.createWriteStream(bundlePath);

  fs.readdir(stylesFolder, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }
    const cssFiles = files.filter(file => file.endsWith('.css'));
    cssFiles.forEach((file) => {
      const filePath = path.join(stylesFolder, file);
      const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
      stream.on('error', (err) => console.log(err));
      stream.pipe(bundleStream, { end: false });
    });
  });
};

buildBundleFile();