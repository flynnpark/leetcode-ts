import { convert } from '.';

describe('0006. Zigzag Conversion', () => {
  interface TestCase {
    input: {
      s: string;
      numRows: number;
    };
    expected: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'PAYPALISHIRING',
        numRows: 3,
      },
      expected: 'PAHNAPLSIIGYIR',
    },
    {
      input: {
        s: 'PAYPALISHIRING',
        numRows: 4,
      },
      expected: 'PINALSIGYAHRPI',
    },
    {
      input: {
        s: 'A',
        numRows: 1,
      },
      expected: 'A',
    },
  ];

  test.each(testCases)('Case %#', ({ input: { s, numRows }, expected }) => {
    const result = convert(s, numRows);
    expect(result).toBe(expected);
  });
});
