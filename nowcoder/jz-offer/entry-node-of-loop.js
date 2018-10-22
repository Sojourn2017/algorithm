// 链表中环的入口结点

// 题目描述
// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * @param {ListNode} pHead
 * @return {ListNode|null}
 */
function EntryNodeOfLoop(pHead) {
  if (pHead === null || pHead.next === null || pHead.next.next === null)
    return null;
  let [slow, fast] = [pHead, pHead];
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== null) {
      fast = fast.next;
    } else {
      return null;
    }
    if (fast === slow) break;
  }
  fast = pHead;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
}
