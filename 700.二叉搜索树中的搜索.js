/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  let current = root
  let node = null
  const stack = []

  while(!!stack.length || !!current){
    node = (current && current.val < val) ? current.right : current
    
    while(node){
      if (node.val == val) return node
      stack.push(node)
      node = node.left 
    }

    node = stack.pop()
    if (!node) break

    current = node.right
  }

  return null
};
// @lc code=end