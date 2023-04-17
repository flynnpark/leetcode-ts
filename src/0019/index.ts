import { ListNode } from '../utils';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast ? fast.next : null;
  }
  if (!fast) return head ? head.next : null;
  while (fast.next && slow) {
    fast = fast.next;
    slow = slow.next;
  }
  if (slow && slow.next) {
    slow.next = slow.next.next;
  }
  return head;
}

export { removeNthFromEnd };
