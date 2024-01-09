function jump(nums: number[]): number {
  let result = 0;
  let availableSteps = 0;
  let currentIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums.length - 1 <= i + nums[i]) {
      return result + 1;
    }
    availableSteps = Math.max(availableSteps, nums[i] + i);
    if (i === currentIndex) {
      result += 1;
      currentIndex = availableSteps;
    }
  }
  return result;
}

export { jump };
