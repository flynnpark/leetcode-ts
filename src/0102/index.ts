import { TreeNode } from '../utils';

function levelOrder(root: TreeNode | null): number[][] {
  const dict: { [key: number]: number[] } = {};

  function bfs(tree: TreeNode | null, level: number) {
    if (!tree) return [];

    if (!dict[level]) {
      dict[level] = [tree.val];
    } else {
      dict[level].push(tree.val);
    }

    if (tree.left) bfs(tree.left, level + 1);
    if (tree.right) bfs(tree.right, level + 1);
  }

  bfs(root, 0);

  return Object.values(dict);
}

export { levelOrder };
