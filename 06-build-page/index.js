const path = require('path');
const fs = require('fs');
const stylesSrc = path.join(__dirname, '../06-build-page/styles');
const components = path.join(__dirname, '../06-build-page/components')
const dist = path.join(__dirname, '../06-build-page/project-dist');
const assets = path.join(__dirname, '../06-build-page/project-dist/assets');
const fonts = path.join(__dirname, '../06-build-page/project-dist/assets/fonts');
const img = path.join(__dirname, '../06-build-page/project-dist/assets/img');
const svg = path.join(__dirname, '../06-build-page/project-dist/assets/svg');
const bundleCss = path.join(__dirname, '../06-build-page/project-dist/style.css');
const indexHTML = path.join(__dirname, '../06-build-page/project-dist/index.html');
let allStyles = [];
let allComponents = [];

fs.stat(dist, function (err) {
  if (err) {
    fs.mkdir(dist, (err) => {
      if (err) {
        return console.error(err);
      }
      fs.open(bundleCss, 'w', (error) => {
        if (error) throw error;
        else {
          console.log('style.css created successfully!')
        }
      });
      fs.open(indexHTML, 'w', (error) => {
        if (error) throw error;
        else {
          console.log('index.html created successfully!')
        }
      })
      fs.stat(assets, function (err) {
        if (err) {
          fs.mkdir(assets, (err) => {
            if (err) {
              return consol.error(err);
            }
            else {
              console.log('Directory assets created successfully!');
              fs.mkdir(fonts, (err) => {
                if (err) {
                  return console.error(err);
                }
                else {
                  console.log('Directory fonts created successfully!');
                }
              });
              fs.mkdir(img, (err) => {
                if (err) {
                  return console.error(err);
                }
                else {
                  console.log('Directory img created successfully!');
                }
              });
              fs.mkdir(svg, (err) => {
                if (err) {
                  return console.error(err);
                }
                else {
                  console.log('Directory svg created successfully!');
                }
              });
            }
          })
        }
      })
      console.log('Directory dist created successfully!');
    })
  }
});

fs.readdir(stylesSrc, (err, files) => {
  files.forEach(file => {
    let filePath = path.join(__dirname, `../06-build-page/styles/${file}`);
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
});

fs.readdir(components, (err, files) => {
  files.forEach(file => {
    let filePath = path.join(__dirname, `../06-build-page/components/${file}`);
    fs.stat(filePath, function (err, stats) {
      if (err) throw err;
      if (stats.isFile() && path.extname(filePath) === '.html') {
        fs.readFile(filePath, 'utf-8', (err, data) => {
          allComponents.push(data);
          /*fs.writeFile(indexHTML, allComponents.join(''), function (err) {
            if (err) throw err;
          })*/
          const head = document.createElement('head');
          const linkStyles = document.createElement('link');
          linkStyles.setAttribute('href', `${bundleCss}`);
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("type", "text/css");
          head.append(linkStyles);
          const body = document.createElement('body');
          const header = allComponents[3];
          body.append(header);
          const articles = allComponents[1];
          body.append(articles);
          const footer = allComponents[2];
          body.append(footer);
          const script = document.createElement('script');
          script.setAttribute('src', path.join(__dirname, '../06-build-page/index.js'))
          body.append(script);
        })
      }
    })
  })
});


fs.readdir(path.join(__dirname, '../06-build-page/assets/fonts'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      let srcfile = path.join(__dirname, `../06-build-page/assets/fonts/${file}`);
      let distfile = path.join(__dirname, `../06-build-page/project-dist/assets/fonts/${file}`);
      fs.open(distfile, 'w', (error) => {
        if (error) throw error;
      });

      fs.copyFile(srcfile, distfile, (err) => {
        if (err) throw err;
        console.log(`fonts/${file} was copied to project-dist/fonts/${file}`);
      });
    })
  }
});

fs.readdir(path.join(__dirname, '../06-build-page/assets/img'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      let srcfile = path.join(__dirname, `../06-build-page/assets/img/${file}`);
      let distfile = path.join(__dirname, `../06-build-page/project-dist/assets/img/${file}`);
      fs.open(distfile, 'w', (error) => {
        if (error) throw error;
      });

      fs.copyFile(srcfile, distfile, (err) => {
        if (err) throw err;
        console.log(`img/${file} was copied to project-dist/img/${file}`);
      });
    })
  }
});

fs.readdir(path.join(__dirname, '../06-build-page/assets/svg'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      let srcfile = path.join(__dirname, `../06-build-page/assets/svg/${file}`);
      let distfile = path.join(__dirname, `../06-build-page/project-dist/assets/svg/${file}`);
      fs.open(distfile, 'w', (error) => {
        if (error) throw error;
      });

      fs.copyFile(srcfile, distfile, (err) => {
        if (err) throw err;
        console.log(`svg/${file} was copied to project-dist/svg/${file}`);
      });
    })
  }
});
