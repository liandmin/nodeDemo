/*
* @Author: LI
* @Date:   2017-06-09 19:30:51
* @Last Modified by:   LI
* @Last Modified time: 2017-06-09 19:37:07
*/

'use strict';

var fs = require('fs');
var readStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('ouput.txt');

readStream.pipe(writerStream);
console.log('运行完毕');