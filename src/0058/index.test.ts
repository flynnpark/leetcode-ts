import { lengthOfLastWord } from '.';

describe('0058. Length of Last Word', () => {
  interface TestCase {
    input: {
      s: string;
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'Hello World',
      },
      expected: 5,
    },
    {
      input: {
        s: '   fly me   to   the moon  ',
      },
      expected: 4,
    },
    {
      input: {
        s: 'luffy is still joyboy',
      },
      expected: 6,
    },
  ];

  test.each(testCases)('Case %#', ({ input: { s }, expected }) => {
    const result = lengthOfLastWord(s);
    expect(result).toBe(expected);
  });
});
