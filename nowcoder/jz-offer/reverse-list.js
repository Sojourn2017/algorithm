// 反转链表

// 题目描述
// 输入一个链表，反转链表后，输出新链表的表头。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ReverseList(pHead) {
  let pre = null;
  let next;
  while (pHead) {
    next = pHead.next;
    pHead.next = pre;
    pre = pHead;
    pHead = next;
  }
  return pre;
}
