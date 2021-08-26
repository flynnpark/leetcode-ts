const roman: { [key: string]: number } = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function romanToInt(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let result = roman[s[0]];
  for (let i = 1; i < s.length; i++) {
    const current = roman[s[i]];
    const prev = roman[s[i - 1]];
    if (prev < current) {
      result -= prev * 2;
    }
    result += current;
  }
  return result;
}

const romanToIntSingleLine = (s: string): number =>
  s
    .split('')
    .map(
      (char, index) =>
        roman[char] +
        (roman[s[index - 1]] < roman[char] ? -(roman[s[index - 1]] * 2) : 0),
    )
    .reduce((a, b) => a + b, 0);

export { romanToInt, romanToIntSingleLine };
