/*
* @Author: LI
* @Date:   2017-06-10 10:48:25
* @Last Modified by:   LI
* @Last Modified time: 2017-06-10 10:52:16
*/

'use strict';

var net = require('net');

//创建TCP服务器
var server = net.createServer(function(socket) {
	console.log('client connected');
	//监听客户端数据
	socket.on('data', function(data) {
	 	console.log('server got data from client: ', data.toString());
	});
	// 监听客户端断开连接事件
    socket.on('end', function(data) {
        console.log('connection closed');
    });
    // 发送数据给客户端
    socket.write('Hello\r\n');
});
// 启动服务
server.listen(8888, function() {
    console.log('server bound');
});