// 二叉树中和为某一值的路径

// 题目描述
// 输入一颗二叉树的跟节点和一个整数，
// 打印出二叉树中结点值的和为输入整数的所有路径。
// 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
// (注意: 在返回值的list中，数组长度大的数组靠前)

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {Number} expectNumber
 * @return {Array}
 */

function FindPath(root, expectNumber) {
  if (!root) return [];
  let [res, stack, sum, path, node] = [[], [], 0, [], root];
  while (node !== null || stack.length !== 0) {
    while (node !== null) {
      stack.push(node);
      sum += node.val;
      path.push(node.val);
      node = node.left;
    }
    if (stack.length !== 0) {
      node = stack.pop();
      if (path[path.length - 1] !== node.val) {
        sum -= path.pop();
      }
      if (node.right === null) {
        if (sum === expectNumber) {
          res.push(path.slice());
        }
        sum -= path.pop();
      }
      node = node.right;
    }
  }
  return res;
}

var root = new TreeNode(10);
root.left = new TreeNode(5);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);
root.right = new TreeNode(12);

console.log(FindPath(root, 22)); // [ [ 10, 5, 7 ], [ 10, 12 ] ]
