import { reverseWords } from '.';

describe('0557. Reverse Words in a String III', () => {
  interface TestCase {
    input: {
      s: string;
    };
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: "Let's take LeetCode contest",
      },
      output: "s'teL ekat edoCteeL tsetnoc",
    },
    {
      input: {
        s: 'God Ding',
      },
      output: 'doG gniD',
    },
  ];

  test.each(testCases)('%o', ({ input: { s }, output }) => {
    reverseWords(s);
    expect(s).toEqual(output);
  });
});
