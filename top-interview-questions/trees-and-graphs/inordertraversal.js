// 中序遍历二叉树
// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//迭代实现
var inorderTraversal = function(root) {
var stack = [];
var res = [];
while (root || stack.length) {
  // drill left
  while (root) {
    stack.push(root);
    root = root.left;
  }
  // print & go to right child
  root = stack.pop();
  res.push(root.val);
  root = root.right;
}
return res;
};

let a = new TreeNode(1);
a.right = new TreeNode(2);
a.right.left = new TreeNode(3);

console.log(inorderTraversal(a));

// //递归实现
// var inorderTraversal = function (root) {
//   let ans = []
//   helper(root)
//   return ans
// };

// function helper(node) {
//   if (node == null) return
//   if (node.left) helper(node.left)
//   ans.push(node.val)
//   if (node.right) helper(node.right)
// }
