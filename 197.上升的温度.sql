--
-- @lc app=leetcode.cn id=197 lang=mysql
--
-- [197] 上升的温度
--

-- @lc code=start
# Write your MySQL query statement below
SELECT w1.Id AS Id FROM Weather AS w1 
LEFT OUT JOIN Weather AS w2 ON w2.RecordDate < w1.RecordDate
WHERE w1.Temperature > w2.Temperature;
-- @lc code=end

