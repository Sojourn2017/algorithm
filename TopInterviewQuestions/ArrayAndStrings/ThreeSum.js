// 三数之和

// 给定一个包含 n 个整数的数组 S，是否存在属于 S 的三个元素 a，b，c 
// 使得 a + b + c = 0 ？找出所有不重复的三个元素组合使三个数的和为零。
// 注意：结果不能包括重复的三个数的组合。

// 例如, 给定数组 S = [-1, 0, 1, 2, -1, -4]，

// 一个结果集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [],
        len = nums.length;
    nums.sort(function(a,b){
        return a-b;
    })
    for(var i = 0; i < len-2;) {
        var j = i + 1,
            k = len - 1;
        while(j<k){
            if(nums[i]+nums[j]+nums[k]===0){
                result.push([nums[i],nums[j],nums[k]]);
                j++;
                k--;
                while(j<k&&nums[j]===nums[j-1]){
                    j++;
                }
                while(j<k&&nums[k]===nums[k+1]){
                    k--;
                }
            }else if(nums[i]+nums[j]+nums[k]>0){
                k--;
                while(j<k&&nums[k]===nums[k+1]){
                    k--;
                }    
            }else{
                j++;
                while(j<k&&nums[j]===nums[j-1]){
                    j++;
                }
            }
        }
        i++;
        while(i<len-2 && nums[i] === nums[i - 1]) {
            i++;
        }
    }
    return result.reverse();

}

var nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums));