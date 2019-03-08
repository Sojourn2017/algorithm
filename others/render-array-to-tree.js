/**
 * 将数组转换为二叉树
 *
 * [1, 2, 3, null, 4, 5]
 *
 *          ||
 *          ||
 *         \||/
 *          \/
 *
 *           1
 *         /   \
 *        2     3
 *         \   /
 *          4 5
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
 * @param {Array} arr
 * @return {TreeNode}
 */
var renderArrayToTree = function(arr) {
  let len = arr.length;
  if (!len) return null;

  let count = 0;
  let res = new TreeNode(arr[count++]);
  let node;
  let queue = [res];
  let nextLevel = [];
  while (queue.length > 0) {
    node = queue.shift();
    if (node !== null) {
      count < len && nextLevel.push(node.left = new TreeNode(arr[count++]));
      count < len && nextLevel.push(node.right = new TreeNode(arr[count++]));
    }
    if (queue.length === 0 && nextLevel.length > 0) {
      queue = nextLevel;
      nextLevel = [];
    }
  }
  return res;
};

module.exports = {
  renderArrayToTree: renderArrayToTree
};

// // test
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// console.log(renderArrayToTree([1, 2, 3, null, 4, 5]))