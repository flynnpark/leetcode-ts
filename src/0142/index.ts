import { ListNode } from '../utils';

function detectCycle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  slow = head;
  while (fast !== null && slow !== null && slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

export { detectCycle };
