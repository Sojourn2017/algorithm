// No.334 递增的三元子序列
// 给定一个未排序的数组，请判断这个数组中是否存在长度为3的递增的子序列。

// 正式的数学表达如下:

// 如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
// 使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
// 要求算法时间复杂度为O(n)，空间复杂度为O(1) 。

// 示例:
// 输入 [1, 2, 3, 4, 5],
// 输出 true.

// 输入 [5, 4, 3, 2, 1],
// 输出 false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  var small = Number.MAX_SAFE_INTEGER;
  var big = Number.MAX_SAFE_INTEGER;
  for(var i  = 0; i<nums.length; i++){
      if (nums[i] <= small) {
          small = nums[i];
      } else if (nums[i] <= big) {
          big = nums[i];
      } else {
          return true;
      }
  }
  return false;
};

var nums = [1,2,2,1,3];
console.log(increasingTriplet(nums));