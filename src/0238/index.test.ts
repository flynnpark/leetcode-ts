import { productExceptSelf } from '.';

describe('0238. Product of Array Except Self', () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    expected: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 2, 3, 4],
      },
      expected: [24, 12, 8, 6],
    },
    {
      input: {
        nums: [-1, 1, 0, -3, 3],
      },
      expected: [0, 0, 9, 0, 0],
    },
  ];

  test.each(testCases)('Case %#', ({ input: { nums }, expected }) => {
    expect(productExceptSelf(nums)).toStrictEqual(expected);
  });
});
