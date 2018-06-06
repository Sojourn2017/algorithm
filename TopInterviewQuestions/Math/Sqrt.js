// x 的平方根
// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。

/**
* @param {number} x
* @return {number}
*/

//牛顿迭代法
var mySqrt = function (x) {
  if(x > 0 && x <= 1){
    return x;
  };
  let r = x/2;
  while (r * r > x){
    r = ((r + x / r) / 2) | 0;
  }
  return Math.floor(r);
};

console.log(mySqrt(75));


// var mySqrt = function(x) {
//   var res = 1;
//   if(x>0&&x<=1){return x};
//   while(res*res<=x){
//     if((res+1)*(res+1)>x){return res;}
//   }
// };