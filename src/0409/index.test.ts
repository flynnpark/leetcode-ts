import { longestPalindrome } from '.';

test('0409. Longest Palindrome', () => {
  interface TestCase {
    input: { s: string };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'abccccdd',
      },
      output: 7,
    },
    {
      input: {
        s: 'a',
      },
      output: 1,
    },
  ];

  testCases.forEach(({ input, output }) => {
    const result = longestPalindrome(input.s);
    expect(result).toEqual(output);
  });
});
