/*
* @Author: LI
* @Date:   2017-06-10 10:31:35
* @Last Modified by:   LI
* @Last Modified time: 2017-06-10 10:38:27
*/

'use strict';

const fs = require('fs');
const child_precess = require('child_process');

for(var i=0; i<3; i++) {
	var worker_process = child_precess.fork("supper.js", [i]);
	worker_process.on('close', function(i) {
		console.log('子进程已退出，退出码 ' + i);
	});
}
