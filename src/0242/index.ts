function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const freqs = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    freqs.set(s[i], (freqs.get(s[i]) || 0) + 1);
    freqs.set(t[i], (freqs.get(t[i]) || 0) - 1);
  }

  return Array.from(freqs.values()).every((freq) => freq === 0);
}

export { isAnagram };

/**
 * 이 문제는 주어진 두 문자열이 애너그램인지 확인하는 문제이다.
 *
 * 1. 만약 두 문자열의 길이가 다르다면 false를 반환한다.
 * 2. 빈 맵을 만든다.
 * 3. 문자열을 순회하면서 맵에 문자열을 추가한다.
 *   - s의 문자열은 1을 더하고, t의 문자열은 1을 뺀다.
 * 4. 맵의 모든 값이 0이라면 true를 반환하고, 그렇지 않다면 false를 반환한다.
 */
