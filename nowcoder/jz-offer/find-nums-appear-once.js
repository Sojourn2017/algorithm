// 数组中只出现一次的数字

// 题目描述
// 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
// 请写程序找出这两个只出现一次的数字。

/**
 * @param {Array []} array
 * @return {Array []}
 */
function FindNumsAppearOnce(array) {
  let res = [0, 0];
  let xor = array.reduce((total, cur) => total ^ cur);
  let index = 0;
  while ((xor & 1) == 0) {
    xor = xor >> 1;
    index++;
  }
  array.forEach((v) => {
    if (v >> index & 1) {
      res[1] = res[1] ^ v;
    } else {
      res[0] = res[0] ^ v;
    }
  })
  return res;
}


// function FindNumsAppearOnce(array) {
//   // write code here
//   // return list, 比如[a,b]，其中ab是出现一次的两个数字
//   let [len, list, tmp, index] = [array.length, [0, 0], array[0], 0];
//   if (len < 2) return;
//   for (let i = 1; i < len; i++) {
//     tmp = tmp ^ array[i];
//   }
//   if (tmp === 0) return;
//   while ((tmp & 1) == 0) {
//     tmp = tmp >> 1;
//     index++;
//   }
//   let isBit = (num, index) => {
//     return num >> index & 1;
//   }
//   for (let i = 0; i < len; i++) {
//     if (isBit(array[i], index)) {
//       list[0] = list[0] ^ array[i];
//     } else {
//       list[1] = list[1] ^ array[i];
//     }
//   }
//   return list;
// }

var array = [2,4,3,6,3,2,5,5];
console.log(FindNumsAppearOnce(array));