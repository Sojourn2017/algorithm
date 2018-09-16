// 掰巧克力

// 题目描述
// 对于一段长度为t 的巧克力，最多可以掰成t段
// 巧克力上随机有饼干球('1' 为有球,'0'为无球);
// 现要求保证掰开的巧克力每段有且只有1个饼干球
// 问最多有几种掰法？

// 输入描述
// 每组数据输入两行字符串，第一行为整数t
// 第二行由t个0'或'1'组成(由' '分隔开)

// 输出描述
// 输出一个整数表示最多的掰法

// 示例
// 输入：
// 4
// 1 0 1 1

// 输出：
// 2


/* 
 * util 牛客网
 */
var date = ""
var patt = /(.+(?=\n))/g;

function readline() {
  var line = patt.exec(date)
  return line ? line[1] : line;
}
var print = function (s) {
  console.log(s);
}

// set your date
date = `
7
1 0 0 0 1 0 1
`;

// write code here
var t = parseInt(readline());
var arr = readline().split(" ");
var res = 0;
var isFirst = true;
var flag = false;
var count = 1;
for (let i = 0; i < t; i++) {
  var val = arr[i];
  if (flag && val == '0') {
    count++;
  } else if (flag && val == '1') {
    res *= count;
    count = 1;
  } else if (val == '1') {
    flag = true;
    if (isFirst) {
      res = 1;
      isFirst = false;
    }
  }
}
print(res);