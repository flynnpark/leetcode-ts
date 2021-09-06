## 0014. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

#### **Example 1:**

<pre><code><strong>Input:</strong> strs = ["flower","flow","flight"]
<strong>Output:</strong> "fl"</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> strs = ["dog","racecar","car"]
<strong>Output:</strong> ""
<strong>Explanation:</strong> There is no common prefix among the input strings.</code></pre>

#### **Constraints:**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lower-case English letters.

## 해결 방법

주어진 여러 개의 문자열에서 공통되는 접두사를 찾아서 반환하는 문제이다. 파이썬으로 해결할 때는 `zip`이라는 함수를 사용해서 문제를 해결했지만 타입스크립트에서는 다른 방법을 사용해서 해결해야 했다.

먼저 주어진 문자열이 하나도 없을 때는 공통된 문자열히 하나도 없는 게 분명하므로 그냥 빈 문자열을 반환해준다(2번 라인). 다음으로는 본격적으로 공통된 문자열을 찾아야 하는데, 공통된 접두사를 찾는다는 건 한 문자열에서 문자열을 가져와서 다른 문자열에 공통적으로 포함되어 있는지를 판단하면 된다. 주어진 문자열 중 첫 번째 문자열을 기준인 `prefix`로 두고(4번 라인), `for`문을 사용하여 다른 문자열들이 `prefix`로 시작하는지를 판별하는데, 여기서는 `while`문을 사용하여 해당 문자열(`strs[i]`)이 `prefix`로 시작하는지를 판별하였다. `indexOf`를 사용했는데(6번 라인), `indexOf`의 결과가 0이 아닐 경우 해당 문자열을 포함하지 않거나 접두사가 아닌 경우이므로 `prefix`의 맨 뒷 문자 하나를 제거하고 다시 비교한다. `prefix`의 길이가 0일 경우엔 공통되는 접두사가 하나도 없다는 의미이므로 그대로 빈 문자열을 반환하고(8번 라인), `for`문을 모두 빠져나온 경우엔 공통된 접두사가 있다는 의미이므로 `prefix`를 반환한다.
