import { Stack } from "../src/stackAndQueue";

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
