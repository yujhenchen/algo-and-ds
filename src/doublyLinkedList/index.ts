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
}

