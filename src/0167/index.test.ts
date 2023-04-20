import { twoSum } from '.';

test('0142. Linked List Cycle II', () => {
  interface TestCase {
    input: {
      numbers: number[];
      target: number;
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        numbers: [2, 7, 11, 15],
        target: 9,
      },
      output: [1, 2],
    },
    {
      input: {
        numbers: [2, 3, 4],
        target: 6,
      },
      output: [1, 3],
    },
    {
      input: {
        numbers: [-1, 0],
        target: 1,
      },
      output: [1, 2],
    },
  ];

  testCases.forEach(({ input: { numbers, target }, output }) => {
    expect(twoSum(numbers, target)).toEqual(output);
  });
});
