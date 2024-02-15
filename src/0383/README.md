# 0383. [Ransom Note](https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150)

Given two strings `ransomNote` and `magazine`, return `true` if `ransomNote` _can be constructed by using the letters from_ `magazine` _and_ `false` _otherwise_.

Each letter in `magazine` can only be used once in `ransomNote`.

### **Example 1:**

<pre><code>
<strong>Input:</strong> ransomNote = "a", magazine = "b"
<strong>Output:</strong> false
</code></pre>

### **Example 2:**

<pre><code>
<strong>Input:</strong> ransomNote = "aa", magazine = "ab"
<strong>Output:</strong> false
</code></pre>

### **Example 3:**

<pre><code>
<strong>Input:</strong> ransomNote = "aa", magazine = "aab"
<strong>Output:</strong> true
</code></pre>

### **Constraints:**

- <code>1 <= ransomNote.length, magazine.length <= 10<sup>5</sup></code>
- `ransomNote` and `magazine` consist of lowercase English letters.
