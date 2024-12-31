import { DoublyLinkedList } from "../src/doublyLinkedList";

describe('DoublyLinkedList', () => {
    describe('push', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should add a new node as head and tail when the list is empty', () => {
            list.push(10);

            expect(list.head?.val).toBe(10);
            expect(list.tail?.val).toBe(10);
            expect(list.length).toBe(1);
            expect(list.head).toBe(list.tail); // Both head and tail should point to the same node
        });

        test('should add a new node to the end of the list when the list is not empty', () => {
            list.push(10).push(20);

            expect(list.head?.val).toBe(10);
            expect(list.tail?.val).toBe(20);
            expect(list.length).toBe(2);
            expect(list.tail?.prev?.val).toBe(10); // Tail's prev should point to the previous node
            expect(list.head?.next?.val).toBe(20); // Head's next should point to the new node
        });

        test('should maintain correct head, tail, and length with multiple pushes', () => {
            list.push(10).push(20).push(30);

            expect(list.head?.val).toBe(10);
            expect(list.tail?.val).toBe(30);
            expect(list.length).toBe(3);
            expect(list.head?.next?.val).toBe(20);
            expect(list.tail?.prev?.val).toBe(20);
        });

        test('should return the list instance for chaining', () => {
            const result = list.push(10);
            expect(result).toBe(list); // The push method should return the same list instance
        });
    });

    describe('pop', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should return null when popping from an empty list', () => {
            const popped = list.pop();

            expect(popped).toBeNull();
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);
        });

        test('should remove the only node in the list and update head and tail to null', () => {
            list.push(10);

            const popped = list.pop();

            expect(popped?.val).toBe(10);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);
        });

        test('should remove the last node in a list with multiple nodes and update tail', () => {
            list.push(10).push(20).push(30);

            const popped = list.pop();

            expect(popped?.val).toBe(30);
            expect(list.tail?.val).toBe(20);
            expect(list.tail?.next).toBeNull();
            expect(list.length).toBe(2);
        });

        test('should update tail’s previous pointer correctly after popping', () => {
            list.push(10).push(20);

            list.pop(); // Removes 20

            expect(list.tail?.val).toBe(10);
            expect(list.tail?.prev).toBeNull(); // The new tail should have no previous node
            expect(list.length).toBe(1);
        });

        test('should handle popping until the list is empty', () => {
            list.push(10).push(20).push(30);

            list.pop(); // Removes 30
            expect(list.length).toBe(2);
            expect(list.tail?.val).toBe(20);

            list.pop(); // Removes 20
            expect(list.length).toBe(1);
            expect(list.tail?.val).toBe(10);

            list.pop(); // Removes 10
            expect(list.length).toBe(0);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });
    });

});

