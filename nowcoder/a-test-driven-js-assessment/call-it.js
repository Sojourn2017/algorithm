// 使用 apply 调用函数

// 题目描述
// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
// 示例1
// 输入
// 无
// 输出
// 无

/**
 * @param {Function} fn
 * @return {}
 */
function callIt(fn) {
  var arr = [].slice.call(arguments, 1);
  return fn.apply(this, arr);
}
