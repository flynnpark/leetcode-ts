function removeDuplicates(nums: number[]): number {
  let position = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[position] = nums[i];
      position++;
    }
  }
  return position;
}

export { removeDuplicates };
