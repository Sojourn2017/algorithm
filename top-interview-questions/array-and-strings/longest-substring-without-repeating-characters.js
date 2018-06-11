// 无重复字符的最长子串
// 给定一个字符串，找出不含有重复字符的最长子串的长度。

// 示例：

// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

// 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。

/**
 * @param {string} s
 * @return {number}
 */

 //字符串的方式
var lengthOfLongestSubstring = function(s) {
  
    var sum = 0;
    var result = "";
  
    for(var i = 0; i < s.length; i++) {
      var char = s.charAt(i);
      var index = result.indexOf(char);
      if(index === -1) {
        result += char;
        sum = sum < result.length ? result.length : sum;
      } else {
        result = result.substr(index+1) + char;
      }
    }
    return sum;
    
};

//数组的方式
// var lengthOfLongestSubstring = function(s) {
//     if(s === ""){
//         return 0;
//     };
//     var arr = [];
//     var sArr = s.split("");
//     var len = sArr.length-1;
//     if(len === 0){
//         return 1;
//     };
//     arr[0] = [sArr[0]];
//     for(var i = 0; i < len; i++){
//         if(arr[arr.length-1].indexOf(sArr[i+1])===-1){
//             arr[arr.length-1].push(sArr[i+1]);
//         }else{
//             arr.push(arr[arr.length-1].slice(arr[arr.length-1].indexOf(sArr[i+1])+1));
//             arr[arr.length-1].push(sArr[i+1]);
//         }
//     }
//     for(var j = 0; j<arr.length; j++){    
//         arr[j] = arr[j].length;
//     }
//     arr.sort(function(a,b){return b-a});
//     return arr[0];
// };

var s = "pwwkew";
console.log(lengthOfLongestSubstring(s));