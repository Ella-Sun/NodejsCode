/*
可能存在覆盖状态,可以设置写入流的追加参数来解决
*/
var fs = require('fs');
var readerStream = fs.createReadStream('input.txt');
//设置第二个参数append
var writerStream = fs.createWriteStream('outInput.txt', {'flag':'a'});
//管道流读写操作
readerStream.pipe(writerStream);
console.log('执行完毕');