// 正确的使用parseInt

// 题目描述
// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
// 示例1
// 输入
// '12'
// 输出
// 12
// 示例2
// 输入
// '12px'
// 输出
// 12
// 示例3
// 输入
// '0x12'
// 输出
// 0

/**
 * @param {Number | String | Object | Boolean | undefined | null} num
 * @return {Number}
 */
function parse2Int(num) {
  // parseInt函数接受两个参数，第一个为要转换为数字的字符，第二个为转换的进制(2-36)
  return parseInt(num,10);
}