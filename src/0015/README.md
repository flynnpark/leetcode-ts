## 0015. [3Sum](https://leetcode.com/problems/3sum/)

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

#### **Example 1:**

<pre><code><strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> nums = []
<strong>Output:</strong> []</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> nums = [0]
<strong>Output:</strong> []</code></pre>

#### **Constraints:**

- `0 <= nums.length <= 3000`
- `-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>`

## 해결 방법

주어진 수의 배열에서 세 개의 수를 더해서 0이 나오는 수의 조합들을 모두 찾는 문제이다. 예시를 먼저 확인해 보면 주어진 숫자가 없거나, 세 개 이상이 되지 않는 경우엔 빈 결과를 반환하는 것을 알 수 있다. 때문에 먼저 주어진 수 `nums`의 길이가 3보다 작을 때는 그냥 빈 배열을 반환하도록 먼저 처리해준다.

다음으로, `nums`를 정렬한다. 0을 만들기 위해서는 음수가 음수와 양수 모두 포함되어야 하는데, 이를 위해서 작은 오름차순 정렬을 해준다. 그리고 반복문을 통해 첫 번째 숫자를 순회하는데, 0번째부터 `nums.length - 2`번째까지 순회한다. 이유는 세 숫자의 합이기 때문에 최소 3개의 서로 다른 숫자가 선택되어야 하기 때문이다. 그리고 나머지 두 수를 선택해야 하는데, `i + 1`번째를 `left`, `length - 1`번째를 `right`로 선택한다. 그리고 이렇게 선택된 `nums[i]`, `nums[left]`, `nums[right]` 합을 구하여 0과 비교한다. 숫자가 0일 경우 조건에 부합하는 숫자들이므로 `result`에 추가하고 난 후 `left`를 오른쪽으로, `right`를 왼쪽으로 이동한다. 같은 결과는 있을 필요가 없으므로 `nums[left]`가 `nums[left + 1]`과 같을 경우나 `nums[right]`가 `nums[right - 1]`과 같을 경우는 이를 제외하고 다음 숫자를 선택한다.

만약 세 수의 합이 0이 아닐 경우엔 두 가지 케이스로 나뉘는데, 합이 0보다 클 경우와 0보다 작을 경우이다. 0보다 작을 경우엔 왼쪽의 숫자를 오른쪽으로 이동하고, 0보다 클 경우엔 오른쪽의 숫자를 왼쪽으로 이동해야 한다. 이렇게 움직여야 하는 이유는 이미 오름차순으로 정렬되어 있는 숫자이기 때문이다. 위의 프로세스를 반복하면 세 수의 합이 0인 경우만 `results`에 쌓이게 되므로 이를 반환하면 된다.
