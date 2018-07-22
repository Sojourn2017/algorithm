// 合并两个排序的链表

// 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，
// 当然我们需要合成后的链表满足单调不减规则。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

/**
 * @param {ListNode} pHead1
 * @param {ListNode} pHead2
 * @return {ListNode}
 */
function Merge(pHead1, pHead2)
{
    // write code here
    let node = new ListNode(-1);
    let p = node;
    while(pHead1 != null && pHead2 != null){
        if(pHead1.val <= pHead2.val){
            p.next = pHead1;
            pHead1 = pHead1.next;
        }else{
            p.next = pHead2;
            pHead2 = pHead2.next;
        }
        p = p.next
    }
    if (pHead1 != null) {
        p.next = pHead1;
    };
    if (pHead2 != null) {
        p.next = pHead2
    }
    return node.next;
}