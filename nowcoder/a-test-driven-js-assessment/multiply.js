// 乘法

// 题目描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
// 示例1
// 输入
// 3, 0.0001
// 输出
// 0.0003

/** 
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
function multiply(a, b) {
  a = a.toString();
  b = b.toString();
  var aLen = a.substring(a.indexOf(".") + 1).length;
  var bLen = a.substring(a.indexOf(".") + 1).length;
  return (
    (a * Math.pow(10, aLen) * (b * Math.pow(10, bLen))) /
    Math.pow(10, aLen + bLen)
  );
}
