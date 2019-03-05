/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (34.57%)
 * Total Accepted:    24.3K
 * Total Submissions: 70.3K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 *
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 *
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 *
 * 示例 1:
 *
 * 输入: 4
 * 输出: 2
 *
 *
 * 示例 2:
 *
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842...,
 * 由于返回类型是整数，小数部分将被舍去。
 *
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let last = x;
  let cur = x / 2 + 0.5;
  while (Math.abs(last - cur) >= 1) {
    last = cur;
    cur = (last + x / last) / 2;
  }
  return parseInt(cur);
};

// // dichotomy
// var mySqrt = function(x) {
//   if (x <= 1) return x;
//   let left = 0;
//   let right = x;
//   let mid = left + ((right - left) >> 1);
//   while (right - left > 1) {
//     let square = mid ** 2;
//     if (square > x) {
//       right = mid;
//       mid = left + ((mid - left) >> 1);
//     } else if (square < x) {
//       left = mid;
//       mid = mid + ((right - mid) >> 1);
//     } else {
//       return mid;
//     }
//   }
//   return mid;
// };
