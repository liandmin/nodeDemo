/*
* @Author: LI
* @Date:   2017-06-10 19:23:26
* @Last Modified by:   LI
* @Last Modified time: 2017-06-10 21:12:15
*/

'use strict';

function route(handle, pathname, response, postData) {
	console.log("About to route a request for "  + pathname);  
	
	if(typeof handle[pathname] === 'function') {
		handle[pathname](response, postData);
	}
	else {
		console.log("No request handler found for "  + pathname);
        response.writeHead(404,  {"Content-Type":  "text/plain"});
        response.write("404 Not found");
        response.end();  
	}
}

exports.route = route;