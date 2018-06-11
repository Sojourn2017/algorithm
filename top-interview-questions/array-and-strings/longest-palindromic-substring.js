// 最长回文子串

// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。

// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba"也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var maxLen = 0;
  var start = 0;
  var len = s.length;
  if(len<2){
    return s;
  };
  var extendPalindrome = function(str,left,right){
    while(left>=0 && right<str.length && str.charAt(left)===str.charAt(right)){
      left--;
      right++;
    };
    if(maxLen<right-left-1){
      start = left + 1;
      maxLen = right - left - 1;
    };
  };
  for(var i = 0; i < len; i++){
    extendPalindrome(s,i,i);
    extendPalindrome(s,i,i+1);
  };
  return s.substring(start,start+maxLen);
};

var s = "ababababababababa";
console.log(longestPalindrome(s));