import { intToRoman } from '.';

test('0012. Integer to Roman', () => {
  interface TestCase {
    input: {
      num: number;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        num: 3,
      },
      output: 'III',
    },
    {
      input: {
        num: 58,
      },
      output: 'LVIII',
    },
    {
      input: {
        num: 1994,
      },
      output: 'MCMXCIV',
    },
  ];

  testCases.forEach(({ input, output }) => {
    expect(intToRoman(input)).toBe(output);
  });
});
