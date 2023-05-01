function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  const result: boolean[] = [];

  for (const candy of candies) {
    if (candy + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

export { kidsWithCandies };
