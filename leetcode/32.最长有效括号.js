/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (29.04%)
 * Likes:    456
 * Dislikes: 0
 * Total Accepted:    33.5K
 * Total Submissions: 115.4K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
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

