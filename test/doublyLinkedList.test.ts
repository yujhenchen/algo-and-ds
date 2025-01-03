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

    describe('shift', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should return null when shifting from an empty list', () => {
            const shifted = list.shift();

            expect(shifted).toBeNull();
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);
        });

        test('should remove the head and update the list when it has one node', () => {
            list.push(10);

            const shifted = list.shift();

            expect(shifted?.val).toBe(10); // Value of the removed node
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
            expect(list.length).toBe(0);
        });

        test('should remove the head and update the head pointer when it has multiple nodes', () => {
            list.push(10);
            list.push(20);
            list.push(30);

            const shifted = list.shift();

            expect(shifted?.val).toBe(10); // Value of the removed node
            expect(list.head?.val).toBe(20); // New head
            expect(list.tail?.val).toBe(30); // Tail remains unchanged
            expect(list.length).toBe(2);
        });

        test('should correctly update the prev pointer of the new head', () => {
            list.push(10);
            list.push(20);

            list.shift();

            expect(list.head?.val).toBe(20); // New head
            expect(list.head?.prev).toBeNull(); // New head's prev should be null
        });
    });

    describe('unshift', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should add a node as head and tail when the list is empty', () => {
            list.unshift(10);

            expect(list.head?.val).toBe(10);
            expect(list.tail?.val).toBe(10);
            expect(list.length).toBe(1);
            expect(list.head).toBe(list.tail);
        });

        test('should add a node at the beginning of the list when it is not empty', () => {
            list.unshift(10);
            list.unshift(20);

            expect(list.head?.val).toBe(20);
            expect(list.tail?.val).toBe(10);
            expect(list.length).toBe(2);
            expect(list.head?.next?.val).toBe(10);
            expect(list.tail?.prev?.val).toBe(20);
        });
    });

    describe('get', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should return null when getting an index out of bounds', () => {
            expect(list.get(0)).toBeNull();
            expect(list.get(-1)).toBeNull();
        });

        test('should return the node at the specified index', () => {
            list.push(10);
            list.push(20);
            list.push(30);

            expect(list.get(0)?.val).toBe(10);
            expect(list.get(1)?.val).toBe(20);
            expect(list.get(2)?.val).toBe(30);
        });
    });

    describe('set', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should return false when setting a value at an index out of bounds', () => {
            expect(list.set(0, 100)).toBe(false);
        });

        test('should update the value of the node at the specified index', () => {
            list.push(10);
            list.push(20);
            list.push(30);

            const result = list.set(1, 25);

            expect(result).toBe(true);
            expect(list.get(1)?.val).toBe(25);
        });
    });


    describe('insert', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should return false when inserting at an index out of bounds', () => {
            expect(list.insert(-1, 100)).toBe(false);
            expect(list.insert(1, 100)).toBe(false);
        });

        test('should insert a value at the beginning of the list', () => {
            list.insert(0, 10);

            expect(list.head?.val).toBe(10);
            expect(list.tail?.val).toBe(10);
            expect(list.length).toBe(1);
        });

        test('should insert a value in the middle of the list', () => {
            list.push(10);
            list.push(30);

            list.insert(1, 20);

            expect(list.get(1)?.val).toBe(20);
            expect(list.length).toBe(3);
        });
    });

    describe('remove', () => {
        let list: DoublyLinkedList;

        beforeEach(() => {
            list = new DoublyLinkedList();
        });

        test('should return null when removing at an index out of bounds', () => {
            expect(list.remove(0)).toBeNull();
        });

        test('should remove the head node when index is 0', () => {
            list.push(10);
            list.push(20);

            const removed = list.remove(0);

            expect(removed?.val).toBe(10);
            expect(list.head?.val).toBe(20);
            expect(list.length).toBe(1);
        });

        test('should remove the tail node when index is the last index', () => {
            list.push(10);
            list.push(20);

            const removed = list.remove(1);

            expect(removed?.val).toBe(20);
            expect(list.tail?.val).toBe(10);
            expect(list.length).toBe(1);
        });

        test('should remove a node in the middle of the list', () => {
            list.push(10);
            list.push(20);
            list.push(30);

            const removed = list.remove(1);

            expect(removed?.val).toBe(20);
            expect(list.get(1)?.val).toBe(30);
            expect(list.length).toBe(2);
        });
    });


});

