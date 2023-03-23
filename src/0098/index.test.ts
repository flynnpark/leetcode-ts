import { transformListToTreeNode } from '../utils';
import { isValidBST } from '.';

test('0098. Validate Binary Search Tree', () => {
  interface TestCase {
    input: { root: (number | null)[] };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        root: [2, 1, 3],
      },
      output: true,
    },
    {
      input: {
        root: [5, 1, 4, null, null, 3, 6],
      },
      output: false,
    },
    {
      input: {
        root: [2, 2, 2],
      },
      output: false,
    },
  ];

  testCases.forEach(({ input: { root }, output }) => {
    const transformedRoot = transformListToTreeNode(root);
    expect(isValidBST(transformedRoot)).toEqual(output);
  });
});
