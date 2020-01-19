/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (38.43%)
 * Likes:    285
 * Dislikes: 0
 * Total Accepted:    54.9K
 * Total Submissions: 142.4K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const core = (nums, target, left, right, type) => {
    while (left <= right) {
      const pivot = (left + right) >> 1
      if (target < nums[pivot] || type === 'left' && target === nums[pivot - 1]) right = pivot - 1
      else if (target > nums[pivot] || type === 'right' && target === nums[pivot + 1]) left = pivot + 1
      else {
        return !type
          ? [core(nums, target, left, pivot, 'left'), core(nums, target, pivot, right, 'right')]
          : pivot
      }
    }
    return !type ? [-1, -1] : -1
  }
  return core(nums, target, 0, nums.length - 1)
};
// @lc code=end

