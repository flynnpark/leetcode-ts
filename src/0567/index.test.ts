import { checkInclusion } from '.';

describe('0567. Permutation in String', () => {
  interface TestCase {
    input: {
      s1: string;
      s2: string;
    };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s1: 'ab',
        s2: 'eidbaooo',
      },
      output: true,
    },
    {
      input: {
        s1: 'ab',
        s2: 'eidboaoo',
      },
      output: false,
    },
    {
      input: {
        s1: 'abc',
        s2: 'bbbca',
      },
      output: true,
    },
  ];

  test.each(testCases)('%o', ({ input: { s1, s2 }, output }) => {
    expect(checkInclusion(s1, s2)).toBe(output);
  });
});
