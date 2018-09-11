// 寻找中位数


// 题目描述：
// 数学课上，老师揪出了老是和旁边同学交头接耳的小Q，为此老师提出了一个问题看小Q是否对知识有所掌握。
// 老师给了小Q n个整数，要求小Q往其中加入一个数，但数列的中位数保持不变。

// 输入
// 第一行一个数 n（1≤n≤100）。
// 第二行n个数Ai，表示n个整数（1≤Ai≤100），保证互不相同。

// 输出
// 一个数，小Q需要加入的数。
// 如果是整数，直接输出。如果是小数，请不要输出多余的后缀0

// 样例输入
// 6
// 3 2 9 10 4 5
// 样例输出
// 4.5

// Hint
// 输入样例2
// 5
// 3 2 9 10 11

// 输出样例2
// 9

// 样例解释
// 对于样例1：
// 原数列：2 3 4 5 9 10，中位数为4.5
// 新数列：2 3 4 4.5 5 9 10，中位数为4.5

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
date = `
6
3 2 9 10 4 5
5
3 2 9 10 11
`;

// write code here
let a;
// let calc = (arr,len) => {
//   let n = Math.floor(len/2);
//   if (len % 2 == 0) {
//     return (arr[n - 1] + arr[n]) / 2;
//   } else {
//     return arr[n];
//   }
// }
// 无序数组求中位数，快速排序思想
let partition = (arr, L, R) => {
  let pivot = arr[R];
  let j = L;
  for (let i = L; i < R; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  [arr[j], arr[R]] = [arr[R], arr[j]];
  return j;
}
let sortHalf = (arr, L, R) => {
  let M = partition(arr, L, R);
  let n = Math.floor(R / 2);
  if (M == n) return;
  if (M > n) {
    sortHalf(arr, L, M - 1);
  } else {
    sortHalf(arr, M + 1, R);
  }
}

while ((a = readInt()) != null) {
  let arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(readInt());
  }
  // arr.sort((a, b) => a-b);
  // let mid = calc(arr, a);
  // print(mid)
  sortHalf(arr, 0, a - 1);
  let n = Math.floor(a / 2);
  if (a % 2 == 0) {
    print((arr[n - 1] + arr[n]) / 2);
  } else {
    print(arr[n]);
  }
}