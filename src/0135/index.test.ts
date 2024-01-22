import { candy } from '.';

describe('0135. Candy', () => {
  interface TestCase {
    input: {
      ratings: number[];
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        ratings: [1, 0, 2],
      },
      expected: 5,
    },
    {
      input: {
        ratings: [1, 2, 2],
      },
      expected: 4,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { ratings }, expected }) => {
    const result = candy(ratings);
    expect(result).toBe(expected);
  });
});
