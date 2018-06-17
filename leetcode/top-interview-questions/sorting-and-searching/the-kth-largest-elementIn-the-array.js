// 数组中的第K个最大元素
// 在未排序的数组中找到第 k 个最大的元素。请注意，它是数组有序排列后的第 k 个最大元素，而不是第 k 个不同元素。

// 例如，
// 给出 [3,2,1,5,6,4] 和 k = 2，返回 5。

// 注意事项:

// 你可以假设 k 总是有效的，1 ≤ k ≤ 数组的长度。


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  nums =  quickSort(nums)
  return nums[k-1];
};

function quickSort(arr){
  var len = arr.length;
  if(arr.length <= 1) return arr;
  var index = Math.floor(len/2);
  var middle = arr.splice(index,1)[0];
  var left = [];
  var right = [];
  for(var i = 0; i < len - 1; i++){
      if(arr[i] < middle){
          right.push(arr[i]);
      }else{
          left.push(arr[i]);
      }
  }
  return quickSort(left).concat([middle],quickSort(right));
}

var a = [1,5,0,1,6,4,1,9,8,9,9];
var k = 5;

console.log(findKthLargest(a,k));//6