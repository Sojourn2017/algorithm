// Top K Frequent Elements
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

// 例如，

// 给定数组 [1,1,1,2,2,3] , 和 k = 2，返回 [1,2]。

// 注意：

// 你可以假设给定的 k 总是合理的，1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var count = {};
  var len = nums.length;
  var result = [];
  var index;
  for(var i = 0; i < len; i++){
    if(count[nums[i]] === undefined){
      count[nums[i]] = 1;
    }else{
      count[nums[i]]++;
    }
  }
  index =  Object.keys(count).sort((a, b)=>count[b] - count[a]);
  for(var j = 0; j < k; j++){
    result.push(parseInt(index[j]));
  }
  return result;
};

var nums = [-1,-1,-2,-3];
var k = 1;
console.log(topKFrequent(nums,k));