// 判断数字是否被整除

// 题目描述
// 对于一个正整数n(0 <= n <= 10e9),若n各个数位之和能被n整除，则输出'Yes',否则输出'No'.

// 输入描述
// 每组有t+1行字符串
// 第一行为整数t(表示接下来还有t行)
// 剩下每行为一个整数n

// 输出描述
// 输出一个整数表示最多的掰法

// 示例
// 输入：
// 7
// 34
// 66
// 72
// 6
// 32
// 33
// 86

// 输出：
// No
// No
// Yes
// Yes
// No
// No
// No

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
34
66
72
6
32
33
86
`;

// write code here
var t = parseInt(readline());
var sum, n, tmp;
for(var i = 0;i < t; i++){
    n = parseInt(readline());
    tmp = n;
    sum = 0;
    while (tmp > 0) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    print(n % sum == 0 ? 'Yes' : 'No' );
}