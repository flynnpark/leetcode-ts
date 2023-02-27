import { runningSum } from '.';

describe('1480. Running Sum of 1d Array', () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 2, 3, 4],
      },
      output: [1, 3, 6, 10],
    },
    {
      input: {
        nums: [1, 1, 1, 1, 1],
      },
      output: [1, 2, 3, 4, 5],
    },
    {
      input: {
        nums: [3, 1, 2, 10, 1],
      },
      output: [3, 4, 6, 16, 17],
    },
  ];

  test.each(testCases)('%o', ({ input: { nums }, output }) => {
    expect(runningSum(nums)).toEqual(output);
  });
});
