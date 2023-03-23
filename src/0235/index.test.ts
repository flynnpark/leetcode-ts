import { transformListToTreeNode, TreeNode } from '../utils';
import { lowestCommonAncestor } from '.';

describe('0235. Lowest Common Ancestor of a Binary Search Tree', () => {
  interface TestCase {
    input: {
      root: (number | null)[];
      p: number;
      q: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
        p: 2,
        q: 8,
      },
      output: 6,
    },
    {
      input: {
        root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5],
        p: 2,
        q: 4,
      },
      output: 2,
    },
    {
      input: {
        root: [2, 1],
        p: 2,
        q: 1,
      },
      output: 2,
    },
  ];

  test.each(testCases)('%o', ({ input: { root, p, q }, output }) => {
    const transformedRoot = transformListToTreeNode(root);
    const transformedP = new TreeNode(p);
    const transformedQ = new TreeNode(q);
    expect(
      lowestCommonAncestor(transformedRoot, transformedP, transformedQ),
    ).toEqual(output);
  });
});
