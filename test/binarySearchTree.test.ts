import { BinarySearchTree } from "../src/binarySearchTree";

describe("BinarySearchTree", () => {

	let bst: BinarySearchTree;

	beforeEach(() => {
		bst = new BinarySearchTree();
	});

	test("should insert values correctly", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);

		expect(bst.root?.value).toBe(10);
		expect(bst.root?.left?.value).toBe(5);
		expect(bst.root?.right?.value).toBe(15);
	});

	test("should find existing values", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);

		expect(bst.find(10)).toBeTruthy();
		expect(bst.find(5)).toBeTruthy();
		expect(bst.find(15)).toBeTruthy();
	});

	test("should return false for non-existing values", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);

		expect(bst.find(20)).toBeFalsy();
		expect(bst.find(1)).toBeFalsy();
	});

	test("should remove a leaf node", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);

		bst.remove(5);

		expect(bst.find(5)).toBeFalsy();
		expect(bst.root?.left).toBeNull();
	});

	test("should remove a node with one child", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(3); // Left child of 5

		bst.remove(5);

		expect(bst.find(5)).toBeFalsy();
		expect(bst.root?.left?.value).toBe(3);
	});

	test("should remove a node with two children", () => {
		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(12);
		bst.insert(17);

		bst.remove(15);

		expect(bst.find(15)).toBeFalsy();
		expect(bst.root?.right?.value).toBe(17); // Successor node replaces the deleted node
	});

	// test("should return in-order traversal correctly", () => {
	// 	bst.insert(10);
	// 	bst.insert(5);
	// 	bst.insert(15);
	// 	bst.insert(3);
	// 	bst.insert(7);
	// 	bst.insert(12);
	// 	bst.insert(18);

	// 	expect(bst.inOrderTraversal()).toEqual([3, 5, 7, 10, 12, 15, 18]);
	// });
});