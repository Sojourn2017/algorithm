// No.24 两两交换链表中的节点

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 示例:

// 给定 1->2->3->4, 你应该返回 2->1->4->3.
// 说明:

// 你的算法只能使用常数的额外空间。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head == null || head.next == null) return head;
    let node = head.next;
    head.next = swapPairs(head.next.next);
    node.next = head;
    return node;
};

let nodes = [2, 1, 4, 3];
function initList(nodes) {
  let head = new ListNode();
  let p = head;
  for (let i = 0, len = nodes.length; i < len; i++) {
    p.next = new ListNode(nodes[i]);
    p = p.next;
  }
  return head.next;
}

let head = initList(nodes);
console.log(swapPairs(head))