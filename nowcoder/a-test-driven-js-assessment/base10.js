// 二进制转换2

// 题目描述
// 给定二进制字符串，将其换算成对应的十进制数字
// 示例1
// 输入
// '11000000'
// 输出
// 192

/** 
 * @param {String} str
 * @return {Number}
 */
function base10(str) {
  // return parseInt(str,2);
  var res = 0;
  for (var i = 0, len = str.length; i < len; i++) {
    res += (str[i] & 1) << (len - i - 1);
  }
  return res;
}
