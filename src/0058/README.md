# 0058. [Length of Last Word](https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150)

Given a string s consisting of words and spaces, return _the length of the **last** word in the string._

A **word** is a maximal substring consisting of non-space characters only.

### **Example 1:**

<pre><code>
<strong>Input:</strong> s = "Hello World"
<strong>Output:</strong> 5
<strong>Explanation:</strong> The last word is "World" with length 5.
</code></pre>

### **Example 2:**

<pre><code>
<strong>Input:</strong> s = "   fly me   to   the moon  "
<strong>Output:</strong> 4
<strong>Explanation:</strong> The last word is "moon" with length 4.
</code></pre>

### **Example 3:**

<pre><code>
<strong>Input:</strong> s = "luffy is still joyboy"
<strong>Output:</strong> 6
<strong>Explanation:</strong> The last word is "joyboy" with length 6.
</code></pre>

### **Constraints:**

- <code>1 <= s.length <= 10<sup>4</sup></code>
- `s` consists of only English letters and spaces `' '`.
- There will be at least one word in `s`.
