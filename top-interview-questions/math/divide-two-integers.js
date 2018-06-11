// 两数相除
// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 示例 1:

// 输入: dividend = 10, divisor = 3
// 输出: 3
// 示例 2:

// 输入: dividend = 7, divisor = -3
// 输出: -2
// 说明:

// 被除数和除数均为 32 位有符号整数。
// 除数不为 0。
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {
  if (divisor === 0) return 0;
  if (dividend === 0) return 0;
  if (dividend === -2147483648 && divisor === -1) return 2147483647;
  var res = 0;
  var flag = true;
  if (dividend > 0 !== divisor > 0) flag = false;
  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  debugger;
  while(dividend >= divisor){
    var tmp = divisor;
    var multiple = 1;
    while((dividend >> 1) >= tmp){
      tmp = tmp << 1;
      multiple = multiple << 1;
    }
    dividend -= tmp;
    res += multiple;
  }
  return flag?res:-res;
};

console.log(divide(-2147483648 ,1));