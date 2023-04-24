function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const [shorter, longer] = [str1, str2].sort((a, b) => a.length - b.length);
  for (let i = shorter.length; i > 0; i--) {
    const testDivisor = shorter.slice(0, i);
    if (
      removeDivisorFromString(shorter, testDivisor) === '' &&
      removeDivisorFromString(longer, testDivisor) === ''
    ) {
      return testDivisor;
    }
  }

  return '';
}

function removeDivisorFromString(str: string, divisor: string) {
  return str.split(divisor).join('');
}

export { gcdOfStrings };
