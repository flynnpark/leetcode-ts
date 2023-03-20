// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function transformListToListNode(list: number[]): ListNode | null {
  if (!list.length) {
    return null;
  }
  const head = new ListNode(list[0]);
  let current = head;
  for (let i = 1; i < list.length; i++) {
    current.next = new ListNode(list[i]);
    current = current.next;
  }
  return head;
}

function transformListNodeToList(head: ListNode | null): number[] {
  if (!head) {
    return [];
  }
  const list = [];
  let current: ListNode | null = head;
  while (current) {
    list.push(current.val);
    current = current.next;
  }
  return list;
}

function getValueFromListNode(node: ListNode | null) {
  return node ? node.val : null;
}

function modifyListNodeWithCircular(
  head: ListNode | null,
  pos: number,
): ListNode | null {
  if (head === null || pos < 0) {
    return head;
  }

  let currPos = 0;
  let currNode: ListNode = head;

  while (currPos !== pos && currNode.next) {
    currNode = currNode.next;
    currPos++;
  }

  let lastNode: ListNode = head;
  while (lastNode.next) {
    lastNode = lastNode.next;
  }

  lastNode.next = currNode;

  return head;
}

class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function transformListToNode(items: (number | null)[]): Node | null {
  if (items.length === 0) return null;
  const rootValue = items[0];
  if (rootValue === null) return null;

  const root = new Node(rootValue);
  let stack = [root];

  let i = 1;
  let parent = root;
  while (i < items.length) {
    if (items[i] === null) {
      const [newParent, ...newStack] = stack;
      parent = newParent;
      stack = newStack;
    } else {
      const newItemValue = items[i];
      if (newItemValue !== null) {
        const newNode = new Node(newItemValue);
        parent.children.push(newNode);
        stack.push(newNode);
      }
    }
    i++;
  }
  return root;
}

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function transformListToTreeNode(items: (number | null)[]): TreeNode | null {
  if (items.length === 0 || items[0] === null || items[0] === undefined) {
    return null;
  }

  const root = new TreeNode(items[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (i < items.length) {
    const parent = queue.shift();
    if (parent) {
      const leftValue = items[i++];
      const rightValue = items[i++];
      if (leftValue !== undefined) {
        const left = leftValue ? new TreeNode(leftValue) : null;
        parent.left = left;
        queue.push(left);
      }
      if (rightValue !== undefined) {
        const right = rightValue ? new TreeNode(rightValue) : null;
        parent.right = right;
        queue.push(right);
      }
    }
  }

  return root;
}

export {
  getValueFromListNode,
  ListNode,
  modifyListNodeWithCircular,
  Node,
  transformListNodeToList,
  transformListToListNode,
  transformListToNode,
  transformListToTreeNode,
  TreeNode,
};
