import { maxProfit } from '.';

test('0121. Best Time to Buy and Sell Stock', () => {
  interface TestCase {
    input: { prices: number[] };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        prices: [7, 1, 5, 3, 6, 4],
      },
      output: 5,
    },
    {
      input: {
        prices: [7, 6, 4, 3, 1],
      },
      output: 0,
    },
  ];

  testCases.forEach(({ input, output }) => {
    const result = maxProfit(input.prices);
    expect(result).toEqual(output);
  });
});
