function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }

  const patternMap = new Map<string, string>();
  const wordMap = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const patternChar = pattern[i];
    const word = words[i];

    if (patternMap.has(patternChar) && patternMap.get(patternChar) !== word) {
      return false;
    }

    if (wordMap.has(word) && wordMap.get(word) !== patternChar) {
      return false;
    }

    patternMap.set(patternChar, word);
    wordMap.set(word, patternChar);
  }

  return true;
}

export { wordPattern };

/**
 * 이 문제는 주어진 문자열 s가 주어진 패턴 pattern을 따르는지 확인하는 문제이다.
 *
 * 1. 주어진 문자열 s를 공백을 기준으로 나눈다.
 * 2. 만약 패턴의 길이와 나눈 문자열의 길이가 다르다면 false를 반환한다.
 * 3. 패턴과 문자열을 비교하면서 패턴의 문자열이 이미 맵에 존재하고, 그 값이 다르다면 false를 반환한다.
 * 4. 문자열이 이미 맵에 존재하고, 그 값이 다르다면 false를 반환한다.
 * 5. 그렇지 않다면 패턴과 문자열을 맵에 추가한다.
 * 6. 모든 조건을 통과하면 true를 반환한다.
 */
