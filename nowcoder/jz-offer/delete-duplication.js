// 删除链表中重复的结点

// 题目描述
// 在一个排序的链表中，存在重复的结点，
// 请删除该链表中重复的结点，重复的结点不保留，
// 返回链表头指针。
// 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * @param {ListNode} pHead
 * @return {ListNode}
 */
function deleteDuplication(pHead) {
  const list = new ListNode(-1);
  list.next = pHead;
  let p = pHead;
  let prev = list;
  while (p !== null && p.next !== null) {
    if (p.val === p.next.val) {
      let val = p.val;
      while (p !== null && p.val === val) {
        p = p.next;
      }
      prev.next = p;
    } else {
      prev = p;
      p = p.next;
    }
  }
  return list.next;
}

const list = new ListNode(-1);
let p = list;
let arr = [1, 2, 3, 3, 4, 4, 5];
arr.forEach(val => {
  p.next = new ListNode(val);
  p = p.next;
});

console.log(deleteDuplication(list.next));
