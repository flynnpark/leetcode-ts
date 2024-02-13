function minSubArrayLen(target: number, nums: number[]): number {
  let result = Infinity;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return result === Infinity ? 0 : result;
}

export { minSubArrayLen };

/**
 * 이 문제는 투 포인터를 사용하여 풀 수 있다.
 * 투 포인터는 주로 배열이 정렬되어 있을 때 사용할 수 있는데, 이 문제는 정렬되어 있지 않아도 투 포인터를 사용할 수 있다.
 *
 * 1. left, right 포인터를 0으로 초기화한다.
 * 2. right 포인터를 이동하면서 sum에 nums[right]를 더한다.
 * 3. sum이 target보다 크거나 같아지면, result에 right - left + 1과 result 중 작은 값을 저장한다.
 * 4. sum이 target보다 크거나 같아지면, left 포인터를 이동하면서 sum에서 nums[left]를 빼고 left를 1 증가시킨다.
 * 5. 2~4를 반복한다.
 * 6. result가 Infinity라면 0을 반환하고, 아니라면 result를 반환한다.
 */
