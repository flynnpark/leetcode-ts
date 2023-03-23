import { TreeNode } from '../utils';

function isValidBST(root: TreeNode | null): boolean {
  function bfs(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) {
      return true;
    }
    if (node.val <= min || node.val >= max) {
      return false;
    }
    return bfs(node.left, min, node.val) && bfs(node.right, node.val, max);
  }
  return bfs(root, -Infinity, Infinity);
}

export { isValidBST };
