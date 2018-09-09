// 幸运数

// 题目描述
// 小明同学学习了不同的进制之后，拿起了一些数字做起了游戏。
// 小明同学知道，在日常生活中我们最常用的是十进制数，
// 而在计算机中，二进制数也很常用。现在对于一个数字x，
// 小明同学定义出了两个函数f(x)和g(x)。
// f(x)表示把x这个数用十进制写出后各个数位上的数字之和。如f(123)=1+2+3=6。
// g(x)表示把x这个数用二进制写出后各个数位上的数字之和。
// 如123的二进制表示为1111011，那么g(123)=1+1+1+1+0+1+1=6。
// 小明同学发现对于一些正整数x满足f(x)=g(x)，
// 他把这种数字称为幸运数，现在他想知道，小于等于n的幸运数有多少个。

// 输入
// 第一行一个整数T(T<=10000)表示数据组数，每组数据输入一个数n(n<=100000)。

// 输出
// 每组数据输出一行，小于等于n的幸运数个数。

// 样例输入
// 3
// 1
// 5
// 21

// 样例输出
// 1
// 1
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
3
1
5
21
`;

// write code here
let a, luckyArr = [1];
let fNum = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
let gNum = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num & 1;
    num = num >> 1;
  }
  return sum;
};
let calc = (num) => {
  let len = luckyArr.length;
  if (len >= num) {
    return luckyArr[num - 1];
  }
  let count = luckyArr[len - 1];
  for (let i = len + 1, l = num + 1; i < l; i++) {
    let f = fNum(i);
    let g = gNum(i);
    if (f == g) {
      luckyArr.push(++count);
    } else {
      luckyArr.push(count);
    }
  }
  return luckyArr[num - 1];
};
while ((a=readInt()) != null) {
  let num;
  for (let i = 0; i < a; i++) {
    print(calc(readInt()));
  }
}