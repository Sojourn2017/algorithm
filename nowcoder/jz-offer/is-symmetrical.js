// 对称的二叉树

// 题目描述
// 请实现一个函数，用来判断一颗二叉树是不是对称的。
// 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} pHead
 * @return {TreeNode}
 */

function isSymmetrical(pRoot) {
  if (pRoot === null) return true;
  return isEqual(pRoot.left, pRoot.right);
}

function isEqual(l, r) {
  if (l == null && r == null) return true;
  if (l !== null && r !== null) {
    return (
      l.val === r.val && isEqual(l.left, r.right) && isEqual(l.right, r.left)
    );
  }
  return false;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(4);
tree.right = new TreeNode(2);
tree.right.left = new TreeNode(4);
tree.right.right = new TreeNode(3);

console.log(isSymmetrical(tree));
