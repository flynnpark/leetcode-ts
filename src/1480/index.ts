function runningSum(nums: number[]): number[] {
  return nums.map((_, index) =>
    nums.slice(0, index + 1).reduce((a, b) => a + b, 0),
  );
}

export { runningSum };
