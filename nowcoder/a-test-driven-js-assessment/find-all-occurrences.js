// 查找元素位置

// 题目描述
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
// 示例1
// 输入
// 'abcdefabc'
// 输出
// [0, 6]

/**
 * @param {Array []} arr
 * @param {Number | String | Object | Boolean | undefined | null} target
 * @return {Array}
 */
function findAllOccurrences(arr, target) {
  var result = [];
  arr.forEach(function(val, i) {
    val !== target || result.push(i);
  });
  return result;
}
