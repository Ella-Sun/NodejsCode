/*
删除目录
语法
以下为删除目录的语法格式：

fs.rmdir(path, callback)
参数
参数使用说明如下：

path - 文件路径。

callback - 回调函数，没有参数。
*/
var fs = require('fs');
// 执行前创建一个空的 /tmp2/test 目录
console.log('准备删除 tmp2/test');
fs.rmdir('tmp2/test', function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("读取 tmp2/ 目录");
	fs.readdir('tmp2/', function(err, files) {
		if (err) {
			return console.error(err);
		}
		files.forEach( function(file) {
		console.log(file);
	    });
	});
});