import { longestSubarray } from '.';

test("1493. Longest Subarray of 1's After Deleting One Element", () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 1, 0, 1],
      },
      output: 3,
    },
    {
      input: {
        nums: [0, 1, 1, 1, 0, 1, 1, 0, 1],
      },
      output: 5,
    },
    {
      input: {
        nums: [1, 1, 1],
      },
      output: 2,
    },
  ];

  testCases.forEach(({ input: { nums }, output }) => {
    expect(longestSubarray(nums)).toEqual(output);
  });
});
