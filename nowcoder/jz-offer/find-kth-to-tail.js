// 链表中倒数第k个结点

// 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * @param {ListNode} head
 * @param {Number} k
 * @return {ListNode}
 */
function FindKthToTail(head, k) {
  let pre = head;
  let cur = head;
  while (k--) {
    if (cur == null) {
      return null;
    }
    cur = cur.next;
  }
  while(cur) {
    pre = pre.next;
    cur = cur.next;
  }
  return pre;
}

function ListNode(x){
  this.val = x;
  this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let a = FindKthToTail(head, 4);

console.log(a);
