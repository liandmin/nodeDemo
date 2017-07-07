/*
* @Author: LI
* @Date:   2017-06-10 19:52:13
* @Last Modified by:   LI
* @Last Modified time: 2017-06-16 19:27:24
*/

'use strict';

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"]  = requestHandlers.start;
handle["/start"]  = requestHandlers.start; 
handle["/upload"]  = requestHandlers.upload;
handle["/show"]  = requestHandlers.show;

server.start(router.route, handle);