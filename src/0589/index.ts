import { Node } from '../utils';

function preorder(root: Node | null): number[] {
  const result: number[] = [];
  let stack = [root];

  while (stack.length > 0) {
    const currentNode = stack.shift();
    if (currentNode) {
      result.push(currentNode.val);
      if (currentNode.children) {
        stack = [...currentNode.children, ...stack];
      }
    }
  }

  return result;
}

export { preorder };
