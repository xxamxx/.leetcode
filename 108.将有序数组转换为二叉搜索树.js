/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (nums.length == 0) return null;
    if (nums.length == 1) return new TreeNode(nums[0]);
    var mid = parseInt(nums.length / 2);
    if (mid == 0) return null;
    
    var node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
    return node;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
// @lc code=end

