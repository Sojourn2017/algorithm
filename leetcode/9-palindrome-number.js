// No.9 回文数

// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 示例 1:

// 输入: 121
// 输出: true
// 示例 2:

// 输入: -121
// 输出: false
// 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3:

// 输入: 10
// 输出: false
// 解释: 从右向左读, 为 01 。因此它不是一个回文数。
// 进阶:

// 你能不将整数转为字符串来解决这个问题吗？

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // return Number(x.toString().split('').reverse().join('')) === x;

  // let s = x.toString();
  // let len = s.length;
  // for (let l = 0, r = len - 1, n = len >> 1; l < n;) {
  //   if (l <= r && s[l++] !== s[r--]) {
  //     return false;
  //   }
  // }
  // return true;

  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;
  let [left, right] = [x, 0];
  while (left > right) {
    right = 10 * right + (left % 10);
    left = Math.trunc(left / 10);
  }
  return left === right || left === Math.trunc(right / 10);
};

console.log(isPalindrome(10022201));
