const fs = require('fs');
const path = require('path');
const dest = path.join(__dirname, '../04-copy-directory/files-copy');
const src = path.join(__dirname, '../04-copy-directory/files');

fs.readdir(src, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      let srcfile = path.join(__dirname, `../04-copy-directory/files/${file}`);
      let destfile = path.join(__dirname, `../04-copy-directory/files-copy/${file}`);
      fs.open(destfile, 'w', (error) => {
        if (error) throw error;
      });

      fs.copyFile(srcfile, destfile, (err) => {
        if (!dest) {
          fs.mkdir(dest, err => {
            if (err) throw err;
            console.log('folder created successfully');
          });
        }
        if (err) throw err;
        console.log(`files/${file} was copied to files-copy/${file}`);
      });
    })
  }
})
