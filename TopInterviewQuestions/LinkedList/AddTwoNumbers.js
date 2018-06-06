// 两数相加
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
  var a1 = l1;
  var a2 = l2;
  var carry = 0;
  var result = new ListNode(0);
  var tmp = result;
  while(a1 || a2){
    var v1 = 0;
    var v2 = 0;
    if(a1){
      v1 = a1.val;
      a1 = a1.next;
    }
    if(a2){
      v2 = a2.val;
      a2 = a2.next;
    }
    var sum = v1 + v2 + carry;
    tmp.next = new ListNode(sum % 10);
    carry = sum < 10 ? 0 : 1;
    tmp = tmp.next;
  }
  if(carry){
    tmp.next = new ListNode(1);
  } 
  return result.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
// a.next = new ListNode(4);
// a.next.next = new ListNode(3);

var b = new ListNode(9);
b.next = new ListNode(9);
// b.next.next = new ListNode(4);


console.log(addTwoNumbers(a,b));
