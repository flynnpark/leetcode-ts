import { maxVowels } from '.';

describe('1456. Maximum Number of Vowels in a Substring of Given Length', () => {
  interface TestCase {
    input: {
      s: string;
      k: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'abciiidef',
        k: 3,
      },
      output: 3,
    },
    {
      input: {
        s: 'aeiou',
        k: 2,
      },
      output: 2,
    },
    {
      input: {
        s: 'leetcode',
        k: 3,
      },
      output: 2,
    },
  ];

  test.each(testCases)('%o', ({ input: { s, k }, output }) => {
    expect(maxVowels(s, k)).toStrictEqual(output);
  });
});
