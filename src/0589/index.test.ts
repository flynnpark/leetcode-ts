import { transformListToNode } from '../utils';
import { preorder } from '.';

describe('0589. N-ary Tree Preorder Traversal', () => {
  interface TestCase {
    input: {
      root: (number | null)[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        root: [1, null, 3, 2, 4, null, 5, 6],
      },
      output: [1, 3, 5, 6, 2, 4],
    },
    {
      input: {
        root: [
          1,
          null,
          2,
          3,
          4,
          5,
          null,
          null,
          6,
          7,
          null,
          8,
          null,
          9,
          10,
          null,
          null,
          11,
          null,
          12,
          null,
          13,
          null,
          null,
          14,
        ],
      },
      output: [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10],
    },
  ];
  test.each(testCases)('%o', ({ input: { root }, output }) => {
    const node = transformListToNode(root);
    expect(preorder(node)).toEqual(output);
  });
});
