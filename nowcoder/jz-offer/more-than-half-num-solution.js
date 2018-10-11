// 数组中出现次数超过一半的数字

// 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
// 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
// 由于数字2在数组中出现了5次，超过数组长度的一半，
// 因此输出2。如果不存在则输出0。

/**
 * @param {Array []} numbers
 * @return {Number}
 */

function MoreThanHalfNum_Solution(numbers) {
  let len = numbers.length;
  if (len < 1) {
    return 0;
  }
  let count = 0,
    cur;
  for (let i = 0; i < len; i++) {
    if (count == 0) {
      cur = numbers[i];
      count++;
    } else {
      cur === numbers[i] ? count++ : count--;
    }
  }
  for (let i = 0; i < len; i++) {
    if (numbers[i] === cur) {
      count++;
    }
  }
  return 2 * count > len ? cur : 0;
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2])); // 2
