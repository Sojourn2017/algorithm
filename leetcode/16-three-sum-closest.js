// No.16 最接近的三数之和

// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。
// 找出 nums 中的三个整数，使得它们的和与 target 最接近。
// 返回这三个数的和。假定每组输入只存在唯一答案。

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let sum = nums[0] + nums[1] + nums[len - 1];
  let diff = Math.abs(target - sum)
  for (let i = len - 1; i > 0; i--) {
    let [l, r] = [0, i - 1]
    while (l < r) {
      let newSum = nums[l] + nums[r] + nums[i];
      if (newSum == target) return newSum;
      let newDiff = Math.abs(target - newSum);
      newSum < target ? ++l : --r;
      if (newDiff < diff) {
        diff = newDiff;
        sum = newSum;
      }
    }
  }
  return sum;
};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))
