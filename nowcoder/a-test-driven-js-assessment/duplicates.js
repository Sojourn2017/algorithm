// 查找重复元素

// 题目描述
// 找出数组 arr 中重复出现过的元素
// 示例1
// 输入
// [1, 2, 4, 4, 3, 3, 1, 5, 3]
// 输出
// [1, 3, 4]

/**
 * @param {Array []} arr
 * @return {Array}
 */
function duplicates(arr) {
  var obj = {},res = [];
  arr.forEach(function (v, i) {
    if (obj[v]) {
      obj[v].push(i);
    } else {
      obj[v] = [i]
    }
  })
  for (var item in obj) {
    if (obj[item].length > 1) {
      res.push(arr[obj[item][0]]);
    }
  }
  return res;
  
  // var result = [];
  // arr.forEach(function(elem) {
  //   if (
  //     arr.indexOf(elem) != arr.lastIndexOf(elem) &&
  //     result.indexOf(elem) == -1
  //   ) {
  //     result.push(elem);
  //   }
  // });
  // return result;
}

var a = duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);
console.log(a);
