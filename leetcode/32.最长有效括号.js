/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0
  let a = 0
  let b = s.length
  while (a !== b) {
    a = b
    s = s.replace(/\((_*)\)/g, '_$1')
    b = s.length
  }
  s = s.replace(/[^_]+/g, ' ').trim()
  s.split(' ').forEach((str) => {
    max = Math.max(max, str.length)
  })
  return max * 2
};
// @lc code=end



