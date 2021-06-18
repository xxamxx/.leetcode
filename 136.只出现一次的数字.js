/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  stock = []
  for (const num of nums) {
    if ((index = stock.indexOf(num)) === -1){
      stock.push(num)
    } else {
      stock.splice(index, 1)
    }
  }
  return stock[0]
};
// @lc code=end

