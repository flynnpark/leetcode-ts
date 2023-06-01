import { removeStars } from '.';

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
        s: 'leet**cod*e',
      },
      output: 'lecoe',
    },
    {
      input: {
        s: 'erase*****',
      },
      output: '',
    },
  ];

  test.each(testCases)('%o', ({ input: { s }, output }) => {
    expect(removeStars(s)).toBe(output);
  });
});
