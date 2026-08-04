/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root==null) return 0;
        let stack =[[root,0]];
        let tempdepth=0;
        let depth=0;
        while(stack.length){
            let rstack = stack.pop();
            let node=rstack[0];
            tempdepth=rstack[1]+1;
            if(node==null){
                depth=Math.max(depth,tempdepth);
                tempdepth=tempdepth-1;
                continue;
            }
            stack.push([node.left,tempdepth]);
            stack.push([node.right,tempdepth]);

        }
        return depth-1;    }
}
