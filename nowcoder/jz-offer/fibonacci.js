// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
// n<=39

/**
 * @param {number[]} n
 * @return {number}
 */
// function Fibonacci(n) {
//   if (typeof n !== "number") {
//     return false;
//   }
//   if (n === 0) {
//     return 0
//   }
//   var res = 0;
//   var tmp = 1;
//   while (n--) {
//     tmp += res;
//     res = tmp - res;
//   }
//   return res;
// }

function Fibonacci(n) {
  let [res, ac1, ac2] = [0, 1, 1];
  for (let i = 0; i < n; i++) {
    res = ac1;
    ac1 = ac2;
    ac2 = res + ac2;
  }
  return res;
}

console.log(Fibonacci(1000));