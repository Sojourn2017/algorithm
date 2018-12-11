// No.28 实现strStr()

// 实现 strStr() 函数。

// 给定一个 haystack 字符串和一个 needle 字符串，
// 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

// 示例 1:

// 输入: haystack = "hello", needle = "ll"
// 输出: 2
// 示例 2:

// 输入: haystack = "aaaaa", needle = "bba"
// 输出: -1
// 说明:

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。
// 这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // if (needle === "") {return 0}
  // let ret = -1;
  // let reg = new RegExp("(.*?)" + needle)
  // haystack.replace(reg, (m, p1) => {
  //   if (m) {
  //     ret = p1.length;
  //   }
  // })
  // return ret;

  if (needle === "" || haystack === needle) return 0;
  let [len_1, len_2] = [haystack.length, needle.length];
  for (let i = 0, len = len_1 - len_2; i <= len; i++) {
    for (let j = 0; j < len_2; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      } else {
        if (j === len_2 - 1) {
          return i;
        }
      }
    }
  }
  return -1;
};

var a = "ppi";
var b = "pi";

console.log(strStr(a, b));
