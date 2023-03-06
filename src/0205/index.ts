type Map = {
  [key: string]: number;
};

function transform(s: string): string {
  const map: Map = {};
  const result: number[] = [];
  let index = 0;
  for (const char of s) {
    if (!Object.keys(map).includes(char)) {
      map[char] = index;
      index++;
    }
    result.push(map[char]);
  }
  return result.join('.');
}

function isIsomorphic(s: string, t: string): boolean {
  const transformedS = transform(s);
  const transformedT = transform(t);

  return transformedS === transformedT;
}

export { isIsomorphic };
