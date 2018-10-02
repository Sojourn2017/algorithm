// dom 节点查找

// 题目描述
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
// 输入描述:
// oNode1 和 oNode2 在同一文档中，且不会为相同的节点

/* 
 * @param {Dom} oNode1
 * @param {Dom} oNode2
 * @return {Boolean}
 */
function commonParentNode(oNode1, oNode2) {
  while (oNode1) {
      if (oNode1.contains(oNode2)) return oNode1;
      oNode1 = oNode1.parentNode;
  }
  return false;
}