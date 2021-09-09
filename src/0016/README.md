## 0016. [3Sum Closest](https://leetcode.com/problems/3sum-closest/)

Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.

Return _the sum of the three integers._

You may assume that each input would have exactly one solution.

#### **Example 1:**

<pre><code><strong>Input:</strong> nums = [-1,2,1,-4], target = 1
<strong>Output:</strong> 2
<strong>Explanation:</strong> The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> nums = [0,0,0], target = 1
<strong>Output:</strong> 0</code></pre>

#### **Constraints:**

- `3 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`
- `-10<sup>4</sup> <= target <= 10<sup>4</sup>`

## 해결 방법

3Sum 문제와 비슷한 문제이나 주어진 `target`에 가장 가까운 수를 찾는다는 게 다르다. 때문에 기본적인 해결 방법은 비슷하다. 가장 먼저 `nums`를 오름차순으로 정렬하고, 첫 세 수를 더하여 `result`에 넣어준다. `nums`의 최소 길이가 3이기 때문에 기본값으로 넣어주는 것. 그리고 나서 3Sum 문제와 마찬가지로 맨 왼쪽 숫자를 기준으로 두고, 바로 다음 위치를 `left`, 맨 오른쪽을 `right`로 둔 후, 해당하는 세 위치 숫자의 합 `sum`을 구한다. 그리고 나서 `sum`과 `target`의 차이와 미리 구해둔 `result`와 `target`의 차이를 구하는데, 만약 `sum`과 `target`의 차이가 `result`와 `target`의 차이보다 작을 경우 `sum`을 `result`에 넣는다. 마지막으로 `left`와 `right`를 이동시키며 계속 계산한다. 마지막으로 찾은 `result`를 반환하면 끝이 난다.
