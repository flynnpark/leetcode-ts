function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  let y = x;
  let reverse = 0;
  while (y > 0) {
    reverse = reverse * 10 + (y % 10);
    y = Math.floor(y / 10);
  }
  return x === reverse;
}

function isPalindromeWithStringComparing(x: number): boolean {
  return x.toString() === x.toString().split('').reverse().join('');
}

export { isPalindrome, isPalindromeWithStringComparing };
