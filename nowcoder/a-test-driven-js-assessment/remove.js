// 移除数组中的元素

// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
// 示例1
// 输入: [1, 2, 3, 4, 2], 2
// 输出: [1, 3, 4]

/**
 * @param {Array []} arr
 * @return {Array}
 */
function remove(arr, item) {
  var Arr = arr.slice(0),len = Arr.length;
  for(var i = 0;i<len;i++){
      if(Arr[i]==item){
          Arr.splice(i,1);
          i--;
      }
  }
  return Arr;
}