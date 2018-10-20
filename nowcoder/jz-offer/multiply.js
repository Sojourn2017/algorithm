// 构建乘积数组

// 题目描述
// 给定一个数组A[0,1,...,n-1],
// 请构建一个数组B[0,1,...,n-1],
// 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
// 不能使用除法。

/**
 * @param {Array} array
 * @return {Boolean}
 */
function multiply(array) {
  const res = [1];
  let tmp = 1;
  for (let i = 1, len = array.length; i < len; i++) {
    res[i] = res[i - 1] * array[i - 1]
  }
  for (let j = array.length - 2; j >= 0; j--) {
    tmp *= array[j + 1];
    res[j] *= tmp;
  }
  return res;
}

let a = multiply([1,2,3,4,5]);

console.log(a);
