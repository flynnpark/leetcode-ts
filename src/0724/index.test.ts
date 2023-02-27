import { pivotIndex } from '.';

describe('0724. Find Pivot Index', () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 7, 3, 6, 5, 6],
      },
      output: 3,
    },
    {
      input: {
        nums: [1, 2, 3],
      },
      output: -1,
    },
    {
      input: {
        nums: [2, 1, -1],
      },
      output: 0,
    },
  ];

  test.each(testCases)('%o', ({ input: { nums }, output }) => {
    expect(pivotIndex(nums)).toEqual(output);
  });
});
