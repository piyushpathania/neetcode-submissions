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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
    let slow= head;
    let fast=head;
    while(fast!=null && fast.next !=null){
        slow=slow.next;
        let fastnext=fast.next;
        fast=fastnext.next;
        if(slow===fast) return true;
    }
     return false; 
    }
}

