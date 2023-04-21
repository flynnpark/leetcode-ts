function reverseWords(s: string): string {
  const result = [];
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (s[right] === ' ') {
      result.push(reverseSubstring(s, left, right - 1));
      result.push(' ');
      left = right + 1;
    }
    right++;
  }

  result.push(reverseSubstring(s, left, right - 1));
  return result.join('');
}

function reverseSubstring(s: string, left: number, right: number): string {
  let result = '';
  for (let i = right; i >= left; i--) {
    result += s[i];
  }
  return result;
}

export { reverseWords };
