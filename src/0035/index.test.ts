import { searchInsert } from '.';

describe('0035. Search Insert Position', () => {
  interface TestCase {
    input: {
      nums: number[];
      target: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 5,
      },
      output: 2,
    },
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 2,
      },
      output: 1,
    },
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 7,
      },
      output: 4,
    },
    {
      input: {
        nums: [1, 3, 5, 6],
        target: 0,
      },
      output: 0,
    },
    {
      input: {
        nums: [1],
        target: 0,
      },
      output: 0,
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    expect(searchInsert(input.nums, input.target)).toBe(output);
  });
});
