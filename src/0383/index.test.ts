import { canConstruct } from '.';

describe('0383. Ransom Note', () => {
  interface TestCase {
    input: {
      ransomNote: string;
      magazine: string;
    };
    expected: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        ransomNote: 'a',
        magazine: 'b',
      },
      expected: false,
    },
    {
      input: {
        ransomNote: 'aa',
        magazine: 'ab',
      },
      expected: false,
    },
    {
      input: {
        ransomNote: 'aa',
        magazine: 'aab',
      },
      expected: true,
    },
  ];

  test.each(testCases)(
    '%o',
    ({ input: { ransomNote, magazine }, expected }) => {
      expect(canConstruct(ransomNote, magazine)).toBe(expected);
    },
  );
});
