/*
* @Author: LI
* @Date:   2017-06-09 20:13:53
* @Last Modified by:   LI
* @Last Modified time: 2017-06-09 20:52:15
*/

'use strict';

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	// res.end(url.parse(req.url, true));
	// res.end(util.inspect(url.parse(req.url, true)));
	// 解析URL字符串为URL对象
	var params = url.parse(req.url, true).query;
	res.write("网站名：" + params.name);
	res.write('\n');
	res.write("网站 URL：" + params.url);
	res.end();
}).listen(8888);