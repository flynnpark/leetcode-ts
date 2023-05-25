function largestAltitude(gain: number[]): number {
  let hightAltitude = 0;
  let currentAltitude = 0;

  for (let i = 0; i < gain.length; i++) {
    currentAltitude += gain[i];
    hightAltitude = Math.max(currentAltitude, hightAltitude);
  }

  return hightAltitude;
}

export { largestAltitude };
