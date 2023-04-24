import { gcdOfStrings } from '.';

describe('1071. Greatest Common Divisor of Strings', () => {
  interface TestCase {
    input: {
      str1: string;
      str2: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        str1: 'ABCABC',
        str2: 'ABC',
      },
      output: 'ABC',
    },
    {
      input: {
        str1: 'ABABAB',
        str2: 'ABAB',
      },
      output: 'AB',
    },
    {
      input: {
        str1: 'LEET',
        str2: 'CODE',
      },
      output: '',
    },
  ];

  test.each(testCases)('%o', ({ input: { str1, str2 }, output }) => {
    expect(gcdOfStrings(str1, str2)).toEqual(output);
  });
});
