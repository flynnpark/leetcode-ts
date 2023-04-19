/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let lastNonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex++;
    }
  }

  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
}

export { moveZeroes };
