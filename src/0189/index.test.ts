import { rotate } from '.';

describe('0189. Rotate Array', () => {
  interface TestCase {
    input: { nums: number[]; k: number };
    expected: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 2, 3, 4, 5, 6, 7],
        k: 3,
      },
      expected: [5, 6, 7, 1, 2, 3, 4],
    },
    {
      input: {
        nums: [-1, -100, 3, 99],
        k: 2,
      },
      expected: [3, 99, -1, -100],
    },
  ];

  test.each(testCases)('Case %#', ({ input: { nums, k }, expected }) => {
    rotate(nums, k);
    expect(nums).toStrictEqual(expected);
  });
});
