var http = require('http');
var port = 80;
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain  text/json   text/javascript   
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(port);// 设置 监听的端口

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:' + port + '/');


//hello.js 
function XSQ() { 
    var size;
    var color;
    var brand;
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 

    this.show = function() {

    };
}; 
module.exports = Hello;