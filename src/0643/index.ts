function findMaxAverage(nums: number[], k: number): number {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < nums.length) {
    sum += nums[end++];
    if (end - start > k) sum -= nums[start++];
    if (end - start == k && maxSum < sum) maxSum = sum;
  }

  return maxSum / k;
}

export { findMaxAverage };
