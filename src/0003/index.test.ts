import { lengthOfLongestSubstring } from '.';

describe('0003. Length Substring Without Repeating Characters', () => {
  interface TestCase {
    input: { s: string };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: { s: 'abcabcbb' },
      expected: 3,
    },
    {
      input: { s: 'bbbbb' },
      expected: 1,
    },
    {
      input: { s: 'pwwkew' },
      expected: 3,
    },
    {
      input: { s: '' },
      expected: 0,
    },
  ];

  test.each(testCases)('%o', ({ input: { s }, expected }) => {
    expect(lengthOfLongestSubstring(s)).toBe(expected);
  });
});
