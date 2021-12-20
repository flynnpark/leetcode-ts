import { transformListNodeToList, transformListToListNode } from 'utils';
import { mergeTwoLists } from '.';

describe('0021. Merge Two Sorted Lists', () => {
  interface TestCase {
    input: {
      list1: number[];
      list2: number[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        list1: [1, 2, 4],
        list2: [1, 3, 4],
      },
      output: [1, 1, 2, 3, 4, 4],
    },
    {
      input: {
        list1: [],
        list2: [],
      },
      output: [],
    },
    {
      input: {
        list1: [],
        list2: [0],
      },
      output: [0],
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    const transformedList1 = transformListToListNode(input.list1);
    const transformedList2 = transformListToListNode(input.list2);
    const result = mergeTwoLists(transformedList1, transformedList2);
    expect(transformListNodeToList(result)).toEqual(output);
  });
});
