import { getValueFromListNode, transformListToListNode } from '../utils';
import { detectCycle } from '.';

test('0142. Linked List Cycle II', () => {
  interface TestCase {
    input: { head: number[]; pos: number };
    output: number | null;
  }

  const testCases: TestCase[] = [
    {
      input: {
        head: [3, 2, 0, -4],
        pos: 1,
      },
      output: 1,
    },
    {
      input: {
        head: [1, 2],
        pos: 0,
      },
      output: 0,
    },
    {
      input: {
        head: [1],
        pos: -1,
      },
      output: null,
    },
  ];

  testCases.forEach(({ input: { head }, output }) => {
    const transformedHead = transformListToListNode(head);
    const result = detectCycle(transformedHead);
    expect(getValueFromListNode(result)).toEqual(
      output !== null ? head[output] : null,
    );
  });
});
