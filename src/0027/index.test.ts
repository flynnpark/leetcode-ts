import { removeElement } from '.';

describe('0027. Remove Element', () => {
  interface TestCase {
    input: {
      nums: number[];
      val: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [3, 2, 2, 3],
        val: 3,
      },
      output: 2,
    },
    {
      input: {
        nums: [0, 1, 2, 2, 3, 0, 4, 2],
        val: 2,
      },
      output: 5,
    },
  ];

  test.each(testCases)('%o', ({ input: { nums, val }, output }) => {
    expect(removeElement(nums, val)).toEqual(output);
  });
});
