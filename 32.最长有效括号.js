/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (s.length < 2) return 0;

    var dp = Array(s.length).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        const e = s[i];
        if (e == ')' && (i - dp[i - 1] - 1 >= 0) && s[i - dp[i - 1] - 1] == '(') {
            dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0) + 2;
        }
    }

    return Math.max(...dp)
};
// @lc code=end

// {
// }
// {}
// {{}}
// {{}
// {}}