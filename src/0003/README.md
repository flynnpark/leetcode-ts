## 0003. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

Given a string `s`, find the length of the **longest substring** without repeating characters.

#### **Example 1:**

<pre><code><strong>Input:</strong> s = "abcabcbb"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "abc", with the length of 3.</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> s = "bbbbb"
<strong>Output:</strong> 1</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> s = "pwwkew"
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.</code></pre>

#### **Example 4:**

<pre><code><strong>Input:</strong> s = ""
<strong>Output:</strong> 0</code></pre>

#### **Constraints:**

- `0 <= s.length <= 5 * 10<sup>4</sup>`
- `s` consists of English letters, digits, symbols and spaces.

## 해결 방법

주어진 문자열 `s`에서 제일 긴 서로 다른 문자를 가지는 문자열의 길이를 구하는 문제이다. 먼저 각 문자의 인덱스를 담을 `map`을 `Map` 자료구조를 사용하도록 선언한다. 그리고 제일 긴 문자열의 길이를 담을 `max`와 서로 다른 문자를 가지는 문자열의 시작점을 담을 `start`도 선언한다.

이후 문자열을 순회하면서 해당 위치의 문자를 `map`에 저장한다. 이 때, 이미 저장된 문자라면 `start`를 현재 저장 중인 `start`와 저장되어 있는 문자의 인덱스 + 1 중 큰 수로 업데이트 한다. 왜냐면 동일한 문자가 있는 경우엔 이미 저장되어 있는 문자 다음부터가 중복되지 않는 문자이기 때문이다. `max`는 현재 저장되어 있는 `max`와 현재 문자의 위치 `i`를 사용하여 `i - start + 1` 중 큰 값으로 수정한다. 이를 문자가 끝날 때까지 반복하고 난 후 `max`를 반환하면 주어진 문자열에서 가장 긴 서로 다른 문자를 가지는 문자열의 길이를 구할 수 있다.
