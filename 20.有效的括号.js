/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(string) {
    if (string.length == 1) return false;

    const map = { '{': '}', '[': ']', '(': ')' }
    const lefts = Object.keys(map);
    const array, stock = string.split(''), [];
    
    for (let index = 0; index < array.length; index++) {
        const ele = array[index];

        if (lefts.includes(ele)) {
            stock.push(ele);    // 左括号入栈
            continue;
        };

        // 不是左括号，且不对应右括号
        const lastLeft = stock[stock.length - 1]
        const right = map[lastLeft]

        if (right != ele) return false;
        
        stock.pop(); // 左括号出栈
    }

    return stock.length == 0;
};
// @lc code=end

