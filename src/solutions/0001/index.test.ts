import { twoSum } from '.';

interface TestCase {
  input: {
    nums: number[];
    target: number;
  };
  output: number[];
}

const testCases: TestCase[] = [
  {
    input: {
      nums: [2, 7, 11, 15],
      target: 9,
    },
    output: [0, 1],
  },
];

test('0001. twoSum', () => {
  testCases.forEach(({ input: { nums, target }, output }) => {
    expect(twoSum(nums, target)).toEqual(output);
  });
});
