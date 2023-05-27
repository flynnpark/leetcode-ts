import { findDifference } from '.';

describe('2215. Find the Difference of Two Arrays', () => {
  interface TestCase {
    input: {
      nums1: number[];
      nums2: number[];
    };
    output: number[][];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums1: [1, 2, 3],
        nums2: [2, 4, 6],
      },
      output: [
        [1, 3],
        [4, 6],
      ],
    },
    {
      input: {
        nums1: [1, 2, 3, 3],
        nums2: [1, 1, 2, 2],
      },
      output: [[3], []],
    },
  ];

  test.each(testCases)('%o', ({ input: { nums1, nums2 }, output }) => {
    expect(findDifference(nums1, nums2)).toBe(output);
  });
});
