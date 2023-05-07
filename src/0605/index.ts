function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let blankCount = 1;
  let availableBeds = 0;

  for (const bed of flowerbed) {
    if (bed) {
      // bed가 1인 경우
      availableBeds += Math.floor((blankCount - 1) / 2);
      blankCount = 0;
    } else {
      blankCount += 1;
    }
  }

  availableBeds += Math.floor(blankCount / 2);

  return availableBeds >= n;
}

export { canPlaceFlowers };
