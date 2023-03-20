import { transformListToTreeNode } from '../utils';
import { levelOrder } from '.';

test('0102. Binary Tree Level Order Traversal', () => {
  interface TestCase {
    input: { root: (number | null)[] };
    output: number[][];
  }

  const testCases: TestCase[] = [
    {
      input: {
        root: [3, 9, 20, null, null, 15, 7],
      },
      output: [[3], [9, 20], [15, 7]],
    },
    {
      input: {
        root: [1],
      },
      output: [[1]],
    },
    {
      input: {
        root: [],
      },
      output: [],
    },
  ];

  testCases.forEach(({ input: { root }, output }) => {
    const transformedRoot = transformListToTreeNode(root);
    expect(levelOrder(transformedRoot)).toEqual(output);
  });
});
