import { longestOnes } from '.';

describe('1004. Max Consecutive Ones III', () => {
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
        nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
        k: 2,
      },
      output: 6,
    },
    {
      input: {
        nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        k: 3,
      },
      output: 10,
    },
  ];

  test.each(testCases)('%o', ({ input: { nums, k }, output }) => {
    expect(longestOnes(nums, k)).toStrictEqual(output);
  });
});
