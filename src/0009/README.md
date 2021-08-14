## 0009. [Palindrom number](https://leetcode.com/problems/palindrome-number/)

Given an integer `x`, return `true` if `x` is palindrome integer.

An integer is a **palindrome** when it reads the same backward as forward. For example, `121` is palindrome while `123` is not.

#### **Example 1:**

<pre><code><strong>Input:</strong> x = 121
<strong>Output:</strong> true</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> -121
<strong>Output:</strong> false
<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> x = 10
<strong>Output:</strong> false
<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.</code></pre>

#### **Example 4:**

<pre><code><strong>Input:</strong> x = -101
<strong>Output:</strong> false</code></pre>

#### **Constraints:**

- `-2<sup>31</sup> <= x <= 2<sup>31</sup> - 1`

## 해결 방법

Python으로 해결할 때에는 문자열로 만들어서 비교를 했었어서 이번에도 같은 방법으로 해결을 하려고 했으나 생각보다 속도가 나오지 않아서 다른 방법을 사용해보기로 했다. 먼저 숫자가 음수일 경우엔 무조건 팰린드롬이 될 수 없으므로 `false`를 리턴해버렸고, 양수일 경우엔 숫자를 거꾸로 뒤집었다. 뒤집는 방법은 먼저 주어진 `x`를 10으로 나눈 나머지를 거꾸로 된 숫자인 `reverse`에 더하고, `x`는 10으로 나눈다. 다음 숫자를 진행할 경우엔 `reverse`를 10으로 먼저 곱해주고, 이전과 같은 방법으로 계속 진행해 주면 `number` 타입으로 숫자가 뒤집어진다. 이후 뒤집어진 숫자와 주어진 숫자가 같은지 비교를 하면 된다.

| 해결 방법                       | 속도  |
| ------------------------------- | ----- |
| 숫자를 뒤집어서 비교하는 방법   | 220ms |
| 문자열로 만들어서 비교하는 방법 | 262ms |

그러나 이 해결 방법은 Python으로 해결한 문자열 비교보다 그렇게 빠르지도 않았고, 주어진 숫자를 그대로 뒤집었을 때 혹여나 발생할 수 있는 오버플로우를 대처하지 못한다. 그래서 그냥 문자열로 비교해버리는 게 더 좋을 듯 하다.
