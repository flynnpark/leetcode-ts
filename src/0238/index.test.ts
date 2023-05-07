import { productExceptSelf } from '.';

test('0238. Product of Array Except Self', () => {
  interface TestCase {
    input: {
      nums: number[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [1, 2, 3, 4],
      },
      output: [24, 12, 8, 6],
    },
    {
      input: {
        nums: [-1, 1, 0, -3, 3],
      },
      output: [0, 0, 9, 0, 0],
    },
  ];

  testCases.forEach(({ input: { nums }, output }) => {
    expect(productExceptSelf(nums)).toEqual(output);
  });
});
