
var fs = require('fs');
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));

//此操作会覆盖原来input.txt文件中的全部内容

console.log("文件解压完成。");