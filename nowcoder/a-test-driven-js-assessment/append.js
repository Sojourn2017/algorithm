// 添加元素

// 题目描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入: [1, 2, 3, 4],  10
// 输出: [1, 2, 3, 4, 10]

/**
 * @param {Array []} arr
 * @param {Number} item
 * @return {Array}
 */
function append(arr, item) {
  // return arr.concat(item);
  
  var Arr = arr.slice(0);
  Arr.push(item);
  return Arr;
}