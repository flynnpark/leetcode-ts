import { maxProfit } from '.';

describe('0122. Best Time to Buy and Sell Stock II', () => {
  interface TestCase {
    input: { prices: number[] };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        prices: [7, 1, 5, 3, 6, 4],
      },
      output: 7,
    },
    {
      input: {
        prices: [1, 2, 3, 4, 5],
      },
      output: 4,
    },
    {
      input: {
        prices: [7, 6, 4, 3, 1],
      },
      output: 0,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { prices }, output }) => {
    const result = maxProfit(prices);
    expect(result).toBe(output);
  });
});
