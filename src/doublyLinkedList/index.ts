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

    public shift(): ListNode | null {
        if (this.length === 0) {
            return null;
        }
        const node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            const next = node?.next;
            if (next) {
                next.prev = null;
                this.head = next;
            }
        }
        this.length--;
        return node;
    }

    public unshift(val: number): this {
        const newNode = new ListNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            if (this.head) {
                this.head.prev = newNode;
            }
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    public get(index: number): ListNode | null {
        if (this.length === 0 || index >= this.length || index < 0) {
            return null;
        }

        let foundNode: ListNode | null = null;
        if (index <= this.length / 2) {
            foundNode = this.head;
            for (let i = 0; i < index; i++) {
                foundNode = foundNode?.next ?? null;
            }
        }
        else {
            foundNode = this.tail;
            for (let i = 0; i < this.length - index - 1; i++) {
                foundNode = foundNode?.prev ?? null;
            }
        }
        return foundNode;
    }

}

