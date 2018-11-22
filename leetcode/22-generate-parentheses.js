// No.22 括号生成

// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ret = [];
  let core = (list, str, lCount, rCount, n) => {
    if (str.length == n * 2) {
      list.push(str);
      return;
    }
    lCount < n && core(list, str + '(', lCount + 1, rCount, n);
    rCount < lCount && core(list, str + ')', lCount, rCount + 1, n);
  }
  core(ret, '', 0, 0, n);
  return ret;
};