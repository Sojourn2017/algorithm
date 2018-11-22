// No.23 合并K个排序链表

// 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

// 示例:

// 输入:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length == 0) {
    return null
  };
  let mergeList = (l1, l2) => {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let l = new ListNode(-1);
    let p = l;
    while (l1 && l2) {
      if (l1.val > l2.val) {
        p.next = new ListNode(l2.val);
        p = p.next;
        l2 = l2.next;
      } else {
        p.next = new ListNode(l1.val);
        p = p.next;
        l1 = l1.next;
      }
    }
    if (l1) p.next = l1;
    if (l2) p.next = l2;
    return l.next;
  }
  while (lists.length > 1) {
    let arr = [];
    let len = lists.length;
    for (let i = 1; i < len; i+=2) {
      arr.push(mergeList(lists[i - 1], lists[i]));
    }
    if (len % 2) arr.push(lists[len - 1]);
    lists = arr;
  }
  return lists[0];
};