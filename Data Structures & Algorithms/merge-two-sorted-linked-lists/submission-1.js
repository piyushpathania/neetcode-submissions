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
        let node1=list1;
        let node2=list2;
        let head= new ListNode();
        let tail=head;
        while(node1!=null && node2!=null){
            if(node1.val<node2.val){
                let newtail= node1;
                node1=node1.next;
                tail.next=newtail;
                tail=tail.next;
            }
            else{
                let newtail=node2;
                node2=node2.next;
                tail.next=newtail;
                tail=tail.next;                
            }
        }
        if(node1!=null){
            tail.next=node1;
        }
        if(node2!=null){
            tail.next=node2;
        }
        return head.next;
    }
}
