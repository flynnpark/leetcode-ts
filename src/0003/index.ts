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

/**
 * 이 문제는 슬라이딩 윈도우와 해시맵을 이용하여 풀 수 있다.
 * 슬라이딩 윈도우란, 윈도우를 이동시키면서 윈도우 내의 요소들을 처리하는 방식이다.
 *
 * 1. 해시맵을 생성한다. (key: 문자, value: 인덱스)
 * 2. 최대 길이를 저장할 변수 max를 0으로 초기화한다.
 * 3. 시작 인덱스를 저장할 변수 start를 0으로 초기화한다.
 * 4. 문자열을 순회하면서 다음을 반복한다.
 * 4-1. 만약 현재 문자가 해시맵에 존재하고, 그 인덱스가 start보다 크다면, start를 그 인덱스 + 1로 갱신한다.
 * 4-2. 해시맵에 현재 문자와 인덱스를 저장한다.
 * 4-3. max를 현재 인덱스 - start + 1과 max 중 큰 값으로 갱신한다.
 * 5. max를 반환한다.
 */
