/**
 * Created by LI on 2017/7/1.
 */

var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    if(req.url == '/dopost' && req.method.toLowerCase() == 'POST') {
        var alldata = "";
        req.addListener("data", function (data) {
           alldata += data; 
        });
        req.addListener("end", function () {
            var datastring = alldata;
            res.end("success");
            console.log(datastring);
            var dataObj = querystring.parse(datastring);
            console.log(dataObj);
            console.log(dataObj.name);
        });
    }
});
server.listen(8080);