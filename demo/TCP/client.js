/*
* @Author: LI
* @Date:   2017-06-10 10:52:22
* @Last Modified by:   LI
* @Last Modified time: 2017-06-10 10:53:39
*/

'use strict';

var net = require('net');

// 连接服务器
var client = net.connect({port:8888}, function() {
	console.log('connected to server');
    client.write('World!\r\n');
});

// 接收服务端的数据
client.on('data', function(data) {
    console.log('client got data from server: ', data.toString());
    // 断开连接
    client.end();
});

client.on('end', function() {
    console.log('disconnected from server');
});