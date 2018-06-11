// 矩阵置零

// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将这个元素所在的行和列都置零。

// 点击查看问题跟进。

// 你有没有使用额外的空间?
// 使用 O(mn) 的空间不是一个好的解决方案。
// 使用 O(m + n) 的空间有所改善，但仍不是最好的解决方案。
// 你能设计一个使用恒定空间的解决方案吗？

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  var col = 1;
  var row = 1;
  for(var i = 0;i<m;i++) {
    for(var j = 0;j<n;j++) {
      if(matrix[i][j]===0) {
        if(i===0){row=0;};
        if(j===0){col=0;};
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }  
    }
  }
  for(var i = 1;i<m;i++) {
    for(var j = 1;j<n;j++) {
      if(matrix[i][0]===0||matrix[0][j]===0) {
        matrix[i][j] = 0;
      }       
    }
  }
  for(var i = 0;i<m;i++) {
    if(col===0) {matrix[i][0]=0;};
  }
  for(var j = 0;j<n;j++) {
    if(row===0) {matrix[0][j]=0;};
  }
};

var a = [[1,2,3,4],[5,0,5,2],[8,9,2,0],[5,7,2,1]];
setZeroes(a);
console.log(a);