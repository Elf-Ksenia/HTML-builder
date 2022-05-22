const path = require('path');
const fs = require('fs');
const stylesSrc = path.join(__dirname, '../05-merge-styles/styles');
const bundleCss = path.join(__dirname, '../05-merge-styles/project-dist/bundle.css');
fs.open(bundleCss, 'w', (error) => {
  if (error) throw error;
});

let allStyles = [];

fs.readdir(stylesSrc, (err, files) => {
  files.forEach(file => {
    let filePath = path.join(__dirname, `../05-merge-styles/styles/${file}`);
    fs.stat(filePath, function (err, stats) {
      if (err) throw err;
      if (stats.isFile() && path.extname(filePath) === '.css') {
        fs.readFile(filePath, 'utf-8', (err, data) => {
          allStyles.push(data);
          fs.writeFile(bundleCss, allStyles.join(''), function (err) {
            if (err) throw err;
          })
        })
      }
    })
  })
})