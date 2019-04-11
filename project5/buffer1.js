
/*
写入 Node 缓冲区的语法如下所示：

buf.write(string[, offset[, length]][, encoding])
*/
buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);
console.log( buf.toString('utf8'));
/*
读取 Node 缓冲区数据的语法如下所示：

buf.toString([encoding[, start[, end]]])
*/
/*
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}
console.log(buf);

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii', 0, 5));   // 输出: abcde
console.log( buf.toString('utf8', 0, 5));    // 输出: abcde
console.log( buf.toString(undefined, 0, 5)); // 使用 'utf8' 编码, 并输出: abcde
*/