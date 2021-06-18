/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    return sumListNode(l1, l2)
};

var sumListNode = function (l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry) return null;
    l1 = l1 || {}
    l2 = l2 || {}

    var sum = carry + (l1.val || 0) + (l2.val || 0);
    var nextCarry = 0;
    if (sum >= 10) {
        nextCarry = parseInt(sum / 10);
        sum = sum % 10;
    }
    

    var node = new ListNode(sum);
    node.next = sumListNode(l1.next, l2.next, nextCarry);
    return node;
}


// var sumListNode = function () {
//     var currentL1 = null; 
//     var currentL1 = null; 
//     var carry = 0;
//     while (true) {
//         if (!l1 && !l2 && !carry) break;
//         l1 = l1 || {}
//         l2 = l2 || {}

//         var sum = carry + (l1.val || 0) + (l2.val || 0);
//         var nextCarry = 0;
//         if (sum >= 10) {
//             nextCarry = parseInt(sum / 10);
//             sum = sum % 10;
//         }
        

//         var node = new ListNode(sum);
//         node.next = sumListNode(l1.next, l2.next, nextCarry);
//         return node;
//     }
// }

// @lc code=end