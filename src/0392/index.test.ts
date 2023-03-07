import { isSubsequence } from '.';

describe('0392. Is Subsequence', () => {
  interface TestCase {
    input: {
      s: string;
      t: string;
    };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'abc',
        t: 'ahbgdc',
      },
      output: true,
    },
    {
      input: {
        s: 'axc',
        t: 'ahbgdc',
      },
      output: false,
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    expect(isSubsequence(input.s, input.t)).toBe(output);
  });
});
