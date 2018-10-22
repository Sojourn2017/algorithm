// 序列化二叉树

// 题目描述
// 请实现两个函数，分别用来序列化和反序列化二叉树

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

/**
 * @param {TreeNode} pRoot
 * @return {String}
 */
let arr = [];
let treeToArr = (pRoot, arr) => {
  if (!pRoot) {
    arr.push("#");
    return;
  }
  arr.push(pRoot.val);
  treeToArr(pRoot.left, arr);
  treeToArr(pRoot.right, arr);
};

function Serialize(pRoot) {
  arr = [];
  treeToArr(pRoot, arr);
  return arr.join("");
}

/**
 * @param {String} s
 * @return {TreeNode}
 */
let arrToTree = (arr, node) => {
  if (!arr.length) {
    return null;
  }
  let val = arr.shift();
  if (val != "#") {
    node = new TreeNode(val);
    node.left = arrToTree(arr, node.left);
    node.right = arrToTree(arr, node.right);
  }
  return node;
};
function Deserialize(s) {
  if (!arr.length) {
    return null;
  }
  let node = null;
  node = arrToTree(arr, node);
  return node;
}

const tree = new TreeNode(8);

tree.left = new TreeNode(6);
tree.left.left = new TreeNode(5);
tree.left.right = new TreeNode(7);

tree.right = new TreeNode(10);
tree.right.left = new TreeNode(9);
tree.right.right = new TreeNode(11);

console.log(Serialize(tree));
console.log(Deserialize(""));
