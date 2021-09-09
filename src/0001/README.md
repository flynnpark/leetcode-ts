## 0001. [Two Sum](https://leetcode.com/problems/two-sum)

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.
You may assume that each input would have **_exactly_ one solution**, and you may not use thesameelement twice.
You can return the answer in any order.

#### **Example 1:**

<pre><code><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Output:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]</code></pre>

#### **Constraints:**

- 2 <= nums.length <= 10<sup>3</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- -10<sup>9</sup> <= target <= 10<sup>9</sup>
- **Only one valid answer exists.**

## 해결 방법

`Map` 자료구조를 사용하여 주어진 `target - num` 결과가 있는지 조회하고, 없으면 `num`의 위치를 `hash`에 넣는다. 만약 순회하다가 `target - num` 결과가 있을 경우엔 `result`를 만들어 반환한다.
