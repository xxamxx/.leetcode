/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 相等  都入栈，l1下探
// 大于  l2小，l2入栈，l1下探
// 小于  
function merge(nl, l1, l2) {
    let originNext1 = l1.next
    let originNext2 = l2.next

    if (l1.val == l2.val) {
        l1.next = l2
        nl.next = l2
    } else if (l1.val > l2.val) {
        nl.next = l2
    } else {
        nl.next = l1
    }

    if (originNext1)

    return merge(nl, originNext1, originNext2);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    let nl = nil;
    let originNext1 = l1.next
    let originNext2 = l2.next

    while (condition) {
        
    }
    
    return nl;
};
// @lc code=end

