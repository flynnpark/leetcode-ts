function longestSubarray(nums: number[]): number {
  let maxLength = 0;
  let currentLength = 0;
  let prevLength = 0;
  for (const num of nums) {
    if (num) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength + prevLength);
    } else {
      prevLength = currentLength;
      currentLength = 0;
    }
  }
  return Math.min(maxLength, nums.length - 1);
}

export { longestSubarray };
