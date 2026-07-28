class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
        let stack = new Array;
    stack.push(0);
    let arr = new Array(temp.length).fill(0);

    for (let i = 1; i < temp.length; i++) {
        if (temp[i] <= temp[stack[stack.length - 1]]) {
            stack.push(i);
        }
        else {
            while (temp[i] > temp[stack[stack.length - 1]]) {
                let index = stack.pop();
                arr[index] = i - index;
            }
            stack.push(i)
        }
    }
    return arr;
    }
}
