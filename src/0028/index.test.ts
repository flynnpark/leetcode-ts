import { strStr } from '.';

describe('0028. Find the Index of the First Occurrence in a String', () => {
  interface TestCase {
    input: {
      haystack: string;
      needle: string;
    };
    expected: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        haystack: 'sadbutsad',
        needle: 'sad',
      },
      expected: 0,
    },
    {
      input: {
        haystack: 'leetcode',
        needle: 'leeto',
      },
      expected: -1,
    },
  ];

  test.each(testCases)(
    'Case %#',
    ({ input: { haystack, needle }, expected }) => {
      const result = strStr(haystack, needle);
      expect(result).toBe(expected);
    },
  );
});
