// 移除数组中的元素

// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入: [1, 2, 3, 4, 2], 2
// 输出: [1, 3, 4]

/**
 * @param {Array []} arr
 * @param {Number} item
 * @return {Array}
 */
function remove(arr, item) {
  // return arr.filter(function(v) {
  //   return v !== item;
  // });
  var res = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== item) {
      res.push(arr[i]);
    }
  }
  return res;
}