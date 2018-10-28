// No.3 无重复字符的最长子串
// 给定一个字符串，找出不含有重复字符的最长子串的长度。

// 示例：

// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

// 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  var res = 0; // 用于存放当前最长无重复子串的长度
  var str = ""; // 用于存放无重复子串
  var len = s.length;
  for (var i = 0; i < len; i++) {
    var char = s[i];
    var index = str.indexOf(char);
    if (index === -1) {
      str += char;
      res = res < str.length ? str.length : res;
    } else {
      str = str.substr(index + 1) + char;
    }
  }
  return res;
};

var s = "pwwkew";
console.log(lengthOfLongestSubstring(s));
