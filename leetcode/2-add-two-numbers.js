// No.2 两数相加

// 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

// 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let res = new ListNode(-1);
  let node = res;
  let carry = 0;
  while (l1 || l2 || carry) {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(val / 10); 
    node.next = new ListNode((val % 10));
    node = node.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return res.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let a = new ListNode(1);

let b = new ListNode(9);
b.next = new ListNode(9);

console.log(addTwoNumbers(a, b));
