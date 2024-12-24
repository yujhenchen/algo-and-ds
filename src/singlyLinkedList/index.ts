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
  public shift(): ListNode | null {
    // if there is no node, return null
    // else, if head has next first = head, head = head.next, return first
    if (!this.head) {
      return null;
    }
    let first = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return first;
  }

  public unshift(val: number): this {
    // if head is null, head = newNode ,tail = newNode, length++, return this
    // else, currentHead = head, head = newNode, newNode.next = currentHead, length++, return this
    const newNode = new ListNode(val);
    if (!this.head) {
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  public get(index: number): ListNode | null {
    // if index > length, return null
    // else, current = current.next, return current
    if (!this.head || index >= this.length || index < 0) {
      return null;
    }
    let current: ListNode | null = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next ?? null;
    }
    return current;
  }

  public set(index: number, val: number): boolean {
    // use get to get the node
    // if node is null, return false
    // else, update the value of the node, return true
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }


  public insert(index: number, val: number): this {
    // if index is < 0 or > length, return this
    // if index === 0, unshift
    // if index === length, push
    // else, get the node before the index as prevNode,
    // next = prevNode.next, prevNode.next = new node, new node next = next
    if (index < 0 || index > this.length) {
      return this;
    }
    if (index === 0) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }
    let prevNode: ListNode | null = this.get(index - 1);
    let nextNode: ListNode | null = prevNode?.next ?? null;
    const newNode = new ListNode(val);
    if (prevNode) {
      prevNode.next = newNode;
      newNode.next = nextNode;
      this.length++;
    }
    return this;
  }

}
