/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

// 你可以假设数组中不存在重复的元素。

// 你的算法时间复杂度必须是 O(log n) 级别。

// 示例 1:

// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:

// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1]
  while (left <= right) {
    const pivot = (left + right) >> 1
    if (target === nums[pivot]) return pivot
    if (target === nums[left]) return left
    if (target === nums[right]) return right
    if (
      target < nums[pivot] && target > nums[left] && nums[pivot] > nums[left]
      || target < nums[left] && target < nums[pivot] && nums[pivot] < nums[left]
      || target > nums[left] && nums[pivot] < nums[left]
    ) right = pivot - 1
    else left = pivot + 1
  }
  return -1
};
// @lc code=end


const res = search([5,1,2,3,4], 1)
console.log('TCL: res', res)
