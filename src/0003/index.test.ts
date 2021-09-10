import { lengthOfLongestSubstring } from '.';

test('0003. Length Substring Without Repeating Characters', () => {
  interface TestCase {
    input: string;
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: 'abcabcbb',
      output: 3,
    },
    {
      input: 'bbbbb',
      output: 1,
    },
    {
      input: 'pwwkew',
      output: 3,
    },
    {
      input: '',
      output: 0,
    },
  ];

  testCases.forEach(({ input, output }) => {
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
});
