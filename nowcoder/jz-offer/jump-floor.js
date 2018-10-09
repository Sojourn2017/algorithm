// 跳台阶

// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

/**
 * @param {Number} number
 * @return {number}
 */
function jumpFloor(number) {
  let core = (n, ac1 = 1, ac2 = 2) => {
    return (
      n <= 0 ? 0 : 
        n === 1 ? ac1 :
        n === 2 ? ac2 :
        core(n - 1, ac2, ac1 + ac2)
    )
  }
  return core(number);
}

var a = jumpFloor(2);

console.log(a);