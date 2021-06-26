/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */
// @lc code=start

/**
* @param {number} k
* @param {number[]} nums
*/
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  
  nums.forEach(num => this.add(num));
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.heap.offer(val);

  if (this.heap.size() > this.k){
    this.heap.poll();
  }

  return this.heap.peek();
}

class MinHeap {
  constructor(){
    this.data = [];
    this.gt = (a, b) => a > b;
    this.heapify();
  }

  heapify() {
    if (this.size() < 2) return;

    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }
  
  poll() {
    if (this.size() === 0) return null;

    const result = this.data[0];
    const last = this.data.pop();

    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  offer(val) {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }

  bubbleUp(idx) {
    while (idx > 0) {
      const parentIdx = (idx - 1) >> 1
      if (this.gt(this.data[parentIdx], this.data[idx])) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      }
      else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const last = this.size() - 1;

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let idx = index;
      
      if (left <= last && this.gt(this.data[idx], this.data[left])) {
        idx = left;
      }

      if (right <= last && this.gt(this.data[idx], this.data[right])) {
        idx = right;
      }

      if (idx !== index){
        this.swap(index, idx);
        index = idx;
      }
      else {
        break;
      }
    }
  }

  swap(idx1, idx2){
    [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]];
  }

  size() {
    return this.data.length;
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }
}

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
// @lc code=end