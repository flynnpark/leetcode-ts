function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    map1.set(char1, (map1.get(char1) ?? 0) + 1);
    map2.set(char2, (map2.get(char2) ?? 0) + 1);
  }

  for (const key of map1.keys()) {
    if (!map2.has(key)) {
      return false;
    }
  }

  const temp1 = [...map1.values()].sort((a, b) => a - b).join('');
  const temp2 = [...map2.values()].sort((a, b) => a - b).join('');
  return temp1 === temp2;
}

export { closeStrings };
