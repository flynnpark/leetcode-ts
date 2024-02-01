function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(numRows).fill('');

  let currentRow = 0;
  let goingDown = true;

  for (const char of s) {
    rows[currentRow] += char;

    if (currentRow === 0) {
      goingDown = true;
    } else if (currentRow === numRows - 1) {
      goingDown = false;
    }

    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
}

export { convert };
