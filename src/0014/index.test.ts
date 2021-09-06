import { longestCommonPrefix } from '.';

test('0014. Longest Common Prefix', () => {
  interface TestCase {
    input: string[];
    output: string;
  }

  const testCases: TestCase[] = [
    {
      input: ['flower', 'flow', 'flight'],
      output: 'fl',
    },
    {
      input: ['dog', 'racecar', 'car'],
      output: '',
    },
  ];

  testCases.forEach(({ input, output }) => {
    const result = longestCommonPrefix(input);
    expect(result).toEqual(output);
  });
});
