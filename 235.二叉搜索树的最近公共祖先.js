/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * 根据二叉树，左小右大的规则
 * 最简洁写法
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const min = p.val < q.val ? p.val : q.val
  const max = p.val > q.val ? p.val : q.val

  while (root) {
    if (min > root.val) { root = root.right }
    else if (max < root.val) { root = root.left }
    else { break }
  }

  return root
};
// @lc code=end

