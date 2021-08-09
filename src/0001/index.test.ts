import { twoSum } from '.';

test('0001. twoSum', () => {
  interface TestCase {
    input: {
      nums: number[];
      target: number;
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [2, 7, 11, 15],
        target: 9,
      },
      output: [0, 1],
    },
    {
      input: {
        nums: [3, 2, 4],
        target: 6,
      },
      output: [1, 2],
    },
    {
      input: {
        nums: [3, 3],
        target: 6,
      },
      output: [0, 1],
    },
  ];

  testCases.forEach(({ input: { nums, target }, output }) => {
    expect(twoSum(nums, target)).toEqual(output);
  });
});
