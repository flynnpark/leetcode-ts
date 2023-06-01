function removeStars(s: string): string {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== '*') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }
  return stack.join('');
}

export { removeStars };
