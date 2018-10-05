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
  // arr.forEach(function(v, i) {
  //   if (v === item) {
  //     arr.splice(i, i + 1);
  //   }
  // });
  // return arr;

  var left = 0,
    right = 0,
    count = 0,
    len = arr.length;
  while (right < len) {
    while (arr[right] === item) {
      count++;
      right++;
    }
    arr[left++] = arr[right++];
  }
  arr.length = len - count;
  return arr;
}

var a = removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2);
console.log(a);
