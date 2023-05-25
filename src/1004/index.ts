function longestOnes(nums: number[], k: number): number {
  let maxLength = 0;
  let zeroCount = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    if (zeroCount <= k) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    } else if (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    right++;
  }
  return maxLength;
}

export { longestOnes };
