// 丑数

// 题目描述
// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
// 例如6、8都是丑数，但14不是，因为它包含质因子7。
// 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

/**
 * @param {Number} index
 * @return {Number}
 */
function GetUglyNumber_Solution(index) {
  if (index < 7) {
    return index;
  }
  let res = [1];
  let [r2, r3, r5] = [0, 0, 0];
  for (let i = 1; i < index; i++) {
    res[i] = Math.min(res[r2] * 2, res[r3] * 3, res[r5] * 5);
    if (res[i] == res[r2] * 2) {
      r2++;
    }
    if (res[i] == res[r3] * 3) {
      r3++;
    }
    if (res[i] == res[r5] * 5) {
      r5++;
    }
  }
  return res[index - 1];
}

console.log(GetUglyNumber_Solution(7));
