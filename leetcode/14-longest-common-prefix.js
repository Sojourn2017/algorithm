// No.14 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return '';
  let compare = (str1, str2) => {
    let same = '';
    for (let i = 0, len = str1.length; i < len; i++) {
      if (str1[i] === str2[i]) {
        same += str1[i];
      } else {
        break;
      }
    }
    return same;
  };
  let res = strs[0];
  for (let i = 1, len = strs.length; i < len; i++) {
    if (res.length > 0) {
      res = compare(res, strs[i]);
    } else {
      break;
    }
  }
  return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
