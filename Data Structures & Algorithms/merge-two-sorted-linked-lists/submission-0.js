/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let cur1=list1;
        let cur2=list2;
    let head = new ListNode(null);
    let tail=head;
    while(cur1 !=null && cur2!=null){
        if(cur1.val<cur2.val){
            let newtail=cur1;
            cur1=cur1.next;
            tail.next=newtail;
            tail=tail.next;
        }
        else {
            let newtail=cur2;
            cur2=cur2.next;
            tail.next=newtail;
            tail=tail.next;
        }
    }
    if(cur1 !=null){
        tail.next=cur1;
    }
    if(cur2!=null){
        tail.next=cur2;
    }
    return head.next;
    }
}
