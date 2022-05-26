const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, '../03-files-in-folder/secret-folder');
const streamData = fs.createReadStream(filePath, 'utf-8');
fs.readdir(dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      let filePath = path.join(__dirname, `../03-files-in-folder/secret-folder/${file}`);
      let fileName = file.split('.')[0];
      let fileType = file.split('.')[1];
      fs.stat(filePath, function (err, stats) {
        if (stats.isFile()) {
          let fileSize = (stats.size / 1024).toFixed(3);
          console.log(`${fileName} - ${fileType} - ${fileSize}kb`)
        }
      })
    })
  }
})



