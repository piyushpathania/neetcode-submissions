class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = position.map((p,i)=>[p,speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);
        pairs=pairs.map((p)=>(target-p[0])/p[1]);
        for (let i=1;i<pairs.length;i++){
            if(pairs[i]<=pairs[i-1]) pairs[i]=pairs[i-1];
        }
        return new Set(pairs).size
    }
}
