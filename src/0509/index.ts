function fib(n: number): number {
  function dp(n: number, temp: number[]): number {
    console.log(n, temp);
    if (n <= 1) return n;
    if (temp[n] != null) return temp[n];
    return (temp[n] = dp(n - 1, temp) + dp(n - 2, temp));
  }
  return dp(n, [n + 1]);
}

export { fib };
