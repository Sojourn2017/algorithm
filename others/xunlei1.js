// 实现EventEmitter类

// 题目描述：
// 请实现一个EventEmitter类，实现以下方法，需采用javascript语言，不支持ES6
// 1. emitter.on(name, fn) // 订阅name事件，监听函数为fn, 可以多次订阅，
// 2. emitter.once(name, fn) // 功能和on类似，但是监听函数fn是一次性的，触发后自动移除
// 3. emitter.emit(name, data1, data2, ..., datan) 
//    发布name事件，所有订阅name事件的监听函数被触发，data1, data2, ..., 
//    datan会作为参数传给监听函数，如果name事件有多个监听函数，按照订阅顺序依次执行
// 4. emitter.remove(name, fn) // 移除name事件的监听函数fn

// 输入
// // 新建一个emitter对象
// var emitter = new EventEmitter()
// var log = console.log
// // 注册事件
// emitter.on('someTask', log)
// // 触发事件
// emitter.emit('someTask', 1, 2) // 1 2
// // 注册once事件
// emitter.once('onceTask', log)
// // 触发事件
// emitter.emit('onceTask', 1) // 1
// // 触发事件
// emitter.emit('onceTask', 1) // 不输出
// // 移除监听函数
// emitter.remove('someTask', log)
// // 触发事件
// emitter.emit('someTask', 1) // 不输出

// 输出
// 1 2
// 1

// 样例输入
// var e = new EventEmitter();var count = 0;e.on('test', function (num1, num2) {count = num1 + num2});e.emit('test', 1, 2);
// 样例输出
// 3

/* 
 * util 赛码网
 */
var date = ""
var index = 0;
var pattLine = /(.+(?=\n))/;
function read_line() {
  var line = date.substr(index).match(pattLine);
  // var line = pattLine.exec(date.substr(index));
  index = line ? index + line[1].length + 1 : index;
  return line ? line[1] : line;
}
var pattInt = /(\d+(?=\ |\n))/;
function readInt() {
  var _int = date.substr(index).match(pattInt);
  // var _int = pattInt.exec(date.substr(index))
  index = _int ? index + _int[1].length + 1 : index;
  return _int ? parseInt(_int[1]) : _int;
}
var print = function () {
  var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  console.log(args.join(' '));
}

// set your date
date =`
var emitter = new EventEmitter()
var log = console.log
emitter.on('someTask', log)
emitter.emit('someTask', 1, 2) // 1 2
emitter.once('onceTask', log)
emitter.emit('onceTask', 1) // 1
emitter.emit('onceTask', 1) // 不输出
emitter.remove('someTask', log)
emitter.emit('someTask', 1) // 不输出
`;

// write code here
/*请完成下面这个函数，实现题目要求的功能

******************************开始写代码******************************/
function EventEmitter() {
  this.times = {};
}

EventEmitter.prototype.on = function (name, fn) {
  this[name] = fn;
}
EventEmitter.prototype.once = function (name, fn) {
  this.times[name] = 1;
  this[name] = fn;
}
EventEmitter.prototype.emit = function (name) {
  if (this.times[name] == 0) {
    return;
  }
  if (this.times[name] == 1) {
    this.times[name] = 0;
  }
  if (this[name]) {
    var params = [].slice.call(arguments, 1);
    return this[name].apply(null, params);
  }
}
EventEmitter.prototype.remove = function (name, fn) {
  this[name] = undefined;
}
/******************************结束写代码******************************/
// var count = 0

// var input = read_line()
// while (input !== null) {
//   count = eval(input);
//   print(input);
//   print(count)
//   input = read_line();
// }
var emitter = new EventEmitter()
var log = console.log
emitter.on('someTask', log)
emitter.emit('someTask', 1, 2) // 1 2
emitter.once('onceTask', log)
emitter.emit('onceTask', 1) // 1
emitter.emit('onceTask', 1) // 不输出
emitter.remove('someTask', log)
emitter.emit('someTask', 1) // 不输出