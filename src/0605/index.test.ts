import { canPlaceFlowers } from '.';

describe('0605. Can Place Flowers', () => {
  interface TestCase {
    input: {
      flowerbed: number[];
      n: number;
    };
    output: boolean;
  }

  const testCases: TestCase[] = [
    {
      input: {
        flowerbed: [1, 0, 0, 0, 1],
        n: 1,
      },
      output: true,
    },
    {
      input: {
        flowerbed: [1, 0, 0, 0, 1],
        n: 2,
      },
      output: false,
    },
  ];
  test.each(testCases)('%o', ({ input: { flowerbed, n }, output }) => {
    expect(canPlaceFlowers(flowerbed, n)).toEqual(output);
  });
});
