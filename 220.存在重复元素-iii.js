/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

class TreeSet{
  constructor(){
    this.tree = null
  }

  ceiling(val){
    if (!this.tree) {
      return null
    }
    
    let root = this.tree
    while (root) {
      if (root.val == val) return root.val

      if (root.val < val) {
        if (root.right && root.right.val > val) {
          return root.right.val
        }

        root = root.right
      }
      else {
        if (!root.left || root.left.val < val) {
          return root.val
        }

        root = root.left
      }
    }

    return null
  }

  add(val) {
    if (!this.tree) {
      this.tree = new TreeNode(val)
      return true
    }
    
    let root = this.tree
    while (root) {
      if (root.val == val) break;

      if (val < root.val) {
        if (!root.left) {
          root.left = new TreeNode(val)
          break
        }
        
        root = root.left
      }
      else {
        if (!root.right) {
          root.right = new TreeNode(val)
          break
        }
        
        root = root.right
      }
    }
    return true
  }

  remove(val) {
    if (val == null || typeof val == 'undefined' || !this.tree) {
      return true
    }
    if (val == this.tree.val) {
      this.tree = null
      return true
    }
    
    let root = this.tree
    while (root) {
      if (val < root.val) {
        if (root.left && val == root.left.val) {
          if (root.left.left) {
            let predecessor = root.left.right 
            while(predecessor && predecessor.left){ predecessor = predecessor.left }
            predecessor.left = root.left.left
          }
          root.left = root.left.right 
          break
        }
        
        root = root.left
      }
      else {
        if (root.right && val == root.right.val) {
          if (root.right.right) {
            let predecessor = root.right.left 
            while(predecessor && predecessor.right){ predecessor = predecessor.right }
            predecessor.right = root.right.right
          }
          root.right = root.right.left 
          break
        }
        
        root = root.right
      }
    }
    return true
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const set = new TreeSet()
  for (let i = 0; i < nums.length; i++) {
    const ceil = set.ceiling(nums[i] - t)
    if(ceil != null && ceil <= nums[i] + t) {
      return true
    }

    set.add(nums[i]);

    if (i >= k) {
      set.remove(nums[i - k])
    }
  }

  return false
};
// @lc code=end
