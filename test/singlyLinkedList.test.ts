import { SinglyLinkedList } from "../src/singlyLinkedList";

describe('SinglyLinkedList', () => {
    test('push: should add a new node to the list and update length', () => {
        const list = new SinglyLinkedList();

        list.push(10);
        expect(list.head?.val).toBe(10);
        expect(list.tail?.val).toBe(10);
        expect(list.length).toBe(1);

        list.push(20);
        expect(list.head?.val).toBe(10);
        expect(list.tail?.val).toBe(20);
        expect(list.length).toBe(2);
    });

    test('pop: should remove the last node from the list and update length', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        list.push(20);
        list.push(30);

        const removedNode = list.pop();
        expect(removedNode?.val).toBe(30);
        expect(list.tail?.val).toBe(20);
        expect(list.length).toBe(2);

        list.pop();
        list.pop();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('pop: should return null if the list is empty', () => {
        const list = new SinglyLinkedList();

        const removedNode = list.pop();
        expect(removedNode).toBeNull();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('shift: should return null when the list is empty', () => {
        const list = new SinglyLinkedList();
        const result = list.shift();

        expect(result).toBeNull();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('shift: should remove the head node and update head to the next node', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        list.push(20);

        const shiftedNode = list.shift();

        expect(shiftedNode?.val).toBe(10);
        expect(list.head?.val).toBe(20);
        expect(list.tail?.val).toBe(20);
        expect(list.length).toBe(1);
    });

    test('shift: should update head and tail to null when removing the only node in the list', () => {
        const list = new SinglyLinkedList();
        list.push(10);

        const shiftedNode = list.shift();

        expect(shiftedNode?.val).toBe(10);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('shift: should correctly handle multiple shifts until the list is empty', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        list.push(20);
        list.push(30);

        let shiftedNode = list.shift();
        expect(shiftedNode?.val).toBe(10);
        expect(list.head?.val).toBe(20);
        expect(list.length).toBe(2);

        shiftedNode = list.shift();
        expect(shiftedNode?.val).toBe(20);
        expect(list.head?.val).toBe(30);
        expect(list.length).toBe(1);

        shiftedNode = list.shift();
        expect(shiftedNode?.val).toBe(30);
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
        expect(list.length).toBe(0);
    });

    test('unshift: should add a node to an empty list and set head and tail to the new node', () => {
        const list = new SinglyLinkedList();
        list.unshift(10);

        expect(list.head?.val).toBe(10);
        expect(list.tail?.val).toBe(10);
        expect(list.length).toBe(1);
    });

    test('unshift: should add a node to the beginning of a non-empty list', () => {
        const list = new SinglyLinkedList();
        list.unshift(20);
        list.unshift(10);

        expect(list.head?.val).toBe(10);
        expect(list.head?.next?.val).toBe(20);
        expect(list.tail?.val).toBe(20);
        expect(list.length).toBe(2);
    });

    test('unshift: should correctly update head and maintain tail in a multi-node list', () => {
        const list = new SinglyLinkedList();
        list.unshift(30);
        list.unshift(20);
        list.unshift(10);

        expect(list.head?.val).toBe(10);
        expect(list.head?.next?.val).toBe(20);
        expect(list.head?.next?.next?.val).toBe(30);
        expect(list.tail?.val).toBe(30);
        expect(list.length).toBe(3);
    });

    test('unshift: should allow chaining and return the list instance', () => {
        const list = new SinglyLinkedList();
        const returnedList = list.unshift(10).unshift(20).unshift(30);

        expect(returnedList).toBe(list);
        expect(list.head?.val).toBe(30);
        expect(list.length).toBe(3);
    });

    test('get: should return the node at the specified index', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        list.push(20);
        list.push(30);

        // Test getting the node at index 0
        const nodeAtIndex0 = list.get(0);
        expect(nodeAtIndex0?.val).toBe(10);

        // Test getting the node at index 1
        const nodeAtIndex1 = list.get(1);
        expect(nodeAtIndex1?.val).toBe(20);

        // Test getting the node at index 2
        const nodeAtIndex2 = list.get(2);
        expect(nodeAtIndex2?.val).toBe(30);
    });

    test('get: should return null if index is out of bounds', () => {
        const list = new SinglyLinkedList();
        list.push(10);
        list.push(20);
        list.push(30);

        // Test negative index
        const negativeIndex = list.get(-1);
        expect(negativeIndex).toBeNull();

        // Test index equal to length
        const outOfBoundsIndex = list.get(3);
        expect(outOfBoundsIndex).toBeNull();

        // Test index greater than length
        const farOutOfBoundsIndex = list.get(10);
        expect(farOutOfBoundsIndex).toBeNull();
    });

    test('get: should return null for an empty list', () => {
        const list = new SinglyLinkedList();

        const emptyListIndex0 = list.get(0);
        expect(emptyListIndex0).toBeNull();

        const emptyListNegativeIndex = list.get(-1);
        expect(emptyListNegativeIndex).toBeNull();
    });


});
