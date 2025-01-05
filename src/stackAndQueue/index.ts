// last in first out
// array pop, push, shift, unshift

// linked list implementation
export class Stack {
    first: StackNode | null;
    last: StackNode | null;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: number): this {
        const newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            const temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }
        this.size++;
        return this;
    }

    pop(): StackNode | null {
        if (!this.first) {
            return null;
        }
        const node = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            const next = node.next;
            this.first = next;
        }
        node.next = null;
        this.size--;
        return node;
    }
}

class StackNode {
    val: number;
    next: this | null;
    constructor(val: number) {
        this.val = val
        this.next = null;
    }
}

// queue is first in first out, FIFO
// create a queue using array
const q: Array<string> = [];
// use push and shift
q.push("FIRST");
q.push("SECOND");
q.shift();
q.shift();
// or unshift and pop
q.unshift("FIRST");
q.pop();

// enqueue and dequeue
class QueueNode {
    value: number;
    next: QueueNode | null;
    constructor() {
        this.value = 0;
        this.next = null;
    }
}

export class Queue {
    first: QueueNode | null;
    last: QueueNode | null;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to the end
    enqueue(val: number): this {
        const newNode = new QueueNode();
        newNode.value = val;
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            if (this.last) {
                this.last.next = newNode;
            }
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    // remove from the beginning
    dequeue(): QueueNode | null {
        if (!this.first) {
            return null;
        }
        const node = this.first;
        this.first = node.next;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        node.next = null;
        this.size--;
        return node;
    }
}
