// 判断是否符合指定格式

// 题目描述
// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型
// 示例1
// 输入
// '800-555-1212'
// 输出
// true

/**
 * @param {String} str
 * @return {Boolean}
 */
function matchesPattern(str) {
  return /^\d{3}-\d{3}-\d{4}$/.test(str);
}