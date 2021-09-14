function getPalindrome(s: string, left: number, right: number): string {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

function longestPalindrome(s: string): string {
  if (!s) return '';
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let odd = getPalindrome(s, i, i);
    let even = getPalindrome(s, i, i + 1);
    let longestPalindrome = odd.length > even.length ? odd : even;
    if (longestPalindrome.length > longest.length) {
      longest = longestPalindrome;
    }
  }
  return longest;
}

export { longestPalindrome };
