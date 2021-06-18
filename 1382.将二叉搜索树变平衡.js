/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    if (!root.left && !root.right) return root;
    var array = bstToArray(root);
    return balanceArrayToBST(array);
};

function bstToArray(bst) {
    if (!bst) return [];
    return bstToArray(bst.left).concat(bst.val).concat(bstToArray(bst.right));
}

// 将数组平衡成BST
function balanceArrayToBST(nums) {
    if (nums.length == 0) return null;
    if (nums.length == 1) return new TreeNode(nums[0]);
    var mid = parseInt(nums.length / 2);
    if (mid == 0) return null;

    var node = new TreeNode(nums[mid]);
    node.left = balanceArrayToBST(nums.slice(0, mid));
    node.right = balanceArrayToBST(nums.slice(mid + 1, nums.length));
    return node;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
};
// @lc code=end

