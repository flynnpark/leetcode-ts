import { asteroidCollision } from '.';

describe('0735. Asteroid Collision', () => {
  interface TestCase {
    input: {
      asteroids: number[];
    };
    output: number[];
  }

  const testCases: TestCase[] = [
    {
      input: {
        asteroids: [5, 10, -5],
      },
      output: [5, 10],
    },
    {
      input: {
        asteroids: [8, -8],
      },
      output: [],
    },
    {
      input: {
        asteroids: [10, 2, -5],
      },
      output: [10],
    },
  ];

  test.each(testCases)('%o', ({ input: { asteroids }, output }) => {
    expect(asteroidCollision(asteroids)).toStrictEqual(output);
  });
});
