/*
 * @Author: LI
 * @Date:   2017-07-01 18:49:20
 * @Last Modified by:   LI
 * @Last Modified time: 2017-07-01 19:25:34
 */

'use strict';

// use是express调用中间件的方法，它返回一个函数
// app.use([path], function(request, response, next){});
// 可选参数path默认为"/"。
// use还有一个非常重要的作用就是设置静态文件路径
// 例如：app.use(express:static(require("path").join(__dirname, "public")));
// PS：express.static —— 指定静态文件的查找目录。
// 使用use函数调用中间件指定express静态访问目录，
// 'public'就是我们我们新建的用来存放静态文件的总目录。

var express = require("express");
var app = express();

app.use(function(req, res, next) {
	// body...
	console.log("method:" + req.method + "===" + "url:" + req.url);
	next();
});

app.use(function(req, res) {
	res.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8"
	});
	res.end("连续调用");
});

app.listen(8080);