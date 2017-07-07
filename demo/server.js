var http = require('http')
var url = require('url')

function start(route) {
    // request:浏览器（客户）向服务器发出的请求
    // response:服务器向浏览器发出的响应
    http.createServer(function(request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        if (request.url != '/favicon.ico') {
            var pathname = url.parse(request.url).pathname
            console.log('Request for ' + pathname + ' received.')
            route(pathname)
            console.log('Request for ' + pathname + ' received.')
            response.write('hello')
            response.end()
        }
    }).listen(8888)
}

exports.start = start