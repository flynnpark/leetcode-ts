function isPalindrome(s: string): boolean {
  const chars = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('');

  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    if (chars[left] !== chars[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

export { isPalindrome };

/**
 * 투 포인터 사용
 *
 * 1. 문자열을 소문자로 변경하고, 영문자와 숫자만 남기고 나머지 문자는 제거
 * 2. 문자열의 양 끝에서 시작하여 문자를 비교
 * 3. 만약 다른 문자가 나오면 false를 반환
 * 4. 모든 문자를 비교한 후 true를 반환
 */
