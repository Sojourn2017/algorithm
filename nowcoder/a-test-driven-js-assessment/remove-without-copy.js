// 移除数组中的元素

// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
// 示例1
// 输入: [1, 2, 2, 3, 4, 2, 2], 2
// 输出: [1, 3, 4]

/**
 * @param {Array []} arr
 * @param {Number} item
 * @return {Array}
 */
function removeWithoutCopy(arr, item) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (arr[i] == item) {
      arr.splice(i, i + 1);
      i--;
    }
  }
  return arr;
}