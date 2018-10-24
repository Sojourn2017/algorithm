// 机器人的运动范围

// 题目描述
// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
// 每一次只能向左，右，上，下四个方向移动一格，
// 但是不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格（35,37），
// 因为3+5+3+7 = 18。但是，它不能进入方格（35,38），
// 因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

/**
 * @param {Number} threshold
 * @param {Number} rows
 * @param {Number} cols
 * @return {Boolean}
 */
function movingCount(threshold, rows, cols) {
  const map = new Array(rows).fill(1).map(val => (val = new Array(cols)));
  return movingCountCore(threshold, rows, cols, 0, 0, 0, 0, map);
}

function movingCountCore(threshold, rows, cols, rowSum, colSum, row, col, map) {
  if (
    row < 0 ||
    row == rows ||
    col < 0 ||
    col == cols ||
    map[row][col] ||
    rowSum + colSum > threshold
  ) {
    return 0;
  }
  map[row][col] = true;
  return (
    1 +
    movingCountCore(
      threshold,
      rows,
      cols,
      rowSum,
      colSum + (col % 10 == 0 ? 8 : -1),
      row,
      col - 1,
      map
    ) +
    movingCountCore(
      threshold,
      rows,
      cols,
      rowSum,
      colSum + (col % 10 == 9 ? -8 : 1),
      row,
      col + 1,
      map
    ) +
    movingCountCore(
      threshold,
      rows,
      cols,
      rowSum + (row % 10 == 0 ? 8 : -1),
      colSum,
      row - 1,
      col,
      map
    ) +
    movingCountCore(
      threshold,
      rows,
      cols,
      rowSum + (row % 10 == 9 ? -8 : 1),
      colSum,
      row + 1,
      col,
      map
    )
  );
}

let a = movingCount(15, 20, 20);
console.log(a);
