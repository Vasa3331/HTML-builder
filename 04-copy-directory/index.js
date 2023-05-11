const path = require('path');
const fs = require('fs');

async function makeDirectory() {
    const projectFolder = path.join(__dirname, 'files-copy');
    const filesCopy = fs.mkdir(projectFolder, { recursive: true }, err => {
        if(err) throw err;
    });
    return filesCopy;
}
  
makeDirectory();

fs.readdir(path.join(__dirname, '/files'), (err, files) => {
    if(err) throw err; // не прочитать содержимое папки
    for(let file of files) {
        fs.copyFile(path.join(__dirname, '/files', file), path.join(__dirname, 'files-copy', file), err => {
            if(err) throw err; // не удалось скопировать файл
        });
    }
 });



