/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * Morris 遍历算法
 * 核心是把最大的左子叶绑定到父节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return []
  const res = []
  let predecessor = null

  while(root) {
    // 找左边最小的值
    if (!root.left){
      res.push(root.val)
      root = root.right
      continue
    }

    predecessor = root.left
    // 找到左边最大值
    while(predecessor.right && predecessor.right !== root){
      predecessor = predecessor.right
    }

    // 第一次遍历左边是没有值的，绑定到右边
    if (!predecessor.right){
      predecessor.right = root
      root = root.left
    }
    // 第二次遍历跳到右边，并解开绑定
    else {
      res.push(root.val)
      predecessor.right = null
      root = root.right
    }
  }

  return res
};
// @lc code=end

