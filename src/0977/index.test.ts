import { sortedSquares } from '.';

describe('0977. Squares of a Sorted Array', () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [-4, -1, 0, 3, 10],
      },
      output: [0, 1, 9, 16, 100],
    },
    {
      input: {
        nums: [-7, -3, 2, 3, 11],
      },
      output: [4, 9, 9, 49, 121],
    },
  ];

  test.each(testCases)('%o', ({ input: { nums }, output }) => {
    expect(sortedSquares(nums)).toEqual(output);
  });
});
