class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length==1) return false;
        const pairs = {
            ')': '(',
            ']': '[',
             '}': '{'
        };

        pairs[')']        // '('
        let stack=[];
        for(let i=0;i<s.length;i++){
            if(s[i]=='(' || s[i]=='{' || s[i]=='['){ stack.push(s[i]);}
        
        else{
            let top= stack.pop();
            if(top!==pairs[s[i]]) return false;
        }
        }
        return stack.length==0;

    }
}
