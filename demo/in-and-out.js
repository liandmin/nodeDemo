/*
* @Author: LI
* @Date:   2017-06-10 10:14:45
* @Last Modified by:   LI
* @Last Modified time: 2017-06-10 10:20:25
*/

'use strict';

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var chunk = process.stdin.read();
	if(chunk != null) {
		process.stdout.write('data: ' + chunk);
	}
});
process.stdin.on('end', function() {
	process.stdout.end('end');
});
