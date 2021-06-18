/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    x = x.toString()
    var length = x.length
    if ((length % 2) === 0) {
        var part = length / 2
        var left = x.slice(part)
        var right = x.slice(-part)
        return left === right
    }
    
    // var n = 0
    // for (let i = 0; i < x.length; i++) {
    //     const left = x[i];
        
    // }

    do {
        if (x.slice(n, n + 1) !== x.slice(-n, -n + 1)) return false
    } while (length === n++)
    
    return true
};
// @lc code=end

