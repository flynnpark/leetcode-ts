import { canJump } from '.';

describe('0055. Jump Game', () => {
  interface TestCase {
    input: { nums: number[] };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [2, 3, 1, 1, 4],
      },
      output: true,
    },
    {
      input: {
        nums: [3, 2, 1, 0, 4],
      },
      output: false,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { prices }, output }) => {
    const result = canJump(prices);
    expect(result).toBe(output);
  });
});
