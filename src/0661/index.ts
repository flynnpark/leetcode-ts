function getAverage(matrix: number[][], idx1: number, idx2: number) {
  const candidates = [-1, 0, 1];
  let total = 0;
  let count = 0;

  for (const i of candidates) {
    for (const j of candidates) {
      if (matrix[idx1 + i]?.[idx2 + j] !== undefined) {
        total += matrix[idx1 + i][idx2 + j];
        count++;
      }
    }
  }

  return Math.floor(total / count);
}

function imageSmoother(img: number[][]): number[][] {
  return new Array(img.length)
    .fill(0)
    .map((_, idx1) =>
      new Array(img[idx1].length)
        .fill(0)
        .map((_, idx2) => getAverage(img, idx1, idx2)),
    );
}

export { imageSmoother };
