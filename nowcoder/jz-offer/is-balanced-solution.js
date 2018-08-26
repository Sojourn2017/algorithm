// 平衡二叉树

// 题目描述
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} pRoot
 * @return {Boolean}
 */

function IsBalanced_Solution(pRoot) {
  return getDepth(pRoot) != -1;
}

function getDepth(root) {
  if (root === null) {
    return 0
  }
  let left = getDepth(root.left);
  if (left == -1) {
    return -1
  };
  let right = getDepth(root.right);
  if (right == -1) {
    return -1
  };
  return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}

let a = new TreeNode(6);
a.left = new TreeNode(4);
a.right = new TreeNode(7);
a.left.left = new TreeNode(3);
a.left.right = new TreeNode(5);
a.left.left.left = new TreeNode(2);

console.log(IsBalanced_Solution(a));