// 调整数组顺序使奇数位于偶数前面

// 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
// 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
// 并保证奇数和奇数，偶数和偶数之间的相对位置不变。

/**
 * @param {Array} array
 * @return {Array}
 */
function reOrderArray(array) {
  let [odd, even] = [[], []];
  array.forEach(v => v % 2 ? odd.push(v) : even.push(v))
  return [...odd, ...even];
}