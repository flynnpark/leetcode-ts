import { TreeNode } from '../utils';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!(root && p && q)) return null;
  const small = Math.min(p.val, q.val);
  const large = Math.max(p.val, q.val);
  while (root) {
    if (root.val > large) {
      root = root.left;
    } else if (root.val < small) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
}

export { lowestCommonAncestor };
