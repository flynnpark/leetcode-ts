import { mergeAlternately } from '.';

describe('1768. Merge Strings Alternately', () => {
  interface TestCase {
    input: {
      word1: string;
      word2: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        word1: 'abc',
        word2: 'pqr',
      },
      output: 'apbqcr',
    },
    {
      input: {
        word1: 'ab',
        word2: 'pqrs',
      },
      output: 'apbqrs',
    },
    {
      input: {
        word1: 'abcd',
        word2: 'pq',
      },
      output: 'apbqcd',
    },
  ];

  test.each(testCases)('%o', ({ input: { word1, word2 }, output }) => {
    expect(mergeAlternately(word1, word2)).toBe(output);
  });
});
