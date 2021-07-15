/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
 * level order
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  const queue = [root]
  let brake = root
  let result;

  while (queue.length) {
    root = queue.shift()

    if (root == brake) {
      brake = null
      result = []
    }

    result.push(root.val)

    if (root.left) {
      if (!brake) brake = root.left
      queue.push(root.left)
    }
    if (root.right) {
      if (!brake) brake = root.right
      queue.push(root.right)
    }
  }

  return result.reduce((a, b) => a + b, 0)
};
// @lc code=end

