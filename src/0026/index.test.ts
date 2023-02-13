import { removeDuplicates } from '.';

describe('0026. Remove Duplicates from Sorted Array', () => {
  interface TestCase {
    input: number[];
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: [1, 1, 2],
      output: 2,
    },
    {
      input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      output: 5,
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    expect(removeDuplicates(input)).toEqual(output);
  });
});
