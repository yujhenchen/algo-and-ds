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
