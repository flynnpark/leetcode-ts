import { hIndex } from '.';

describe('0274. H-Index', () => {
  interface TestCase {
    input: { citations: number[] };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        citations: [3, 0, 6, 1, 5],
      },
      output: 3,
    },
    {
      input: {
        citations: [1, 3, 1],
      },
      output: 1,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { citations }, output }) => {
    const result = hIndex(citations);
    expect(result).toBe(output);
  });
});
