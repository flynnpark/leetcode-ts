import { merge } from '.';

describe('80. Remove Duplicates from Sorted Array II', () => {
  interface TestCase {
    input: { nums: number[] };
    output: {
      n: number;
      expected: number[];
    };
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 1, 1, 2, 2, 3],
      },
      output: {
        n: 5,
        expected: [1, 1, 2, 2, 3],
      },
    },
    {
      input: {
        nums: [0, 0, 1, 1, 1, 1, 2, 3, 3],
      },
      output: {
        n: 7,
        expected: [0, 0, 1, 1, 2, 3, 3],
      },
    },
  ];

  test.each(testCases)(
    'Case %#',
    ({ input: { nums }, output: { n, expected } }) => {
      const result = merge(nums);
      expect(result).toBe(n);
      for (let i = 0; i < result; i++) {
        expect(nums[i]).toBe(expected[i]);
      }
    },
  );
});
