/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val)
  let node = root

  while(node){
    if (node.val < val){
      if (!node.right) {
        node.right = new TreeNode(val)
        break
      }
      
      node = node.right
    }
    else {
      if (!node.left) {
        node.left = new TreeNode(val)
        break
      }
      
      node = node.left
    }  
  }

  return root
};
// @lc code=end