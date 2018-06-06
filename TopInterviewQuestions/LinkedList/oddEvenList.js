// Odd Even Linked List
// 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

// 请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes为节点总数。

// 示例:

// 输入: 1->2->3->4->5->NULL 
// 输出: 1->3->5->2->4->NULL
// 说明:

// 应当保持奇数节点和偶数节点的相对顺序。
// 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if(head !== null) {
      var odd = head;
      var even = head.next;
      var evenHead = even;
  }else {return head;}
  while(even !== null && even.next !== null) {
      odd.next = odd.next.next;
      odd = odd.next;
      even.next = even.next.next;       
      even = even.next; 
  }
  odd.next = evenHead;
  return head;
};