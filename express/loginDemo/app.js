var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var multer = require("multer");
var session = require("express-session");

// 设定view变量，意为试图存放的目录
app.set('views', __dirname);

// 修改渲染模板文件的后缀名为.html
app.set('view engine', 'html');
// 运行ejs模板
app.engine('.html', require('ejs').__express);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUnintialized: false,
    cookie: {
        // 过期时间
        maxAge: 1000 * 60 * 10
    }
}));

// PS 中间件必须放在HTTP动词方法之前，否则不会执行。
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    var err = req.session.err;
    res.locals.message = '';
    if (err) {
        res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    }
    next();
});

app.get("/", function(req, res) {
    res.render('login');
});

app.get('/home', function(req, res) {
    if (req.session.user) {
        res.render('home');
    } else {
        req.session.error = "请先登录"
        res.redirect('login');
    }
});
app.get('/login', function(req, res) {
    res.render('login');
});

app.get("/logout", function(req, res) {
    req.session.user = null;
    req.session.error = null;
    // 链接重定向
    res.redirect('index');
})

app.get('/index', function(req, res) {
    res.render('index');
});

app.post('/login', function(req, res) {
    var user = {
        username: 'admin',
        password: 'admin'
    };
    if (req.body.username == user.username && req.body.password == user.password) {
        req.session.user = user;
        res.send(200);
    } else {
        req.session.error = "用户名或密码不正确";
        res.send(404);
    }
});

app.listen(8081);