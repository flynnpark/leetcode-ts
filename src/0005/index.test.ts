import { longestPalindrome } from '.';

test('0005. Longest Palindromic Substring', () => {
  interface TestCase {
    input: string;
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: 'babad',
      output: 'bab',
    },
    {
      input: 'cbbd',
      output: 'bb',
    },
    {
      input: 'a',
      output: 'a',
    },
    {
      input: 'ac',
      output: 'a',
    },
  ];

  testCases.forEach(({ input, output }) => {
    expect(longestPalindrome(input)).toEqual(output);
  });
});
