function uniqueOccurrences(arr: number[]): boolean {
  const arrMap: { [key: number]: number } = {};
  for (const num of arr) {
    arrMap[num] = arrMap[num] === undefined ? 1 : arrMap[num] + 1;
  }

  return (
    Object.values(arrMap).length ===
    Array.from(new Set(Object.values(arrMap))).length
  );
}

export { uniqueOccurrences };
