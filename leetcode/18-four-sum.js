// No.18 四数之和

// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，
// 判断 nums 中是否存在四个元素 a，b，c 和 d ，
// 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

// 注意：

// 答案中不可以包含重复的四元组。

// 示例：

// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);
  let res = [];
  let len = nums.length;
  let [one, two, three, four] = [0, 0, 0, len - 1];
  while (one < four) {
    let [val1, val4] = [nums[one], nums[four]];
     if ((one == 0 || (one > 0 && val1 != nums[one - 1])) && (four == len - 1 || (val4 != nums[four + 1]))) {
      [two, three] = [one + 1, four - 1];
      let [val2, val3] = [nums[two], nums[three]]
      let sum = target - val1 - val4;
      while (two < three) {
        if (val2 + val3 == sum) {
          res.push([val1, val2, val3, val4]);
          while (two < three && val2 == nums[two + 1]) two++;
          while (two < three && val3 == nums[three - 1]) three--;
          two++;
          three--;
        } else if (val2 + val3 < sum) two++;
        else three--;
      }
    }
    one++;
    if (one == four) {
      four--;
      one = 0;
    }
  }
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
