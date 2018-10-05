// 二进制转换3

// 题目描述
// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
// 示例1
// 输入
// 65
// 输出
// 01000001

/** 
 * @param {Number} num
 * @return {String}
 */
function convertToBinary(num) {
  // return ("00000000" + num.toString(2)).slice(-8);
  var res = "";
  while (num > 0) {
    res = (num & 1) + res;
    num = num >> 1;
  }
  return ('00000000' + res).slice(-8);
}