/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (58.57%)
 * Likes:    292
 * Dislikes: 0
 * Total Accepted:    16.9K
 * Total Submissions: 28.7K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const validChecker = (board, row, col, val) => {
    const [len, rowStart, colStart] = [board.length, 3 * Math.floor(row / 3), 3 * Math.floor(col / 3)]
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val
        || board[row][i] === val
        || board[rowStart + i % 3][colStart + Math.floor(i / 3)] === val
      ) return false
    }
    return true
  }
  const core = (board, row, col) => {
    let [r, c, len] = [row - 1, col - 1, board.length]
    while (++r < len) {
      c = c < len - 1 ? c : -1
      while (++c < len) {
        if (board[r][c] !== '.') continue
        for (let val = 1; val <= board.length; val++) {
          if (validChecker(board, r, c, `${val}`)) {
            board[r][c] = `${val}`
            if (core(board, r, c + 1)) return true
            board[r][c] = '.'
          }
        }
        return false
      }
    }
    return true
  }
  core(board, 0, 0)
};
// @lc code=end

// const board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
// solveSudoku(board)
// console.table(board)