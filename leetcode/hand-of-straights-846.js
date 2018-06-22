// 846. Hand of Straights

// Alice has a hand of cards, given as an array of integers.

// Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

// Return true if and only if she can.

 

// Example 1:

// Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8].
// Example 2:

// Input: hand = [1,2,3,4,5], W = 4
// Output: false
// Explanation: Alice's hand can't be rearranged into groups of 4.
 
// Note:

// 1 <= hand.length <= 10000
// 0 <= hand[i] <= 10^9
// 1 <= W <= hand.length

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */

var isNStraightHand = module.exports = function(hand, W) {
  let len = hand.length;
  if (len % W !== 0) return false;
  let cop = [...hand].sort((a,b) => a - b);
  let arr = [];
  for (let i = 0; i < len; i++) {
    if (arr[cop[i]]) {
      arr[cop[i]]++;
    } else {
      arr[cop[i]] = 1;
    }
  }
  for (let i = 0; i < len; i++) {
    if (arr[cop[i]] > 0) {
			for(let j=0; j<W; j++) {
				if (arr[cop[i]+j] > 0) {
          arr[cop[i]+j]--;
        } else {
					return false;
        }
			}
		}   
  }
	return true;
};

// let hand = [34,80,89,15,38,69,19,17,97,98,26,77,8,31,79,70,103,3,13,21,81,53,33,14,60,68,33,59,84,23,97,90,76,82,66,83,23,22,16,18,98,25,16,61,84,100,4,68,101,25,23,9,10,55,2,67,39,52,102,99,40,11,83,24,81,53,96,23,13,24,99,67,22,51,31,58,78,88,5,15,24,32,81,91,96,16,54,22,56,69,14,82,32,34,83,24,37,82,54,21];
let hand = [1,2,3,6,2,3,4,7,8]
let W = 3;
console.log(isNStraightHand(hand,W));