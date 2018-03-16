// 回调函数
var fs = require('fs');

function readFileCallBack(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

fs.readFile('file.txt', 'utf-8', readFileCallBack);
console.log('end');