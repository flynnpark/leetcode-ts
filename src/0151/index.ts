function reverseWords(s: string): string {
  return s
    .trim()
    .split(' ')
    .filter((item) => item)
    .reverse()
    .join(' ');
}

export { reverseWords };
