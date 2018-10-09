// 矩形覆盖

// 题目描述
// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
// 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

/**
 * @param {Number} number
 * @return {number}
 */
function rectCover(number) {
  const core = (n, ac1 = 1, ac2 = 2) => {
    return n == 2 ? ac2 : core(--n, ac2, ac1 + ac2);
  }
  return number < 2 ? number : core(number);
}

var a = rectCover(5);

console.log(a);