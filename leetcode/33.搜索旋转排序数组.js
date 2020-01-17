/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

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
