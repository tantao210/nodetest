var http = require('http');
var util = require('util');
var querystring = require('querystring');


var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="get">' +
  '网站名： <input name="username"><br>' +
  '网站 URL： <input name="password" type="password"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function(req, res){
    // 定义了一个post变量，用于暂存请求体的信息
    var post = '';     
 
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function(chunk){    
        post += chunk;
    });
 
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function(){    
        post = querystring.parse(post);
        
        // res.write(post.username);
        // 用户名或密码为空时
        // 用户名规则是否正确   字母或下划线开头  只能包含字母 数字  下划线  用户名长度限制 6 - 20
        // 密码最短长度限制 6   
        
        if (post.username && post.password) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            if (post.username == 'root' && post.password == '123456') {
                res.write('登陆成功<a href="javascript:history.back();">back</a>');
            } else {
                res.write('用户名或者密码错误<a href="javascript:history.go(-1);">back</a>');
            }
        } else {
            res.write(postHTML);
        }

        // 数据库里保存了所有的用户信息   

        res.end();

        // res.end(util.inspect(post));
    });
}).listen(3000);