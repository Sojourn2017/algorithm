// 求二次方

// 题目描述
// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入
// [1, 2, 3, 4]
// 输出
// [1, 4, 9, 16]

/**
 * @param {Array []} arr
 * @return {Array}
 */
function square(arr) {
  return arr.map(function (v) {
    return v*v;
  })
}