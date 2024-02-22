import { isAnagram } from '.';

describe('0242. Valid Anagram', () => {
  interface TestCase {
    input: {
      s: string;
      t: string;
    };
    expected: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        s: 'anagram',
        t: 'nagaram',
      },
      expected: true,
    },
    {
      input: {
        s: 'rat',
        t: 'car',
      },
      expected: false,
    },
  ];

  test.each(testCases)('%o', ({ input: { s, t }, expected }) => {
    expect(isAnagram(s, t)).toBe(expected);
  });
});
