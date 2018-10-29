// No.7 反转整数

// 给定一个 32 位有符号整数，将整数中的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。
// 根据这个假设，如果反转后的整数溢出，则返回 0。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // if (x > 2**31 - 1 || x < -(2**31)) return 0;
  // let res = x >= 0
  //     ? Number(x.toString().split('').reverse().join(''))
  //     : -Number(x.toString().split('').reverse().join('').slice(0, -1));
  // return res > 2**31 - 1 || res < -(2**31) ? 0 : res;

  let [res, MIN, MAX] = [0, -(2 ** 31), 2 ** 31 - 1];
  while (x !== 0) {
    res = res * 10 + (x % 10);
    x = Math.trunc(x / 10);
    if (res < MIN || res > MAX) return 0;
  }
  return res;
};
