class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles=piles.sort((a,b)=>a-b);
        let l=1,r=piles[piles.length-1];
        while(l<=r){
            let mid= Math.floor((l+r)/2);
            let currate=this.rate(piles,mid);
            if(currate<=h){
                r=mid-1;
            }
            else{
                l=mid+1;
            }
        }
        return l;
    }

     rate(piles,k){
        let currate=0;
        for(let i=0;i<piles.length;i++){
            currate+=Math.ceil(piles[i]/k);
        }
        return currate;
    }
}
