function transform(s: string): string {
  const map = new Map<string, number>();
  const result: number[] = [];
  let index = 0;
  for (const char of s) {
    if (!map.has(char)) {
      map.set(char, index++);
    }
    result.push(map.get(char)!);
  }
  console.log(result.join('.'));
  return result.join('.');
}

function isIsomorphic(s: string, t: string): boolean {
  const transformedS = transform(s);
  const transformedT = transform(t);

  return transformedS === transformedT;
}

export { isIsomorphic };
