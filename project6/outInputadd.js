
/*
那我现在又这么一个需求，我想把input里面的内容写到outInput里面去，
但是上面的方法都是把文档里面的内容重置了，
我只想添加，而且保留原内容怎么办呢，
可以在可读流创建完毕的回调函数里面进行操作

1. 但其实这个代码还是存在了覆盖状态 可看outInput2.js

2. 而且会出现中文乱码问题，即使你设置了编码为 utf8。
readerStream.setEncoding('UTF8');

解决方案：
全局安装 iconv-lite 这个模块:
npm install -g iconv-lite

代码中写法如下:
var iconv = require('iconv-lite');
var fs = require('fs');

var fileStr = fs.readFileSync('input.txt', {encoding:'binary'});
var buf = new Buffer(fileStr, 'binary');
var str = iconv.decode(buf, 'GBK');
console.log(str);
原理是先统一用二进制编码方式读取，然后再用 GBK 解码。
*/
let fs = require('fs');
let data = '';
let data1 = '我是一只小跳蛙\n';

//1.读取流
//创建可读流
let readerStream = fs.createReadStream('input.txt');

//设置utf-8编码
readerStream.setEncoding('utf8');

//处理流事件
readerStream.on('data', chunk => data += chunk);
/*
//相当于
readerStream.on('data', function(chunk) {
	data += chunk;
});
*/
//写入成功之后 调用writeS方法，传入参数data赋值给dataS
readerStream.on('end', () => writeS(data));
//readerStream.on('end', function(){});
readerStream.on('error', er => console.log(err.strck));
console.log("程序1执行完毕");

//2.写入流
//创建可写流
let writeS = dataS => {
	let writerStream = fs.createWriteStream('outInput.txt');
	//使用utf-8写入流
	writerStream.write(data1 + dataS, "utf8");
	//⭐️标记文件末尾
	writerStream.end();
	//处理事件流 
	writerStream.on('finish', () => console.log("写入完成"));
	writerStream.on('error', err => console.log(err.stack));
	console.log("程序2执行完毕");
}


