import { search } from '.';

describe('1480. Running Sum of 1d Array', () => {
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
        nums: [-1, 0, 3, 5, 9, 12],
        target: 9,
      },
      output: 4,
    },
    {
      input: {
        nums: [-1, 0, 3, 5, 9, 12],
        target: 2,
      },
      output: -1,
    },
  ];

  test.each(testCases)('%o', ({ input: { nums, target }, output }) => {
    expect(search(nums, target)).toEqual(output);
  });
});
