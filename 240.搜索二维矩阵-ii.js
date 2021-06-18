/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 * solution: binary search
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length) return false
  var length = Math.min(matrix.length, matrix[0].length)
  for (let i = 0; i < length; i++) {
    const rowFound = binarySearch(matrix, target, i, false)
    const columnFound = binarySearch(matrix, target, i, true)
    if (rowFound || columnFound) return true
  }

  return false
};


function binarySearch(matrix, target, start, vertical){
  let index = start
  let length = vertical ? matrix[0].length - 1 : matrix.length - 1

  while(length >= index){
    const mid = ~~((index + length) / 2).toFixed(0)
    console.log(`length: ${length}, index: ${index}, start: ${start}, mid: ${mid}`)
    if(vertical){
      if(matrix[start][mid] < target) index = mid + 1
      else if(matrix[start][mid] > target) length = mid - 1
      else return true
    } else {
      console.log(matrix[mid][start], `小于：${matrix[mid][start] < target}, 大于：${matrix[mid][start] > target}`);
      if(matrix[mid][start] < target) index = mid + 1 // 纵向 小于 target
      else if(matrix[mid][start] > target) length = mid - 1 // 纵向 大于 target
      else return true
    }
  }

  return false
}
// @lc code=end
