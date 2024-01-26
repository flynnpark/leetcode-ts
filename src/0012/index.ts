const roman: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function intToRoman(num: number): string {
  return Object.entries(roman).reduce((acc, [key, value]) => {
    const count = Math.floor(num / value);
    num -= count * value;
    return acc + key.repeat(count);
  }, '');
}

export { intToRoman };
