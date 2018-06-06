// 零钱兑换

// 给定不同面额的硬币(coins)和一个总金额(amount)。写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合方式能组成总金额，返回-1。

// 示例 1:
// coins = [1, 2, 5], amount = 11
// return 3 (11 = 5 + 5 + 1)

// 示例 2:
// coins = [2], amount = 3
// return -1.

// 注意:

// 你可以认为每种硬币的数量是无限的。

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount < 0) return -1;
    if (amount == 0) return 0;
    var amo = amount + 1,
        dp = new Array(amo),
        len = coins.length;
    for(var k =0;k<amo;k++){
        dp[k] = amo;
    }
    dp[0] = 0;
    for (var i = 1; i <=amount;i++){
        for (var j = 0; j <len;j++){
            if (coins[j] <= i){
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }               
    }           
    return dp[amount] > amount ? -1 : dp[amount];
};