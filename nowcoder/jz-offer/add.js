// 不用加减乘除做加法

// 题目描述
// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

/**
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */
function Add(num1, num2) {
  while (num1 !== 0) {
    var tmp = num1 ^ num2;
    num1 = (num1 & num2) << 1;
    num2 = tmp;
  }
  return num2;
}
