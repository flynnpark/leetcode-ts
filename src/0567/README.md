# 0567. [Permutation in String]()

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

### **Example 1:**

<pre>
<strong>Input:</strong> s1 = "ab", s2 = "eidbaooo"
<strong>Output:</strong> true
<strong>Explanation:</strong> s2 contains one permutation of s1 ("ba").
</pre>

### **Example 2:**

<pre>
<strong>Input:</strong> s1 = "ab", s2 = "eidboaoo"
<strong>Output:</strong> false
</pre>

### **Constraints:**

- <code>1 <= s1.length, s2.length <= 10<sup>4</sup></code>
- `s1` and `s2` consist of lowercase English letters.
