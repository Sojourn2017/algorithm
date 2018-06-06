// 编写一个程序，找到两个单链表相交的起始节点。

// 例如，下面的两个链表：

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗            
// B:     b1 → b2 → b3
// 在节点 c1 开始相交。

// 注意：

// 如果两个链表没有交点，返回 null.
// 在返回结果后，两个链表仍须保持原有的结构。
// 可假定整个链表结构中没有循环。
// 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA == null && headB == null) {
      return null;
  }
  let a = headA;
  let b = headB;
  while(a != b) {
      a = a == null ? headB : a.next;
      b = b == null ? headA : b.next;
  }
  return a;
};

let C = new ListNode(0);
C.next = new ListNode(1);
C.next.next = new ListNode(2);

let B = new ListNode(-2);
B.next = new ListNode(-1);
B.next.next = C;

let A = new ListNode(-1);
A.next = C;

let D = C;
// console.log(D);
console.log(getIntersectionNode(A,B));

