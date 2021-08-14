import { isPalindrome } from '.';

test('0009. Palindrome Number', () => {
  interface TestCase {
    input: number;
    output: boolean;
  }

  const testCases: TestCase[] = [
    { input: 121, output: true },
    { input: -121, output: false },
    { input: 10, output: false },
    { input: -101, output: false },
  ];

  testCases.forEach(({ input, output }) => {
    expect(isPalindrome(input)).toBe(output);
  });
});
