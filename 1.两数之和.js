/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let index1 = 0; index1 < nums.length; index1++) {
        const leftVal = nums[index1]

        for (let index2 = (1 + index1); index2 < nums.length; index2++) {
            const rightVal = nums[index2]    

            if (leftVal + rightVal === target) {
                return [index1, index2]
            }
        }
    }

    return []
};
// @lc code=end

