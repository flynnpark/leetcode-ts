function predictPartyVictory(senate: string): string {
  const length = senate.length;
  const rQueue = [];
  const dQueue = [];

  for (let i = 0; i < length; i++) {
    if (senate[i] === 'R') {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  while (rQueue.length > 0 && dQueue.length > 0) {
    const r = rQueue.shift() as number;
    const d = dQueue.shift() as number;
    if (r < d) {
      rQueue.push(r + length);
    } else {
      dQueue.push(d + length);
    }
  }
  console.log(rQueue, dQueue);
  return rQueue.length ? 'Radiant' : 'Dire';
}

export { predictPartyVictory };
