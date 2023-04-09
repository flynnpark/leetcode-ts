import { climbStairs } from '.';

describe('0070. Climbing Stairs', () => {
  interface TestCase {
    input: {
      n: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        n: 2,
      },
      output: 2,
    },
    {
      input: {
        n: 3,
      },
      output: 3,
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    expect(climbStairs(input.n)).toBe(output);
  });
});
