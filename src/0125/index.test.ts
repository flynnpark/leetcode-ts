import { isPalindrome } from '.';

describe('0125. Valid Palindrome', () => {
  interface TestCase {
    input: {
      s: string;
    };
    expected: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'A man, a plan, a canal: Panama',
      },
      expected: true,
    },
    {
      input: {
        s: 'race a car',
      },
      expected: false,
    },
    {
      input: {
        s: ' ',
      },
      expected: true,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { s }, expected }) => {
    const result = isPalindrome(s);
    expect(result).toBe(expected);
  });
});
