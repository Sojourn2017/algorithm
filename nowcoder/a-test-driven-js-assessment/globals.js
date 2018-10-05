// 避免全局变量

// 题目描述
// 给定的 js 代码中存在全局变量，请修复

// function globals() {
//   myObject = {
//     name : 'Jory'
//   };

//   return myObject;
// }
function globals() {
  // 函数内部使用var(ES6使用let、coust)定义为局部变量
  var myObject = {
    name : 'Jory'
  };
  return myObject;
}