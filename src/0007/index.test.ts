import { reverse } from '.';

test('0007. Reverse Integer', () => {
  interface TestCase {
    input: number;
    output: number;
  }

  const testCases: TestCase[] = [
    { input: 123, output: 321 },
    { input: -123, output: -321 },
    { input: 120, output: 21 },
    { input: 0, output: 0 },
  ];

  testCases.forEach(({ input, output }) => {
    expect(reverse(input)).toBe(output);
  });
});
