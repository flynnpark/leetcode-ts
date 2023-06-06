import { decodeString } from '.';

describe('2390. Removing Stars From a String', () => {
  interface TestCase {
    input: {
      s: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: '3[a]2[bc]',
      },
      output: 'aaabcbc',
    },
    {
      input: {
        s: '3[a2[c]]',
      },
      output: 'accaccacc',
    },
    {
      input: {
        s: '2[abc]3[cd]ef',
      },
      output: 'abcabccdcdcdef',
    },
  ];

  test.each(testCases)('%o', ({ input: { s }, output }) => {
    expect(decodeString(s)).toBe(output);
  });
});
