# 0135. [Candy](https://leetcode.com/problems/candy/?envType=study-plan-v2&envId=top-interview-150)

There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return _the minimum number of candies you need to have to distribute the candies to the children_.

### **Example 1:**

<pre><code>
<strong>Input:</strong> ratings = [1,0,2]
<strong>Output:</strong> 5
<strong>Explanation:</strong> You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
</code></pre>

### **Example 2:**

<pre><code>
<strong>Input:</strong> ratings = [1,2,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
</code></pre>

### **Constraints:**

- `n == ratings.length`
- <code>1 <= n <= 2 \* 10<sup>4</sup></code>
- <code>0 <= ratings[i] <= 2 \* 10<sup>4</sup></code>
