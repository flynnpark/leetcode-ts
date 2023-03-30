function numIslands(grid: string[][]): number {
  function dfs(i: number, j: number) {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === '0'
    )
      return;
    grid[i][j] = '0';

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(i, j);
      }
    }
  }

  return result;
}

export { numIslands };
