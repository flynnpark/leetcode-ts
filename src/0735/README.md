# 0735. [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75)

We are given an array `asteroids` of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

### **Example 1:**

<pre>
<strong>Input:</strong> asteroids = [5,10,-5]
<strong>Output:</strong> [5,10]
<strong>Explanation:</strpmg> The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
</pre>

### **Example 2:**

<pre>
<strong>Input:</strong> asteroids = [8,-8]
<strong>Output:</strong> []
<strong>Explanation:</strpmg> The 8 and -8 collide exploding each other.
</pre>

### **Example 3:**

<pre>
<strong>Input:</strong> asteroids = [10,2,-5]
<strong>Output:</strong> [10]
<strong>Explanation:</strpmg> The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
</pre>

### **Constraints:**

- <code>2 <= asteroids.length <= 10<sup>4</sup></code>
- `-1000 <= asteroids[i] <= 1000`
- `asteroids[i] != 0`
