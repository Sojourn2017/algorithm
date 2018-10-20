// 把字符串转换成整数

// 题目描述
// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。
// 输入描述:
// 输入一个字符串,包括数字字母符号,可以为空
// 输出描述:
// 如果是合法的数值表达则返回该数字，否则返回0
// 示例1
// 输入: "+2147483647"
// 输出: 2147483647

// 输入: "1a33"
// 输出: 0

/**
 * @param {String} str
 * @return {Number}
 */
function StrToInt(str) {
  // var num = Number(str);
  // return num === num ? num : 0;

  // return /^([+-]\d+|[1-9]\d*|0)$/.test(str) ? -(-str) : 0;

  const len = str.length;
  if (len < 1) return 0;
  const s0 = str[0].charCodeAt() - 48;
  if ((s0 !== -5 && s0 !== -3 && s0 < 0) || s0 > 9) return 0;
  for (let i = 1; i < len; i++) {
    let val = str[i].charCodeAt() - 48;
    if (val < 0 || val > 9) return 0;
  }
  return -str === -str ? -(-str) : 0;
}

console.log(StrToInt("+"));
