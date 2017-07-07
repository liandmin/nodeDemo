/**
 * Created by LI on 2017/7/1.
 */

var ejs = require("ejs");
var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    fs.readFile("./views/index.ejs", function (err, data) {
        var temp = data.toString();
        var dicration = {
            a: 6,
            news: [
                {"title":"八分裤道具","count":10},
                {"title":"哈哈哈哈","count":20},
                {"title":"逗你玩儿的","count":30}
            ]
        };
        var html = ejs.render(temp, dicration);
        res.writeHead(
            200,{"Content-Type": "text/html; charset=UTF8"}
        );
        res.end(html);
    });
}).listen(8080);