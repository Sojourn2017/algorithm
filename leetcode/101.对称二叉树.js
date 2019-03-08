/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (45.00%)
 * Total Accepted:    22.6K
 * Total Submissions: 49.9K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 * 说明:
 *
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */
// // recursion
// var isSymmetric = function(root) {
//   if (root === null) return true;
//   let isSymmetricCore = (root1, root2) => {
//     if (root1 === null || root2 === null) return root1 === root2;
//     if (root1.val === root2.val) {
//       return isSymmetricCore(root1.left, root2.right) && isSymmetricCore(root1.right, root2.left);
//     }
//     return false;
//   }
//   return isSymmetricCore(root.left, root.right);
// };

// iteration
var isSymmetric = function(root) {
  if (!root) return true;
  const leftStack = [root.left];
  const rightStack = [root.right];
  while (leftStack.length > 0 && rightStack.length > 0) {
    let left = leftStack.pop();
    let right = rightStack.pop();
    if (left === null || right === null) {
      if (left === right) {
        continue;
      } else {
        return false;
      }
    };
    if (left.val === right.val) {
      leftStack.push(left.left, right.left);
      rightStack.push(right.right, left.right);
    } else {
      return false;
    }
  }
  return leftStack.length === rightStack.length;
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// let arr = [2,3,3,4,5,5];

// let node = new TreeNode(2);
// node.left = new TreeNode(3);
// node.right = new TreeNode(3);
// node.left.left = new TreeNode(4);
// node.left.right = new TreeNode(5);
// node.right.left = new TreeNode(5);

// isSymmetric(node);
