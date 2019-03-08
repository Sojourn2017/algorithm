/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (58.74%)
 * Total Accepted:    10.3K
 * Total Submissions: 17.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return [];
  let arr = [[]];
  let cur = [root];
  let next = [];
  while (cur.length > 0) {
    let p = cur.shift();
    if (p !== null) {
      arr[0].push(p.val);
      p.left && next.push(p.left);
      p.right && next.push(p.right);
    }
    if (cur.length === 0 && next.length > 0) {
      arr.unshift([]);
      cur = next;
      next = [];
    }
  }
  return arr;
};

// // test
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let arr = [3,9,20,null,null,15,7];

// let node = new TreeNode(3);
// node.left = new TreeNode(9);
// node.right = new TreeNode(20);
// node.right.left = new TreeNode(15);
// node.right.right = new TreeNode(7);

// levelOrderBottom(node)
