import { equalPairs } from '.';

describe('2352. Equal Row and Column Pairs', () => {
  interface TestCase {
    input: {
      grid: number[][];
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        grid: [
          [3, 2, 1],
          [1, 7, 6],
          [2, 7, 7],
        ],
      },
      output: 1,
    },
    {
      input: {
        grid: [
          [3, 1, 2, 2],
          [1, 4, 4, 5],
          [2, 4, 2, 2],
          [2, 4, 2, 2],
        ],
      },
      output: 3,
    },
  ];

  test.each(testCases)('%o', ({ input: { grid }, output }) => {
    expect(equalPairs(grid)).toBe(output);
  });
});
