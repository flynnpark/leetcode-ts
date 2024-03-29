import { threeSum } from '.';

describe('0015. 3Sum', () => {
  interface TestCase {
    input: number[];
    output: number[][];
  }

  const testCases: TestCase[] = [
    {
      input: [-1, 0, 1, 2, -1, -4],
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      input: [],
      output: [],
    },
    {
      input: [0],
      output: [],
    },
  ];

  test.each(testCases)('Case %#', ({ input, output }) => {
    const result = threeSum(input);
    expect(result).toEqual(output);
  });
});
