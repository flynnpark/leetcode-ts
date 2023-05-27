function findDifference(nums1: number[], nums2: number[]): number[][] {
  const [nums1Set, nums2Set] = [new Set<number>(), new Set<number>()];
  const largestLength = Math.max(nums1.length, nums2.length);

  for (let i = 0; i < largestLength; i++) {
    if (nums1[i] !== undefined && !nums2.includes(nums1[i])) {
      nums1Set.add(nums1[i]);
    }
    if (nums2[i] !== undefined && !nums1.includes(nums2[i])) {
      nums2Set.add(nums2[i]);
    }
  }

  return [Array.from(nums1Set), Array.from(nums2Set)];
}

export { findDifference };
