// 两整数之和
// 不使用运算符 + 和-，计算两整数a 、b之和。

// 示例：
// 若 a = 1 ，b = 2，返回 3。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if(a === 0) return b;
  if(b === 0) return a;
  var carry;
  while(b !== 0){
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
};

// var getSubtract = function(a, b) {
//   var borrow ;
//   while(b !== 0){
//     borrow  = ~a & b;
//     a = a ^ b;
//     b = borrow  << 1;
//   }
//   return a;
// };


console.log(getSubtract(666,777));