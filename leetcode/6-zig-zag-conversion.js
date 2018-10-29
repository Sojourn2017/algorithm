// No.6 Z字形变换

// 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"

// 实现一个将字符串进行指定行数变换的函数:

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "PAYPALISHIRING", numRows = 3
// 输出: "PAHNAPLSIIGYIR"
// 示例 2:

// 输入: s = "PAYPALISHIRING", numRows = 4
// 输出: "PINALSIGYAHRPI"
// 解释:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let res = "";
  let len = s.length;
  if (len < 2 || numRows < 2 || len <= numRows) return s;
  let f = 2 * (numRows - 1);
  for (let i = 0; i < numRows; i++) {
    let bit = f - 2 * i;
    let flag = true;
    for (let j = i; j < len;) {
      res += flag ? (bit !== 0 ? s[j] : "") : (bit !== f ? s[j] : "");
      j += flag ? bit : f - bit;
      flag = !flag;
    }
  }
  return res;
};

console.log(convert("PAYPALISHIRING", 4));
