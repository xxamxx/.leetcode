/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if (m == 1 && n == 1) return +(obstacleGrid[0][0] == 0); // 排除(0,0)
    if (obstacleGrid[m-1][n-1] == 1) return 0; // 排除(i,j)

    // 填充出二维数组
    var dp = obstacleGrid.map((e) => e.map(() => 0));
    for (var i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1;
    for (var j = 0; j < n && obstacleGrid[0][j] == 0; j++) dp[0][j] = 1;
    
    // 两层循环
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 0)
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m-1][n-1];
};
// @lc code=end
