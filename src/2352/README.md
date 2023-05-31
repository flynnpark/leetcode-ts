# 2352. [Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75)

Given a **0-indexed** `n x n` integer matrix `grid`, _return the number of pairs_ <code>(r</sub>i</sub>, c<sub>j</sub>)</code> _such that row_ <code>r<sub>i</sub></code> _and column_ <code>c<sub>j</sub></code> _are equal._

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

### **Example 1:**

![](ex1.jpg)

<pre>
<strong>Input:</strong> grid = [[3,2,1],[1,7,6],[2,7,7]]
<strong>Output:</strong> 1
<strong>Explanation:</strong> There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
</pre>

### **Example 2:**

![](ex2.jpg)

<pre>
<strong>Input:</strong> grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
<strong>Output:</strong> 3
<strong>Explanation:</strong> There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
</pre>

### **Constraints:**

- `n == grid.length == grid[i].length`
- `1 <= n <= 200`
- <code>1 <= grid[i][j] <= 10<sup>5</sup></code>
