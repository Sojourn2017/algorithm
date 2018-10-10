// 数值的整数次方

// 题目描述
// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

/**
 * @param {Number} base
 * @param {Number} exponent
 * @return {number}
 */
function Power(base, exponent) {
  // return base**exponent;

  let res = 1;
  let cur = base;
  let exp = exponent > 0 ? exponent : -exponent;

  while (exp) {
    if (exp & 1) {
      res *= base;
    }
    base *= base;
    exp = exp >> 1;
  }
  return exponent > 0 ? res : 1 / res;
}

var a = Power(1.2, 4);

console.log(a);
