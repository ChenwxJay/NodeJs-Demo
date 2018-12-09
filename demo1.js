//可以直接编译node.js脚本
var fs = require("fs")
//同步阻塞读取，先读取完，再继续执行下面的函数
var data = fs.readFileSync('D:\\Sublime Text 3\\js_demo\\node.js\\input.txt'); //同步读取文本文件
console.log(data.toString());
console.log("end!");
//异步非阻塞，不等读完，继续执行下面的函数
fs.readFile('D:\\Sublime Text 3\\js_demo\\node.js\\input.txt', function (err, data) {
    if (err) return console.error(err); //异步函数读，err是错误对象，如果有错误，会填充数据到该对象
    console.log(data.toString());
});
console.log("程序执行结束!");