// 阶乘后的零
// 给定一个整数 n，返回 n! 结果尾数中零的数量。

// 注意: 你的解决方案应为对数时间复杂度。

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var res = 0;
    var tmp;
    while(n!==0){
        tmp = Math.floor(n/5);
        res += tmp;
        n = tmp;
    }
    return res;
};

var n = 125;
console.log(trailingZeroes(n));