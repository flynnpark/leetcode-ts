# 205. [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1)

Given two strings `s` and `t`, _determine if they are isomorphic._

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

### Example 1:

<pre>
<strong>Input:</strong> s = "egg", t = "add"
<strong>Output:</strong> true
</pre>

### Example 2:

<pre>
<strong>Input:</strong> s = "foo", t = "bar"
<strong>Output:</strong> false
</pre>

### Example 3:

<pre>
<strong>Input:</strong> s = "paper", t = "title"
<strong>Output:</strong> true
</pre>

### Constraints:

- <code>1 <= s.length <= 5 \* 10<sup>4</sup></code>
- <code>t.length == s.length</code>
- `s` and `t` consist of any valid ascii character.
