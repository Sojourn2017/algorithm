// 求众数
// 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且数组中的众数永远存在。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var len = nums.length;
  var count = 0;
  var num;
  for(var i = 0; i < len; i++){
    if(count === 0){
      num = nums[i];
      count++;
    }else if(num === nums[i]){
      count++;
    }else{
      count--;
    }
  }
  return num; 
};

var a = [1];
console.log(majorityElement(a));