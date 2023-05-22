import { findMaxAverage } from '.';

describe('0643. Maximum Average Subarray I', () => {
  interface TestCase {
    input: {
      nums: number[];
      k: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 12, -5, -6, 50, 3],
        k: 4,
      },
      output: 12.75,
    },
    {
      input: {
        nums: [5],
        k: 1,
      },
      output: 5.0,
    },
  ];
  test.each(testCases)('%o', ({ input: { nums, k }, output }) => {
    expect(findMaxAverage(nums, k)).toEqual(output);
  });
});
