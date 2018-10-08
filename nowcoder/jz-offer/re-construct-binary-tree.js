// 重建二叉树

// 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
// 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}
// 和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * @param {Array} pre
 * @param {Array} vin
 * @return {TreeNode}
 */
function reConstructBinaryTree(pre, vin) {
  if (pre.length <= 0) return null;
  let node = pre.shift();
  let tree = new TreeNode(node);
  let i = vin.indexOf(node);
  tree.left = reConstructBinaryTree(pre.slice(0, i), vin.slice(0, i));
  tree.right = reConstructBinaryTree(pre.slice(i), vin.slice(i + 1));
  return tree;
}

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

var a = reConstructBinaryTree([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7]);
console.log(a);
