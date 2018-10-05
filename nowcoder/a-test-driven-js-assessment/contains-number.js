// 判断是否包含数字

// 题目描述
// 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
// 示例1
// 输入
// 'abc123'
// 输出
// true

/**
 * @param {String} str
 * @return {Boolean}
 */
function containsNumber(str) {
  return /\d/.test(str); 
}