/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  let left = 0;
  let right = nums.length - 1;
  nums = reverseArray(nums, left, right);

  left = 0;
  right = k - 1;
  nums = reverseArray(nums, left, right);

  left = k;
  right = nums.length - 1;
  nums = reverseArray(nums, left, right);
}

function reverseArray(nums: number[], left: number, right: number): number[] {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
  return nums;
}

export { rotate };
