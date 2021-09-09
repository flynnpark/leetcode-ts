import { isValid } from '.';

test('0020. Valid Parentheses', () => {
  interface TestCase {
    input: string;
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: '()',
      output: true,
    },
    {
      input: '()[]{}',
      output: true,
    },
    {
      input: '([)]',
      output: false,
    },
    {
      input: '{[]}',
      output: true,
    },
  ];

  testCases.forEach(({ input, output }) => {
    const result = isValid(input);
    expect(result).toEqual(output);
  });
});
