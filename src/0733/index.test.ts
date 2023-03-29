import { floodFill } from '.';

describe('0733. Flood Fill', () => {
  interface TestCase {
    input: {
      image: number[][];
      sr: number;
      sc: number;
      color: number;
    };
    output: number[][];
  }

  const testCases: TestCase[] = [
    {
      input: {
        image: [
          [1, 1, 1],
          [1, 1, 0],
          [1, 0, 1],
        ],
        sr: 1,
        sc: 1,
        color: 2,
      },
      output: [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    },
    {
      input: {
        image: [
          [0, 0, 0],
          [0, 0, 0],
        ],
        sr: 0,
        sc: 0,
        color: 0,
      },
      output: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  ];

  test.each(testCases)('%o', ({ input: { image, sr, sc, color }, output }) => {
    expect(floodFill(image, sr, sc, color)).toStrictEqual(output);
  });
});
