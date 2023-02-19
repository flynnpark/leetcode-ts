import { imageSmoother } from '.';

describe('0027. Remove Element', () => {
  interface TestCase {
    input: {
      img: number[][];
    };
    output: number[][];
  }

  const testCases: TestCase[] = [
    {
      input: {
        img: [
          [1, 1, 1],
          [1, 0, 1],
          [1, 1, 1],
        ],
      },
      output: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      input: {
        img: [
          [100, 200, 100],
          [200, 50, 200],
          [100, 200, 100],
        ],
      },
      output: [
        [137, 141, 137],
        [141, 138, 141],
        [137, 141, 137],
      ],
    },
  ];

  test.each(testCases)('%o', ({ input: { img }, output }) => {
    expect(imageSmoother(img)).toEqual(output);
  });
});
