// 计数

// 题目描述
// 统计数组 arr 中值等于 item 的元素出现的次数
// 示例1
// 输入
// [1, 2, 4, 4, 3, 4, 3], 4
// 输出
// 3

/**
 * @param {Array []} arr
 * @param {Number | String | Object | Boolean | undefined | null} item
 * @return {Number}
 */
function count(arr, item) {
  // return arr.reduce(function (count, cur) {
  //   return cur === item ? ++count : count;
  // }, 0);
  var count = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    arr[i] === item ? count++ : 0;
  }
  return count;
}
