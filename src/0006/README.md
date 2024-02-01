# 0006. [Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150)

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

<pre><code>
P   A   H   N
A P L S I I G
Y   I   R
<code></pre>

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

<pre><code>string convert(string s, int numRows);</code></pre>

### **Example 1:**

<pre><code>
<strong>Input:</strong> s = "PAYPALISHIRING", numRows = 3
<strong>Output:</strong> "PAHNAPLSIIGYIR"
</code></pre>

### **Example 2:**

<pre><code>
<strong>Input:</strong> s = "PAYPALISHIRING", numRows = 4
<strong>Output:</strong> "PINALSIGYAHRPI"
<strong>Explanation:</strong>
P     I    N
A   L S  I G
Y A   H R
P     I
</code></pre>

### **Example 3:**

<pre><code>
<strong>Input:</strong> s = "A", numRows = 1
<strong>Output:</strong> "A"
</code></pre>

### **Constraints:**

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`
