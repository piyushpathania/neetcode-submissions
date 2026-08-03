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
        let values = new Set();
    let curr= head;
    while(curr!=null){
        if(values.has(curr)) return true;

        values.add(curr);
        curr=curr.next;
    }
     return false;  
    }
}

