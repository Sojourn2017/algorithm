// No.29 两数相除

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
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2**31,  2**31 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (!divisor || (dividend == -(2 ** 31) && divisor == -1)) return 2 ** 31 - 1;
  const SIGN = (dividend > 0 ^ divisor < 0);
  let [dvd, dvs, res] = [Math.abs(dividend), Math.abs(divisor), 0];
  while (dvd >= dvs) {
    let [temp, mult] = [dvs, 1];
    while (dvd >> 1 >= temp) {
      temp <<= 1;
      mult <<= 1;
    }
    dvd -= temp;
    res += mult;
  }
  return SIGN ? res : -res;
};

console.log(divide(999, 3));
