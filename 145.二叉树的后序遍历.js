/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 先序反排😂
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return []
  const result = []
  const stack = [root]

  while (stack.length) {
    root = stack.pop()
    
    result.push(root.val)

    if (root.left) stack.push(root.left)
    if (root.right) stack.push(root.right)
  }

  return result.reverse()
};
// @lc code=end

