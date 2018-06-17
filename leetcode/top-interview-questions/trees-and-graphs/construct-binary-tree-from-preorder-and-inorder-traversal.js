// 从前序与中序遍历序列构造二叉树
// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7


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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return traveral(0,0,inorder.length - 1,preorder,inorder);
};

function traveral(preStart,inStart,inEnd,preorder,inorder) {
  if(preStart > preorder.length - 1 || inStart > inEnd) return null;
  var root = new TreeNode(preorder[preStart]);
  var inIndex = inorder.indexOf(root.val);
  root.left = traveral(preStart + 1,inStart,inIndex - 1,preorder,inorder);
  root.right = traveral(preStart + inIndex - inStart + 1,inIndex + 1,inEnd,preorder,inorder);
  return root;
}

var a = [1,2,3];
var b = [2,3,1];
console.log(buildTree(a,b));