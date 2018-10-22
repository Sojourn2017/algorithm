// 按之字形顺序打印二叉树

// 题目描述
// 请实现一个函数按照之字形打印二叉树，
// 即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，
// 第三行按照从左到右的顺序打印，其他行以此类推。

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} pHead
 * @return {TreeNode}
 */
function Print(pRoot) {
  if (pRoot == null) return [];
  let [level, res, isOdd] = [[pRoot], [], false];
  while (level.length) {
    let [nextLevel, values] = [[], []];
    if ((isOdd = !isOdd)) {
      for (let i = 0, len = level.length; i < len; i++) {
        let item = level[i];
        values.push(item.val);
        item.left && nextLevel.push(item.left);
        item.right && nextLevel.push(item.right);
      }
      res.push(values);
      level = nextLevel.length ? nextLevel : [];
    } else {
      for (let i = level.length - 1; i >= 0; i--) {
        let item = level[i];
        values.push(item.val);
        item.right && nextLevel.unshift(item.right);
        item.left && nextLevel.unshift(item.left);
      }
      res.push(values);
      level = nextLevel.length ? nextLevel : [];
    }
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

// tree.left.left.left = new TreeNode(8);
// tree.left.right.left = new TreeNode(9);
// tree.right.left.right = new TreeNode(10);

console.log(Print(tree));
