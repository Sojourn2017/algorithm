// 把二叉树打印成多行

// 题目描述
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} pRoot
 * @return {Number}
 */
function Print(pRoot) {
  if (pRoot == null) return [];
  let res = [];
  let queue = [pRoot];
  while (queue.length) {
    let values = [];
    let nodes = [];
    for (let i = 0, len = queue.length; i < len; i++) {
      let item = queue.shift();
      values.push(item.val);
      if (item.left) {
        queue.push(item.left);
      }
      if (item.right) {
        queue.push(item.right);
      }
    }
    res.push(values);
  }
  return res;
}

const tree = new TreeNode(8);

tree.left = new TreeNode(6);
tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(7);

tree.right = new TreeNode(10);
tree.right.left = new TreeNode(9);
tree.right.right = new TreeNode(11);

// console.log(tree);
console.log(Print(tree));
