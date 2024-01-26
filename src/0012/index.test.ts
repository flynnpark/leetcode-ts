import { intToRoman } from '.';

describe('0012. Integer to Roman', () => {
  interface TestCase {
    input: {
      num: number;
    };
    expected: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        num: 3,
      },
      expected: 'III',
    },
    {
      input: {
        num: 58,
      },
      expected: 'LVIII',
    },
    {
      input: {
        num: 1994,
      },
      expected: 'MCMXCIV',
    },
  ];

  test.each(testCases)('Case %#', ({ input: { num }, expected }) => {
    const result = intToRoman(num);
    expect(result).toBe(expected);
  });
});
