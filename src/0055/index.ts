function canJump(nums: number[]): boolean {
  let maximumJump = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (maximumJump === 0) {
      return false;
    }
    maximumJump = Math.max(maximumJump - 1, nums[i]);
  }
  return true;
}

export { canJump };
