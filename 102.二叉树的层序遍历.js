/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * optimize memory
 * add brake variable
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  const result = []
  const queue = [root]
  let brake = root

  while(queue.length) {
    root = queue.shift()

    if (root == brake) {
      brake = null
      result.push([])
    }
    
    result[result.length - 1].push(root.val)
    
    if (root.left) {
      if (!brake) brake = root.left
      queue.push(root.left)
    }
    if (root.right) {
      if (!brake) brake = root.right
      queue.push(root.right)
    }
  }

  return result
};
// @lc code=end

