import { RecentCounter } from '.';

describe('0933. Number of Recent Calls', () => {
  interface TestCase {
    input: {
      command: string[];
      input: number[][];
    };
    output: (number | null)[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        command: ['RecentCounter', 'ping', 'ping', 'ping', 'ping'],
        input: [[], [1], [100], [3001], [3002]],
      },
      output: [null, 1, 2, 3, 3],
    },
  ];

  test.each(testCases)('%o', ({ input: { command, input }, output }) => {
    const result: (number | null)[] = [];
    let recentCounter: RecentCounter | null = null;
    for (let i = 0; i < command.length; i++) {
      const cmd = command[i];
      const arg = input[i];
      if (cmd === 'RecentCounter') {
        recentCounter = new RecentCounter();
        result.push(null);
      } else if (cmd === 'ping' && recentCounter) {
        const pingResult = recentCounter.ping(arg[0]);
        result.push(pingResult);
      }
    }
    expect(result).toStrictEqual(output);
  });
});
