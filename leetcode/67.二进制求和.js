/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.54%)
 * Total Accepted:    17K
 * Total Submissions: 36.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let [indexA, indexB, flag, res, xor, longStr, longIndex] = [a.length - 1, b.length - 1, 0, ""];
  if (indexA > indexB) {
    longStr = a;
    longIndex = indexA - indexB - 1;
  } else {
    longStr = b;
    longIndex = indexB - indexA - 1;
  }
  while (indexA >= 0 && indexB >= 0) {
    xor = a[indexA] ^ b[indexB] ^ flag;
    flag = ~~((~~a[indexA--] + ~~b[indexB--] + ~~flag) > 1);
    res = xor + res;
  }
  while (longIndex >= 0) {
    xor = longStr[longIndex--] ^ flag;
    flag = !xor && flag;
    res = xor + res;
  }
  return flag ? flag + res : res;
};

console.log(addBinary("11", "1"))
