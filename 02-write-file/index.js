const fs = require('fs');
const path = require('path');
const rl = require('readline');
const { stdin } = require('process');
const readline = rl.createInterface(stdin);


const filePath = path.join(__dirname, '../02-write-file/data-from-console.txt')
const streamData = fs.createReadStream(filePath, 'utf-8');

const stream = fs.createWriteStream(
  path.join(filePath), 'utf-8',
  err => {
    if (err) throw err;
  }
);

console.log('insert data here')
readline.on('line', (data) => {
  if (data.toString() === 'exit') {
    console.log('Data was succesfully inserted to the file');
    process.exit();
  }
  else {
    stream.write(data.toString() + '\n');
  }
});

process.on('SIGINT', () => {
  console.log('Data was succesfully inserted to the file');
  process.exit();
});

