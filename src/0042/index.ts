function trap(height: number[]): number {
  if (!height.length) return 0;

  let result = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax <= rightMax) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
}

/**
 * 투 포인터로 해결
 *
 * 1. 주어진 배열의 길이가 0이면 0을 반환한다.
 * 2. 주어진 배열에서 가장 높이가 높은 막대는 전체 부피에 영향을 끼치지 않으면서, 왼쪽과 오른쪽을 가르는 역할을 한다.
 * 3. 따라서, 왼쪽과 오른쪽에서 시작해 최대 높이의 막대를 만날 때까지 포인터를 이동시키면서, 각각 현재의 좌우 최대 높이와 현재 높이와의 차이만큼 부피를 더해준다.
 * 4. 이를 반복하면서, 왼쪽과 오른쪽 포인터가 만나면 종료하고, 부피의 총합을 반환한다.
 * 5. 시간 복잡도는 O(n)이다.
 */

export { trap };
