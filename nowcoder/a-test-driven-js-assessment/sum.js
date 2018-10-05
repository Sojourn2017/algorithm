// 数组求和

// 题目描述
// 计算给定数组 arr 中所有元素的总和
// 输入描述:
// 数组中的元素均为 Number 类型
// 示例1
// 输入: [ 1, 2, 3, 4 ]
// 输出: 10

/**
 * @param {Array []} arr
 * @return {Number}
 */
function sum(arr) {
  // return arr.reduce(function(sum, cur) {
  //   return sum + cur;
  // }, 0);
  var sum = 0;
  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}
