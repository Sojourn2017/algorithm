// 最小的K个数

// 题目描述
// 输入n个整数，找出其中最小的K个数。
// 例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。

/** 
 * @param {Array []} input
 * @param {Number} k
 * @return {Number}
 */
function GetLeastNumbers_Solution(input, k) {
  return input.length >= k ? input.sort((a, b) => a - b).slice(0, k) : [];
}
