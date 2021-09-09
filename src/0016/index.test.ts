import { threeSumClosest } from '.';

test('0016. 3Sum Closest', () => {
  interface TestCase {
    input: {
      nums: number[];
      target: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        nums: [-1, 2, 1, -4],
        target: 1,
      },
      output: 2,
    },
    {
      input: {
        nums: [0, 0, 0],
        target: 1,
      },
      output: 0,
    },
  ];

  testCases.forEach(({ input, output }) => {
    expect(threeSumClosest(input.nums, input.target)).toEqual(output);
  });
});
