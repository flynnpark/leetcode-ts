## 0020. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

#### **Example 1:**

<pre><code><strong>Input:</strong> s = "()"
<strong>Output:</strong> true</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> "()[]{}"
<strong>Output:</strong> true</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> s = "(]"
<strong>Output:</strong> false</code></pre>

#### **Example 4:**

<pre><code><strong>Input:</strong> s = "([)]"
<strong>Output:</strong> false</code></pre>

#### **Example 5:**

<pre><code><strong>Input:</strong> s = "{[]}"
<strong>Output:</strong> true</code></pre>

#### **Constraints:**

- `1 <= s.length <= 10<sup>4</sup>`
- `s` consists of parentheses only `'()[]{}'`.

## 해결 방법

주어진 문자열의 괄호가 올바른 쌍을 이루고 있는지를 확인하는 문제이다. 나는 스택을 사용해서 문제를 해결하기로 했는데, 왼쪽 괄호일 경우엔 스택에 넣고, 오른쪽 괄호일 경우엔 스택의 마지막 문자가 해당하는 괄호의 짝이 맞는지 확인하는 형식으로 진행을 했다. 만약 짝이 아닐 경우엔 유효하지 않으므로 `false`를 반환하고, 모든 문자열을 확인하고 난 뒤에는 스택에 문자가 남아있는지 여부를 통해 `true`나 `false`를 반환한다.
