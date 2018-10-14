// 和为S的两个数字

// 题目描述
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，
// 使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
// 输出描述:
// 对应每个测试案例，输出两个数，小的先输出。

/**
 * @param {Array} array
 * @param {Number} sum
 * @return {Array | Boolean}
 */
function FindNumbersWithSum(array, sum) {
  let end = array.length - 1;
  let start = 0;
  while (start < end) {
    let s = array[start] + array[end];
    if (s === sum) {
      return [array[start], array[end]];
    } else if (s < sum) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
