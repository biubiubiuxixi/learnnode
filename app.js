// 创建一个app服务器

// 安装npm install -g supervisor可以时刻监视代码的改动，自启动node.js

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node,js</h1>');
    res.write('<p>hello word</p>');
    res.write('<p>hello everybody</p>');
    res.write('<p>anybody???</p>')
    res.end('<h4>end</h4>');
}).listen(3000);

console.log('HTTP server is listening at port 3000');
