import { Queue, Stack } from "../src/stackAndQueue";

describe('Stack', () => {
    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    describe('push', () => {
        test('should add a node as the first and last when the stack is empty', () => {
            stack.push(10);

            expect(stack.first?.val).toBe(10);
            expect(stack.last?.val).toBe(10);
            expect(stack.size).toBe(1);
            expect(stack.first).toBe(stack.last); // First and last should point to the same node
        });

        test('should add a node at the top of the stack when it is not empty', () => {
            stack.push(10);
            stack.push(20);

            expect(stack.first?.val).toBe(20); // New node becomes the first
            expect(stack.last?.val).toBe(10); // Last remains the same
            expect(stack.size).toBe(2);
            expect(stack.first?.next?.val).toBe(10); // First points to the previous first node
        });
    });

    describe('pop', () => {
        test('should return null when popping from an empty stack', () => {
            const popped = stack.pop();

            expect(popped).toBeNull();
            expect(stack.first).toBeNull();
            expect(stack.last).toBeNull();
            expect(stack.size).toBe(0);
        });

        test('should remove the top node from the stack and return its value', () => {
            stack.push(10);
            stack.push(20);
            const popped = stack.pop();

            expect(popped?.val).toBe(20); // Should return the value of the top node
            expect(stack.first?.val).toBe(10); // First becomes the next node
            expect(stack.last?.val).toBe(10); // Last remains the same
            expect(stack.size).toBe(1);
        });

        test('should set first and last to null when popping the only node', () => {
            stack.push(10);
            const popped = stack.pop();

            expect(popped?.val).toBe(10); // Should return the value of the only node
            expect(stack.first).toBeNull();
            expect(stack.last).toBeNull();
            expect(stack.size).toBe(0);
        });
    });
});


describe('Queue', () => {
    let queue: Queue;

    beforeEach(() => {
        queue = new Queue();
    });

    describe('enqueue', () => {
        test('should add a node as the first and last when the queue is empty', () => {
            queue.enqueue(10);

            expect(queue.first?.value).toBe(10);
            expect(queue.last?.value).toBe(10);
            expect(queue.size).toBe(1);
            expect(queue.first).toBe(queue.last); // Both first and last should point to the same node
        });

        test('should add a node to the end of the queue when it is not empty', () => {
            queue.enqueue(10);
            queue.enqueue(20);

            expect(queue.first?.value).toBe(10); // First remains unchanged
            expect(queue.last?.value).toBe(20); // Last becomes the new node
            expect(queue.size).toBe(2);
            expect(queue.first?.next?.value).toBe(20); // First's next points to the new last node
        });
    });

    describe('dequeue', () => {
        test('should return null when dequeuing from an empty queue', () => {
            const dequeued = queue.dequeue();

            expect(dequeued).toBeNull();
            expect(queue.first).toBeNull();
            expect(queue.last).toBeNull();
            expect(queue.size).toBe(0);
        });

        test('should remove the first node from the queue and return its value', () => {
            queue.enqueue(10);
            queue.enqueue(20);
            const dequeued = queue.dequeue();

            expect(dequeued?.value).toBe(10); // Should return the value of the first node
            expect(queue.first?.value).toBe(20); // First becomes the next node
            expect(queue.last?.value).toBe(20); // Last remains the same
            expect(queue.size).toBe(1);
        });

        test('should set first and last to null when dequeuing the only node', () => {
            queue.enqueue(10);
            const dequeued = queue.dequeue();

            expect(dequeued?.value).toBe(10); // Should return the value of the only node
            expect(queue.first).toBeNull();
            expect(queue.last).toBeNull();
            expect(queue.size).toBe(0);
        });
    });
});
