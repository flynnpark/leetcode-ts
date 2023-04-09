function climbStairs(n: number): number {
  if (n < 3) {
    return n;
  }

  const memory = [1, 2];

  for (let i = 2; i < n; i++) {
    memory[i] = memory[i - 1] + memory[i - 2];
  }

  return memory[n - 1];
}

export { climbStairs };
