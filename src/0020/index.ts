const pair: { [key: string]: string } = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pair[char]) {
      if (stack.length === 0 || stack[stack.length - 1] !== pair[char]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

export { isValid };
