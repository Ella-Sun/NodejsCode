/*
Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，
例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。

异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
*/
var fs = require('fs');

// 异步读取
fs.readFile('input.txt', function(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log('异步读取: ' + data.toString());
});

//同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取: ' + data.toString());

console.log('程序执行完毕');

/*
打开文件

以下为在异步模式下打开文件的语法格式：

fs.open(path, flags[, mode], callback)

path - 文件的路径。

flags - 文件打开的行为。具体值详见下文。

mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。

callback - 回调函数，带有两个参数如：callback(err, fd)。
*/
/*
lags 参数可以是以下值：

Flag	描述
r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
rs	以同步的方式读取文件。
rs+	以同步的方式读取和写入文件。
w	以写入模式打开文件，如果文件不存在则创建。
wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
w+	以读写模式打开文件，如果文件不存在则创建。
wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a	以追加模式打开文件，如果文件不存在则创建。
ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+	以读取追加模式打开文件，如果文件不存在则创建。
ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
*/
console.log();
//异步打开文件
console.log('准备打开文件!');
fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.error(err);
	}
	console.log('文件打开成功!');
});
console.log('往下进行异步');

/*
获取文件信息

以下为通过异步模式获取文件信息的语法格式：

fs.stat(path, callback)

path - 文件路径。

callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。

fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
可以通过stats类中的提供方法判断文件的相关属性。

例如判断是否为文件：
*/
fs.stat('/Users/sun/Desktop/nodejs/project10/file.js', function(err, stats) {
	console.log(stats.isFile());
});
/*
stats类中的方法有：

方法	描述
stats.isFile()	如果是文件返回 true，否则返回 false。
stats.isDirectory()	如果是目录返回 true，否则返回 false。
stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
*/
console.log('准备打开文件!');
fs.stat('input.txt', function(err, stats) {
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log('读取文件信息成功!');

	// 检测文件类型
	console.log('是否为文件(ifFile)? ' + stats.isFile());
	console.log('是否为目录(isDirectory)? ' + stats.isDirectory());
});
