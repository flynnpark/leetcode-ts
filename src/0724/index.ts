function pivotIndex(nums: number[]): number {
  let left = 0;
  let right = nums.reduce((a, b) => a + b, 0);

  for (let index = 0; index < nums.length; index++) {
    right -= nums[index];
    if (left === right) {
      return index;
    }
    left += nums[index];
  }

  return -1;
}

export { pivotIndex };
