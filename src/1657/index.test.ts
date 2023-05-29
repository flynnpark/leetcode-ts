import { closeStrings } from '.';

describe('1657. Determine if Two Strings Are Close', () => {
  interface TestCase {
    input: {
      word1: string;
      word2: string;
    };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        word1: 'abc',
        word2: 'bca',
      },
      output: true,
    },
    {
      input: {
        word1: 'a',
        word2: 'aa',
      },
      output: false,
    },
    {
      input: {
        word1: 'cabbba',
        word2: 'abbccc',
      },
      output: true,
    },
  ];

  test.each(testCases)('%o', ({ input: { word1, word2 }, output }) => {
    expect(closeStrings(word1, word2)).toBe(output);
  });
});
