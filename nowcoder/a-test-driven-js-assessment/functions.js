// 正确的函数定义

// 题目描述
// 请修复给定的 js 代码中，函数定义存在的问题
// 示例1
// 输入
// true
// 输出
// a

// function functions(flag) {
//   if (flag) {
//     function getValue() { return 'a'; }
//   } else {
//     function getValue() { return 'b'; }
//   }

//   return getValue();
// }

function functions(flag) {
  // 在代码块内使用变量声明
  if (flag) {
    var getValue =  function () { return 'a'; }
  } else {
    var getValue =  function () { return 'b'; }
  }

  return getValue();
}