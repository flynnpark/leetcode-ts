# 0167. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan&id=algorithm-i)

Given a **1-indexed** array of integers `numbers` that is already **_sorted in non-decreasing order_**, find two numbers such that they add up to a specific `target` number. Let these two numbers be <code>numbers[index<sub>1</sub>]</code> and <code>numbers[index<sub>2<sub>]</code> where `1 <= index1 < index2 <= numbers.length`.

Return _the indices of the two numbers,_ <code>index<sub>1</sub></code> _and_ <code>index<sub>2</sub></code>_, added by one as an integer array_ <code>[index<sub>1</sub>, index<sub>2</sub>]</code> _of length 2_.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

Your solution must use only constant extra space.

### **Example 1:**

<pre>
<strong>Input:</strong> numbers = [2,7,11,15], target = 9
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
</pre>

### **Example 2:**

<pre>
<strong>Input:</strong> numbers = [2,3,4], target = 6
<strong>Output:</strong> [1,3]
<strong>Explanation:</strong> The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
</pre>

### **Example 3:**

<pre>
<strong>Input:</strong> numbers = [-1,0], target = -1
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
</pre>

### **Constraints:**

- <code>2 <= numbers.length <= 3 \* 10<sup>4</sup></code>
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in **non-decreasing order**.
- `-1000 <= target <= 1000`
- The tests are generated such that there is **exactly one solution**.
