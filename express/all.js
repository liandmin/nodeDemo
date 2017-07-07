/*
 * @Author: LI
 * @Date:   2017-07-01 17:40:04
 * @Last Modified by:   LI
 * @Last Modified time: 2017-07-01 19:00:09
 */

'use strict';

var express = require("express");
var app = express();

// app.all("*", function(req, res) {
// 	next("cccc");
// });
// all函数定义中间件，意味着所有的请求都必须经过该中间件
// next()用于继续执行下一中间件
// 格式：app.all(path,function(request, response));

app.get("/", function(req, res) {
	res.send("hello");
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})