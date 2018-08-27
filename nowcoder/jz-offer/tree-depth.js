// 二叉树的深度

// 题目描述
// 输入一棵二叉树，求该树的深度。
// 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，
// 最长路径的长度为树的深度。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * @param {TreeNode} pRoot
 * @return {Number}
 */
function TreeDepth(pRoot){
  return pRoot === null ? 0 : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1;
}