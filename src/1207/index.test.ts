import { uniqueOccurrences } from '.';

describe('1207. Unique Number of Occurrences', () => {
  interface TestCase {
    input: {
      arr: number[];
    };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        arr: [1, 2, 2, 1, 1, 3],
      },
      output: true,
    },
    {
      input: {
        arr: [1, 2],
      },
      output: false,
    },
    {
      input: {
        arr: [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
      },
      output: true,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { arr }, output }) => {
    expect(uniqueOccurrences(arr)).toEqual(output);
  });
});
