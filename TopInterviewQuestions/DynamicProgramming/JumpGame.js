// 跳跃游戏
// 给定一个非负整数数组，您最初位于数组的第一个索引处。

// 数组中的每个元素表示您在该位置的最大跳跃长度。

// 确定是否能够到达最后一个索引。

// 示例：
// A = [2,3,1,1,4]，返回 true。

// A = [3,2,1,0,4]，返回 false。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0;
    for(var i = 0;i<nums.length;i++){
        if(i>max){
            return false;
        }
        max = Math.max(i+nums[i],max);
    }
    return true;
};