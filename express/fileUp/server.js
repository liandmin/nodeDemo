// 引入exprss框架、模块、中间件
var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");
var multer = require("multer");

// 设置静态文件路径
app.use(express.static("public"));
// 设置application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }))；
    // 设置文件编码格式
app.use(bodyParser.json());
// 设置文件接收的缓冲区
app.use(multer({ dest: '/tmp/' }).array('image')); // 低版本，1.0以前的会报错

// 网址为localhost:8081/index.html时打开静态文件
app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

// 请求地址，先读文件，如果文件存在，则写文件，然后输出信息到页面
app.post("/file_upload", function(req, res) {
    console.log(req.files[0]); //  上传的文件信息
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            // 不设置输出头信息，回导致中文文件名输出乱码
            res.writeHead(200, {
                "Content-Type": "text/palin; charset=utf-8"
            });
            console.log(response);
            // res.setCharacterEncoding("utf-8")
            // res.write(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});