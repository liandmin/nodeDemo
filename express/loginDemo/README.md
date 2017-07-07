##遇到问题
1.  body-paser模块使用，要么没结果，要么underfine
    > 没结果是错误，underfine是没有获取到
    > 解决办法：先设置urlencodeParser的编码格式,extended为false,然后设置以json格式解析。返回结果在req.body对象中