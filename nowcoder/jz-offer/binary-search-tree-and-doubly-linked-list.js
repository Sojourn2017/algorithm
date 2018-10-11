// 二叉搜索树与双向链表

// 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
// 要求不能创建任何新的结点，只能调整树中结点指针的指向。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * @param {TreeNode []} pRootOfTree
 * @return {LinkedList} pRootOfTree
 */

function Convert(pRootOfTree) {
  if (pRootOfTree == null) return null;
  let [stack, p, pre, isFirst] = [[], pRootOfTree, null, true];
  while (p !== null || stack.length !== 0) {
    while (p !== null) {
      stack.push(p);
      p = p.left;
    }
    p = stack.pop();
    if (isFirst) {
      pRootOfTree = p;
      pre = pRootOfTree;
      isFirst = false;
    } else {
      pre.right = p;
      p.left = pre;
      pre = p;
    }
    p = p.right;
  }
  return pRootOfTree;
}
