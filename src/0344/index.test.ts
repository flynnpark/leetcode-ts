import { reverseString } from '.';

describe('0344. Reverse String', () => {
  interface TestCase {
    input: {
      s: string[];
    };
    output: string[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: ['h', 'e', 'l', 'l', 'o'],
      },
      output: ['o', 'l', 'l', 'e', 'h'],
    },
    {
      input: {
        s: ['H', 'a', 'n', 'n', 'a', 'h'],
      },
      output: ['h', 'a', 'n', 'n', 'a', 'H'],
    },
  ];

  test.each(testCases)('%o', ({ input: { s }, output }) => {
    reverseString(s);
    expect(s).toEqual(output);
  });
});
