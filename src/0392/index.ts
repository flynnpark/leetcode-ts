function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  for (const currentChar of t) {
    if (s.charAt(sIndex) === currentChar) {
      sIndex++;
    }
  }

  return sIndex === s.length;
}

export { isSubsequence };
