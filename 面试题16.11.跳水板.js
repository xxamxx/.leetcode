/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function (shorter, longer, k) {
    if (k == 0 || (shorter == 0 && longer == 0)) return [];
    if (shorter == longer) return [shorter * k];
    var head = [];
    var last = [];
    for (let i = 0; i < Math.ceil(k/2); i++) {
        head.push((shorter * (k - i)) + (longer * i))
        last.push((longer * (k - i)) + (shorter * i))
    }
    return head.concat(last.sort());
};
1
2
3

4= (shorter * 3) + (longer * 0)
5= (shorter * 2) + (longer * 1)
6= (shorter * 1) + (longer * 2)
7= (shorter * 0) + (longer * 3)