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
  if (root == null) return 0;
  const queue = [root];
  let depth = 0;
    let head=0;
  while (head < queue.length) {
    let size = queue.length-head;
      depth++;
    for (let i = 0; i < size; i++) {
      const node = queue[head];
      head=head+1;
      if(node.left){ queue.push(node.left);
      }
      if(node.right){
         queue.push(node.right);
         }
    }
  }
  return depth;
}
}
