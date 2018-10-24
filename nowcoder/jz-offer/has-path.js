// 矩阵中的路径

// 题目描述
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，
// 向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，
// 则之后不能再次进入这个格子。 例如 a b c e s f c s a d e e
// 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，
// 但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，
// 路径不能再次进入该格子

/**
 * @param {String} matrix
 * @param {Number} rows
 * @param {Number} cols
 * @param {String} path
 * @return {Boolean}
 */
function hasPath(matrix, rows, cols, path) {
  if (!matrix || !rows || !cols || !path) return false;
  let flag = new Array(matrix.length - 1);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (hasPathCore(matrix, rows, cols, path, 0, i, j, flag)) return true;
    }
  }
  return false;
}

function hasPathCore(matrix, rows, cols, path, strIndex, curX, curY, flag) {
  let index = curX * cols + curY;
  if (
    curX < 0 ||
    curX >= rows ||
    curY < 0 ||
    curY >= cols ||
    matrix[index] !== path[strIndex] ||
    flag[index] == 1
  )
    return false;
  if (strIndex == path.length - 1) return true;
  flag[index] = 1;
  if (
    hasPathCore(matrix, rows, cols, path, strIndex + 1, curX, curY + 1, flag) ||
    hasPathCore(matrix, rows, cols, path, strIndex + 1, curX, curY - 1, flag) ||
    hasPathCore(matrix, rows, cols, path, strIndex + 1, curX + 1, curY, flag) ||
    hasPathCore(matrix, rows, cols, path, strIndex + 1, curX - 1, curY, flag)
  )
    return true;
  flag[index] = 0;
}

var a = hasPath("abcesfcsadee", 3, 4, "bcced");
console.log(a);
