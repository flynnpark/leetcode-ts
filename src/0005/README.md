## 0005. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

Given a string `s`, return _the longest palindromic substring_ in `s`.

#### **Example 1:**

<pre><code><strong>Input:</strong> s = "babad"
<strong>Output:</strong> "bab"
<strong>Note:</strong> "aba" is also a valid answer.</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> s = "cbbd"
<strong>Output:</strong> "bb"</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> s = "a"
<strong>Output:</strong> "a"</code></pre>

#### **Example 4:**

<pre><code><strong>Input:</strong> s = "ac"
<strong>Output:</strong> "a"</code></pre>

#### **Constraints:**

- `1 <= s.length <= 1000`
- `s` consist of onlg digits and English letters.

## 해결 방법

주어진 문자열에서 가장 긴 팰린드롬 문자열을 찾는 문제이다. 처음 사용했었던 방법은 2중 반복문을 사용하여 문제를 해결해 보았다. 처음 반복문은 주어진 문자열의 첫 문자부터 끝 문자 전까지 반복하고(`i`), 두 번째 반복문은 첫 번재 반복문의 인덱스부터 문자열의 끝까지 반복하면서(`j`) `s[i]`에서 `s[j]`까지의 문자가 팰린드롬인지 확인했다.

하지만 2중 반복문이 마음에 들지 않아 약간 다른 방법을 찾아 보았다. 첫 번째 반복문은 주어진 문자열의 첫 문자부터 끝 문자 전까지 반복하는 겉 같으나 특정 문자열을 포함하는 팰린드롬을 차즌ㄴ `getPalindrome` 함수를 사용하여 `i`번째 문자와 `i`, `i + 1` 두 문자를 포함하는 팰린드롬을 각각 찾는다. 그리고 둘 중 긴 팰린드롬 문자열이 기존에 가장 길었던 팰린드롬인 `longest`와 비교해서 더 긴 팰린드롬을 `longest`에 대치시킨다. 이를 문자열이 끝날 때까지 반복하면 가장 긴 팰린드롬 문자열을 찾을 수 있다.
