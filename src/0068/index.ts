function fullJustify(words: string[], maxWidth: number): string[] {
  const result: string[] = [];
  let line: string[] = [];
  let lineLength: number = 0;

  for (const word of words) {
    let remainingLength = maxWidth - lineLength;
    if (remainingLength >= word.length && !line.length) {
      line.push(word);
      lineLength += word.length;
    } else if (remainingLength >= word.length + 1) {
      line.push(word);
      lineLength += word.length + 1;
    } else {
      if (line.length === 1) {
        result.push(line[0].padEnd(maxWidth, ' '));
      } else {
        for (let i = 1; i < line.length; i++) {
          const space = Math.ceil(remainingLength / (line.length - i));
          if (remainingLength <= 0) break;
          line[i] = ' '.repeat(space) + line[i];
          remainingLength -= space;
        }
        result.push(line.join(' '));
      }
      line = [word];
      lineLength = word.length;
    }
  }

  if (line.length) {
    result.push(line.join(' ').padEnd(maxWidth, ' '));
  }

  return result;
}

export { fullJustify };
