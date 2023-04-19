import { moveZeroes } from '.';

describe('0283. Move Zeroes', () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [0, 1, 0, 3, 12],
      },
      output: [1, 3, 12, 0, 0],
    },
    {
      input: {
        nums: [0],
      },
      output: [0],
    },
  ];

  test.each(testCases)('%o', ({ input: { nums }, output }) => {
    moveZeroes(nums);
    expect(nums).toEqual(output);
  });
});
