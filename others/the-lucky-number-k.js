// 第K个幸运数

// 题目描述
// 4和7是两个幸运数字，我们定义，十进制表示中，
// 每一位只有4和7两个数的正整数都是幸运数字。
// 前几个幸运数字为：4,7,44,47,74,77,444,447... 
// 现在输入一个数字K，输出第K个幸运数。


// 输入
// 第一行一个数字T（T<=1000）表示测试数据的组数。对于每组测试数据，输出一个数K

// 输出
// 每组数据输出一行，第K个幸运数。

// 样例输入
// 3
// 5
// 100
// 1000000000

// 样例输出
// 74
// 744747
// 77477744774747744747444444447

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
5
100
1000000000
`;

// write code here
// let a;
// let calc = (num) => {
//   let [bit, count, flag] = [0, 0, true];
//   let s = (num + 1).toString(2);
//   while (num > count) {
//     bit++;
//     count += 2**bit;
//   }
//   s = s.replace(/0/g, '4');
//   s = s.replace(/1/g, '7');
//   return s.substr(-bit);
// }
// while ((a=readInt()) != null) {
//   let num;
//   for (let i = 0; i < a; i++) {
//     print(calc(readInt()));
//   }
// }

let a;
let calc = (num) => {
  let bit = 1;
  let count = 2;
  while (num > count) {
    num = num - count;
    count = count * 2;
    bit++;
  }
  let res = "";
  for (let i = 1; i < bit + 1; i++) {
    if (num > 2**(bit - i)) {
      res += "7";
      num = num - 2**(bit - i)
    } else {
      res += "4";
    }
  }
  return res;
}
while ((a=readInt()) != null) {
  let num;
  for (let i = 0; i < a; i++) {
    print(calc(readInt()));
  }
}