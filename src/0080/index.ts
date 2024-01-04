function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (const n of nums) {
    if (i < 2 || n > nums[i - 2]) {
      nums[i++] = n;
    }
  }
  return i;
}

export { removeDuplicates };
