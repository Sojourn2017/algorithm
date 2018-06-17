// 不同路径
// 机器人位于一个 m x n 网格的左上角, 在下图中标记为“Start” (开始)。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角，在下图中标记为“Finish”(结束)。

// 问有多少条不同的路径？


// 注意: m 和 n 的值均不超过 100。

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m<=0||n<=0){
        return false;
    }else if(m===1||n===1){
        return 1;     
    }else if(m<=2||n<=2){
        return m*n/2;
    }else{
        var count1=1,
            count2=1,
            count;
            for(var i = m;i<n+m-1;i++){
               count1=count1*i; 
            }
            for(var j = 1;j<n;j++){
                count2 = count2*j;
            }
            return count1/count2;
    }
}; 

//递归超时
// var uniquePaths = function(m, n) {
//     if(m<=0||n<=0){
//         return false;
//     }else if(m===1||n===1){
//         return 1;     
//     }else{
//         return uniquePaths(m,n-1)+uniquePaths(m-1,n);
//     }
// }; 


// var uniquePaths = function(m, n) {
//     var N = n + m - 2;
//     var k = m - 1;
//     var res = 1;
//     for (var i = 1; i <= k; i++)
//         res = res * (N - k + i) / i;
//     return res;
// };