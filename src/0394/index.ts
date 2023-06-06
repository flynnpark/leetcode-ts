function decodeString(s: string): string {
  const stack: [number, string][] = [];
  let result = '';
  let repeatCount = 0;

  for (const char of s) {
    if (char === '[') {
      stack.push([repeatCount, result]);
      repeatCount = 0;
      result = '';
    } else if (char === ']' && stack.length) {
      const [prevRepeatCount, prevResult] = stack.pop() as [number, string];
      result = prevResult + result.repeat(prevRepeatCount);
    } else if (!isNaN(Number(char))) {
      repeatCount = repeatCount * 10 + parseInt(char, 10);
    } else {
      result += char;
    }
  }

  return result;
}

export { decodeString };
