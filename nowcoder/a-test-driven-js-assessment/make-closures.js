// 使用闭包

// 题目描述
// 实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
// 示例1
// 输入
// [1, 2, 3], function (x) { 
// 	return x * x; 
// }
// 输出
// 4

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {}
 */
function makeClosures(arr, fn) {
  var res = [];
  arr.forEach(function (v) {
    res.push(function () {
      return fn(v);
    })
  })
  return res;
}