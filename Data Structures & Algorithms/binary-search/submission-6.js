class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i=0,j=nums.length;
        let n;

        while(i<j){
             n = Math.floor((i+j)/2);
            if(nums[n]==target){
                return n;
            }
            else if(nums[n]>target){
                j=n;
            }
            else{
                i=n+1;
            }
        }
        return -1;
    }
}
