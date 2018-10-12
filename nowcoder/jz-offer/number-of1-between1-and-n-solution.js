// 整数中1出现的次数（从1到n整数中1出现的次数）

// 题目描述
// 求出1~13的整数中1出现的次数,
// 并算出100~1300的整数中1出现的次数？
// 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
// 但是对于后面问题他就没辙了。
// ACMer希望你们帮帮他,并把问题更加普遍化,
// 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

/**
 * @param {Number} n
 * @return {Number}
 */
function NumberOf1Between1AndN_Solution(n) {
  let [count, i, h, l] = [0, 1];
  for (i = 1; i <= n; i *= 10) {
    h = Math.floor(n / i);
    l = n % i;
    if (h % 10 == 0) {
      count += Math.floor(h / 10) * i;
    } else if (h % 10 == 1) {
      count += Math.floor(h / 10) * i + (l + 1);
    } else {
      count += Math.floor(h / 10 + 1) * i;
    }
  }
  return count;
}

console.log(NumberOf1Between1AndN_Solution(123456));
