function reverseVowels(s: string): string {
  const vowels = 'aeiouAEIOU';
  const result = s.split('');

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (
      vowels.indexOf(result[left]) >= 0 &&
      vowels.indexOf(result[right]) >= 0
    ) {
      const temp = result[left];
      result[left] = result[right];
      result[right] = temp;
      left++;
      right--;
    } else if (vowels.indexOf(result[left]) < 0) {
      left++;
    } else {
      right--;
    }
  }

  return result.join('');
}

export { reverseVowels };
