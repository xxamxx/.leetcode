/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * 
 * @param {string[]} elements
 * @return {string}
 */
const longestCommonPrefix = function(elements) {
    let minLenEle = elements[0];
    
    if (!minLenEle) { return ""; }
    
    for (const ele of elements) {
        if (ele.length < minLenEle.length){ minLenEle = ele; }
    }

    for (let index = minLenEle.length; index >= 1; index--) {
        const prefix = minLenEle.substring(0, index);
        let flag = true;

        for (const ele of elements) {
            if (!(flag = ele.startsWith(prefix))) { break; }
        }

        if (flag) { return prefix; }
    }

    return "";
};
// @lc code=end`