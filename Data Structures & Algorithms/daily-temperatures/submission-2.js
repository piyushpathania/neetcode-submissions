class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temp) {
    const stack = [];
    const arr = new Array(temp.length).fill(0);

    for (let i = 0; i < temp.length; i++) {
        while (stack.length && temp[i] > temp[stack[stack.length - 1]]) {
            const index = stack.pop();
            arr[index] = i - index;
        }
        stack.push(i);
    }
    return arr;
}
}
