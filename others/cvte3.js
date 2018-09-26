// 输出杨辉三角

// 实例
// 输入： 
// 5
// 输出:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

/**
 * @param {Number} n
 * @return {String}*n
 */
function printYanHui(n) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j >= 1 && j < i) {
        arr[i].push(arr[i - 1][j - 1] + arr[i - 1][j])
      } else {
        arr[i].push(1);
      }
    }
    console.log(arr[i].join(' '));
  }
}

printYanHui(5)