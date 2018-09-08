// 进制均值

// 题目描述						
// 尽管是一个CS专业的学生，小B的数学基础很好并对数值计算有着特别的兴趣，
// 喜欢用计算机程序来解决数学问题。现在，她正在玩一个数值变换的游戏。
// 她发现计算机中经常用不同的进制表示同一个数，
// 如十进制数123表达为16进制时只包含两位数7、11（B），
// 用八进制表示时为三位数1、7、3。按不同进制表达时，各个位数的和也不同，
// 如上述例子中十六进制和八进制中各位数的和分别是18和11。

// 小B感兴趣的是，一个数A如果按2到A-1进制表达时，各个位数之和的均值是多少？
// 她希望你能帮她解决这个问题？

// 所有的计算均基于十进制进行，结果也用十进制表示为不可约简的分数形式。

// 输入
// 输入中有多组测试数据。每组测试数据为一个整数A（1=＜A=＜5000）。

// 输出
// 对每组测试数据，在单独的行中以X/Y的形式输出结果。

// 样例输入
// 5
// 3

// 样例输出
// 7/3
// 2/1

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
5
`;

// write code here
let a;
let calc = (num, type) => {
  let count = 0;
  while (num) {
    count += num % type;
    num = Math.floor(num / type);
  }
  return count;
}

let reduc = (numerator, denominator) => {
  if (denominator < 0) return 0;
  let [n, d, r] = [numerator, denominator];
  while (d != 0) {
    r = n % d;
    n = d;
    d = r;
  }
  return (numerator / n) + '/' + (denominator / n);
}

while ((a = readInt()) != null) {
  let sum = 0, res;
  for (let i = 2; i < a; i++) {
    sum += calc(a, i);
  }
  res = reduc(sum, a-2);
  print(res);
}


