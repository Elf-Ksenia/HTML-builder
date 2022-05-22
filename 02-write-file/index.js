const fs = require('fs');
const path = require('path');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = path.join(__dirname, '../02-write-file/data-from-console.txt')

if (!filePath) {
  fs.open(filePath, 'w', (error) => {
    if (error) throw error;
  });
}

readline.question('insert data here\n', (data) => {
  if (data === 'exit') {
    console.log('Data was succesfully inserted to the file');
    process.exit(0);
  }
  else {
    fs.writeFile(filePath, data, function (error) {
      if (error) throw error;
    })
  }
})

