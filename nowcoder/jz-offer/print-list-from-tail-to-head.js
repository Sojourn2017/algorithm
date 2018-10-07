// 从尾到头打印链表

// 题目描述
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * @param {ListNode} head
 * @return {Array}
 */
function printListFromTailToHead(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  return res.reverse();
}
