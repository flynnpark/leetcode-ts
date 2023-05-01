import { kidsWithCandies } from '.';

describe('1431. Kids With the Greatest Number of Candies', () => {
  interface TestCase {
    input: {
      candies: number[];
      extraCandies: number;
    };
    output: boolean[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        candies: [2, 3, 5, 1, 3],
        extraCandies: 3,
      },
      output: [true, true, true, false, true],
    },
    {
      input: {
        candies: [4, 2, 1, 1, 2],
        extraCandies: 1,
      },
      output: [true, false, false, false, false],
    },
    {
      input: {
        candies: [12, 1, 12],
        extraCandies: 0,
      },
      output: [true, false, true],
    },
  ];

  test.each(testCases)('%o', ({ input: { candies, extraCandies }, output }) => {
    expect(kidsWithCandies(candies, extraCandies)).toEqual(output);
  });
});
