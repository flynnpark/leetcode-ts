import { canCompleteCircuit } from '.';

describe('0134. Gas Station', () => {
  interface TestCase {
    input: {
      gas: number[];
      cost: number[];
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        gas: [1, 2, 3, 4, 5],
        cost: [3, 4, 5, 1, 2],
      },
      expected: 3,
    },
    {
      input: {
        gas: [2, 3, 4],
        cost: [3, 4, 3],
      },
      expected: -1,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { gas, cost }, expected }) => {
    const result = canCompleteCircuit(gas, cost);
    expect(result).toBe(expected);
  });
});
