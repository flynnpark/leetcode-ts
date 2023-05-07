import { reverseVowels } from '.';

describe('0345. Reverse Vowels of a String', () => {
  interface TestCase {
    input: {
      s: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'hello',
      },
      output: 'holle',
    },
    {
      input: {
        s: 'leetcode',
      },
      output: 'leotcede',
    },
  ];
  test.each(testCases)('%o', ({ input: { s }, output }) => {
    expect(reverseVowels(s)).toEqual(output);
  });
});
