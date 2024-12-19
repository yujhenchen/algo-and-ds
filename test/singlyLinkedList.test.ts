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
});
