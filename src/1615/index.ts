function maximalNetworkRank(n: number, roads: number[][]): number {
  const network: { [key: string]: number[] } = {};
  for (let i = 0; i < n; i++) {
    network[i] = [];
  }
  for (const [a, b] of roads) {
    network[a].push(b);
    network[b].push(a);
  }

  let maxNetwork = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let currentNetwork = network[i].length + network[j].length;
      if (network[i].includes(j) || network[j].includes(i)) {
        currentNetwork--;
      }
      maxNetwork = Math.max(maxNetwork, currentNetwork);
    }
  }

  return maxNetwork;
}

export { maximalNetworkRank };
