/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */
// @lc code=start
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

Object.defineProperty(TreeNode.prototype, 'cnt', {
  get(){
    return (this.left ? this.left.cnt : 0) + (this.right ? this.right.cnt : 0) + 1
  }
})

/**
* @param {number} k
* @param {number[]} nums
*/
var KthLargest = function(k, nums) {
  this.k = k
  this.root = undefined
  
  nums.forEach(num => this._insert(num))
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this._insert(val)
  return this._get(this.k)
}

KthLargest.prototype._insert = function(val) {
  let root = this.root
  if (!root) {
    this.root = new TreeNode(val)
    return
  }
  
  while (root) {
    if (val < root.val) {
      if (!root.left){
        root.left = new TreeNode(val)
        break
      }
      
      root = root.left
    }
    else if (val == root.val) {
      const node = new TreeNode(val)
      node.right = root.right
      root.right = node
      break
    }
    else {
      if (!root.right){
        root.right = new TreeNode(val)
        break
      }
      
      root = root.right
    }
  }
}

KthLargest.prototype._get = function(k) {
  let root = this.root
  if (!root) return null

  while (k > 0) {
    const right = (root.right ? root.right.cnt : 0)

    // less then and equals right, into right
    if (k <= right) {
      root = root.right
    }
    // equals current count
    else if (k == right + 1) {
      k -= right + 1
    }
    // if (k > right + 1) {
    // other, greater then current count
    else {
      k -= right + 1
      root = root.left
    }
  }

  return root.val
}

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
// @lc code=end