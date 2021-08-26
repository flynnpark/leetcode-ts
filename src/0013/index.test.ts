import { romanToInt, romanToIntSingleLine } from '.';

test('0013. Roman to Integer', () => {
  interface TestCase {
    input: string;
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: 'III',
      output: 3,
    },
    {
      input: 'IV',
      output: 4,
    },
    {
      input: 'IX',
      output: 9,
    },
    {
      input: 'LVIII',
      output: 58,
    },
    {
      input: 'MCMXCIV',
      output: 1994,
    },
  ];

  testCases.forEach(({ input, output }) => {
    expect(romanToInt(input)).toBe(output);
  });

  testCases.forEach(({ input, output }) => {
    expect(romanToIntSingleLine(input)).toBe(output);
  });
});
