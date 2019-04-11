/*
Node 缓冲区合并的语法如下所示：

Buffer.concat(list[, totalLength])
*/

var buffer1 = Buffer.from('菜鸟教程 ');
var buffer2 = Buffer.from('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 " + buffer3.toString());
