import { jump } from '.';

describe('0045. Jump Game II', () => {
  interface TestCase {
    input: { nums: number[] };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [2, 3, 1, 1, 4],
      },
      output: 2,
    },
    {
      input: {
        nums: [2, 3, 0, 1, 4],
      },
      output: 2,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { nums }, output }) => {
    const relsult = jump(nums);
    expect(result).toStrictEqual(output);
  });
});
