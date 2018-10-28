// No.4 两个排序数组的中位数

// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

// 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

// 你可以假设 nums1 和 nums2 不同时为空。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 中位数是 (2 + 3)/2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let len = nums1.length + nums2.length;
  let isOdd = len % 2;
  let midIndex = (len >> 1) + 1;
  let count = 0;
  let tmp;
  while (nums1.length && nums2.length) {
    count++;
    if (count == midIndex) {
      let cur = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
      return isOdd ? cur : (tmp + cur) / 2;
    } else {
      tmp = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
    }
  }
  while (nums1.length) {
    count++;
    if (count == midIndex) {
      let cur = nums1.shift();
      return isOdd ? cur : (tmp + cur) / 2;
    } else {
      tmp = nums1.shift();
    }
  }
  while (nums2.length) {
    count++;
    if (count == midIndex) {
      let cur = nums2.shift();
      return isOdd ? cur : (tmp + cur) / 2;
    } else {
      tmp = nums2.shift();
    }
  }
};

console.log(findMedianSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
