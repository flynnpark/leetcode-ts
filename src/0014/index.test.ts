import { longestCommonPrefix } from '.';

describe('0014. Longest Common Prefix', () => {
  interface TestCase {
    input: { strs: string[] };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: { strs: ['flower', 'flow', 'flight'] },
      output: 'fl',
    },
    {
      input: { strs: ['dog', 'racecar', 'car'] },
      output: '',
    },
  ];

  test.each(testCases)('%o', ({ input: { strs }, output }) => {
    expect(longestCommonPrefix(strs)).toBe(output);
  });
});
