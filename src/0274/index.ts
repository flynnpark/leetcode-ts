function hIndex(citations: number[]): number {
  return citations.sort((a, b) => b - a).filter((value, index) => value > index)
    .length;
}

export { hIndex };
