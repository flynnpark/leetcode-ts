import { reverseWords } from '.';

describe('0151. Reverse Words in a String', () => {
  interface TestCase {
    input: {
      s: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'the sky is blue',
      },
      output: 'blue is sky the',
    },
    {
      input: {
        s: '  hello world  ',
      },
      output: 'world hello',
    },
    {
      input: {
        s: 'a good   example',
      },
      output: 'example good a',
    },
  ];

  test.each(testCases)('%o', ({ input: { s }, output }) => {
    expect(reverseWords(s)).toEqual(output);
  });
});
