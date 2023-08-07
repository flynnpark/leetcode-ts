import { searchMatrix } from '.';

describe('0074. Search a 2D Matrix', () => {
  interface TestCase {
    input: {
      matrix: number[][];
      target: number;
    };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 3,
      },
      output: true,
    },
    {
      input: {
        matrix: [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        target: 13,
      },
      output: false,
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    const result = searchMatrix(input.matrix, input.target);
    expect(result).toEqual(output);
  });
});
