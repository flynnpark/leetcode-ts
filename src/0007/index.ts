function reverse(x: number): number {
  if ((-2) ** 31 > x || 2 ** 31 - 1 < x) {
    return 0;
  }
  if (x < 0) {
    return -Number(`${-x}`.split('').reverse().join(''));
  }
  return Number(`${x}`.split('').reverse().join(''));
}

export { reverse };
