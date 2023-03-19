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
  const nodeArray = items.map((num) => (num ? new Node(num) : null));
  const root = nodeArray.shift();
  if (!root) {
    return null;
  }
  const stack = [root];
  while (nodeArray.length > 0) {
    const parent = stack.shift();
    while (nodeArray[0] !== null && parent) {
      const child = nodeArray.shift();
      if (child) {
        parent.children.push(child);
        stack.push(child);
      }
    }
    nodeArray.shift();
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
};
