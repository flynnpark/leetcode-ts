function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
}

export { maxArea };

/**
 * 투 포인터 사용
 *
 * 1. left, right 두 개의 포인터를 사용한다.
 * 2. left, right의 값 중 작은 값을 기준으로 너비를 구한다.
 * 3. 기존에 구했던 너비보다 크다면 갱신한다.
 * 4. left, right의 값을 비교하여 작은 값을 가진 포인터를 이동시킨다.
 * 5. left, right가 만날 때까지 반복한다.
 *
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1)
 */
