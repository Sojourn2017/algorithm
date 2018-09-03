// 表示数值的字符串

// 题目描述
// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
// 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 
// 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

/**
 * @param {String} s
 * @return {Boolean}
 */
function isNumeric(s) {
  // let num = Number(s);
  // return num == num;

  // RegExp: (+ / -) (1.23 / 0.23 / .23) (e (+ / -) 45) 
  let reg = /^[+-]?(([1-9]\d*|0)(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  return reg.test(s);
}

console.log(isNumeric('-1E-16')); // true
console.log(isNumeric('12e+4.3')); // false