function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const arr = s.split('');
  let maxLength = 0;
  let currentLength = 0;

  for (let left = 0; left < arr.length; left++) {
    if (left < k && vowels.has(arr[left])) {
      currentLength++;
    }
    if (left >= k) {
      if (vowels.has(arr[left])) {
        currentLength++;
      }
      if (vowels.has(arr[left - k])) {
        currentLength--;
      }
    }
    if (maxLength < currentLength) {
      maxLength = currentLength;
    }
  }
  return maxLength;
}

export { maxVowels };
