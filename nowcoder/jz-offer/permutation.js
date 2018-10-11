// 字符串的排列

// 题目描述
// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串
// abc,acb,bac,bca,cab和cba。

/**
 * @param {String} str
 * @return {Array}
 */

function Permutation(str) {
  var res = [];
  var s = str
    .split("")
    .sort()
    .join("");
  permutationRecursive(res, 0, s);
  return res;
}

function permutationRecursive(arr, k, str) {
  if (k == str.length - 1) arr.push(str);
  for (var i = k; i < str.length; i++) {
    if (i != k && str[k] == str[i]) continue;
    str = swap(str, i, k);
    permutationRecursive(arr, k + 1, str);
  }
}

function swap(str, i, k) {
  var arr = str.split("");
  [arr[i], arr[k]] = [arr[k], arr[i]];
  return arr.join("");
}

var str = "abc";
console.log(Permutation(str)); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
