# 1657. [Determine if Two Strings Are Close](https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=study-plan-v2&id=leetcode-75)

Two strings are considered **close** if you can attain one from the other using the following operations:

- Operation 1: Swap any two existing characters.
  - For example, `a_b_cd_e_ -> a_e_cd_b_`
- Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
  - For example, `_aa_c_abb_ -> _bb_c_baa_` (all `a`'s turn into `b`'s, and all `b`'s turn into `a`'s)

You can use the operations on either string as many times as necessary.

Given two strings, `word1` and `word2`, return `true` _if_ `word1` _and_ `word2` _are close, and_ `false` _otherwise._

### **Example 1:**

<pre>
<strong>Input:</strong> word1 = "abc", word2 = "bca"
<strong>Output:</strong> true
<strong>Explanation:</strong> You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
</pre>

### **Example 2:**

<pre>
<strong>Input:</strong> word1 = "a", word2 = "aa"
<strong>Output:</strong> false
<strong>Explanation:</strong> It is impossible to attain word2 from word1, or vice versa, in any number of operations.
</pre>

### **Example 3:**

<pre>
<strong>Input:</strong> word1 = "cabbba", word2 = "abbccc"
<strong>Output:</strong> true
<strong>Explanation:</strong> You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
</pre>

### **Constraints:**

- <code>1 <= word1.length, word2.length <= 10<sup>5</sup></code>
- `word1` and `word2` contain only lowercase English letters.
