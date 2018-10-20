// 求1+2+3+...+n

// 题目描述
// 求1+2+3+...+n，
// 要求不能使用乘除法、for、while、if、else、switch、case等关键字
// 及条件判断语句（A?B:C）。

/**
 * @param {Number} n
 * @return {Number}
 */
function Sum_Solution(n) {
  var result = 0;
  var a = n;
  var b = n + 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;

  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;

  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;

  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  a & 1 && (result += b); a >>= 1; b <<= 1;
  return result >> 1;
}

console.log(Sum_Solution(666));