// 二维数组中的查找

// 题目描述
// 在一个二维数组中（每个一维数组的长度相同），
// 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。

/**
 * @param {Number} target
 * @param {Array} array
 * @return {Boolean}
 */
function Find(target, array) {
  let row = array.length - 1,
    col = array[0].length - 1,
    i = row,
    j = 0;
  while (i >= 0 && j <= col) {
    let val = array[i][j];
    if (val > target) {
      i--;
    } else if (val < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
}
