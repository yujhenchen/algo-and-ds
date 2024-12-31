export class ListNode {
    val: number;
    prev: ListNode | null;
    next: ListNode | null;
    constructor(val: number) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

export class DoublyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public push(val: number): this {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    public pop(): ListNode | null {
        // if head is null, return this
        // if  length ===1, head = null, tail = null, length--
        // else, prev = tail.prev, prev.next = null, tail = prev, length--
        if (this.head === null) {
            return null;
        }
        const node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const prev = this.tail?.prev ?? null;
            this.tail = prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        this.length--;
        return node;
    }
}

