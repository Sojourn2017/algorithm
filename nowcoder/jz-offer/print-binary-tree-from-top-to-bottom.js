// 从上往下打印二叉树

// 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * @param {TreeNode} root
 * @return {Array}
 */
function PrintFromTopToBottom(root) {
  // BFC
  let [queue, result, node] = [[root], []];
  let node;
  if (!root) {
    return false;
  }
  while (queue.length > 0) {
    node = queue.shift();
    if (node !== null) {
      result.push(node.val);
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return result;
}
