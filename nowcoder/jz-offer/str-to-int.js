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
  let len = str.length;
  if (len < 1) {
    return 0;
  }
  let flag = false;
  let res = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let asc = str[i].charCodeAt();
    let val = asc - 48;
    if (i == 0) {
      if (asc == 45) {
        flag = true;
      } else if (asc == 43) {
        flag = false;
      } else if (val >= 0 && val < 10) {
        res += val * 10 ** (len - i - 1);
      } else {
        return 0;
      }
    } else {
      if (val >= 0 && val < 10) {
        res += val * 10 ** (len - i - 1);
      } else {
        return 0;
      }
    }
  }
  return flag ? 0 - res : res;
}

console.log(StrToInt('-2147483647'));