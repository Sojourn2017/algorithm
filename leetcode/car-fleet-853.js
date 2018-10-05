// N cars are going to the same destination along a one lane road.  The destination is target miles away.

// Each car i has a constant speed speed[i] (in miles per hour), and initial position position[i] miles towards the target along the road.

// A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.

// The distance between these two cars is ignored - they are assumed to have the same position.

// A car fleet is some non-empty set of cars driving at the same position and same speed.  Note that a single car is also a car fleet.

// If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.


// How many car fleets will arrive at the destination?

// Example 1:

// Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// Output: 3
// Explanation:
// The cars starting at 10 and 8 become a fleet, meeting each other at 12.
// The car starting at 0 doesn't catch up to any other car, so it is a fleet by itself.
// The cars starting at 5 and 3 become a fleet, meeting each other at 6.
// Note that no other cars meet these fleets before the destination, so the answer is 3.

// Note:

// 0 <= N <= 10 ^ 4
// 0 < target <= 10 ^ 6
// 0 < speed[i] <= 10 ^ 6
// 0 <= position[i] < target
// All initial positions are different.


/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let len = position.length;
  let car = [];
  let maxTime = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let pos = position[i]; 
    let time = (target - pos)/speed[i];
    car.push([pos,time]);
  };
  car.sort((a,b)=>b[0]-a[0]);
  car.forEach(value=>{
    if(value[1] > maxTime) {
      res++;
      maxTime = value[1];
    }
  })
  return res;
};

console.log(carFleet(12,[10,8,0,5,3],[2,4,1,1,3]))


// N  辆车沿着一条车道驶向位于 target 英里之外的共同目的地。

// 每辆车 i 以恒定的速度 speed[i] （英里/小时），从初始位置 position[i] （英里） 沿车道驶向目的地。

// 一辆车永远不会超过前面的另一辆车，但它可以追上去，并与前车以相同的速度紧接着行驶。

// 此时，我们会忽略这两辆车之间的距离，也就是说，它们被假定处于相同的位置。

// 车队 是一些由行驶在相同位置、具有相同速度的车组成的非空集合。注意，一辆车也可以是一个车队。

// 即便一辆车在目的地才赶上了一个车队，它们仍然会被视作是同一个车队。


// 会有多少车队到达目的地?

// 示例：

// 输入：target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// 输出：3
// 解释：
// 从 10 和 8 开始的车会组成一个车队，它们在 12 处相遇。
// 从 0 处开始的车无法追上其它车，所以它自己就是一个车队。
// 从 5 和 3 开始的车会组成一个车队，它们在 6 处相遇。
// 请注意，在到达目的地之前没有其它车会遇到这些车队，所以答案是 3。

// 提示：

// 0 <= N <= 10 ^ 4
// 0 < target <= 10 ^ 6
// 0 < speed[i] <= 10 ^ 6
// 0 <= position[i] < target
// 所有车的初始位置各不相同。