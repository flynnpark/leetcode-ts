function productExceptSelf(nums: number[]): number[] {
  let zeroCount = 0;
  let maxProduct = 1;
  const result = [];

  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
    } else {
      maxProduct *= num;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (zeroCount === 1) {
        result.push(maxProduct);
      } else {
        result.push(0);
      }
    } else {
      result.push(zeroCount === 0 ? maxProduct / nums[i] : 0);
    }
  }

  return result;
}

export { productExceptSelf };
