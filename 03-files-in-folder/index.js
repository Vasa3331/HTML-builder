const path = require('path');
const fs = require('fs');
fs.readdir(path.join(__dirname, '/secret-folder'), {withFileTypes: true}, (error, dirEntryList) => {
  if(!error) {
    dirEntryList.forEach((file) => {
      if(file.isFile()) {
        fs.stat(path.join(__dirname, '/secret-folder', file.name), (err, stats) => {
          if(!err) {
            console.log(`${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${stats.size}b`);
          } else {
            console.error(err);
          }
        });
      }
    })
  } else {
    console.error(error);
  }
})
