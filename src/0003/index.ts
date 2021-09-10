function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const charIndex = map.get(s[i]);
    if (charIndex !== undefined) {
      start = Math.max(start, charIndex + 1);
    }
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}

export { lengthOfLongestSubstring };
