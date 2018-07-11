// 847. Shortest Path Visiting All Nodes

// An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is given as graph.

// graph.length = N, and j != i is in the list graph[i] exactly once, if and only if nodes i and j are connected.

// Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

 

// Example 1:

// Input: [[1,2,3],[0],[0],[0]]
// Output: 4
// Explanation: One possible path is [1,0,2,0,3]
// Example 2:

// Input: [[1],[0,2,4],[1,3,4],[2],[1,2]]
// Output: 4
// Explanation: One possible path is [0,1,4,2,3]
 

// Note:

// 1 <= graph.length <= 12
// 0 <= graph[i].length < graph.length

/**
 * @param {number[][]} graph
 * @return {number}
 */

// Refer to https://leetcode.com/problems/shortest-path-visiting-all-nodes/discuss/139082/JavaScript-BFS-solution
var shortestPathLength = function(graph) {
  const dp = [...Array(graph.length)].map(r => Array(1<<(graph.length+1)).fill(Math.MAX_VALUE));
  const queue = [];
  
  for (let v = 0; v < graph.length; v++) {
    dp[v][1<<v] = 0;
    queue.unshift([v, 1<<v]);
  }
  
  while (queue.length) {
    let curr = queue.pop();
    if (curr[1] === (1<<graph.length) - 1) return dp[curr[0]][curr[1]];
    
    for (let next of graph[curr[0]]) {
      let nextBitMask = curr[1] | (1<<next);
      if (dp[next][nextBitMask] === Math.MAX_VALUE) {
        dp[next][nextBitMask] = 1 + dp[curr[0]][curr[1]];
        queue.unshift([next, nextBitMask]);
      }
    }
  }
};

// var shortestPathLength = function(graph) {
//   let len = graph.length;
//   let done = [...Array(len)].fill(1);
//   let flag = [0,0,0,0];
//   let cur = [0,0,0,0];
//   let status = [0,0,0,0];
//   let cost = 0;

  
//   return cost;
// };

// function isDone(status,done) {
//   for (let i = 0, len = status.length; i < len; i++) {
//     if (status[i] !== done) {
//       return false;
//     }
//   }
//   return true;
// }

console.log(shortestPathLength([[1,2,3],[0],[0],[0]]));