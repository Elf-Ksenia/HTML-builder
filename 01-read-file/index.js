const path = require("path");
const fs = require("fs");
const fileName = path.join(__dirname, '../01-read-file/text.txt')
fs.readFile(fileName, function(error, data){
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString()); // содержимое файла
    }
});

