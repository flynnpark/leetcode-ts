function longestPalindrome(s: string): number {
  const freq = new Map<string, number>();
  for (const c of s) {
    freq.set(c, (freq.get(c) || 0) + 1);
  }

  let begin = '';
  let end = '';
  let mid = '';

  for (const [key, value] of freq) {
    if (value % 2 === 0) {
      begin += key.repeat(value / 2);
      end = key.repeat(value / 2) + end;
    } else {
      begin += key.repeat(Math.floor(value / 2));
      end = key.repeat(Math.floor(value / 2)) + end;
      mid = key;
    }
  }

  return (begin + mid + end).length;
}

export { longestPalindrome };
