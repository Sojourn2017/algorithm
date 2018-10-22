// 二叉搜索树的第k个结点

// 题目描述
// 给定一棵二叉搜索树，请找出其中的第k小的结点。
// 例如,(5，3，7，2，4，6，8)中，按结点数值大小顺序第三小结点的值为4。

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} pRoot
 * @return {TreeNode}
 */
function KthNode(pRoot, k) {
  if (!pRoot || k < 1) return null;
  let arr = [];
  function inorder(node, arr, k) {
    if (!node) return;
    if (arr.length == k) return;
    inorder(node.left, arr, k);
    arr.push(node);
    inorder(node.right, arr, k);
  }
  inorder(pRoot, arr, k);
  return arr[k - 1];
}

const tree = new TreeNode(8);

tree.left = new TreeNode(6);
tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(7);

tree.right = new TreeNode(10);
tree.right.left = new TreeNode(9);
tree.right.right = new TreeNode(11);

console.log(KthNode(tree, 1));
