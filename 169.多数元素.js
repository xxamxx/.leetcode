/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const limit = Math.ceil(nums.length / 2)
  const hash = {}
  for (const num of nums) {
    const key = num.toString()
    hash[key] = hash[key] || 0
    hash[key]++
    if (hash[key] >= limit) return num
  }
};
// @lc code=end

