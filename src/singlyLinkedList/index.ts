class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(val: number) {
    // create a new node
    // if head is null, head = new node, tail = new node, length++
    // else, tail = new node, length++
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.head && this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    this.length++;
    return this;
  }

  // public traverse(){

  // }

  public pop(): ListNode | null {
    // if head === null, return this
    // else
    // , current = head, if current has next, prev = current, current = current.next
    // prev.next = null, length--

    if (!this.head) {
      return null;
    }
    let prev: ListNode | null = null;
    let curr = this.head;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    if (prev) {
      prev.next = null;
    }
    this.tail = prev;
    this.length--;

    // NOTE: when the list is empty, head = null
    if (this.length === 0) {
      this.head = null;
    }
    return curr;
  }
}
