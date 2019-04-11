/*获取GET请求内容
由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，
因此你可以手动解析后面的内容作为GET请求的参数。
node.js 中 url 模块中的 parse 函数提供了这个功能。
*/
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

	// 解析 url 参数
	//使用 url.parse 方法来解析 URL 中的参数
	var params = url.parse(req.url, true).query;
	res.write('网站名: ' + params.name);
	res.write('\n');
	res.write('网站 URL: ' + params.url);

	res.end();
}).listen(3000);
//在浏览器中访问 
//http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com 
//然后查看返回结果: