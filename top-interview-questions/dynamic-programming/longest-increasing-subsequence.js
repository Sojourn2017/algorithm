// 给出一个无序的整形数组，找到最长上升子序列的长度。

// 例如，

// 给出 [10, 9, 2, 5, 3, 7, 101, 18]，
// 最长的上升子序列是 [2, 3, 7, 101]，因此它的长度是4。因为可能会有超过一种的最长上升子序列的组合，因此你只需要输出对应的长度即可。

// 你的算法的时间复杂度应该在 O(n2) 之内。

// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var tails = new Array(nums.length);
    var size = 0;
    for (var x in nums){
        var i = 0, j = size;
        while(i !== j){
            var m = Math.floor((i+j)/2);
            if(tails[m]<nums[x]){
                i = m +1;
            }else{
                j = m;
            }
        }
        tails [i] = nums[x];
        if(i === size){
            size++;
        }
    }
    return size;
};