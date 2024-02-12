function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

export { threeSum };

/**
 * 이 문제는 3개의 숫자를 더해서 0이 되는 경우를 찾는 문제이고, 중복된 경우는 제외해야 한다.
 * 여기서는 투 포인터를 사용하여 풀었다.
 *
 * 1. 배열을 정렬한다.
 * 2. 첫 번째 숫자부터 시작하여, 두 번째 숫자와 세 번째 숫자를 투 포인터로 찾는다.
 * 3. 만약 세 숫자의 합이 0이라면, 결과 배열에 추가한다.
 * 4. 만약 세 숫자의 합이 0보다 작다면, 두 번째 숫자를 증가시킨다.
 * 5. 만약 세 숫자의 합이 0보다 크다면, 세 번째 숫자를 감소시킨다.
 * 6. 중복된 숫자는 제외한다.
 */
