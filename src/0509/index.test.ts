import { fib } from '.';

test('0509. Fibonacci Number', () => {
  interface TestCase {
    input: {
      n: number;
    };
    output: number;
  }

  const testCases: TestCase[] = [
    {
      input: {
        n: 2,
      },
      output: 1,
    },
    {
      input: {
        n: 3,
      },
      output: 2,
    },
    {
      input: {
        n: 4,
      },
      output: 3,
    },
  ];

  testCases.forEach(({ input: { n }, output }) => {
    expect(fib(n)).toEqual(output);
  });
});
