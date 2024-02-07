import { maxArea } from '.';

describe('0011. Container With Most Water', () => {
  interface TestCase {
    input: {
      height: number[];
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      },
      expected: 49,
    },
    {
      input: {
        height: [1, 1],
      },
      expected: 1,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { height }, expected }) => {
    const result = maxArea(height);
    expect(result).toBe(expected);
  });
});
