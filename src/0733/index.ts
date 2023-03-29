function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const targetColor = image[sr][sc];

  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      i >= image.length ||
      j < 0 ||
      j >= image[i].length ||
      image[i][j] === color ||
      image[i][j] !== targetColor
    ) {
      return;
    }

    if (
      ([
        image[i - 1]?.[j],
        image[i + 1]?.[j],
        image[i][j - 1],
        image[i][j + 1],
      ].includes(color) ||
        (i === sr && j === sc)) &&
      image[i][j] === targetColor
    ) {
      image[i][j] = color;
    }
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  dfs(sr, sc);

  return image;
}

export { floodFill };
