class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l=0, r=nums.length-1;
        let min=nums[0];
        while(l<=r){
            let mid=Math.floor((l+r)/2);
            min=Math.min(min,nums[mid]);
            if(nums[mid]>nums[r]){
                l=mid+1;
            }
            else {
                r=mid-1;
            }
        }
        return min;
    }
}
