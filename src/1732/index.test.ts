import { largestAltitude } from '.';

describe('1732. Find the Highest Altitude', () => {
  interface TestCase {
    input: {
      gain: number[];
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        gain: [-5, 1, 5, 0, -7],
      },
      output: 1,
    },
    {
      input: {
        gain: [-4, -3, -2, -1, 4, 3, 2],
      },
      output: 0,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { gain }, output }) => {
    expect(largestAltitude(gain)).toEqual(output);
  });
});
