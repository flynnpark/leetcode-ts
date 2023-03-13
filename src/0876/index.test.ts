import { transformListNodeToList, transformListToListNode } from '../utils';
import { middleNode } from '.';

test('0876. Middle of the Linked List', () => {
  interface TestCase {
    input: { head: number[] };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        head: [1, 2, 3, 4, 5],
      },
      output: [3, 4, 5],
    },
    {
      input: {
        head: [1, 2, 3, 4, 5, 6],
      },
      output: [4, 5, 6],
    },
  ];

  testCases.forEach(({ input: { head }, output }) => {
    const transformedHead = transformListToListNode(head);
    const result = middleNode(transformedHead);
    expect(transformListNodeToList(result)).toEqual(output);
  });
});
