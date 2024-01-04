import { majorityElement } from '.';

describe('0169. Majority Element', () => {
  interface TestCase {
    input: { nums: number[] };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [3, 2, 3],
      },
      output: 3,
    },
    {
      input: {
        nums: [2, 2, 1, 1, 1, 2, 2],
      },
      output: 2,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { nums }, output }) => {
    const result = majorityElement(nums);
    expect(result).toBe(output);
  });
});
