// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function transformListToListNode(list: number[]): ListNode {
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

export { ListNode, transformListToListNode, transformListNodeToList };
