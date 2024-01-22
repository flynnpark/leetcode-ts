function canCompleteCircuit(gas: number[], cost: number[]): number {
  let startIndex = 0;
  let totalGas = 0;
  let tankGas = 0;
  for (let i = 0; i < gas.length; i++) {
    tankGas += gas[i] - cost[i];
    totalGas += gas[i] - cost[i];

    if (tankGas < 0) {
      tankGas = 0;
      startIndex = i + 1;
    }
  }

  if (totalGas < 0) return -1;

  return startIndex;
}

/**
 * 그리디 알고리즘을 사용
 *
 * 전체 얻을 수 있는 `gas`의 합과 소요되는 `cost`의 합을 비교해서 얻을 수 있는 `gas`보다 `cost`가 높을 경우 순환할 수 없으므로 -1을 반환
 * 그렇지 않을 경우 출발점을 0으로 설정하고, 각 주유소를 순환하면서 현재 주유소에서 얻을 수 있는 `gas`의 양과 다음 주유소로 이동하는데 필요한 `cost`를 비교
 * - 만약 `gas - cost`가 0보다 작다면, 출발점을 다음 주유소로 변경
 * 모든 주유소를 순화한 후 마지막으로 설정된 출발점을 반환
 */

export { canCompleteCircuit };
