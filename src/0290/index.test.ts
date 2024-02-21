import { wordPattern } from '.';

describe('0290. Word Pattern', () => {
  interface TestCase {
    input: {
      pattern: string;
      s: string;
    };
    expected: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        pattern: 'abba',
        s: 'dog cat cat dog',
      },
      expected: true,
    },
    {
      input: {
        pattern: 'abba',
        s: 'dog cat cat fish',
      },
      expected: false,
    },
    {
      input: {
        pattern: 'aaaa',
        s: 'dog cat cat dog',
      },
      expected: false,
    },
  ];

  test.each(testCases)('%o', ({ input: { pattern, s }, expected }) => {
    expect(wordPattern(pattern, s)).toBe(expected);
  });
});
