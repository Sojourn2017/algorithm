// 寻找峰值
// 峰值元素是指其值大于左右相邻值的元素。

// 给定一个输入数组 nums，其中 num[i] ≠ num[i+1]，找到峰值元素并返回其索引。

// 数组可能包含多个峰值，在这种情况下，返回到任何一个峰值所在位置都可以。

// 你可以假设 num[-1] = num[n] = -∞。

// 示例 1:
// 输入: nums = [1,2,3,1]
// 输出: 2
// 解释: 3 是峰值元素，你的函数应该返回其索引 2。

// 示例 2:
// 输入: nums = [1,2,1,3,5,6,4]
// 输出: 1 or 5 
// 解释: 你的函数可以返回索引 1，其峰值元素为 2；
//      或者返回索引 5， 其峰值元素为 6。
// 说明:

// 你的解法应该是 O(logN) 时间复杂度的。	

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var start = 0;
    var end = nums.length - 1;
    var middle = Math.floor((end + start)/2);;
    while(start < end){
        nums[middle] < nums[middle + 1] ? start = middle + 1 : end = middle;
        middle = Math.floor((end + start)/2);
    }
    return start;
};

