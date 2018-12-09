//nodejs 测试
var EventEmitter = require('events').EventEmitter; 
//创建事件分发器实例
var event = new EventEmitter(); 
//绑定事件和回调函数，注意事件名可以自定义
event.on('some_event', function() {  //事件对应的回调函数，本质上是监听器
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { //设置超时事件
    event.emit('some_event'); //触发事件，向event对象发送事件
}, 1000); 

//注册带有参数的监听器，同一个事件可以有多个监听器
var events = require('events'); //引入模块，用变量表示
var emitter = new events.EventEmitter(); 
emitter.on('someEvent', function(arg1, arg2) {//注册监听器，带有两个参数 
    console.log('listener1', arg1, arg2); 
}); 
emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
}); 
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); //向emitter发出事件，触发监听器
