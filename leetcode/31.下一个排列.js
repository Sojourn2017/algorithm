/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (32.47%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    37.4K
 * Total Submissions: 114.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length
  if (len < 1) return
  // 定义交换数组元素函数
  const swap = (arr, l, r) => {
    if (l < 0 || r < 0) return
    [arr[l], arr[r]] = [arr[r], arr[l]]
  }
  // 查找数组中从右到左第一个非递增元素索引 leftIndex
  let leftIndex = len - 1
  while (nums[leftIndex] <= nums[--leftIndex]) {}
  // 查找数组中从右到左第一个比 leftIndex 小的元素索引 rightIndex
  let rightIndex = len - 1
  while (leftIndex >= 0 && nums[leftIndex] >= nums[rightIndex]) rightIndex--
  // 交换两元素位置
  swap(nums, leftIndex, rightIndex)
  // 将 leftIndex 后的元素按递增顺序排序
  for (let i = leftIndex + 1, stop = (i + len) / 2; i < stop; i++) {
    swap(nums, i, len + leftIndex - i)
  }
};
// @lc code=end

