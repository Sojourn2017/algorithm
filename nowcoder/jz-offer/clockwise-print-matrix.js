// 顺时针打印矩阵

// 题目描述
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵：
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
// 则依次打印出数字:
// 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

/**
 * @param {Array[][]} matrix
 * @return {Array}
 */
function printMatrix(matrix) {
  let [row, col, res] = [matrix.length, matrix[0].length, []];
  let circle = Math.floor(((row < col ? row : col) - 1) / 2) + 1;
  for (let i = 0; i < circle; i++) {
    // left -> right
    for (let j = i; j < col - i; j++) {
      res.push(matrix[i][j]);
    }
    // top -> botttom
    for (let j = i + 1; j < row - i; j++) {
      res.push(matrix[j][col - i - 1]);
    }
    // right -> left
    for (let j = col - i - 2; j >= i && row - i - 1 != i; j--) {
      res.push(matrix[row - i - 1][j]);
    }
    // bottom -> top
    for (let j = row - i - 2; j > i && col - i - 1 != i; j--) {
      res.push(matrix[j][i]);
    }
  }
  return res;
}

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(printMatrix(arr));
