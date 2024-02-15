function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();

  for (const char of magazine) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  for (const char of ransomNote) {
    if (map.get(char)) {
      map.set(char, map.get(char)! - 1);
    } else {
      return false;
    }
  }

  return true;
}

export { canConstruct };
