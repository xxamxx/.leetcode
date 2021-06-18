/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 排除 (i, j) || (0, 0)
    // 排除 ( (i-1, j) && (i-1, j) )|| ((0+1, 0) && (0, 0+1))
    for (let i = 0; i < m.length; i++) {
        const element = m[i];
        
    }
};
// @lc code=end

