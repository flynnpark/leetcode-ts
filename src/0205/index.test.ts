import { isIsomorphic } from '.';

describe('0205. Isomorphic Strings', () => {
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
        s: 'egg',
        t: 'add',
      },
      output: true,
    },
    {
      input: {
        s: 'foo',
        t: 'bar',
      },
      output: false,
    },
    {
      input: {
        s: 'paper',
        t: 'title',
      },
      output: true,
    },
    {
      input: {
        s: 'abcdefghijklmnopqrstuvwxyzva',
        t: 'abcdefghijklmnopqrstuvwxyzck',
      },
      output: false,
    },
    {
      input: {
        s: 'ab',
        t: 'aa',
      },
      output: false,
    },
  ];

  test.each(testCases)('%o', ({ input, output }) => {
    expect(isIsomorphic(input.t, input.s)).toBe(output);
  });
});
