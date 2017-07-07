/*
* @Author: LI
* @Date:   2017-06-10 19:06:07
* @Last Modified by:   LI
* @Last Modified time: 2017-06-10 21:07:00
*/

'use strict';

var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "  + pathname +  " received.");
		
		request.setEncoding("utf8");

		//监听用户输入的数据
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
        	console.log("Received POST data chunk '"+      postDataChunk +  "'.");
		});
		//所有数据接收完毕，请求路由
		request.addListener("end", function() {
			console.log("route start.");
			route(handle, pathname, response, postData);
		});
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;