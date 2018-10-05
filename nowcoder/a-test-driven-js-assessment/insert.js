// 添加元素

// 题目描述
// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入
// [1, 2, 3, 4], 'z', 2
// 输出
// [1, 2, 'z', 3, 4]

/**
 * @param {Array []} arr
 * @param {Number | String | Object | Boolean | undefined | null} item
 * @param {Number} index
 * @return {Array}
 */
function insert(arr, item, index) {
  // return arr.slice(0, index).concat(item, arr.slice(index));
  var Arr = arr.slice(0);
  Arr.splice(index,0,item);
  return Arr;
}