import { trap } from '.';

describe('0042. Trapping Rain Water', () => {
  interface TestCase {
    input: {
      height: number[];
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      },
      expected: 6,
    },
    {
      input: {
        height: [4, 2, 0, 3, 2, 5],
      },
      expected: 9,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { height }, expected }) => {
    const result = trap(height);
    expect(result).toBe(expected);
  });
});
