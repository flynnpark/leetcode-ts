import { numIslands } from '.';

describe('0200. Number of Islands', () => {
  interface TestCase {
    input: {
      grid: string[][];
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        grid: [
          ['1', '1', '1', '1', '0'],
          ['1', '1', '0', '1', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '0', '0', '0'],
        ],
      },
      output: 1,
    },
    {
      input: {
        grid: [
          ['1', '1', '0', '0', '0'],
          ['1', '1', '0', '0', '0'],
          ['0', '0', '1', '0', '0'],
          ['0', '0', '0', '1', '1'],
        ],
      },
      output: 3,
    },
  ];

  test.each(testCases)('%o', ({ input: { grid }, output }) => {
    expect(numIslands(grid)).toBe(output);
  });
});
