export function twoSum(nums: number[], target: number): number[] {
  const hash: Map<number, number> = new Map();
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const match = hash.get(target - num);
    if (match !== undefined) {
      result = [match, i];
      break;
    }
    hash.set(num, i);
  }
  return result;
}
