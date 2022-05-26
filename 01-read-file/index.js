const fs = require('fs');
const path = require('path');
const fileName = path.join(__dirname, '../01-read-file/text.txt')

const stream = fs.createReadStream(path.join(fileName), 'utf-8');
let data = '';
stream.on('data', chunk => data = chunk);
stream.on('end', () => console.log(data));
stream.on('error', error => console.log(error));



