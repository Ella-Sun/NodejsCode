/*
Node 缓冲区裁剪语法如下所示：

buf.slice([start[, end]])

start - 数字, 可选, 默认: 0

end - 数字, 可选, 默认: buffer.length
*/
var buffer1 = Buffer.from('runoob');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,3);
console.log("buffer2 content: " + buffer2.toString());

/*
Node 缓冲区长度计算语法如下所示：

buf.length;
*/
var buffer = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer.length);

// 裁剪
var buffer_origin = Buffer.from('runoob');
var buffer_slice = buffer_origin.slice(0,3);

console.log('\n'+ "buffer slice content: "+buffer_slice.toString());
console.log("buffer origin content: "+buffer_origin.toString() +'\n');

/*
特别注意这里 buffer_slice的长度已经设定为4，所以写入操作只能写入前四位
而且 裁剪功能返回的实际是原始缓存区 buffer 或者一部分，操作的是与原始 buffer 同一块内存区域。
所以 对应的buffer_origin部分也被写入改变值了
*/
console.log( buffer_slice.toString('utf8'));
buffer_slice.write("wirte"); // Write buffer slice
console.log( buffer_slice.toString('utf8') +'\n');

// 裁剪前与原始字符串的改变
console.log("buffer slice content: "+buffer_slice.toString());
console.log("buffer origin content: "+buffer_origin.toString()+'\n');


