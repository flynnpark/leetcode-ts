## 0013. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

<pre><code>
<strong>Symbol       Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
</code></pre>

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

#### **Example 1:**

<pre><code><strong>Input:</strong> s = "III"
<strong>Output:</strong> 3</code></pre>

#### **Example 2:**

<pre><code><strong>Input:</strong> s = "IV"
<strong>Output:</strong> 4</code></pre>

#### **Example 3:**

<pre><code><strong>Input:</strong> s = "IX"
<strong>Output:</strong> 9</code></pre>

#### **Example 4:**

<pre><code><strong>Input:</strong> s = "LVIII"
<strong>Output:</strong> 58
<strong>Explanation:</strong> L = 50, V= 5, III = 3.</code></pre>

#### **Example 5:**

<pre><code><strong>Input:</strong> s = "MCMXCIV"
<strong>Output:</strong> 1994
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.</code></pre>

#### **Constraints:**

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.

## 해결 방법

먼저 로마 숫자가 어떻게 표기되는지를 확실하게 알아야 한다. 기본적으로 `I` 는 1, `V`는 5, `X`는 10, `L`는 50, `C`는 100, `D`는 500, `M`는 1000으로 표기되는데, 4는 `IV`로 표기되고, 9는 `IX`와 같은 형식으로 표기된다. 이러한 규칙을 잘 사용하면 로마 숫자를 변환할 수 있다. 먼저 로마 숫자 표기법에 대응하는 해시 테이블을 만들어서 숫자에 대한 정보를 기록하고, 주어진 로마 숫자에 대해 한 글자씩 확인하며 숫자로 변환해 나간다. 이 때, 현재 위치에 대응하는 숫자가 바로 직전 위치의 숫자보다 클 경우엔 `IV`나 `CM` 같이 뒤 숫자에서 앞 숫자를 빼는 방식이므로 이 때만 처리해주면 된다. 해결 방법에서는 직전 숫자에 2를 곱한 값을 더해주었는데, 이유는 주어진 로마 숫자를 하나씩 순회하면서 더하기 때문에 이미 바로 직전 숫자가 더해진 상태이기 때문이다(EX. IV의 경우 I가 계산된 후 V위치에서 I를 고려하게 되므로, `1 + 5 - (1 * 2)`와 같이 계산되어야 함).
