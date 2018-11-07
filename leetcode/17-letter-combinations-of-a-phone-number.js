// No.17 电话号码的字母组合

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 2：abc
// 3: def
// 4: ghi
// 5: jkl
// 6: mno
// 7: pqrs
// 8: tuv
// 9: wxyz

// 示例:

// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length < 1) return [];
  let maps = ['0', '1', "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let res = [];
  let dfs = (list, str, i, digits, maps, digitsLen) => {
    if (i == digitsLen) {
      list.push(str);
      return;
    }
    let s = maps[Number(digits[i])];
    for (let j = 0, len = s.length; j < len; j++) {
      dfs(list, str + s[j], i+1, digits, maps, digitsLen);
    }
  }
  dfs(res, '', 0, digits, maps, digits.length);
  return res;
};

console.log(letterCombinations('22'))