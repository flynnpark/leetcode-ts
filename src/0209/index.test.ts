import { minSubArrayLen } from '.';

describe('0209. Minimum Size Subarray Sum', () => {
  interface TestCase {
    input: {
      target: number;
      nums: number[];
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        target: 7,
        nums: [2, 3, 1, 2, 4, 3],
      },
      expected: 2,
    },
    {
      input: {
        target: 4,
        nums: [1, 4, 4],
      },
      expected: 1,
    },
    {
      input: {
        target: 11,
        nums: [1, 1, 1, 1, 1, 1, 1, 1],
      },
      expected: 0,
    },
  ];

  test.each(testCases)('%o', ({ input: { target, nums }, expected }) => {
    expect(minSubArrayLen(target, nums)).toBe(expected);
  });
});
