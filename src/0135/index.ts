function candy(ratings: number[]): number {
  const candies = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
  }

  return candies.reduce((sum, candy) => sum + candy, 0);
}

/**
 * 그리디 알고리즘을 사용
 *
 * 1. 문제의 조건에 각 아이들은 최소 한 개의 사탕을 받아야 하므로, 아이들 수만큼의 길이를 가진 배열을 만들고 모든 요소를 1로 초기화한다(`candies`)
 * 2. 먼저 왼쪽에서 오른쪽으로 아이들을 순회하면서 현재 아이의 등급이 이전 아이의 등급보다 높을 경우, 이전 아이가 받은 사탕의 개수에 1을 더한 값을 현재 아이가 받은 사탕의 개수로 설정한다.
 * 3. 다음으로는 오른쪽에서 왼쪽으로 아이들을 순회하면서 현재 아이의 등급이 다음 아이의 등급보다 높을 경우, 다음 아이가 받은 사탕의 개수에 1을 더한 값과 현재 아이가 받은 사탕의 개수를 비교해서 더 큰 값을 현재 아이가 받은 사탕의 개수로 설정한다.
 * 4. 마지막으로 모든 아이들이 받은 사탕의 개수를 합산해서 반환한다.
 */

export { candy };
