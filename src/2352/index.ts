function equalPairs(grid: number[][]): number {
  const n = grid.length;
  const rows = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const row = grid[i].join(', ');
    rows.set(row, (rows.get(row) || 0) + 1);
  }

  let result = 0;
  for (let j = 0; j < n; j++) {
    const temp = [];
    for (let i = 0; i < n; i++) {
      temp.push(grid[i][j]);
    }
    const column = temp.join(', ');
    const rowCount = rows.get(column);
    if (rowCount) {
      result += rowCount;
    }
  }

  return result;
}

export { equalPairs };
