// 斐波那契数列

// 题目描述
// 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等

/* 
 * @param {Number} n
 * @return {Number}
 */
function fibonacci(n) {
  var f = function (n, ac1, ac2) {
    return n < 3 ? ac2 : f(--n, ac2, ac1 + ac2);
  }
  return f(n, 1, 1);
}

var a = fibonacci(500);
console.log(a);