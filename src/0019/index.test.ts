import { transformListNodeToList, transformListToListNode } from '../utils';
import { removeNthFromEnd } from '.';

describe('0019. Remove Nth Node From End of List', () => {
  interface TestCase {
    input: {
      head: number[];
      n: number;
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        head: [1, 2, 3, 4, 5],
        n: 2,
      },
      output: [1, 2, 3, 5],
    },
    {
      input: {
        head: [1],
        n: 1,
      },
      output: [],
    },
    {
      input: {
        head: [1, 2],
        n: 1,
      },
      output: [1],
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    const transformedHead = transformListToListNode(input.head);
    const transformedResult = transformListNodeToList(
      removeNthFromEnd(transformedHead, input.n),
    );
    expect(transformedResult).toStrictEqual(output);
  });
});
