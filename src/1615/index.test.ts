import { maximalNetworkRank } from '.';

test('0102. Binary Tree Level Order Traversal', () => {
  interface TestCase {
    input: {
      n: number;
      roads: number[][];
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        n: 4,
        roads: [
          [0, 1],
          [0, 3],
          [1, 2],
          [1, 3],
        ],
      },
      output: 4,
    },
    {
      input: {
        n: 5,
        roads: [
          [0, 1],
          [0, 3],
          [1, 2],
          [1, 3],
          [2, 3],
          [2, 4],
        ],
      },
      output: 5,
    },
    {
      input: {
        n: 8,
        roads: [
          [0, 1],
          [1, 2],
          [2, 3],
          [2, 4],
          [5, 6],
          [5, 7],
        ],
      },
      output: 5,
    },
  ];

  testCases.forEach(({ input: { n, roads }, output }) => {
    expect(maximalNetworkRank(n, roads)).toEqual(output);
  });
});
