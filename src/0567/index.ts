function isAllZero(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
}

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) {
    return false;
  }

  const count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  if (isAllZero(count)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    count[s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)]++;
    if (isAllZero(count)) return true;
  }

  return false;
}

export { checkInclusion };
