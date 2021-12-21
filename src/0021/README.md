# 0021. [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

Merge two sorted linked lists and return it as a `sorted` list. The list should be made by splicing together the nodes of the first two lists.

#### **Example 1:**

![](../../images/merge_ex1.jpg)

<pre><code><strong>Input:</strong> l1 = [1,2,4], l2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> l1 = [], l2 = []
<strong>Output:</strong> []</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> l1 = [], l2 = [0]
<strong>Output:</strong> [0]</code></pre>

#### **Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `l1` and `l2` are sorted in **non-decreasing** order.

## 해결 방법

이미 정렬되어 있는 배열 두 가지를 합치는 문제이다. 하지만 단순히 `number[]` 형태로 값이 주어지는 게 아니라 `ListNode`라는 형태로 주어지기 때문에 이를 활용해서 해결해야 했다. `ListNode`의 `val`은 값, `next`는 다음 `ListNode`를 가르키는데, `list1`의 `val`과 `list2`의 `val`을 비교하여 노드를 이어나간다. 여기서는 재귀호출을 사용하여 작은 노드의 다음 노드를 이어나가는 식으로 해결했다. 만약 `list1`의 `val`이 `list2`의 `val`보다 작으면, `list`의 `next`를 `mergeTwoLists(list1.next, list2)`의 결과로 연결하고, `list1`을 반환한다. `list2`의 `val`이 더 작을 경우도 같은 방식으로 진행해 나가면 원하는 결과를 얻을 수 있다.
