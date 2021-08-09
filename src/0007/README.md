## 0007. [Reverse Integer](https://leetcode.com/problems/reverse-integer)

Given a signed 32-bit integer `x`, return `x` _with its digits reversed_. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-2<sup>31</sup>, 2<sup>31</sup> - 1]`, then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

#### **Example 1:**

<pre><code><strong>Input:</strong> x = 123
<strong>Output:</strong> 321</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> x = -123
<strong>Output:</strong> -321</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> x = 120
<strong>Output:</strong> 21</code></pre>

#### **Example 4:**

<pre><code><strong>Input:</strong> x = 0
<strong>Output:</strong> 0</code></pre>

#### **Constraints:**

- -2<sup>31</sup> <= x <= 2<sup>31</sup> - 1

## 해결 방법

별로 설명할 게 없다. 음수일 경우만 따로 처리해주는 걸 제외하면 `number` 타입을 `string` 타입으로 만들고, `split`을 사용하여 배열로 만든 후, 만들어진 배열을 `reverse`를 사용하여 뒤집어서 다시 `number`로 만드는 과정을 거치면 된다.
