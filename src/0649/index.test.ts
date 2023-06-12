import { predictPartyVictory } from '.';

describe('0649. Dota2 Senate', () => {
  interface TestCase {
    input: {
      senate: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        senate: 'RD',
      },
      output: 'Radiant',
    },
    {
      input: {
        senate: 'RDD',
      },
      output: 'Dire',
    },
  ];

  test.each(testCases)('%o', ({ input: { senate }, output }) => {
    expect(predictPartyVictory(senate)).toBe(output);
  });
});
