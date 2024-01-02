import { merge } from '.';

describe('0088. Merge Sorted Array', () => {
  interface TestCase {
    input: { nums1: number[]; m: number; nums2: number[]; n: number };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums1: [1, 2, 3, 0, 0, 0],
        m: 3,
        nums2: [2, 5, 6],
        n: 3,
      },
      output: [1, 2, 2, 3, 5, 6],
    },
    {
      input: {
        nums1: [1],
        m: 1,
        nums2: [],
        n: 0,
      },
      output: [1],
    },
    {
      input: {
        nums1: [0],
        m: 0,
        nums2: [1],
        n: 1,
      },
      output: [1],
    },
  ];

  test.each(testCases)(
    'Case %#',
    ({ input: { nums1, m, nums2, n }, output }) => {
      merge(nums1, m, nums2, n);
      expect(nums1).toStrictEqual(output);
    },
  );
});
