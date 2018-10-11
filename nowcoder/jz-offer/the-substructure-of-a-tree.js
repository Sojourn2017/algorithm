// 树的子结构

// 题目描述
// 输入两棵二叉树A，B，判断B是不是A的子结构。
// （ps：我们约定空树不是任意一个树的子结构）

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * @param {TreeNode} pHead1
 * @param {TreeNode} pHead2
 * @return {Boolean}
 */
function HasSubtree(pRoot1, pRoot2) {
  // write code here
  if (pRoot2 == null || pRoot1 == null) {
    return false;
  }
  return (
    isSubtree(pRoot1, pRoot2) ||
    isSubtree(pRoot1.left, pRoot2) ||
    isSubtree(pRoot1.right, pRoot2)
  );
}

// 判断函数
function isSubtree(pRoot1, pRoot2) {
  if (pRoot2 == null) {
    return true;
  }
  if (pRoot1 == null) {
    return false;
  }
  if (pRoot1.val == pRoot2.val) {
    return (
      isSubtree(pRoot1.left, pRoot2.left) &&
      isSubtree(pRoot1.right, pRoot2.right)
    );
  }
}
