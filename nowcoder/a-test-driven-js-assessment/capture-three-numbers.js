// 获取指定字符串

// 题目描述
// 给定字符串 str，检查其是否包含 连续3个数字 
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false
// 示例1
// 输入
// '9876543'
// 输出
// 987

/**
 * @param {String} str
 * @return {Boolean | String}
 */
function captureThreeNumbers(str) {
  return /(\d{3})/.test(str) ? RegExp.$1 : false;
}