import { transformListNodeToList, transformListToListNode } from '../utils';
import { reverseList } from '.';

test('0206. Reverse Linked List', () => {
  interface TestCase {
    input: { head: number[] };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        head: [1, 2, 3, 4, 5],
      },
      output: [5, 4, 3, 2, 1],
    },
    {
      input: {
        head: [1, 2],
      },
      output: [2, 1],
    },
    {
      input: {
        head: [],
      },
      output: [],
    },
  ];

  testCases.forEach(({ input: { head }, output }) => {
    const transformedHead = transformListToListNode(head);
    const result = reverseList(transformedHead);
    expect(transformListNodeToList(result)).toEqual(output);
  });
});
