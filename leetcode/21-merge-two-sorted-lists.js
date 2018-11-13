// No.21 合并两个有序链表

// 将两个有序链表合并为一个新的有序链表并返回。
// 新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

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
var mergeTwoLists = function(l1, l2) {
    let ret = new ListNode(-1);
    let p = ret;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        p.next = new ListNode(l1.val);
        l1 = l1.next;
      } else {
        p.next = new ListNode(l2.val);
        l2 = l2.next;
      }
      p = p.next;
    }
    l1 && (p.next = l1);
    l2 && (p.next = l2);
    return ret.next;
};