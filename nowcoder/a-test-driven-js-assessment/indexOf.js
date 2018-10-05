// 查找数组元素位置

// 题目描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述:
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
// 输入： [ 1, 2, 3, 4 ], 3
// 输出： 2

/**
 * @param {Array []} arr
 * @param {Number} item
 * @return {Number}
 */
function indexOf(arr, item) {
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
  return -1;
}