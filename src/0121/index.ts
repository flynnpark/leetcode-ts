function maxProfit(prices: number[]): number {
  let minIndex = 0;
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[minIndex]) {
      minIndex = i;
    }

    const profit = prices[i] - prices[minIndex];
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

export { maxProfit };
