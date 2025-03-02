import { BinarySearchTree, BSTNode } from "../src/binarySearchTree";

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

	test("should return nodes in level-order using BFS", () => {
		const bst = new BinarySearchTree();

		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(12);
		bst.insert(17);
		bst.insert(3);
		bst.insert(7);

		const bfsResult = bst.BFS().map(node => node.value);

		expect(bfsResult).toEqual([10, 5, 15, 3, 7, 12, 17]); // Expected level-order traversal
	});

	test("should return correct preorder traversal", () => {
		const bst = new BinarySearchTree();

		bst.insert(10);
		bst.insert(5);
		bst.insert(15);
		bst.insert(3);
		bst.insert(7);
		bst.insert(12);
		bst.insert(18);

		// Preorder: Root -> Left -> Right
		const preorderResult = bst.preorderDFS().map(node => node.value);
		expect(preorderResult).toEqual([10, 5, 3, 7, 15, 12, 18]);
	});

	test("should return an empty array if tree is empty", () => {
		const bst = new BinarySearchTree();
		expect(bst.preorderDFS()).toEqual([]);
	});

	test("should return only root if there's a single node", () => {
		const bst = new BinarySearchTree();
		bst.insert(10);
		const preorderResult = bst.preorderDFS().map(node => node.value);
		expect(preorderResult).toEqual([10]);
	});



	describe("BinarySearchTree - Postorder DFS", () => {
		let bst: BinarySearchTree;

		beforeEach(() => {
			bst = new BinarySearchTree();
		});

		test("should return nodes in postorder for a balanced BST", () => {
			bst.insert(10);
			bst.insert(5);
			bst.insert(15);
			bst.insert(2);
			bst.insert(7);
			bst.insert(12);
			bst.insert(17);

			const result = bst.postOrderDFS();

			expect(result.map(node => node.value)).toEqual([2, 7, 5, 12, 17, 15, 10]); // Left → Right → Root
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});

		test("should return nodes in postorder for a left-skewed BST", () => {
			bst.insert(10);
			bst.insert(8);
			bst.insert(6);
			bst.insert(4);
			bst.insert(2);

			const result = bst.postOrderDFS();

			expect(result.map(node => node.value)).toEqual([2, 4, 6, 8, 10]);
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});

		test("should return nodes in postorder for a right-skewed BST", () => {
			bst.insert(5);
			bst.insert(10);
			bst.insert(15);
			bst.insert(20);
			bst.insert(25);

			const result = bst.postOrderDFS();

			expect(result.map(node => node.value)).toEqual([25, 20, 15, 10, 5]);
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});

		test("should return an empty array for an empty BST", () => {
			expect(bst.postOrderDFS()).toEqual([]);
		});

		test("should return a single node for a BST with only root", () => {
			bst.insert(42);

			const result = bst.postOrderDFS();

			expect(result.map(node => node.value)).toEqual([42]);
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});
	});


	describe("BinarySearchTree - Inorder DFS", () => {
		let bst: BinarySearchTree;

		beforeEach(() => {
			bst = new BinarySearchTree();
		});

		test("should return nodes in inorder for a balanced BST", () => {
			bst.insert(10);
			bst.insert(5);
			bst.insert(15);
			bst.insert(2);
			bst.insert(7);
			bst.insert(12);
			bst.insert(17);

			const result = bst.firstInOrderDFS();

			expect(result.map(node => node.value)).toEqual([2, 5, 7, 10, 12, 15, 17]); // Left → Root → Right
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});

		test("should return nodes in inorder for a left-skewed BST", () => {
			bst.insert(10);
			bst.insert(8);
			bst.insert(6);
			bst.insert(4);
			bst.insert(2);

			const result = bst.firstInOrderDFS();

			expect(result.map(node => node.value)).toEqual([2, 4, 6, 8, 10]); // Already sorted (Left → Root → Right)
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});

		test("should return nodes in inorder for a right-skewed BST", () => {
			bst.insert(5);
			bst.insert(10);
			bst.insert(15);
			bst.insert(20);
			bst.insert(25);

			const result = bst.firstInOrderDFS();

			expect(result.map(node => node.value)).toEqual([5, 10, 15, 20, 25]); // Already sorted (Left → Root → Right)
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});

		test("should return an empty array for an empty BST", () => {
			expect(bst.firstInOrderDFS()).toEqual([]);
		});

		test("should return a single node for a BST with only root", () => {
			bst.insert(42);

			const result = bst.firstInOrderDFS();

			expect(result.map(node => node.value)).toEqual([42]);
			expect(result.every(node => node instanceof BSTNode)).toBeTruthy();
		});
	});


});