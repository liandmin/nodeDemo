/*
 * @Author: LI
 * @Date:   2017-07-01 19:07:29
 * @Last Modified by:   LI
 * @Last Modified time: 2017-07-01 19:19:24
 */

'use strict';

//param获取被解析的请求参数对象的值和有规则的路由对象，格式：req.param("参数名")；
// params解析包含有复杂路由规则的请求对象的属性，格式：req.params.参数名

// send发送相应信息，处理不同类型的数据
// 参数为String，Content-Type默认设置text/html
// 参数为Array和Object,Express返回一个JSON
// 参数为Number且没有上面的规则响应体，Express会设置响应体，200：OK

var express = require("express");
var app = express();

app.get("/use/:name", function(req, res) {
	console.log(req.param("name"));
	res.send("测试param和params");
}).listen(8080);

app.get("/use/:name", function(req, res) {
	console.log(req.params.name);
	res.send("测试param和params");
}).listen(8080);