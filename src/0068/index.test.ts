import { fullJustify } from '.';

describe('0028. Find the Index of the First Occurrence in a String', () => {
  interface TestCase {
    input: {
      words: string[];
      maxWidth: number;
    };
    expected: string[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        words: ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'],
        maxWidth: 16,
      },
      expected: ['This    is    an', 'example  of text', 'justification.  '],
    },
    {
      input: {
        words: ['What', 'must', 'be', 'acknowledgment', 'shall', 'be'],
        maxWidth: 16,
      },
      expected: ['What   must   be', 'acknowledgment  ', 'shall be        '],
    },
    {
      input: {
        words: [
          'Science',
          'is',
          'what',
          'we',
          'understand',
          'well',
          'enough',
          'to',
          'explain',
          'to',
          'a',
          'computer.',
          'Art',
          'is',
          'everything',
          'else',
          'we',
          'do',
        ],
        maxWidth: 20,
      },
      expected: [
        'Science  is  what we',
        'understand      well',
        'enough to explain to',
        'a  computer.  Art is',
        'everything  else  we',
        'do                  ',
      ],
    },
  ];

  test.each(testCases)(
    'Case %#',
    ({ input: { words, maxWidth }, expected }) => {
      const result = fullJustify(words, maxWidth);
      expect(result).toStrictEqual(expected);
    },
  );
});
