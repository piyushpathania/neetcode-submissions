class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    nums=nums.sort((a,b)=>a-b);
    let ans= [];
    for(let i=0;i<nums.length;i++){
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let a=i+1;
        let b=nums.length-1;
        while(a<b){
            let sum=nums[i]+nums[a]+nums[b];
            if(sum<0) a++;
            else if (sum>0) b--;
            else {
                ans.push([nums[i],nums[a],nums[b]]);
                a++;
                b--;
                while(a<b && nums[a] === nums[a-1]) a++;
                while (a < b && nums[b] === nums[b+1]) b--;
            }
        }
    }
    return ans;
    }
}
